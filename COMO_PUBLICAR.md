# 🚀 Como Publicar o Site FERVO (Guia Simples)

## ✅ O QUE JÁ ESTÁ PRONTO

O site FERVO está **100% configurado** e pronto para ser publicado!

Você só precisa:
1. Instalar o Git
2. Criar conta no GitHub
3. Fazer upload do projeto

---

## 📝 PASSO A PASSO COMPLETO

### PASSO 1: Instalar o Git

1. **Baixe o Git:** https://git-scm.com/download/win
2. **Execute o instalador** que foi baixado
3. **Deixe todas as opções padrão** (apenas clique "Next")
4. **Finalize** a instalação
5. **Reinicie** o computador

### PASSO 2: Criar Conta no GitHub

1. Acesse: https://github.com/signup
2. Crie sua conta (gratuita)
3. Confirme seu e-mail

### PASSO 3: Criar Repositório

1. **No GitHub**, clique no **+** (canto superior direito)
2. Clique em **"New repository"**
3. **Nome:** `fervo-website` (ou o nome que preferir)
4. **Público** ou **Privado** (você escolhe)
5. **NÃO** marque nenhuma opção adicional
6. Clique em **"Create repository"**

### PASSO 4: Conectar Projeto ao GitHub

**Abra o PowerShell** e execute estes comandos:

```powershell
# 1. Configure seu nome e email (apenas primeira vez)
git config --global user.name "Seu Nome Aqui"
git config --global user.email "seu-email@exemplo.com"

# 2. Vá para a pasta do projeto
cd "c:\Users\ERICK CARTMAN\Desktop\FERVO\FERVO"

# 3. Inicialize o Git (se ainda não foi feito)
git init

# 4. Adicione todos os arquivos
git add .

# 5. Faça o primeiro commit
git commit -m "Primeiro commit do site FERVO"

# 6. Conecte ao seu repositório GitHub
# ATENÇÃO: Substitua 'SEU-USUARIO' pelo seu usuário do GitHub!
git remote add origin https://github.com/SEU-USUARIO/fervo-website.git

# 7. Configure a branch principal
git branch -M main

# 8. Envie para o GitHub
git push -u origin main
```

**IMPORTANTE:** No comando 6, substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub!

### PASSO 5: Ativar GitHub Pages

1. **No seu repositório** no GitHub
2. Clique em **"Settings"** (Configurações)
3. No menu lateral, clique em **"Pages"**
4. Em **"Source"**, selecione **"GitHub Actions"**
5. **Pronto!** O deploy começará automaticamente

### PASSO 6: Aguardar Deploy

1. Vá na aba **"Actions"** do repositório
2. Você verá o deploy acontecendo
3. Aguarde 2-5 minutos
4. Quando ficar **verde**, o site está no ar!

### PASSO 7: Acessar Seu Site

Seu site estará em:

```
https://SEU-USUARIO.github.io/fervo-website/
```

**Exemplo:**
- Se seu usuário é `joaosilva`
- E o repositório é `fervo-website`
- O site será: `https://joaosilva.github.io/fervo-website/`

---

## 🔄 COMO ATUALIZAR O SITE NO FUTURO

Sempre que você quiser atualizar o site:

```powershell
# 1. Vá para a pasta do projeto
cd "c:\Users\ERICK CARTMAN\Desktop\FERVO\FERVO"

# 2. Adicione as mudanças
git add .

# 3. Faça um commit descrevendo o que mudou
git commit -m "Adicionei fotos novas na galeria"

# 4. Envie para GitHub (deploy automático!)
git push
```

**Aguarde 1-2 minutos** e seu site estará atualizado!

---

## ❓ PROBLEMAS COMUNS

### "git não é reconhecido"
- **Solução:** Instale o Git e reinicie o computador

### "Permission denied"
- **Solução:** O GitHub pode pedir suas credenciais. Use seu usuário e senha do GitHub.

### "Site não carrega"
- **Solução:** Aguarde 5 minutos. Limpe o cache do navegador (Ctrl + Shift + Delete)

### "Deploy falhou"
- **Solução:** Vá em "Actions" no GitHub e veja o erro. Geralmente é falta de configuração.

---

## 💡 DICAS

- **Faça backup** antes de fazer push
- **Teste localmente** com `npm run dev` antes de fazer push
- **Commits frequentes** são melhores que commits grandes
- **Use mensagens claras** nos commits (ex: "Adicionei foto do CEO")

---

## 📞 PRECISA DE AJUDA?

Veja a documentação completa em: `DEPLOY_GITHUB.md`

---

**🔥 Seu site FERVO vai estar no ar em poucos minutos!**
