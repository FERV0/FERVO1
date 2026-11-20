const fs = require('fs');
const path = require('path');

// Diretórios
const photosDir = path.join(__dirname, '../public/fotos');
const instagramDir = path.join(__dirname, '../public/instagram');

// Função para ler os arquivos de fotos da galeria
function getPhotos() {
  try {
    const files = fs.readdirSync(photosDir);
    
    // Filtrar apenas arquivos de imagem (jpg, jpeg, png)
    const photoFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png'].includes(ext) && file !== 'README.md';
    });

    // Gerar array de objetos de fotos
    const photos = photoFiles.map((file, index) => ({
      id: `photo-${index + 1}`,
      url: `/fotos/${file}`,
      alt: `Festa FERVO - Foto ${index + 1}`
    }));

    return photos;
  } catch (error) {
    console.error('Erro ao ler diretório de fotos:', error);
    return [];
  }
}

// Função para ler fotos do Instagram
function getInstagramPhotos() {
  try {
    const files = fs.readdirSync(instagramDir);
    
    // Filtrar apenas arquivos de imagem
    const photoFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png'].includes(ext);
    });

    // Retornar apenas 6 fotos
    return photoFiles.slice(0, 6).map(file => `/instagram/${file}`);
  } catch (error) {
    console.error('Erro ao ler diretório do Instagram:', error);
    return [];
  }
}

// Gerar o arquivo TypeScript com as fotos
function generatePhotosFile() {
  const photos = getPhotos();
  const instagramPhotos = getInstagramPhotos();
  
  const content = `// Arquivo gerado automaticamente - NÃO EDITAR MANUALMENTE
// Para atualizar, execute: node scripts/generate-photos.js

export interface Photo {
  id: string;
  url: string;
  alt: string;
}

export const fervoPhotos: Photo[] = ${JSON.stringify(photos, null, 2)};

export const totalPhotos = ${photos.length};

// Fotos para preview do Instagram
export const instagramPreviewPhotos: string[] = ${JSON.stringify(instagramPhotos, null, 2)};
`;

  const outputPath = path.join(__dirname, '../src/data/photos.ts');
  
  // Criar diretório data se não existir
  const dataDir = path.join(__dirname, '../src/data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`✓ Arquivo gerado com ${photos.length} fotos da galeria em: ${outputPath}`);
  console.log(`✓ ${instagramPhotos.length} fotos do Instagram configuradas`);
}

// Executar
generatePhotosFile();
