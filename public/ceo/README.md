# Pasta da Foto do CEO

Esta pasta é destinada à fotografia do CEO que será exibida no Mural do CEO.

## Como adicionar a foto:

1. Adicione a imagem do CEO nesta pasta com o nome `ceo-photo.jpg` (ou .png, .webp)
2. Edite o arquivo `src/app/mural-ceo/page.tsx`
3. Substitua o placeholder pela tag de imagem:

```typescript
<img 
  src="/ceo/ceo-photo.jpg" 
  alt="CEO da Festa FERVO"
  className="w-full h-full object-cover rounded-lg"
/>
```

## Dicas:

- Use uma foto profissional e bem iluminada
- Formato recomendado: quadrado ou retrato
- Tamanho recomendado: 800x800px
- Otimize a imagem para web (máximo 500KB)
