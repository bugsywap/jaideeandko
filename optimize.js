const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'img');

async function optimizeImages() {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const inputPath = path.join(dir, file);
      const outputFilename = path.basename(file, path.extname(file)) + '.webp';
      const outputPath = path.join(dir, outputFilename);
      
      console.log(`Optimizing: ${file} -> ${outputFilename}`);
      
      await sharp(inputPath)
        .resize({ width: 1000, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
    }
  }
  console.log('Done!');
}

optimizeImages().catch(console.error);
