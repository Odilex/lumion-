'use client';

import React from 'react';

interface ImageGeneratorProps {
  width: number;
  height: number;
  text: string;
  gradient?: string;
}

const ImageGenerator = ({ width, height, text, gradient = 'from-purple-500 to-blue-500' }: ImageGeneratorProps) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#8B5CF6');
    gradient.addColorStop(1, '#3B82F6');
    
    ctx.fillStyle = gradient;
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
    ctx.font = 'bold 24px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
  }

  return canvas.toDataURL();
};

// Helper function to generate project images
const generateProjectImage = (title: string) => {
  return ImageGenerator({
    width: 800,
    height: 600,
    text: title,
    gradient: 'from-purple-500 to-blue-500'
  });
};

// Helper function to generate avatar images
const generateAvatarImage = (initials: string) => {
  return ImageGenerator({
    width: 200,
    height: 200,
    text: initials,
    gradient: 'from-blue-500 to-purple-500'
  });
};

module.exports = {
  ImageGenerator,
  generateProjectImage,
  generateAvatarImage
}; 