# 📂 Estrutura do Projeto — Website FERVO

Documentação detalhada da organização de arquivos e pastas.

---

## 🌳 Árvore de Diretórios

```
FERVO/
│
├── 📄 Arquivos de Configuração
│   ├── package.json              # Dependências do projeto
│   ├── tsconfig.json             # Configuração TypeScript
│   ├── tailwind.config.ts        # Configuração Tailwind CSS
│   ├── next.config.mjs           # Configuração Next.js
│   ├── postcss.config.mjs        # Configuração PostCSS
│   ├── .eslintrc.json            # Regras de lint
│   ├── .gitignore                # Arquivos ignorados pelo Git
│   └── .env.example              # Exemplo de variáveis de ambiente
│
├── 📚 Documentação
│   ├── README.md                 # Visão geral do projeto
│   ├── INICIO_RAPIDO.md          # Guia de início rápido
│   ├── GUIA_DE_USO.md            # Como personalizar conteúdo
│   ├── DEPLOY.md                 # Como fazer deploy
│   ├── CHANGELOG.md              # Histórico de mudanças
│   └── ESTRUTURA_DO_PROJETO.md   # Este arquivo
│
├── 📁 src/                       # Código fonte
│   │
│   ├── 📁 app/                   # Rotas e páginas (Next.js App Router)
│   │   │
│   │   ├── layout.tsx            # Layout principal (Navigation + Footer)
│   │   ├── globals.css           # Estilos globais
│   │   ├── page.tsx              # Página inicial (Home / Fire Experience)
│   │   │
│   │   ├── 📁 fotografia/        # Página de Fotografia
│   │   │   └── page.tsx          # Galeria estilo Orkut 2000s
│   │   │
│   │   ├── 📁 videos/            # Página de Vídeos
│   │   │   └── page.tsx          # Aftermovies estilo Musical
│   │   │
│   │   ├── 📁 ingressos/         # Página de Ingressos
│   │   │   └── page.tsx          # Venda de ingressos estilo Rebelde
│   │   │
│   │   └── 📁 instagram/         # Página Instagram
│   │       └── page.tsx          # Integração com Instagram
│   │
│   ├── 📁 components/            # Componentes reutilizáveis
│   │   ├── Navigation.tsx        # Menu de navegação responsivo
│   │   ├── FireHero.tsx          # Animação cinematográfica de abertura
│   │   └── Footer.tsx            # Rodapé com links
│   │
│   └── 📁 types/                 # Definições de tipos TypeScript
│       └── index.ts              # Tipos compartilhados (Photo, Album, Video, etc)
│
└── 📁 public/                    # Arquivos estáticos
    ├── favicon.ico               # Ícone do site
    │
    ├── 📁 photos/                # Fotos das festas (criar)
    │   ├── fervo13/
    │   ├── fervo12/
    │   └── ...
    │
    └── 📁 thumbnails/            # Miniaturas de vídeos (criar)
        ├── fervo13.jpg
        └── ...
```

---

## 📄 Descrição dos Arquivos Principais

### Configuração

| Arquivo | Descrição |
|---------|-----------|
| `package.json` | Lista de dependências e scripts do projeto |
| `tsconfig.json` | Configurações do TypeScript |
| `tailwind.config.ts` | Cores, animações e temas do Tailwind |
| `next.config.mjs` | Configurações do Next.js (imagens, rotas) |
| `.env.example` | Exemplo de variáveis de ambiente |

### Páginas (src/app/)

| Arquivo/Pasta | URL | Descrição |
|---------------|-----|-----------|
| `page.tsx` | `/` | Página inicial com Fire Experience |
| `fotografia/page.tsx` | `/fotografia` | Galeria de fotos estilo Orkut |
| `videos/page.tsx` | `/videos` | Aftermovies estilo Musical |
| `ingressos/page.tsx` | `/ingressos` | Venda de ingressos estilo Rebelde |
| `instagram/page.tsx` | `/instagram` | Integração com Instagram |
| `layout.tsx` | - | Layout base (menu + footer) |
| `globals.css` | - | Estilos CSS globais |

### Componentes (src/components/)

| Arquivo | Descrição | Usado em |
|---------|-----------|----------|
| `Navigation.tsx` | Menu responsivo desktop/mobile | Todas as páginas |
| `FireHero.tsx` | Animação de abertura com fogo | Página inicial |
| `Footer.tsx` | Rodapé com links e informações | Todas as páginas |

### Tipos (src/types/)

| Arquivo | Descrição |
|---------|-----------|
| `index.ts` | Interfaces TypeScript (Photo, Album, Video, Event) |

---

## 🎨 Sistema de Estilos

### Cores do Tema (tailwind.config.ts)

