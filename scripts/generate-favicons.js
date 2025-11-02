const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '../public');
const firstOPath = path.join(__dirname, '../public/favicon-o.svg');

// Create SVG with just the first O, centered
// The first O path from the logo: M124 0C192.483 0 248 55.5167 248 124C248 192.483 192.483 248 124 248C55.5167 248 0 192.483 0 124C0 55.5167 55.5167 5.57757e-05 124 0ZM124 50C83.1309 50 50 83.1309 50 124C50 164.869 83.1309 198 124 198C164.869 198 198 164.869 198 124C198 83.1309 164.869 50 124 50Z
// The O has a bounding box of 0,0 to 248,248

const svgTemplate = `<svg width="248" height="248" viewBox="0 0 248 248" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M124 0C192.483 0 248 55.5167 248 124C248 192.483 192.483 248 124 248C55.5167 248 0 192.483 0 124C0 55.5167 55.5167 5.57757e-05 124 0ZM124 50C83.1309 50 50 83.1309 50 124C50 164.869 83.1309 198 124 198C164.869 198 198 164.869 198 124C198 83.1309 164.869 50 124 50Z" fill="#FF5007"/>
</svg>`;

// Write the SVG file
fs.writeFileSync(firstOPath, svgTemplate);
console.log('✓ Created favicon-o.svg');

// Define icon sizes
const iconSizes = [
  { name: 'favicon-16x16.png', size: 16, transparent: true },
  { name: 'favicon-32x32.png', size: 32, transparent: true },
  { name: 'apple-touch-icon.png', size: 180, transparent: false, background: '#000000' },
  { name: 'android-chrome-192x192.png', size: 192, transparent: false, background: '#000000' },
  { name: 'android-chrome-512x512.png', size: 512, transparent: false, background: '#000000' },
];

async function generateFavicons() {
  console.log('\nGenerating favicon files...\n');

  // Generate PNG icons
  for (const icon of iconSizes) {
    const outputPath = path.join(publicDir, icon.name);
    
    let sharpInstance = sharp(firstOPath)
      .resize(icon.size, icon.size, {
        fit: 'contain',
        background: icon.transparent ? { r: 0, g: 0, b: 0, alpha: 0 } : icon.background
      });

    if (!icon.transparent) {
      sharpInstance = sharpInstance.png({ 
        quality: 100,
        compressionLevel: 9
      });
    } else {
      sharpInstance = sharpInstance.png({ 
        quality: 100,
        compressionLevel: 9
      });
    }

    await sharpInstance.toFile(outputPath);
    
    const stats = fs.statSync(outputPath);
    console.log(`  ✓ ${icon.name}: ${icon.size}x${icon.size} (${(stats.size / 1024).toFixed(2)}KB) - ${icon.transparent ? 'Transparent' : 'Black background'}`);
  }

  // Generate favicon.ico (multi-size ICO file)
  // ICO files typically contain multiple sizes. We'll create it from 16x16 and 32x32
  console.log('\nGenerating favicon.ico...');
  
  // For ICO, we need to use a library or create a simpler approach
  // Since sharp doesn't directly support ICO, we'll create a 32x32 PNG and name it favicon.ico
  // Browsers will accept PNG format even with .ico extension
  const icoPath = path.join(publicDir, 'favicon.ico');
  await sharp(firstOPath)
    .resize(32, 32, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png({ quality: 100 })
    .toFile(icoPath);
  
  const icoStats = fs.statSync(icoPath);
  console.log(`  ✓ favicon.ico: 32x32 (${(icoStats.size / 1024).toFixed(2)}KB) - Transparent`);

  console.log('\n✓ All favicon files generated successfully!');
}

generateFavicons().catch(error => {
  console.error('Error generating favicons:', error);
  process.exit(1);
});

