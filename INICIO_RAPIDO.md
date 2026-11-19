# 🚀 Início Rápido — Website FERVO

Guia rápido para colocar o site funcionando em minutos.

---

## ⚡ Instalação Rápida

### Passo 1: Instalar Node.js

Verifique se o Node.js está instalado:

```bash
node --version
```

Se não estiver instalado, baixe em: https://nodejs.org/ (versão 18 ou superior)

### Passo 2: Instalar Dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

Aguarde a instalação (pode levar alguns minutos).

### Passo 3: Executar em Desenvolvimento

```bash
npm run dev
```

### Passo 4: Abrir no Navegador

Acesse: **http://localhost:3000**

✅ **Pronto! O site está rodando!**

---

## 📱 Testando

### Desktop
- Abra: `http://localhost:3000`
- Navegue pelas páginas

### Mobile
1. Descubra o IP do seu computador:
   ```bash
   # Windows
   ipconfig
   
   # Mac/Linux
   ifconfig
   ```

2. No celular, acesse: `http://SEU-IP:3000`
   Exemplo: `http://192.168.1.10:3000`

---

## 🎨 Primeira Personalização

### 1. Mudar Texto da Home

**Arquivo:** `src/app/page.tsx`

Procure por:
```typescript
<h2 className="text-4xl md:text-6xl font-bebas tracking-wider">
  <span className="fire-text">A FESTA QUE CONTAGIA</span>
</h2>
```

Mude o texto dentro de `<span>`.

### 2. Adicionar Próximo Evento

**Arquivo:** `src/app/ingressos/page.tsx`

Mude a linha 12:
```typescript
hasEvent: true, // ← Mudar para true
```

E preencha os dados:
```typescript
name: "FERVO #14",
date: "31 de Dezembro, 2024",
time: "23h00",
location: "Club XYZ - Salvador, BA",
```

Salve e veja a mudança instantaneamente!

---

## 📊 Comandos Úteis

```bash
# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar build de produção
npm start

# Verificar erros
npm run lint
```

---

## 🆘 Problemas Comuns

### "npm: command not found"
→ Instale o Node.js: https://nodejs.org/

### "Port 3000 already in use"
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [número_do_processo] /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Site não atualiza
→ Pressione `Ctrl+C` no terminal e execute `npm run dev` novamente

### Erro de instalação
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Próximos Passos

1. ✅ Site funcionando localmente
2. 📖 Leia o `GUIA_DE_USO.md` para personalizar conteúdo
3. 🎨 Adicione suas fotos e vídeos
4. 🚀 Leia o `DEPLOY.md` para colocar no ar
5. 📝 Mantenha o `CHANGELOG.md` atualizado

---

## 💡 Dicas

- **Sempre salve os arquivos** - As mudanças aparecem automaticamente
- **Use Ctrl+C** para parar o servidor
- **Abra em modo anônimo** para testar sem cache
- **Use o console do navegador** (F12) para ver erros

---

## 🎯 Estrutura de Arquivos Principais

```
FERVO/
├── src/
│   ├── app/
│   │   ├── page.tsx           ← Home
│   │   ├── fotografia/        ← Fotos
│   │   ├── videos/            ← Vídeos
│   │   ├── ingressos/         ← Ingressos
│   │   └── instagram/         ← Instagram
│   └── components/
│       ├── Navigation.tsx     ← Menu
│       ├── FireHero.tsx       ← Animação
│       └── Footer.tsx         ← Rodapé
├── public/                    ← Coloque imagens aqui
├── README.md                  ← Documentação completa
├── GUIA_DE_USO.md            ← Como personalizar
└── DEPLOY.md                  ← Como fazer deploy
```

---

## 🔥 Está Pronto!

Agora você pode:
- ✅ Personalizar textos
- ✅ Adicionar fotos e vídeos
- ✅ Configurar próximos eventos
- ✅ Fazer deploy e colocar no ar

**Qualquer dúvida, consulte os arquivos de documentação!**

---

**Desenvolvido com 🔥 para FERVO — A festa que contagia!**
