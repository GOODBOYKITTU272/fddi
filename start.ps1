# AIST Ace - Local Dev Runner (PowerShell)
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   AIST Ace - Local Dev Runner" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host "[ERROR] Node.js is not installed or not on PATH." -ForegroundColor Red
  Write-Host "        Install Node 18+ from https://nodejs.org and rerun." -ForegroundColor Yellow
  Read-Host "Press Enter to exit"
  exit 1
}

Write-Host "[1/3] Node version:" -ForegroundColor Green
node --version
Write-Host ""

if (-not (Test-Path .\node_modules)) {
  Write-Host "[2/3] Installing dependencies (first run, ~1-2 min)..." -ForegroundColor Green
  npm install --no-audit --no-fund
  if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] npm install failed. Check your internet connection." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
  }
} else {
  Write-Host "[2/3] Dependencies already installed - skipping." -ForegroundColor Green
}

Write-Host ""
Write-Host "[3/3] Starting dev server at http://localhost:5173 ..." -ForegroundColor Green
Write-Host "      (Press Ctrl+C to stop the server)" -ForegroundColor DarkGray
Write-Host ""
npm run dev
