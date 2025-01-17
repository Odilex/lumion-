const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const generateImage = ({ width, height, text, gradient = 'purple-blue' }) => {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const grd = ctx.createLinearGradient(0, 0, width, height);
  if (gradient === 'purple-blue') {
    grd.addColorStop(0, '#8B5CF6');
    grd.addColorStop(1, '#3B82F6');
  } else {
    grd.addColorStop(0, '#3B82F6');
    grd.addColorStop(1, '#8B5CF6');
  }
  
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, width, height);

  // Add some random shapes for visual interest
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * width,
      Math.random() * height,
      Math.random() * 50 + 20,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.1})`;
    ctx.fill();
  }

  // Add text
  const fontSize = Math.min(width, height) * 0.08;
  ctx.font = `bold ${fontSize}px Arial`;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Add text with shadow for better visibility
  ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.fillText(text, width / 2, height / 2);

  // Add overlay pattern
  ctx.globalCompositeOperation = 'overlay';
  for (let i = 0; i < 20; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * width,
      Math.random() * height,
      Math.random() * 100,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.05})`;
    ctx.fill();
  }

  return canvas.createJPEGStream({
    quality: 0.95,
    chromaSubsampling: false
  });
};

const generateProjectImage = (title, outputPath) => {
  const stream = generateImage({
    width: 800,
    height: 600,
    text: title,
    gradient: 'purple-blue'
  });
  
  const out = fs.createWriteStream(outputPath);
  stream.pipe(out);
  return new Promise((resolve, reject) => {
    out.on('finish', resolve);
    out.on('error', reject);
  });
};

const generateAvatarImage = (initials, outputPath) => {
  const stream = generateImage({
    width: 200,
    height: 200,
    text: initials,
    gradient: 'blue-purple'
  });
  
  const out = fs.createWriteStream(outputPath);
  stream.pipe(out);
  return new Promise((resolve, reject) => {
    out.on('finish', resolve);
    out.on('error', reject);
  });
};

module.exports = {
  generateProjectImage,
  generateAvatarImage
}; 