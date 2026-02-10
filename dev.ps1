# Helper script to run the dev server when Node.js is not in the global PATH

# Add Node.js to the local PATH for this session
$env:Path = "C:\Program Files\nodejs;" + $env:Path

Write-Host "Starting dev server..."
& "C:\Program Files\nodejs\npm.cmd" run dev
