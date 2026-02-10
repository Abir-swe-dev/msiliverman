# Helper script to build the project when Node.js is not in the global PATH

# Add Node.js to the local PATH for this session
$env:Path = "C:\Program Files\nodejs;" + $env:Path

Write-Host "Installing dependencies..."
# Use npm.cmd explicitly to avoid PowerShell execution policy issues with npm.ps1
& "C:\Program Files\nodejs\npm.cmd" install

if ($LASTEXITCODE -eq 0) {
    Write-Host "Building project..."
    & "C:\Program Files\nodejs\npm.cmd" run build
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Build completed successfully!"
    } else {
        Write-Host "Build failed."
    }
} else {
    Write-Host "Install failed."
}
