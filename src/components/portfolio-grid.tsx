'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { sampleImages } from '@/lib/sample-data';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
  technologies?: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Interactive Dashboard',
    category: 'UI Development',
    image: sampleImages.portfolio[0],
    link: '/portfolio/interactive-dashboard',
    description: 'Modern analytics dashboard with real-time data visualization.',
    technologies: ['React', 'D3.js', 'Framer Motion', 'TailwindCSS']
  },
  {
    id: '2',
    title: 'AI Content Generator',
    category: 'Content Creation',
    image: sampleImages.portfolio[1],
    link: '/portfolio/ai-content-generator',
    description: 'Advanced content generation platform powered by AI.',
    technologies: ['OpenAI', 'Next.js', 'TypeScript', 'Node.js']
  },
  {
    id: '3',
    title: '3D Product Viewer',
    category: 'UI Development',
    image: sampleImages.portfolio[2],
    link: '/portfolio/3d-product-viewer',
    description: 'Interactive 3D product visualization tool.',
    technologies: ['Three.js', 'WebGL', 'GSAP', 'React']
  },
  {
    id: '4',
    title: 'Social Media Suite',
    category: 'Content Creation',
    image: sampleImages.portfolio[3],
    link: '/portfolio/social-media-suite',
    description: 'Comprehensive social media content management platform.',
    technologies: ['React', 'Firebase', 'Social APIs', 'TailwindCSS']
  },
  {
    id: '5',
    title: 'Motion Graphics Editor',
    category: 'UI Development',
    image: sampleImages.portfolio[4],
    link: '/portfolio/motion-graphics-editor',
    description: 'Browser-based motion graphics creation tool.',
    technologies: ['Canvas API', 'WebGL', 'Framer Motion', 'TypeScript']
  },
  {
    id: '6',
    title: 'Blog Platform',
    category: 'Content Creation',
    image: sampleImages.portfolio[5],
    link: '/portfolio/blog-platform',
    description: 'Modern blogging platform with rich media support.',
    technologies: ['Next.js', 'MDX', 'Sanity.io', 'TailwindCSS']
  }
];

const categories = ['All', 'UI Development', 'Content Creation'];

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleItems, setVisibleItems] = useState(6);

  const filteredItems = portfolioItems.filter(
    item => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped transform spaces.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.slice(0, visibleItems).map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/80 mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={item.link}
                      className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors"
                    >
                      View Project
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {visibleItems < filteredItems.length && (
        <div className="text-center mt-12">
          <motion.button
              onClick={() => setVisibleItems((prev) => prev + 3)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors"
          >
              Load More Projects
          </motion.button>
        </div>
        )}
      </div>
    </section>
  );
} 