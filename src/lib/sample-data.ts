// Using Freepik images for UI/UX portfolio samples
export const sampleImages = {
  portfolio: [
    'https://img.freepik.com/free-vector/dashboard-admin-panel-interface_52683-41850.jpg',  // Interactive Dashboard
    'https://img.freepik.com/free-vector/chat-interface-gradient_23-2149175014.jpg',  // AI Interface
    'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149065295.jpg',  // 3D Viewer
    'https://img.freepik.com/free-vector/gradient-ui-ux-elements-set_23-2149057479.jpg',  // Social Media
    'https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_23-2149057480.jpg',  // Motion Editor
    'https://img.freepik.com/free-vector/gradient-ui-ux-elements-pack_23-2149057483.jpg'   // Blog Platform
  ],
  testimonials: {
    sarah: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988',
    michael: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170',
    emma: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061'
  }
};

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Mutesi',
    role: 'CEO',
    company: 'RwandaTech Solutions',
    image: sampleImages.testimonials.sarah,
    content: 'Working with Lumion has been transformative for our business. Their innovative solutions and deep understanding of the Rwandan market helped us achieve remarkable growth.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Karenzi',
    role: 'CTO',
    company: 'KigaliPay',
    image: sampleImages.testimonials.michael,
    content: 'The team at Lumion delivered beyond our expectations. Their technical expertise and commitment to excellence made our digital transformation journey smooth and successful.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Uwase',
    role: 'Marketing Director',
    company: 'East Africa Ventures',
    image: sampleImages.testimonials.emma,
    content: 'Lumion\'s digital marketing strategies helped us expand our reach across East Africa. Their data-driven approach and creative solutions delivered exceptional results.',
    rating: 5
  }
];

export const stats = {
  years: 5,
  projects: 200,
  clients: 150,
  teamSize: 50,
  satisfaction: 98,
  countries: 5
};

export const achievements = [
  {
    year: 2023,
    title: 'Best Tech Company in Rwanda',
    organization: 'Rwanda ICT Chamber'
  },
  {
    year: 2022,
    title: 'Innovation Excellence Award',
    organization: 'East Africa Technology Summit'
  },
  {
    year: 2021,
    title: 'Digital Transformation Leader',
    organization: 'Africa Tech Awards'
  }
];

