# Pasta de Fotos da Galeria

Esta pasta é destinada às fotografias da Festa FERVO que serão exibidas na Galeria.

## Como adicionar fotos:

1. Adicione as imagens nesta pasta (formatos: .jpg, .jpeg, .png, .webp)
2. Edite o arquivo `src/app/galeria/page.tsx`
3. Adicione as fotos no array `albums`:

```typescript
const albums = [
  {
    id: "1",
    title: "FERVO — Últimas Edições",
    date: "2024",
    photos: [
      { id: "1", url: "/photos/foto1.jpg", alt: "Descrição da foto 1" },
      { id: "2", url: "/photos/foto2.jpg", alt: "Descrição da foto 2" },
      // Adicione mais fotos aqui
    ],
  },
];
```

## Dicas:

- Use nomes de arquivo sem espaços (ex: `fervo_foto_01.jpg`)
- Otimize as imagens antes de adicionar (recomendado: máximo 2MB por foto)
- Use fotos em alta qualidade mas otimizadas para web
