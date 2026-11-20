# COMO ADICIONAR A LOGO OFICIAL DO FERVO

## 📍 Localização da Logo

Quando você receber o arquivo da logo oficial da FERVO (com fundo preto e letras em chamas laranjas/vermelhas), siga estes passos:

### Passo 1: Adicionar o arquivo da logo

1. Coloque o arquivo da logo em uma destas pastas:
   - **Recomendado**: `public/logo-fervo.png` (ou `.jpg`, `.svg`)
   - **Alternativa**: `public/images/logo-fervo.png`

2. Certifique-se que o nome do arquivo seja simples, como:
   - `logo-fervo.png`
   - `fervo-logo.png`
   - `logo.png`

### Passo 2: Atualizar o componente InstagramPreview

Abra o arquivo:
```
src/components/InstagramPreview.tsx
```

Localize esta seção (linha ~22-35):

```typescript
{/* Profile picture with logo placeholder */}
<div className="w-16 h-16 rounded-full bg-black p-0.5 shadow-lg">
  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
    {/* TODO: Substituir por logo FERVO oficial quando fornecida */}
    <span 
      className="text-2xl font-bebas tracking-wider"
      style={{
        background: "linear-gradient(180deg, #fbbf24 0%, #f97316 50%, #ef4444 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      FERVO
    </span>
  </div>
</div>
```

**Substitua por:**

```typescript
{/* Profile picture with logo */}
<div className="w-16 h-16 rounded-full bg-black p-0.5 shadow-lg">
  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
    <img
      src="/logo-fervo.png"
      alt="Logo FERVO"
      className="w-full h-full object-cover"
    />
  </div>
</div>
```

### Passo 3: (Opcional) Adicionar logo na animação de abertura

Se você quiser usar a logo na animação de abertura do site, abra:
```
src/components/FireHero.tsx
```

Localize a seção do logo (linha ~110-130) e substitua o texto "FERVO" por:

```typescript
<img
  src="/logo-fervo.png"
  alt="FERVO"
  className="w-64 md:w-96 h-auto"
  style={{
    filter: "drop-shadow(0 0 30px rgba(251, 191, 36, 0.5))",
  }}
/>
```

### Passo 4: Recompilar o projeto

Após adicionar a logo, execute:

```bash
npm run build
```

### Passo 5: Verificar

1. Abra o site localmente ou no GitHub Pages
2. Vá até a página "Redes Sociais"
3. Verifique se a logo aparece no círculo do perfil do Instagram
4. Verifique se a animação de abertura está funcionando (se você atualizou ela também)

---

## 📸 Requisitos da Logo

Para melhor resultado:

- **Formato**: PNG com transparência (recomendado) ou JPG
- **Tamanho**: Pelo menos 512x512 pixels
- **Proporção**: Quadrada (1:1) ou que funcione bem em círculo
- **Qualidade**: Alta resolução para não pixelizar

---

## ❓ Problemas Comuns

### A logo não aparece

1. Verifique se o arquivo está em `public/`
2. Verifique o nome do arquivo no código (`/logo-fervo.png`)
3. O caminho deve começar com `/` (ex: `/logo-fervo.png`, não `logo-fervo.png`)
4. Recompile o projeto com `npm run build`

### A logo está cortada

Ajuste o `object-cover` para `object-contain`:
```typescript
className="w-full h-full object-contain p-1"
```

### A logo está muito grande/pequena

Adicione padding ao container:
```typescript
className="w-full h-full object-cover p-2"
```

---

## 🎨 Observação

Por enquanto, o site está usando um placeholder estilizado com o nome "FERVO" em gradiente de fogo. Assim que você adicionar a logo oficial, ela substituirá automaticamente este placeholder.

---

**Data**: Novembro 2026  
**Projeto**: FERVO - A festa que contagia Salvador, Bahia
