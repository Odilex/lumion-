const fs = require('fs');
const path = require('path');
const { generateProjectImage, generateAvatarImage } = require('../src/components/image-generator');

const projectImages = [
  {
    title: 'AI-Powered Analytics',
    filename: 'ai-analytics.jpg'
  },
  {
    title: 'Smart Banking Platform',
    filename: 'banking.jpg'
  },
  {
    title: 'IoT Control Center',
    filename: 'iot.jpg'
  }
];

const avatarImages = [
  {
    initials: 'AC',
    filename: 'avatar1.jpg'
  },
  {
    initials: 'SJ',
    filename: 'avatar2.jpg'
  },
  {
    initials: 'MP',
    filename: 'avatar3.jpg'
  }
];

async function generateImages() {
  // Create directories if they don't exist
  const projectsDir = path.join(process.cwd(), 'public', 'projects');
  const testimonialsDir = path.join(process.cwd(), 'public', 'testimonials');

  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
  }
  if (!fs.existsSync(testimonialsDir)) {
    fs.mkdirSync(testimonialsDir, { recursive: true });
  }

  // Generate project images
  for (const project of projectImages) {
    const imageData = generateProjectImage(project.title);
    const base64Data = imageData.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    fs.writeFileSync(path.join(projectsDir, project.filename), buffer);
    console.log(`Generated project image: ${project.filename}`);
  }

  // Generate avatar images
  for (const avatar of avatarImages) {
    const imageData = generateAvatarImage(avatar.initials);
    const base64Data = imageData.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    fs.writeFileSync(path.join(testimonialsDir, avatar.filename), buffer);
    console.log(`Generated avatar image: ${avatar.filename}`);
  }

  console.log('All images generated successfully!');
}

generateImages().catch(console.error); 