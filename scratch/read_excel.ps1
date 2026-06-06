$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$excel.DisplayAlerts = $false

$files = @(
    "d:\webapptt12\MAU_01_Template.xlsx",
    "d:\webapptt12\MAU_02_Template.xlsx",
    "d:\webapptt12\MAU_03_Template.xlsx",
    "d:\webapptt12\MAU_04_Template.xlsx",
    "d:\webapptt12\MAU_05_Template.xlsx",
    "d:\webapptt12\MAU_06_Template.xlsx"
)

foreach ($filePath in $files) {
    $fileName = [System.IO.Path]::GetFileNameWithoutExtension($filePath)
    Write-Host "========== $fileName =========="
    
    $wb = $excel.Workbooks.Open($filePath)
    $ws = $wb.Sheets.Item(1)
    $lastCol = $ws.UsedRange.Columns.Count
    $lastRow = $ws.UsedRange.Rows.Count
    Write-Host "Total Rows: $lastRow, Total Cols: $lastCol"
    
    # Read all rows (up to 10)
    for ($r = 1; $r -le [Math]::Min($lastRow, 10); $r++) {
        $cells = @()
        for ($c = 1; $c -le $lastCol; $c++) {
            $val = $ws.Cells.Item($r, $c).Text
            $cells += $val
        }
        $line = $cells -join " | "
        Write-Host "Row $r : $line"
    }
    
    Write-Host ""
    $wb.Close($false)
}

$excel.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
