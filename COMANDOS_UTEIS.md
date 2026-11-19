# ⚡ Comandos Úteis — Website FERVO

Referência rápida de comandos para trabalhar com o projeto.

---

## 🚀 Comandos NPM

### Desenvolvimento
```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Limpar cache e reiniciar
rm -rf .next
npm run dev
```

### Build e Produção
```bash
# Criar build de produção
npm run build

# Iniciar servidor de produção (após build)
npm start

# Build + Start em sequência
npm run build && npm start
```

### Qualidade de Código
```bash
# Verificar erros de lint
npm run lint

# Verificar erros de TypeScript
npx tsc --noEmit

# Formatar código (se tiver prettier)
npx prettier --write .
```

### Gerenciamento de Dependências
```bash
# Instalar todas as dependências
npm install

# Adicionar nova dependência
npm install nome-do-pacote

# Adicionar dependência de desenvolvimento
npm install -D nome-do-pacote

# Remover dependência
npm uninstall nome-do-pacote

# Atualizar dependências
npm update

# Ver dependências desatualizadas
npm outdated

# Limpar cache do npm
npm cache clean --force
```

---

## 🔧 Comandos Git

### Básico
```bash
# Verificar status
git status

# Adicionar todos os arquivos
git add .

# Adicionar arquivo específico
git add src/app/page.tsx

# Fazer commit
git commit -m "Descrição da mudança"

# Push para repositório remoto
git push

# Pull do repositório remoto
git pull
```

### Branches
```bash
# Criar nova branch
git checkout -b nome-da-branch

# Mudar de branch
git checkout main

# Listar branches
git branch

# Deletar branch
git branch -d nome-da-branch
```

### Desfazer Mudanças
```bash
# Desfazer mudanças não commitadas
git checkout -- arquivo.tsx

# Desfazer último commit (mantém mudanças)
git reset --soft HEAD~1

# Desfazer último commit (descarta mudanças)
git reset --hard HEAD~1

# Desfazer mudanças em staging
git reset HEAD arquivo.tsx
```

### Histórico
```bash
# Ver histórico de commits
git log

# Ver histórico resumido
git log --oneline

# Ver mudanças em arquivo específico
git log -- src/app/page.tsx
```

---

## 🌐 Comandos de Deploy

### Vercel
```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy de teste
vercel

# Deploy para produção
vercel --prod

# Ver logs
vercel logs

# Listar deployments
vercel list
```

### Netlify
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy de teste
netlify deploy

# Deploy para produção
netlify deploy --prod

# Abrir dashboard
netlify open
```

---

## 📁 Comandos de Arquivos (Windows PowerShell)

### Navegação
```powershell
# Listar arquivos
Get-ChildItem
# ou
ls

# Mudar diretório
cd pasta
cd ..
cd ~

# Mostrar diretório atual
pwd
```

### Manipulação de Arquivos
```powershell
# Criar arquivo
New-Item arquivo.txt

# Criar pasta
New-Item -ItemType Directory pasta

# Copiar arquivo
Copy-Item arquivo.txt destino.txt

# Mover arquivo
Move-Item arquivo.txt pasta/

# Deletar arquivo
Remove-Item arquivo.txt

# Deletar pasta
Remove-Item -Recurse pasta/

# Ver conteúdo de arquivo
Get-Content arquivo.txt

# Buscar texto em arquivos
Select-String -Path *.tsx -Pattern "texto"
```

---

## 🔍 Comandos de Busca

### Buscar no Código
```bash
# Buscar texto em todos os arquivos
grep -r "texto" src/

# Buscar em arquivos específicos
grep "texto" src/**/*.tsx

# Buscar e mostrar número da linha
grep -n "texto" src/app/page.tsx

# Buscar ignorando maiúsculas
grep -i "texto" src/
```

### Buscar Arquivos
```bash
# Buscar arquivo por nome
find . -name "page.tsx"

# Buscar arquivos modificados recentemente
find . -mtime -1

# Buscar arquivos grandes
find . -size +1M
```

---

## 🧹 Comandos de Limpeza

### Limpar Cache e Build
```powershell
# Limpar arquivos de build
Remove-Item -Recurse -Force .next

# Limpar node_modules
Remove-Item -Recurse -Force node_modules

