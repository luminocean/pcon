@echo off

.\env\nodejs\node.exe app.js

if errorlevel 1 (
   pause
)