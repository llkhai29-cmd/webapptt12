# get_headers.ps1
$templates = @("MAU_01", "MAU_02", "MAU_03", "MAU_04", "MAU_05", "MAU_06")

foreach ($name in $templates) {
    $destPath = "d:/webapptt12/scratch/unzipped_$name"
    $sharedStringsFile = "$destPath/xl/sharedStrings.xml"
    if (Test-Path $sharedStringsFile) {
        [xml]$xml = Get-Content -Path $sharedStringsFile
        Write-Host "=== $name ==="
        # Join all strings from sharedStrings.xml
        $allStrings = ($xml.sst.si.t)
        # Find where the descriptions start or just print strings that are in ALL CAPS (header names usually have underscores or no lower case)
        $headers = $allStrings | Where-Object { $_ -match '^[A-Z0-9_\.]+$' }
        $headers -join ", "
    }
}
