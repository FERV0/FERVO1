# 🔥 FERVO — Website Oficial

Website profissional e imersivo para a marca de eventos FERVO, uma festa realizada em Salvador, Bahia.

> 👋 **Primeira vez aqui?** Leia o [BEM_VINDO.md](BEM_VINDO.md) para uma introdução amigável!

## 📚 Documentação Completa

Este projeto inclui documentação detalhada para facilitar seu uso:

### 🚀 Para Começar
- **[INICIO_RAPIDO.md](INICIO_RAPIDO.md)** - Comece aqui! Guia de 5 minutos para rodar o projeto

### 📖 Guias de Uso
- **[GUIA_DE_USO.md](GUIA_DE_USO.md)** - Como personalizar textos, fotos, vídeos e eventos
- **[COMANDOS_UTEIS.md](COMANDOS_UTEIS.md)** - Referência rápida de comandos úteis

### 🚀 Deploy e Estrutura
- **[DEPLOY.md](DEPLOY.md)** - Como colocar o site no ar (Vercel, Netlify, AWS, etc)
- **[ESTRUTURA_DO_PROJETO.md](ESTRUTURA_DO_PROJETO.md)** - Entenda a organização dos arquivos

### 📊 Visão Geral
- **[PROJETO_COMPLETO.md](PROJETO_COMPLETO.md)** - Visão completa de tudo que foi criado
- **[CHANGELOG.md](CHANGELOG.md)** - Histórico de versões e mudanças

> 💡 **Novo no projeto?** Comece pelo [INICIO_RAPIDO.md](INICIO_RAPIDO.md)

---

## 🔥 Características

- **Fire Experience** - Página inicial com animação cinematográfica de fogo
- **Fotografia (Orkut 2000s)** - Galeria nostálgica inspirada no Orkut
- **Vídeos (Musical Experience)** - Seção de aftermovies com temática de musicais
- **Ingressos (Rebelde)** - Página de ingressos com estética Rebelde
- **Instagram** - Integração com redes sociais
- **100% Responsivo** - Funciona perfeitamente em todos os dispositivos
- **Animações Profissionais** - Transições suaves e microinterações

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utility-first
- **Framer Motion** - Animações cinematográficas
- **Lucide React** - Ícones modernos

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
FERVO/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Página inicial (Fire Experience)
│   │   ├── fotografia/        # Galeria estilo Orkut
│   │   ├── videos/            # Aftermovies estilo Musical
│   │   ├── ingressos/         # Venda de ingressos estilo Rebelde
│   │   ├── instagram/         # Integração Instagram
│   │   ├── layout.tsx         # Layout principal
│   │   └── globals.css        # Estilos globais
│   └── components/
│       ├── Navigation.tsx     # Menu de navegação
│       └── FireHero.tsx       # Animação de abertura
├── public/                    # Arquivos estáticos
└── README.md
```

## 🎨 Identidade Visual

- **Cores principais:**
  - Preto profundo: `#0a0a0a`
  - Vermelho intenso: `#dc2626`
  - Laranja: `#ea580c`
  - Amarelo: `#f59e0b`

- **Tipografia:**
  - Bebas Neue (títulos)
  - Inter (corpo de texto)

## 📝 Configuração de Conteúdo

### Próxima Edição

Para adicionar uma nova edição, edite o arquivo `src/app/ingressos/page.tsx`:

```typescript
const nextEvent = {
  hasEvent: true, // Mude para true quando tiver evento
  name: "FERVO #14",
  date: "15 de Dezembro, 2024",
  time: "22h00",
  location: "Salvador, Bahia",
  description: "A maior edição do ano!",
  ticketLink: "https://link-para-ingressos.com",
  lotes: [
    { name: "1º Lote", price: "R$ 50,00", status: "available" },
    { name: "2º Lote", price: "R$ 70,00", status: "soon" },
    { name: "3º Lote", price: "R$ 90,00", status: "soon" },
  ],
};
```

### Fotografia

Para adicionar álbuns de fotos, edite `src/app/fotografia/page.tsx`:

```typescript
const albums = [
  {
    id: "13",
    title: "FERVO #13",
    date: "Novembro 2024",
    photos: [
      { id: "1", url: "/photos/album13/1.jpg", alt: "Foto 1" },
      { id: "2", url: "/photos/album13/2.jpg", alt: "Foto 2" },
      // ... mais fotos
    ],
  },
  // ... mais álbuns
];
```

### Vídeos

Para adicionar vídeos/aftermovies, edite `src/app/videos/page.tsx`:

```typescript
const videos = [
  {
    id: "1",
    title: "FERVO #13 — Aftermovie",
    edition: "13",
    thumbnail: "/thumbnails/fervo13.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    duration: "3:45",
  },
  // ... mais vídeos
];
```

## 🎯 Funcionalidades Planejadas

- [ ] Painel administrativo para gerenciar conteúdo
- [ ] Integração com API do Instagram
- [ ] Sistema de newsletter
- [ ] Integração com plataformas de ingressos
- [ ] Galeria de fotos com upload
- [ ] Sistema de busca

## 📱 Responsividade

O site foi desenvolvido mobile-first e é totalmente responsivo:
- ✅ Smartphones (iPhone, Android)
- ✅ Tablets (iPad, etc)
- ✅ Notebooks
- ✅ Desktops

## 🌐 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 Licença

© 2024 FERVO. Todos os direitos reservados.

## 👥 Contato

Instagram: [@fervoficial](https://www.instagram.com/fervoficial/)

---

**Desenvolvido com 🔥 para a melhor festa de Salvador**
