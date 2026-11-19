@echo off
echo ========================================
echo ATUALIZANDO SITE FERVO
echo ========================================
echo.

cd /d "%~dp0"

echo Qual foi a alteracao que voce fez?
set /p mensagem="Digite uma descricao: "

git add .
git commit -m "%mensagem%"
git push

echo.
echo ========================================
echo SITE ATUALIZADO!
echo ========================================
echo.
echo Aguarde 1-2 minutos e acesse:
echo https://ferv0.github.io/FERVO1/
echo.
pause