```typescript
fervo: {
  black: "#0a0a0a",   // Preto profundo
  red: "#dc2626",     // Vermelho intenso
  orange: "#ea580c",  // Laranja
  yellow: "#f59e0b",  // Amarelo
}
```

### Classes Customizadas (globals.css)

- `.fire-gradient` - Gradiente de fogo
- `.fire-text` - Texto com gradiente de fogo
- `.glow-red` - Brilho vermelho
- `.glow-fire` - Brilho de fogo

### Animações Customizadas

- `animate-fire-flicker` - Tremulação de fogo
- `animate-spark` - Faíscas
- `animate-float` - Flutuação suave

---

## 🔄 Fluxo de Dados

### Página Inicial (Home)
```
FireHero (animação)
  ↓
Apresentação + CTAs
  ↓
Cards de Features
  ↓
Footer
```

### Fotografia
```
Lista de Álbuns
  ↓ (clique em álbum)
Grid de Fotos
  ↓ (clique em foto)
Visualizador Modal
```

### Vídeos
```
Vídeo em Destaque
  ↓
Grid de Aftermovies
  ↓
Melhores Momentos
```

### Ingressos
```
Verificação de Evento (hasEvent)
  ↓
Se true: Mostra Evento + Lotes
  ↓
Se false: Mensagem "Em breve"
```

---

## 📦 Dependências Principais

### Produção
- **next** - Framework React
- **react** - Biblioteca UI
- **framer-motion** - Animações
- **lucide-react** - Ícones
- **clsx** - Utilitário de classes CSS

### Desenvolvimento
- **typescript** - Tipagem estática
- **tailwindcss** - Framework CSS
- **eslint** - Linter de código

---

## 🚀 Convenções do Projeto

### Nomenclatura de Arquivos
- Componentes: `PascalCase.tsx` (ex: `Navigation.tsx`)
- Páginas: `page.tsx` (padrão Next.js)
- Tipos: `lowercase.ts` (ex: `index.ts`)

### Nomenclatura de Variáveis
- Componentes: `PascalCase` (ex: `FireHero`)
- Funções: `camelCase` (ex: `handleClick`)
- Constantes: `camelCase` (ex: `navLinks`)
- Tipos: `PascalCase` (ex: `Photo`)

### Estrutura de Componentes
```typescript
"use client"; // Se usar hooks/interatividade

import { ... } from "...";

interface ComponentProps {
  // Props aqui
}

export function Component({ props }: ComponentProps) {
  // Lógica

  return (
    // JSX
  );
}
```

---

## 📝 Onde Editar Cada Coisa

### Textos
- **Home:** `src/app/page.tsx`
- **Fotografia:** `src/app/fotografia/page.tsx`
- **Vídeos:** `src/app/videos/page.tsx`
- **Ingressos:** `src/app/ingressos/page.tsx`
- **Instagram:** `src/app/instagram/page.tsx`
- **Footer:** `src/components/Footer.tsx`

### Cores e Estilos
- **Cores do tema:** `tailwind.config.ts`
- **Estilos globais:** `src/app/globals.css`
- **Classes utilitárias:** Em cada componente

### Menu de Navegação
- **Links:** `src/components/Navigation.tsx` (array `navLinks`)
- **Logo:** `src/components/Navigation.tsx`

### Dados Dinâmicos
- **Álbuns de fotos:** `src/app/fotografia/page.tsx` (array `albums`)
- **Vídeos:** `src/app/videos/page.tsx` (array `videos`)
- **Evento:** `src/app/ingressos/page.tsx` (objeto `nextEvent`)

---

## 🔍 Busca Rápida

**Quero mudar...**

- ❓ Cores → `tailwind.config.ts`
- ❓ Menu → `src/components/Navigation.tsx`
- ❓ Rodapé → `src/components/Footer.tsx`
- ❓ Página inicial → `src/app/page.tsx`
- ❓ Fotos → `src/app/fotografia/page.tsx`
- ❓ Vídeos → `src/app/videos/page.tsx`
- ❓ Ingressos → `src/app/ingressos/page.tsx`
- ❓ Instagram → `src/app/instagram/page.tsx`
- ❓ SEO → `src/app/layout.tsx` (metadata)
- ❓ Animações → `tailwind.config.ts` + componentes

---

## 💡 Dicas de Organização

1. **Imagens:** Sempre coloque em `public/` (ex: `public/photos/`)
2. **Componentes:** Crie em `src/components/` se reutilizável
3. **Tipos:** Adicione em `src/types/index.ts`
4. **Estilos:** Use Tailwind quando possível, CSS global apenas se necessário
5. **Dados:** Por enquanto em arrays locais, futuramente mover para banco de dados

---

**📂 Estrutura organizada = Manutenção fácil!**