export const projects = [
  {
    id: 1,
    title: 'Interactive Dashboard',
    description: 'A modern analytics dashboard with real-time data visualization and interactive charts.',
    category: 'UI Development',
    image: 'https://img.freepik.com/free-vector/dashboard-admin-panel-interface_52683-41850.jpg',
    technologies: ['React', 'D3.js', 'TypeScript', 'Tailwind CSS'],
    link: '/projects/interactive-dashboard',
    overview: `Our Interactive Dashboard project revolutionizes how businesses visualize and interact with their data. Built with modern web technologies, it provides real-time insights through dynamic charts, customizable widgets, and intuitive controls.`,
    features: [
      'Real-time data visualization with interactive charts and graphs',
      'Customizable dashboard layouts with drag-and-drop functionality',
      'Dark/light mode with smooth transitions',
      'Advanced filtering and data analysis tools',
      'Responsive design for all device sizes',
      'Export functionality for reports and data'
    ],
    process: `The development process began with extensive user research to understand how different businesses interact with their data. We implemented a modular architecture using React components, ensuring scalability and maintainability. D3.js was chosen for complex visualizations, while Framer Motion adds smooth animations for an enhanced user experience.`,
    liveDemo: 'https://dashboard-demo.lumion.dev',
    sourceCode: 'https://github.com/lumion/interactive-dashboard'
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'Advanced content generation platform powered by AI with intuitive interface.',
    category: 'Content Creation',
    image: 'https://img.freepik.com/free-vector/chat-interface-gradient_23-2149175014.jpg',
    technologies: ['Next.js', 'OpenAI API', 'Node.js', 'MongoDB'],
    link: '/projects/ai-content-generator',
    overview: `The AI Content Generator is a sophisticated platform that leverages artificial intelligence to help users create high-quality content efficiently. It combines advanced language models with an intuitive user interface to streamline the content creation process.`,
    features: [
      'Multiple content types support (blog posts, social media, emails)',
      'AI-powered content suggestions and improvements',
      'Real-time collaboration features',
      'Content history and version control',
      'SEO optimization recommendations',
      'Custom tone and style settings'
    ],
    process: `We built this platform using Next.js for optimal performance and SEO. The integration with OpenAI's API enables powerful content generation capabilities, while MongoDB handles content storage and user data. The UI was designed to be minimal yet powerful, allowing users to focus on their content.`,
    liveDemo: 'https://ai-content.lumion.dev',
    sourceCode: 'https://github.com/lumion/ai-content-generator'
  },
  {
    id: 3,
    title: '3D Product Viewer',
    description: 'Interactive 3D product visualization tool with customization options.',
    category: '3D Design',
    image: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149065295.jpg',
    technologies: ['Three.js', 'WebGL', 'React Three Fiber', 'GSAP'],
    link: '/projects/3d-product-viewer',
    overview: `Our 3D Product Viewer revolutionizes how products are showcased online. Using WebGL and Three.js, we've created an immersive experience that allows users to interact with products in three dimensions, providing a more engaging shopping experience.`,
    features: [
      '360-degree product rotation with smooth controls',
      'Customizable materials and colors',
      'Zoom and pan functionality',
      'Product annotations and hotspots',
      'Screenshot and sharing capabilities',
      'Mobile-optimized controls'
    ],
    process: `The development focused on creating a performant 3D viewer using Three.js and React Three Fiber. We implemented custom shaders for realistic materials and GSAP for smooth animations. The UI was designed to be intuitive while providing advanced customization options.`,
    liveDemo: 'https://3d-viewer.lumion.dev',
    sourceCode: 'https://github.com/lumion/3d-product-viewer'
  },
  {
    id: 4,
    title: 'Social Media Suite',
    description: 'Comprehensive social media management and analytics platform.',
    category: 'UI Development',
    image: 'https://img.freepik.com/free-vector/gradient-ui-ux-elements-set_23-2149057479.jpg',
    technologies: ['Vue.js', 'Firebase', 'TailwindCSS', 'Social APIs'],
    link: '/projects/social-media-suite',
    overview: `The Social Media Suite is an all-in-one platform for managing social media presence across multiple platforms. It combines scheduling, analytics, and engagement tools in a unified interface, making social media management efficient and effective.`,
    features: [
      'Multi-platform post scheduling and management',
      'Real-time analytics and reporting',
      'Engagement tracking and response management',
      'Content calendar with drag-and-drop interface',
      'Automated posting and scheduling',
      'Team collaboration tools'
    ],
    process: `Built with Vue.js for its reactive capabilities and Firebase for real-time features, the Social Media Suite was designed to handle multiple social media platforms seamlessly. The UI emphasizes productivity with a clean, intuitive layout and powerful features accessible through simple interactions.`,
    liveDemo: 'https://social-suite.lumion.dev',
    sourceCode: 'https://github.com/lumion/social-media-suite'
  },
  {
    id: 5,
    title: 'Motion Graphics Editor',
    description: 'Professional motion graphics creation and editing tool.',
    category: 'Motion Graphics',
    image: 'https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_23-2149057480.jpg',
    technologies: ['Canvas API', 'WebGL', 'Framer Motion', 'TypeScript'],
    link: '/projects/motion-graphics-editor',
    overview: `The Motion Graphics Editor is a professional-grade web-based tool for creating and editing motion graphics. It combines powerful features with an intuitive interface, making motion design accessible to both beginners and professionals.`,
    features: [
      'Timeline-based animation editing',
      'Layer-based composition system',
      'Real-time preview capabilities',
      'Export to multiple formats',
      'Custom effects and transitions library',
      'Collaborative editing features'
    ],
    process: `We utilized the Canvas API and WebGL for high-performance rendering, while TypeScript ensures code reliability. The editor's architecture was designed to handle complex animations while maintaining a smooth user experience. Framer Motion powers the interface animations.`,
    liveDemo: 'https://motion-editor.lumion.dev',
    sourceCode: 'https://github.com/lumion/motion-graphics-editor'
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'Modern content management system with advanced editing features.',
    category: 'Content Creation',
    image: 'https://img.freepik.com/free-vector/gradient-ui-ux-elements-pack_23-2149057483.jpg',
    technologies: ['Next.js', 'MDX', 'Sanity.io', 'TailwindCSS'],
    link: '/projects/blog-platform',
    overview: `Our Blog Platform is a modern content management system that combines the power of Next.js with the flexibility of MDX and Sanity.io. It provides an exceptional writing and reading experience with advanced features for content creators.`,
    features: [
      'Rich text editor with markdown support',
      'Custom components and embeds',
      'SEO optimization tools',
      'Analytics and engagement tracking',
      'Automated image optimization',
      'Multiple author support'
    ],
    process: `The platform was built using Next.js for optimal performance and SEO. We integrated Sanity.io as the headless CMS and MDX for flexible content authoring. The design focuses on readability and content discovery, with careful attention to typography and spacing.`,
    liveDemo: 'https://blog-platform.lumion.dev',
    sourceCode: 'https://github.com/lumion/blog-platform'
  },
  {
    id: 7,
    title: 'E-commerce Design System',
    description: 'A comprehensive UI component library and design system for modern e-commerce applications.',
    category: 'UI Development',
    image: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg',
    technologies: ['React', 'Storybook', 'Styled Components', 'Jest'],
    link: '/projects/ecommerce-design-system',
    overview: `Our E-commerce Design System provides a robust foundation for building scalable online stores. It includes a comprehensive set of reusable components, design tokens, and documentation to ensure consistency across e-commerce applications.`,
    features: [
      'Extensive component library with e-commerce specific elements',
      'Customizable theming system',
      'Accessibility-first components',
      'Interactive documentation',
      'Performance optimized components',
      'Built-in analytics tracking'
    ],
    process: `We developed this design system through close collaboration with e-commerce businesses, ensuring each component meets real-world needs. The system was built with React and documented using Storybook, with comprehensive testing using Jest.`,
    liveDemo: 'https://design-system.lumion.dev',
    sourceCode: 'https://github.com/lumion/ecommerce-design-system'
  },
  {
    id: 8,
    title: 'Video Editing Platform',
    description: 'Browser-based video editing platform with professional features.',
    category: 'Content Creation',
    image: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149051942.jpg',
    technologies: ['WebAssembly', 'FFmpeg', 'React', 'WebGL'],
    link: '/projects/video-editing-platform',
    overview: `Our Video Editing Platform brings professional video editing capabilities to the browser. Using WebAssembly and FFmpeg, we've created a powerful yet intuitive editing experience that rivals desktop applications.`,
    features: [
      'Multi-track video and audio editing',
      'Real-time preview and effects',
      'Cloud-based project saving',
      'Collaborative editing features',
      'Advanced transition effects',
      'Direct social media export'
    ],
    process: `The platform was built using WebAssembly for performance-critical operations, with React handling the UI. We implemented a custom rendering engine using WebGL for real-time previews and effects.`,
    liveDemo: 'https://video-editor.lumion.dev',
    sourceCode: 'https://github.com/lumion/video-editor'
  }
];

