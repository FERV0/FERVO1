# 📋 INSTRUÇÕES — ADICIONAR LOGO PNG FERVO

## ⚠️ PASSO OBRIGATÓRIO

Para que a abertura do site funcione corretamente, você precisa colocar o arquivo PNG da logo FERVO no projeto.

---

## 📁 ONDE COLOCAR O ARQUIVO

**Caminho completo:**
```
C:\Users\ERICK CARTMAN\Desktop\FERVO\FERVO\public\logo\logo-fervo.png
```

**OU simplesmente:**
```
public/logo/logo-fervo.png
```

---

## 🎨 REQUISITOS DO ARQUIVO

### Nome do arquivo:
- **`logo-fervo.png`** (exatamente esse nome)

### Características:
- ✅ Formato: **PNG** (não JPG)
- ✅ Transparência: **Canal Alpha ativo** (fundo transparente)
- ✅ Conteúdo: Chama laranja/vermelha + texto FERVO dourado 3D
- ✅ Qualidade: Alta resolução (recomendado: largura mínima 1000px)

### ❌ NÃO UTILIZAR:
- ❌ JPG ou JPEG (não tem transparência)
- ❌ PNG com fundo branco/preto incorporado
- ❌ Imagem cortada ou com partes faltando
- ❌ Logo em baixa resolução

---

## 📝 COMO ADICIONAR O ARQUIVO

### Opção 1 - Via Explorador de Arquivos:
1. Abra o Explorador do Windows
2. Navegue até: `C:\Users\ERICK CARTMAN\Desktop\FERVO\FERVO\public\logo\`
3. Cole o arquivo PNG da logo
4. Renomeie para: `logo-fervo.png`

### Opção 2 - Via Terminal:
```powershell
# Copie seu arquivo PNG para a pasta correta
Copy-Item "C:\caminho\do\seu\arquivo.png" "C:\Users\ERICK CARTMAN\Desktop\FERVO\FERVO\public\logo\logo-fervo.png"
```

---

## ✅ VERIFICAÇÃO

Após adicionar o arquivo, confirme:

```powershell
cd "C:\Users\ERICK CARTMAN\Desktop\FERVO\FERVO"
Test-Path "public\logo\logo-fervo.png"
```

Deve retornar: **True**

---

## 🔨 APÓS ADICIONAR A LOGO

Execute a compilação:

```powershell
cd "C:\Users\ERICK CARTMAN\Desktop\FERVO\FERVO"
npm run build
```

---

## 🎯 RESULTADO ESPERADO

Na abertura do site, você verá:
- ✅ Fundo preto com partículas de fogo
- ✅ Logo PNG completa centralizada
- ✅ Chama + texto FERVO em alta qualidade
- ✅ Fundo transparente (sem quadrado ao redor)
- ✅ Brilho dourado discreto
- ✅ Aparece UMA ÚNICA VEZ

---

## 📞 PRECISA DE AJUDA?

Se o arquivo PNG que você tem possui outro nome, informe qual é o nome exato e eu ajusto o código para usar esse nome.

**Exemplo:**
- Se o arquivo se chama `fervo-logo-oficial.png`
- Ou `logo_fervo_transparente.png`
- Ou qualquer outro nome

Basta me informar e eu atualizo o caminho no código!
