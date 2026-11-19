# Guia de Uso — Website FERVO

Este guia explica como personalizar e atualizar o conteúdo do site FERVO.

## 📋 Índice

1. [Primeiros Passos](#primeiros-passos)
2. [Atualizando Conteúdo](#atualizando-conteúdo)
3. [Configurações Importantes](#configurações-importantes)
4. [Dicas de Personalização](#dicas-de-personalização)

---

## 🚀 Primeiros Passos

### Instalação

```bash
# 1. Instalar dependências
npm install

# 2. Executar em modo de desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:3000
```

### Estrutura de Arquivos Importantes

```
src/
├── app/
│   ├── page.tsx           ← Página inicial
│   ├── fotografia/        ← Seção de fotos
│   ├── videos/            ← Seção de vídeos
│   ├── ingressos/         ← Seção de ingressos
│   └── instagram/         ← Seção Instagram
└── components/
    ├── Navigation.tsx     ← Menu de navegação
    ├── FireHero.tsx       ← Animação de abertura
    └── Footer.tsx         ← Rodapé
```

---

## 📝 Atualizando Conteúdo

### 1. Adicionar Próxima Edição (Ingressos)

**Arquivo:** `src/app/ingressos/page.tsx`

```typescript
const nextEvent = {
  hasEvent: true, // ← IMPORTANTE: Mudar para true quando houver evento
  name: "FERVO #14",
  date: "15 de Dezembro, 2024",
  time: "22h00",
  location: "Club XYZ - Salvador, Bahia",
  description: "A maior edição do ano está chegando! Prepare-se para uma noite inesquecível.",
  ticketLink: "https://link-para-ingressos.com", // ← Link da plataforma de ingressos
  lotes: [
    { name: "1º Lote", price: "R$ 50,00", status: "available" }, // available, sold, soon
    { name: "2º Lote", price: "R$ 70,00", status: "soon" },
    { name: "3º Lote", price: "R$ 90,00", status: "soon" },
  ],
};
```

**Status dos lotes:**
- `"available"` - Lote disponível para compra
- `"sold"` - Lote esgotado
- `"soon"` - Em breve

---

### 2. Adicionar Fotos (Fotografia)

**Arquivo:** `src/app/fotografia/page.tsx`

**Passo 1:** Adicione as fotos na pasta `public/photos/`:

```
public/
└── photos/
    ├── fervo13/
    │   ├── foto1.jpg
    │   ├── foto2.jpg
    │   └── foto3.jpg
    └── fervo12/
        └── ...
```

**Passo 2:** Atualize o array de álbuns:

```typescript
const albums = [
  {
    id: "13",
    title: "FERVO #13",
    date: "Novembro 2024",
    photos: [
      { id: "1", url: "/photos/fervo13/foto1.jpg", alt: "Momento incrível 1" },
      { id: "2", url: "/photos/fervo13/foto2.jpg", alt: "Momento incrível 2" },
      { id: "3", url: "/photos/fervo13/foto3.jpg", alt: "Momento incrível 3" },
      // Adicione mais fotos aqui
    ],
  },
  // Adicione mais álbuns aqui
];
```

---

### 3. Adicionar Vídeos (Aftermovies)

**Arquivo:** `src/app/videos/page.tsx`

**Para vídeos do YouTube:**

```typescript
const videos = [
  {
    id: "1",
    title: "FERVO #13 — Aftermovie",
    edition: "13",
    thumbnail: "/thumbnails/fervo13.jpg", // Adicione thumbnail em public/thumbnails/
    videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_ID", // ← ID do vídeo do YouTube
    duration: "3:45",
  },
  // Adicione mais vídeos aqui
];
```

**Como pegar o ID do YouTube:**
- URL do vídeo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID: `dQw4w9WgXcQ`
- Use: `https://www.youtube.com/embed/dQw4w9WgXcQ`

---

### 4. Atualizar Página Inicial

**Arquivo:** `src/app/page.tsx`

Você pode modificar:
- Textos de apresentação
- Botões de ação
- Cards de features
- Mensagem de próxima edição

```typescript
// Exemplo: Alterar texto principal
<h2 className="text-4xl md:text-6xl font-bebas tracking-wider">
  <span className="fire-text">SEU NOVO TEXTO AQUI</span>
</h2>
```

---

## ⚙️ Configurações Importantes

### Cores da Marca

**Arquivo:** `tailwind.config.ts`

```typescript
colors: {
  fervo: {
    black: "#0a0a0a",  // Preto profundo
    red: "#dc2626",    // Vermelho intenso
    orange: "#ea580c", // Laranja
    yellow: "#f59e0b", // Amarelo
  },
}
```

### Links de Redes Sociais

Atualize em vários lugares:

1. **Instagram** - `src/app/instagram/page.tsx`
2. **Footer** - `src/components/Footer.tsx`
3. **Navegação** - `src/components/Navigation.tsx`

```typescript
// Procure por:
href="https://www.instagram.com/fervoficial/"
```

### Metadados (SEO)

**Arquivo:** `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "FERVO — A festa que contagia",
  description: "Sua descrição aqui",
  keywords: "fervo, festa, salvador, bahia",
  // ... outros metadados
};
```

---

## 🎨 Dicas de Personalização

### 1. Adicionar Nova Página

```bash
# 1. Criar pasta na estrutura
src/app/nova-pagina/

# 2. Criar arquivo page.tsx
src/app/nova-pagina/page.tsx
```

```typescript
// Exemplo básico de nova página
export default function NovaPagina() {
  return (
    <div className="min-h-screen py-12 px-4">
      <h1>Minha Nova Página</h1>
    </div>
  );
}
```

### 2. Adicionar Link no Menu

**Arquivo:** `src/components/Navigation.tsx`

```typescript
const navLinks = [
  { href: "/", label: "Início" },
  { href: "/fotografia", label: "Fotografia" },
  { href: "/videos", label: "Vídeos" },
  { href: "/ingressos", label: "Ingressos" },
  { href: "/instagram", label: "Instagram" },
  { href: "/nova-pagina", label: "Nova Página" }, // ← Adicione aqui
];
```

### 3. Mudar Fontes

**Arquivo:** `src/app/layout.tsx`

```typescript
import { Inter, Bebas_Neue, SuaFonte } from "next/font/google";

const suaFonte = SuaFonte({ 
  subsets: ["latin"], 
  variable: "--font-sua-fonte" 
});
```

### 4. Adicionar Animações

Use Framer Motion:

```typescript
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Seu conteúdo aqui
</motion.div>
```

---

## 🚨 Avisos Importantes

1. **Sempre teste localmente** antes de fazer deploy
2. **Faça backup** antes de grandes mudanças
3. **Otimize imagens** antes de adicionar (use JPG/WebP para fotos)
4. **Não compartilhe** arquivos `.env` com tokens/senhas

---

## 📞 Suporte

Se tiver dúvidas:
1. Consulte o README.md
2. Veja a documentação do Next.js: https://nextjs.org/docs
3. Documentação do Tailwind CSS: https://tailwindcss.com/docs

---

**Desenvolvido com 🔥 para FERVO**
