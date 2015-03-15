@echo off

.\env\nodejs\node.exe .\tool\register.js

if errorlevel 1 (
   pause
)