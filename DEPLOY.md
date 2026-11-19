# 🚀 Guia de Deploy — Website FERVO

Este guia explica como colocar o site FERVO no ar em diferentes plataformas.

---

## 📋 Pré-requisitos

Antes de fazer deploy:

1. ✅ Teste localmente (`npm run dev`)
2. ✅ Verifique se o build funciona (`npm run build`)
3. ✅ Atualize conteúdos (fotos, vídeos, eventos)
4. ✅ Configure variáveis de ambiente (se necessário)

---

## 🌐 Vercel (Recomendado)

Vercel é a plataforma oficial do Next.js. Deploy é automático e gratuito.

### Método 1: Via GitHub (Recomendado)

```bash
# 1. Instalar Git (se ainda não tiver)
git init
git add .
git commit -m "Initial commit"

# 2. Criar repositório no GitHub e conectar
git remote add origin https://github.com/seu-usuario/fervo-website.git
git push -u origin main

# 3. Acessar https://vercel.com
# - Fazer login com GitHub
# - Clicar em "New Project"
# - Importar seu repositório
# - Clicar em "Deploy"

# ✅ Pronto! Seu site estará no ar em segundos
```

### Método 2: Via CLI

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Fazer deploy
vercel

# 3. Seguir instruções no terminal
# 4. Para produção final
vercel --prod
```

**Configurações Vercel:**
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- Framework Preset: Next.js

---

## 🎯 Netlify

```bash
# 1. Instalar Netlify CLI
npm install -g netlify-cli

# 2. Build local
npm run build

# 3. Deploy
netlify deploy

# 4. Para produção
netlify deploy --prod
```

**netlify.toml** (criar na raiz do projeto):

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## ☁️ AWS Amplify

1. Acesse o [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Clique em "New App" → "Host web app"
3. Conecte seu repositório GitHub
4. Configure:
   - Build command: `npm run build`
   - Output directory: `.next`
5. Clique em "Save and deploy"

---

## 🐳 Docker (Para servidores próprios)

**Dockerfile** (criar na raiz):

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**Comandos:**

```bash
# Build
docker build -t fervo-website .

# Run
docker run -p 3000:3000 fervo-website
```

---

## 🔧 Configuração de Domínio

### Após Deploy

1. **Obter URL de deploy** (ex: `fervo-website.vercel.app`)

2. **Configurar domínio personalizado:**
   - Compre um domínio (ex: `fervooficial.com.br`)
   - No painel da plataforma (Vercel/Netlify), adicione domínio
   - Configure DNS do domínio:

```
Type: A
Name: @
Value: [IP fornecido pela plataforma]

Type: CNAME
Name: www
Value: [URL fornecida pela plataforma]
```

3. **Aguarde propagação DNS** (pode levar até 48h)

---

## 🔒 Variáveis de Ambiente

Se usar variáveis de ambiente (`.env`):

### Vercel
```bash
# Via CLI
vercel env add NEXT_PUBLIC_SITE_URL

# Ou via Dashboard: Settings → Environment Variables
```

### Netlify
```bash
# Via CLI
netlify env:set NEXT_PUBLIC_SITE_URL "https://seusite.com"

# Ou via Dashboard: Site settings → Environment variables
```

---

## ✅ Checklist Pós-Deploy

Após o deploy, verifique:

- [ ] Site carrega corretamente
- [ ] Todas as páginas funcionam
- [ ] Links do Instagram funcionam
- [ ] Links de ingressos funcionam (se houver evento)
- [ ] Imagens carregam
- [ ] Vídeos funcionam
- [ ] Site é responsivo no celular
- [ ] Navegação funciona
- [ ] SEO está configurado (meta tags)
- [ ] Favicon aparece

---

## 🐛 Resolução de Problemas

### Erro: "Module not found"
```bash
# Limpar cache e reinstalar
rm -rf node_modules .next
npm install
npm run build
```

### Erro: "Build failed"
```bash
# Verificar versão do Node
node --version  # Deve ser 18 ou superior

# Testar build localmente
npm run build
```

### Imagens não carregam
- Verifique se as imagens estão na pasta `public/`
- Use caminhos absolutos: `/photos/imagem.jpg`
- Não use `../` em caminhos de imagem

### Site lento
- Otimize imagens antes de fazer upload
- Use formato WebP quando possível
- Reduza tamanho de vídeos/thumbnails

---

## 📊 Monitoramento

### Vercel Analytics
```bash
# Adicionar ao projeto
npm install @vercel/analytics

# Em src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

// Adicionar antes do </body>
<Analytics />
```

### Google Analytics
```typescript
// Em src/app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

---

## 🔄 Atualizações Futuras

Para atualizar o site após o deploy inicial:

### Via Git (se conectado a GitHub)
```bash
# 1. Fazer mudanças
# 2. Commit
git add .
git commit -m "Atualização: adicionar fotos FERVO #14"
git push

# ✅ Deploy automático na Vercel/Netlify
```

### Via CLI
```bash
# Fazer mudanças e depois:
vercel --prod
# ou
netlify deploy --prod
```

---

## 💡 Dicas Importantes

1. **Sempre teste localmente primeiro**
2. **Use Git para controle de versão**
3. **Configure SSL/HTTPS automaticamente** (Vercel/Netlify fazem isso)
4. **Monitore performance** com ferramentas como Lighthouse
5. **Faça backups regulares** do código

---

## 📞 Suporte

**Documentações oficiais:**
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- Next.js: https://nextjs.org/docs/deployment

---

**🔥 Boa sorte com o deploy do site FERVO!**
