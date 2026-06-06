<#
Auto Push Script
Watches the repository directory for file changes and automatically
runs `git add -A; git commit -m "Auto-update: <timestamp>"; git push`.

Usage:
  powershell -ExecutionPolicy Bypass -File .\scripts\auto_push.ps1

Run in background (hidden window):
  Start-Process powershell -ArgumentList '-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File "'$(Resolve-Path .\scripts\auto_push.ps1)'"'

Notes:
- The script ignores changes inside `.git` and `.github` folders.
- Ensure `git` is available in PATH or installed at "C:\Program Files\Git\cmd\git.exe".
#>

param(
    [string]$Path = (Get-Location).Path,
    [int]$DebounceMs = 3000
)

Set-StrictMode -Version Latest

function Resolve-Git {
    $g = Get-Command git -ErrorAction SilentlyContinue
    if ($g) { return $g.Source }
    $fallback = 'C:\Program Files\Git\cmd\git.exe'
    if (Test-Path $fallback) { return $fallback }
    throw "git not found; please install Git or add it to PATH."
}

$gitExe = Resolve-Git

Write-Host "Watching path: $Path" -ForegroundColor Green

$fsw = New-Object System.IO.FileSystemWatcher $Path -Property @{IncludeSubdirectories = $true; NotifyFilter = [System.IO.NotifyFilters]'FileName, LastWrite, DirectoryName'}

$timer = New-Object System.Timers.Timer $DebounceMs
$timer.AutoReset = $false

$pending = $false

Register-ObjectEvent $fsw Changed -SourceIdentifier FileChanged -Action {
    $args = $Event.SourceEventArgs
    $fullPath = $args.FullPath
    if ($fullPath -match '\\.git\\' -or $fullPath -match '\\.github\\' -or $fullPath -match '\\node_modules\\') { return }
    $global:pending = $true
    $timer.Stop() | Out-Null
    $timer.Start() | Out-Null
}

Register-ObjectEvent $fsw Created -SourceIdentifier FileCreated -Action {
    $args = $Event.SourceEventArgs
    $fullPath = $args.FullPath
    if ($fullPath -match '\\.git\\' -or $fullPath -match '\\.github\\' -or $fullPath -match '\\node_modules\\') { return }
    $global:pending = $true
    $timer.Stop() | Out-Null
    $timer.Start() | Out-Null
}

Register-ObjectEvent $fsw Deleted -SourceIdentifier FileDeleted -Action {
    $args = $Event.SourceEventArgs
    $fullPath = $args.FullPath
    if ($fullPath -match '\\.git\\' -or $fullPath -match '\\.github\\' -or $fullPath -match '\\node_modules\\') { return }
    $global:pending = $true
    $timer.Stop() | Out-Null
    $timer.Start() | Out-Null
}

Register-ObjectEvent $fsw Renamed -SourceIdentifier FileRenamed -Action {
    $args = $Event.SourceEventArgs
    $fullPath = $args.FullPath
    if ($fullPath -match '\\.git\\' -or $fullPath -match '\\.github\\' -or $fullPath -match '\\node_modules\\') { return }
    $global:pending = $true
    $timer.Stop() | Out-Null
    $timer.Start() | Out-Null
}

Register-ObjectEvent $timer Elapsed -SourceIdentifier DebounceElapsed -Action {
    if (-not $global:pending) { return }
    $global:pending = $false

    $timestamp = (Get-Date).ToString('s')
    Write-Host "Changes detected. Committing and pushing at $timestamp" -ForegroundColor Cyan

    try {
        & $gitExe add -A 2>&1 | Out-Null
        $status = & $gitExe status --porcelain
        if (-not [string]::IsNullOrEmpty($status)) {
            & $gitExe commit -m "Auto-update: $timestamp" 2>&1 | Out-Null
            & $gitExe push origin main 2>&1 | Out-Null
            Write-Host "Pushed changes to origin/main" -ForegroundColor Green
        } else {
            Write-Host "No changes to commit" -ForegroundColor Yellow
        }
    } catch {
        Write-Host "Auto-push failed: $_" -ForegroundColor Red
    }
}

try {
    $fsw.EnableRaisingEvents = $true
    Write-Host "Auto-push watcher started. Press Ctrl+C to stop." -ForegroundColor Green
    while ($true) { Start-Sleep -Seconds 1 }
} finally {
    Unregister-Event -SourceIdentifier FileChanged -ErrorAction SilentlyContinue
    Unregister-Event -SourceIdentifier FileCreated -ErrorAction SilentlyContinue
    Unregister-Event -SourceIdentifier FileDeleted -ErrorAction SilentlyContinue
    Unregister-Event -SourceIdentifier FileRenamed -ErrorAction SilentlyContinue
    Unregister-Event -SourceIdentifier DebounceElapsed -ErrorAction SilentlyContinue
    $fsw.Dispose()
    $timer.Dispose()
}
