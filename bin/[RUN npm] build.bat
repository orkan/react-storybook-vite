@echo off
setlocal
pushd %~dp0..

cmd /K npm run build
