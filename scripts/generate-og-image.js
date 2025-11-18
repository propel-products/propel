const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '../public');
const logoPath = path.join(__dirname, '../public/logo.svg');
const outputPath = path.join(publicDir, 'og-image.jpg');

// Create OG image SVG (1200x630px)
const ogImageSVG = `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Black background -->
  <rect width="1200" height="630" fill="#000000"/>
  
  <!-- Logo centered at top -->
  <g transform="translate(437, 100)">
    <svg width="326" height="111" viewBox="0 0 726 248" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M602 0C670.483 0 726 55.5167 726 124C726 192.483 670.483 248 602 248C533.517 248 478 192.483 478 124C478 55.5168 533.517 0.000187755 602 0ZM602 50.2021C561.243 50.2023 528.203 83.2428 528.203 124C528.203 164.757 561.243 197.798 602 197.798C642.757 197.798 675.798 164.757 675.798 124C675.798 83.2427 642.757 50.2021 602 50.2021Z" fill="#FF5007"/>
      <path d="M388.893 0C423.105 0 451.099 11.5 474.344 36C464 55.5 464 55.5 451.099 80.5C434.4 58.4109 413.971 49.7004 388.893 49.7004C351.704 49.7004 315.118 79.5861 315.118 124C315.118 168.414 352.707 198.3 388.893 198.3C417.359 198.3 432.099 187.5 451.099 168.5C463 193 465.156 195.656 476 215.444C429.5 245.5 416 248 388.893 248C320.469 248 265 192.483 265 124C265 55.5167 320.469 0 388.893 0Z" fill="#FF5007"/>
      <path d="M124 0C192.483 0 248 55.5167 248 124C248 192.483 192.483 248 124 248C55.5167 248 0 192.483 0 124C0 55.5167 55.5167 5.57757e-05 124 0ZM124 50C83.1309 50 50 83.1309 50 124C50 164.869 83.1309 198 124 198C164.869 198 198 164.869 198 124C198 83.1309 164.869 50 124 50Z" fill="#FF5007"/>
    </svg>
  </g>
  
  <!-- Title text -->
  <text x="600" y="300" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Financial Clarity for Modern Businesses</text>
  
  <!-- Subtitle text -->
  <text x="600" y="380" font-family="Arial, sans-serif" font-size="24" fill="#FF5007" text-anchor="middle">Accounting &amp; Advisory Services</text>
  
  <!-- Strapline text -->
  <text x="600" y="480" font-family="Arial, sans-serif" font-size="20" fill="#CCCCCC" text-anchor="middle">Isle of Man</text>
</svg>`;

async function generateOGImage() {
  console.log('\nGenerating OG image...\n');
  
  try {
    // Write SVG to temp file
    const tempSvgPath = path.join(publicDir, 'og-image-temp.svg');
    fs.writeFileSync(tempSvgPath, ogImageSVG);
    
    // Convert SVG to JPG
    await sharp(tempSvgPath)
      .resize(1200, 630, {
        fit: 'fill'
      })
      .jpeg({ 
        quality: 90,
        mozjpeg: true
      })
      .toFile(outputPath);
    
    // Clean up temp file
    fs.unlinkSync(tempSvgPath);
    
    const stats = fs.statSync(outputPath);
    console.log(`✓ og-image.jpg: 1200x630 (${(stats.size / 1024).toFixed(2)}KB)`);
    console.log('\n✓ OG image generated successfully!\n');
  } catch (error) {
    console.error('Error generating OG image:', error);
    process.exit(1);
  }
}

generateOGImage();

