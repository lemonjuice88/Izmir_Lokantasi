@echo off
echo Siteniz lokal sunucuda baslatiliyor... Lutfen siyah ekrani kapatmayin!
start http://localhost:8000
python -m http.server 8000