# Limpar tudo e reinstalar
Remove-Item -Recurse -Force node_modules, .next, package-lock.json
npm install
```

---

## 🐛 Comandos de Debug

### Verificar Portas
```powershell
# Ver o que está usando a porta 3000
netstat -ano | findstr :3000

# Matar processo na porta 3000
# 1. Anotar o PID do comando acima
# 2. Executar:
taskkill /PID [número_do_pid] /F
```

### Verificar Versões
```bash
# Versão do Node
node --version

# Versão do npm
npm --version

# Versão do Next.js (no projeto)
npm list next

# Todas as dependências
npm list
```

---

## 📊 Comandos de Análise

### Tamanho do Build
```bash
# Analisar bundle
npm run build

# Ver tamanho detalhado (adicionar script no package.json)
ANALYZE=true npm run build
```

### Performance
```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun --collect.url=http://localhost:3000
```

---

## 🔑 Variáveis de Ambiente

### Criar .env
```bash
# Copiar exemplo
copy .env.example .env

# Editar
notepad .env
```

### Usar Variáveis
```typescript
// No código
const url = process.env.NEXT_PUBLIC_SITE_URL;
```

---

## 🎨 Comandos do Tailwind

### Gerar CSS
```bash
# Build do Tailwind
npx tailwindcss -o output.css

# Watch mode
npx tailwindcss -o output.css --watch
```

---

## 📦 Backup e Restauração

### Fazer Backup
```powershell
# Backup completo
Compress-Archive -Path FERVO -DestinationPath FERVO-backup-$(Get-Date -Format 'yyyy-MM-dd').zip

# Backup só do código fonte
Compress-Archive -Path src,public,*.json,*.ts,*.md -DestinationPath FERVO-src-backup.zip
```

### Restaurar
```powershell
# Extrair backup
Expand-Archive -Path backup.zip -DestinationPath pasta-destino/
```

---

## 🚨 Solução de Problemas Comuns

### Port 3000 já está em uso
```powershell
netstat -ano | findstr :3000
taskkill /PID [PID] /F
npm run dev
```

### Erro: Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro: ESLint
```bash
npm run lint -- --fix
```

### Cache travado
```bash
rm -rf .next
npm run dev
```

### TypeScript errors
```bash
npx tsc --noEmit
# Corrigir erros mostrados
```

---

## ⚡ Atalhos de Teclado

### VS Code (Editor)
- `Ctrl + P` - Abrir arquivo rápido
- `Ctrl + Shift + P` - Paleta de comandos
- `Ctrl + B` - Toggle sidebar
- `Ctrl + /` - Comentar linha
- `Ctrl + D` - Selecionar próxima ocorrência
- `Alt + Up/Down` - Mover linha
- `Shift + Alt + Down` - Duplicar linha
- `Ctrl + Shift + F` - Buscar em arquivos

### Terminal
- `Ctrl + C` - Parar processo
- `Ctrl + L` - Limpar terminal
- `Tab` - Autocompletar
- `Up Arrow` - Comando anterior
- `Ctrl + R` - Buscar em histórico

---

## 📝 Scripts Personalizados

Adicione no `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    
    // Scripts personalizados
    "clean": "rm -rf .next node_modules",
    "fresh": "npm run clean && npm install && npm run dev",
    "check": "tsc --noEmit && npm run lint",
    "backup": "git add . && git commit -m 'Backup' && git push"
  }
}
```

Use com:
```bash
npm run clean
npm run fresh
npm run check
```

---

## 💡 Dicas Pro

### Alias (Atalhos)
Crie aliases no PowerShell profile:

```powershell
# Abrir profile
notepad $PROFILE

# Adicionar aliases
function dev { npm run dev }
function build { npm run build }
function gs { git status }
function gc { git commit -m $args }
```

Use:
```powershell
dev      # ao invés de npm run dev
build    # ao invés de npm run build
gs       # ao invés de git status
```

---

## 🎯 Workflow Recomendado

### Dia a Dia
```bash
# 1. Atualizar código
git pull

# 2. Instalar dependências (se houver)
npm install

# 3. Iniciar desenvolvimento
npm run dev

# 4. Fazer mudanças...

# 5. Testar
npm run build

# 6. Commitar
git add .
git commit -m "Descrição"
git push
```

---

**⚡ Comandos úteis salvam tempo! Mantenha esta referência por perto.**
