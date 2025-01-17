const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PLACEHOLDER_DIR = path.join(process.cwd(), 'public', 'placeholders');

// Ensure placeholders directory exists
if (!fs.existsSync(PLACEHOLDER_DIR)) {
  fs.mkdirSync(PLACEHOLDER_DIR, { recursive: true });
}

const PLACEHOLDERS = [
  { name: 'image', width: 800, height: 600 },
  { name: 'portfolio', width: 1200, height: 800 },
  { name: 'testimonial', width: 400, height: 400 },
  { name: 'client', width: 200, height: 100 },
  { name: 'comparison', width: 1200, height: 800 },
];

async function generatePlaceholder({ name, width, height }) {
  const outputPath = path.join(PLACEHOLDER_DIR, `${name}-placeholder.jpg`);
  
  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 229, g: 231, b: 235, alpha: 1 } // Tailwind gray-200
    }
  })
    .composite([
      {
        input: Buffer.from(`
          <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="none"/>
            <text
              x="50%"
              y="50%"
              font-family="Arial"
              font-size="${Math.min(width, height) * 0.1}px"
              fill="#9CA3AF"
              text-anchor="middle"
              dominant-baseline="middle"
            >
              ${name.charAt(0).toUpperCase() + name.slice(1)} Placeholder
            </text>
          </svg>
        `),
        top: 0,
        left: 0,
      }
    ])
    .jpeg({ quality: 90 })
    .toFile(outputPath);
    
  console.log(`Generated ${name} placeholder`);
}

async function generatePlaceholders() {
  try {
    await Promise.all(PLACEHOLDERS.map(generatePlaceholder));
    console.log('All placeholders generated successfully');
  } catch (error) {
    console.error('Error generating placeholders:', error);
  }
}

generatePlaceholders(); 