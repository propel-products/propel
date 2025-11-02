const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '../public');
const logoDir = path.join(publicDir, 'logo-assets');
const svgTemplate = fs.readFileSync(path.join(publicDir, 'logo.svg'), 'utf8');

// Ensure logo directory exists
if (!fs.existsSync(logoDir)) {
  fs.mkdirSync(logoDir, { recursive: true });
}

// Create SVG variants
const variants = [
  { name: 'orange', color: '#FF5007', filename: 'OCO-logo-orange.svg' },
  { name: 'white', color: '#FFFFFF', filename: 'OCO-logo-white.svg' },
  { name: 'black', color: '#000000', filename: 'OCO-logo-black.svg' },
];

console.log('Creating SVG logo variants...');
variants.forEach(variant => {
  const svgContent = svgTemplate.replace(/#FF5007/g, variant.color);
  const outputPath = path.join(logoDir, variant.filename);
  fs.writeFileSync(outputPath, svgContent);
  console.log(`  ✓ Created ${variant.filename}`);
});

// Create high-quality PNG versions (3000px width for high quality)
console.log('\nCreating PNG logo variants...');
const pngSize = 3000;

variants.forEach(async (variant) => {
  const svgPath = path.join(logoDir, variant.filename);
  const pngPath = path.join(logoDir, variant.filename.replace('.svg', '.png'));
  
  await sharp(svgPath)
    .resize(pngSize, null, {
      fit: 'inside',
      withoutEnlargement: false
    })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(pngPath);
  
  const stats = fs.statSync(pngPath);
  console.log(`  ✓ Created ${variant.filename.replace('.svg', '.png')} (${(stats.size / 1024 / 1024).toFixed(2)}MB)`);
});

console.log('\n✓ All logo variants created successfully!');

