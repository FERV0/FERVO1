# 🚀 Deploy do Site FERVO no GitHub Pages

## ✅ CONFIGURAÇÃO CONCLUÍDA

O projeto FERVO está **100% preparado** para publicação no GitHub Pages.

---

## 📋 PRÉ-REQUISITOS

1. **Git instalado** no computador
2. **Conta no GitHub**
3. **Repositório criado** no GitHub

---

## 🔧 PASSO 1: INSTALAR GIT (Se Necessário)

### Windows:
1. Baixe em: https://git-scm.com/download/win
2. Execute o instalador
3. Aceite as configurações padrão
4. Reinicie o terminal após instalação

### Verificar instalação:
```powershell
git --version
```

---

## 📤 PASSO 2: CONECTAR AO GITHUB

### 2.1 Criar Repositório no GitHub:

1. Acesse: https://github.com/new
2. Nome do repositório: `fervo-website` (ou o nome que preferir)
3. **NÃO** marque "Initialize with README"
4. Clique em "Create repository"

### 2.2 Conectar Projeto Local ao GitHub:

Abra o terminal na pasta do projeto e execute:

```powershell
# Configurar Git (primeira vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"

# Ir para a pasta do projeto
cd "c:\Users\ERICK CARTMAN\Desktop\FERVO\FERVO"

# Inicializar repositório (se necessário)
git init

# Adicionar arquivos
git add .

# Fazer primeiro commit
git commit -m "Initial commit - FERVO Website"

# Conectar ao GitHub (SUBSTITUA pelo seu repositório)
git remote add origin https://github.com/SEU-USUARIO/fervo-website.git

# Enviar para GitHub
git branch -M main
git push -u origin main
```

**IMPORTANTE:** Substitua `SEU-USUARIO/fervo-website` pela URL do seu repositório!

---

## 🌐 PASSO 3: ATIVAR GITHUB PAGES

### No repositório GitHub:

1. Acesse **Settings** (Configurações)
2. Menu lateral: **Pages**
3. Em **Source**: Selecione **GitHub Actions**
4. **Salve** as configurações

**Pronto!** O deploy automático está configurado.

---

## 🚀 PASSO 4: FAZER DEPLOY

### Deploy Automático (Recomendado):

Toda vez que você fizer um `git push`, o site será atualizado automaticamente!

```powershell
# Fazer alterações no código...

# Adicionar alterações
git add .

# Commitar
git commit -m "Descrição das alterações"

# Enviar para GitHub (deploy automático)
git push
```

### Deploy Manual (Alternativa):

Se preferir fazer build manual:

```powershell
# Fazer build
npm run build

# A pasta 'out' será gerada com os arquivos estáticos
```

---

## 🔗 ACESSAR O SITE

Após o primeiro push, o site estará disponível em:

```
https://SEU-USUARIO.github.io/fervo-website/
```

**Exemplo:**
- Usuário GitHub: `joaosilva`
- Repositório: `fervo-website`
- URL: `https://joaosilva.github.io/fervo-website/`

### Tempo de Deploy:
- Primeira vez: 2-5 minutos
- Atualizações: 1-2 minutos

---

## 📁 ESTRUTURA DO PROJETO

```
FERVO/
├── .github/
│   └── workflows/
│       └── deploy.yml        # ✅ Deploy automático configurado
├── public/                   # Arquivos públicos (fotos, etc)
├── src/
│   ├── app/                  # Páginas do site
│   │   ├── page.tsx         # ✅ Página inicial (index)
│   │   ├── galeria/
│   │   ├── ingressos/
│   │   ├── redes-sociais/
│   │   └── mural-ceo/
│   └── components/           # Componentes reutilizáveis
├── next.config.mjs          # ✅ Configurado para export
├── package.json             # ✅ Script de export adicionado
└── out/                     # ✅ Gerado após build (HTML estático)
```

---

## 🔄 WORKFLOW DE ATUALIZAÇÕES

### Para Atualizar o Site:

1. **Fazer alterações** no código local
2. **Testar localmente:**
   ```powershell
   npm run dev
   # Acesse: http://localhost:3000
   ```
3. **Commitar e enviar:**
   ```powershell
   git add .
   git commit -m "Atualizações na galeria"
   git push
   ```
4. **Aguardar deploy automático** (1-2 minutos)
5. **Verificar o site** no GitHub Pages

---

## 🐛 RESOLUÇÃO DE PROBLEMAS

### Git não reconhecido:
```powershell
# Instale o Git: https://git-scm.com/download/win
# Reinicie o terminal
```

### Deploy falhou:
1. Acesse o repositório no GitHub
2. Vá em **Actions**
3. Veja os logs do deploy
4. Corrija os erros indicados

### Site não atualiza:
1. Limpe o cache do navegador (Ctrl + Shift + Delete)
2. Aguarde 2-3 minutos
3. Tente em modo anônimo

### Erro 404:
- Verifique se GitHub Pages está ativado
- Verifique se o deploy foi concluído com sucesso
- Aguarde alguns minutos

---

## 📊 VERIFICAR STATUS DO DEPLOY

### No GitHub:

1. Acesse o repositório
2. Aba **Actions**
3. Veja o status do último deploy
4. ✅ Verde = Deploy bem-sucedido
5. ❌ Vermelho = Erro (veja os logs)

---

## 🎯 CHECKLIST PÓS-DEPLOY

Após o primeiro deploy, verifique:

- [ ] Site está acessível na URL do GitHub Pages
- [ ] Página inicial carrega corretamente
- [ ] Todas as páginas funcionam (Galeria, Ingressos, etc)
- [ ] Links do Instagram e WhatsApp funcionam
- [ ] Animações de faíscas estão funcionando
- [ ] Site é responsivo no celular
- [ ] Imagens carregam corretamente

---

## 💡 DICAS

### Domínio Personalizado:

Para usar um domínio próprio (ex: `fervoficial.com.br`):

1. No GitHub Pages, adicione o domínio em **Custom domain**
2. Configure DNS do domínio:
   - Tipo: `CNAME`
   - Nome: `www`
   - Valor: `SEU-USUARIO.github.io`

### Otimização:

- Otimize imagens antes de adicionar (máximo 500KB cada)
- Use formatos modernos (WebP)
- Teste em diferentes dispositivos

---

## 📞 SUPORTE

**Documentação Next.js:**
- https://nextjs.org/docs/pages/building-your-application/deploying/static-exports

**GitHub Pages:**
- https://docs.github.com/pages

**Problemas com Git:**
- https://git-scm.com/docs

---

## ✅ RESUMO

1. ✅ Projeto configurado para GitHub Pages
2. ✅ Deploy automático com GitHub Actions
3. ✅ Build otimizado para produção
4. ✅ Todas as páginas funcionando
5. ✅ Pronto para ser publicado

**Próximo passo:** Instalar Git e fazer o primeiro push para GitHub!

---

**🔥 FERVO — A festa que contagia!**

*Documentação atualizada: 19/11/2024*