export const blogPosts = [
  {
    slug: 'future-of-web-development-2024',
    title: 'The Future of Web Development: What to Expect in 2024',
    excerpt: 'Explore the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks.',
    content: `
      <p>The web development landscape is constantly evolving, and 2024 promises to bring even more exciting changes and innovations. In this article, we'll explore the key trends and technologies that are shaping the future of web development.</p>

      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing how we build websites and applications. From code completion to automated testing, AI tools are making developers more productive than ever. Key developments include:</p>
      <ul>
        <li>Advanced code generation capabilities</li>
        <li>Automated bug detection and fixing</li>
        <li>AI-assisted code reviews</li>
        <li>Intelligent development environments</li>
      </ul>

      <h2>2. WebAssembly and Edge Computing</h2>
      <p>WebAssembly continues to gain traction, enabling high-performance applications in the browser. Combined with edge computing, it's changing how we think about web application architecture. Benefits include:</p>
      <ul>
        <li>Near-native performance in the browser</li>
        <li>Improved application responsiveness</li>
        <li>Reduced server load</li>
        <li>Enhanced security features</li>
      </ul>

      <h2>3. Enhanced User Experiences</h2>
      <p>With the rise of motion design and interactive elements, user experiences are becoming more engaging and immersive than ever before. Key trends include:</p>
      <ul>
        <li>Advanced animations and transitions</li>
        <li>Micro-interactions</li>
        <li>Personalized user interfaces</li>
        <li>Accessibility improvements</li>
      </ul>
    `,
    category: 'Web Development',
    author: 'John Smith',
    date: '2024-03-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000',
    tags: ['Web Development', 'Technology', 'Future Trends', 'AI', 'WebAssembly']
  },
  {
    slug: 'ai-revolution-content-creation',
    title: 'The AI Revolution in Content Creation',
    excerpt: 'How artificial intelligence is transforming the way we create and manage content in the digital age.',
    content: `
      <p>Artificial Intelligence is revolutionizing content creation, offering new possibilities and challenges for creators and businesses alike. Let's explore how AI is reshaping the content landscape.</p>

      <h2>1. AI-Powered Writing Assistance</h2>
      <p>Modern AI tools are becoming increasingly sophisticated in helping creators write better content:</p>
      <ul>
        <li>Advanced grammar and style suggestions</li>
        <li>Content optimization for SEO</li>
        <li>Automated content generation</li>
        <li>Multilingual content creation</li>
      </ul>

      <h2>2. Smart Content Management</h2>
      <p>AI is transforming how we organize and manage content:</p>
      <ul>
        <li>Automated content categorization</li>
        <li>Intelligent tagging systems</li>
        <li>Personalized content recommendations</li>
        <li>Content performance prediction</li>
      </ul>

      <h2>3. The Future of Content Creation</h2>
      <p>Looking ahead, we can expect:</p>
      <ul>
        <li>More sophisticated AI writing assistants</li>
        <li>Enhanced personalization capabilities</li>
        <li>Improved content analytics</li>
        <li>Better integration with existing workflows</li>
      </ul>
    `,
    category: 'Content Creation',
    author: 'Sarah Chen',
    date: '2024-03-10',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000',
    tags: ['AI', 'Content Creation', 'Digital Marketing', 'Technology']
  },
  {
    slug: 'mastering-3d-web-design',
    title: 'Mastering 3D Web Design: A Complete Guide',
    excerpt: 'Learn how to create immersive 3D experiences for the web using modern tools and techniques.',
    content: `
      <p>3D web design is becoming increasingly popular as browsers become more powerful and users expect more engaging experiences. This guide will help you master the essentials of 3D web design.</p>

      <h2>1. Essential Tools and Technologies</h2>
      <p>The foundation of 3D web design relies on several key technologies:</p>
      <ul>
        <li>Three.js for 3D rendering</li>
        <li>WebGL for graphics processing</li>
        <li>GSAP for animations</li>
        <li>React Three Fiber for React integration</li>
      </ul>

      <h2>2. Performance Optimization</h2>
      <p>Creating performant 3D web experiences requires careful optimization:</p>
      <ul>
        <li>Model optimization techniques</li>
        <li>Texture compression</li>
        <li>Level of detail management</li>
        <li>Progressive loading strategies</li>
      </ul>

      <h2>3. Best Practices</h2>
      <p>Follow these guidelines for successful 3D web projects:</p>
      <ul>
        <li>Mobile-first approach</li>
        <li>Accessibility considerations</li>
        <li>Performance monitoring</li>
        <li>Cross-browser testing</li>
      </ul>
    `,
    category: '3D Design',
    author: 'Michael Rodriguez',
    date: '2024-03-05',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000',
    tags: ['3D Design', 'Web Development', 'Three.js', 'WebGL']
  },
  {
    slug: 'design-systems-scalable-development',
    title: 'Design Systems: The Foundation of Scalable Development',
    excerpt: 'How design systems streamline development, ensure consistency, and improve team collaboration.',
    content: `
      <p>Design systems have become essential for modern web development, providing a single source of truth for design and development teams. Let's explore why they're crucial and how to implement them effectively.</p>

      <h2>1. Components of a Design System</h2>
      <p>A comprehensive design system includes several key elements:</p>
      <ul>
        <li>Design principles and guidelines</li>
        <li>Component library documentation</li>
        <li>Design tokens and variables</li>
        <li>Usage examples and patterns</li>
      </ul>

      <h2>2. Implementation Strategy</h2>
      <p>Successfully implementing a design system requires careful planning:</p>
      <ul>
        <li>Audit existing design patterns</li>
        <li>Define design tokens</li>
        <li>Create component hierarchy</li>
        <li>Document usage guidelines</li>
      </ul>

      <h2>3. Maintenance and Evolution</h2>
      <p>Keeping a design system relevant requires:</p>
      <ul>
        <li>Regular updates and reviews</li>
        <li>Version control and changelog</li>
        <li>Team feedback integration</li>
        <li>Performance monitoring</li>
      </ul>
    `,
    category: 'UI Development',
    author: 'Emma Thompson',
    date: '2024-03-01',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000',
    tags: ['Design Systems', 'UI Development', 'Web Development', 'Best Practices']
  },
  {
    slug: 'video-editing-web-evolution',
    title: 'The Evolution of Web-Based Video Editing',
    excerpt: 'How modern web technologies are enabling professional video editing in the browser.',
    content: `
      <p>Web-based video editing has come a long way, thanks to advancements in browser technologies and web standards. Let's explore the current state and future possibilities.</p>

      <h2>1. Enabling Technologies</h2>
      <p>Several key technologies make browser-based video editing possible:</p>
      <ul>
        <li>WebAssembly for performance</li>
        <li>WebGL for rendering</li>
        <li>Media Source Extensions</li>
        <li>Web Workers for multithreading</li>
      </ul>

      <h2>2. Current Capabilities</h2>
      <p>Modern web-based editors can now handle:</p>
      <ul>
        <li>Multi-track editing</li>
        <li>Real-time effects</li>
        <li>Professional transitions</li>
        <li>Advanced color grading</li>
      </ul>

      <h2>3. Future Developments</h2>
      <p>Looking ahead, we can expect:</p>
      <ul>
        <li>AI-powered editing features</li>
        <li>8K video support</li>
        <li>Advanced collaboration tools</li>
        <li>Cloud-based rendering</li>
      </ul>
    `,
    category: 'Content Creation',
    author: 'David Kim',
    date: '2024-02-28',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000',
    tags: ['Video Editing', 'WebAssembly', 'Content Creation', 'Technology']
  }
]; 