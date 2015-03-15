@echo off

node .\tool\register.js

if errorlevel 1 (
   pause
)