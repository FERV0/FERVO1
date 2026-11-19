@echo off
echo ========================================
echo PUBLICANDO SITE FERVO NO GITHUB
echo ========================================
echo.
echo Repositorio: https://github.com/FERV0/FERVO1.git
echo.
echo Aguarde...
echo.

cd /d "%~dp0"

git init
git add .
git commit -m "Initial commit - Site FERVO completo e otimizado"
git branch -M main
git remote add origin https://github.com/FERV0/FERVO1.git
git push -u origin main

echo.
echo ========================================
echo CONCLUIDO!
echo ========================================
echo.
echo Proximo passo:
echo 1. Acesse: https://github.com/FERV0/FERVO1
echo 2. Va em Settings ^> Pages
echo 3. Em Source, selecione: GitHub Actions
echo 4. Aguarde 2-5 minutos
echo 5. Seu site estara em: https://ferv0.github.io/FERVO1/
echo.
pause
