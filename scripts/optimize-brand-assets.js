const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brandAssetsDir = path.join(__dirname, '../public/brand-assets');

async function optimizeLinkedInBanners() {
  const linkedInDir = path.join(brandAssetsDir, 'linkedin-banners');
  const files = fs.readdirSync(linkedInDir).filter(f => f.endsWith('.png'));
  
  console.log(`Optimizing ${files.length} LinkedIn banners...`);
  
  for (const file of files) {
    const inputPath = path.join(linkedInDir, file);
    const outputPath = path.join(linkedInDir, file.replace('.png', '.webp'));
    
    // LinkedIn banners: max width 1200px for web preview
    await sharp(inputPath)
      .resize(1200, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);
    
    const stats = fs.statSync(inputPath);
    const newStats = fs.statSync(outputPath);
    const reduction = ((1 - newStats.size / stats.size) * 100).toFixed(1);
    
    console.log(`  ✓ ${file}: ${(stats.size / 1024 / 1024).toFixed(2)}MB → ${(newStats.size / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);
    
    // Remove original PNG
    fs.unlinkSync(inputPath);
  }
}

async function optimizeMarketingExamples() {
  const marketingDir = path.join(brandAssetsDir, 'marketing-examples');
  const files = fs.readdirSync(marketingDir).filter(f => f.endsWith('.png'));
  
  console.log(`\nOptimizing ${files.length} marketing examples...`);
  
  for (const file of files) {
    const inputPath = path.join(marketingDir, file);
    const outputPath = path.join(marketingDir, file.replace('.png', '.webp'));
    
    // Marketing examples: max width 1400px for web display (high quality needed)
    await sharp(inputPath)
      .resize(1400, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 90, effort: 6 })
      .toFile(outputPath);
    
    const stats = fs.statSync(inputPath);
    const newStats = fs.statSync(outputPath);
    const reduction = ((1 - newStats.size / stats.size) * 100).toFixed(1);
    
    console.log(`  ✓ ${file}: ${(stats.size / 1024 / 1024).toFixed(2)}MB → ${(newStats.size / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);
    
    // Remove original PNG
    fs.unlinkSync(inputPath);
  }
}

async function main() {
  try {
    console.log('Starting image optimization...\n');
    
    await optimizeLinkedInBanners();
    await optimizeMarketingExamples();
    
    console.log('\n✓ All images optimized successfully!');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

main();

