"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Tag, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: 'All', slug: 'all' },
  { name: 'UI Development', slug: 'ui-development' },
  { name: 'Content Creation', slug: 'content-creation' },
  { name: '3D Design', slug: '3d-design' },
  { name: 'Motion Graphics', slug: 'motion-graphics' }
];

const projects = [
  {
    id: 1,
    title: 'Interactive Dashboard',
    description: 'A modern analytics dashboard with real-time data visualization and interactive charts.',
    category: 'UI Development',
    image: 'https://img.freepik.com/free-vector/dashboard-admin-panel-interface_52683-41850.jpg',
    technologies: ['React', 'D3.js', 'TypeScript', 'Tailwind CSS'],
    link: '/projects/interactive-dashboard'
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'Advanced content generation platform powered by AI with intuitive interface.',
    category: 'Content Creation',
    image: 'https://img.freepik.com/free-vector/chat-interface-gradient_23-2149175014.jpg',
    technologies: ['Next.js', 'OpenAI API', 'Node.js', 'MongoDB'],
    link: '/projects/ai-content-generator'
  },
  {
    id: 3,
    title: '3D Product Viewer',
    description: 'Interactive 3D product visualization tool with customization options.',
    category: '3D Design',
    image: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149065295.jpg',
    technologies: ['Three.js', 'WebGL', 'React Three Fiber', 'GSAP'],
    link: '/projects/3d-product-viewer'
  },
  {
    id: 4,
    title: 'Social Media Suite',
    description: 'Comprehensive social media management and analytics platform.',
    category: 'UI Development',
    image: 'https://img.freepik.com/free-vector/gradient-ui-ux-elements-set_23-2149057479.jpg',
    technologies: ['Vue.js', 'Firebase', 'TailwindCSS', 'Social APIs'],
    link: '/projects/social-media-suite'
  },
  {
    id: 5,
    title: 'Motion Graphics Editor',
    description: 'Professional motion graphics creation and editing tool.',
    category: 'Motion Graphics',
    image: 'https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_23-2149057480.jpg',
    technologies: ['Canvas API', 'WebGL', 'Framer Motion', 'TypeScript'],
    link: '/projects/motion-graphics-editor'
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'Modern content management system with advanced editing features.',
    category: 'Content Creation',
    image: 'https://img.freepik.com/free-vector/gradient-ui-ux-elements-pack_23-2149057483.jpg',
    technologies: ['Next.js', 'MDX', 'Sanity.io', 'TailwindCSS'],
    link: '/projects/blog-platform'
  }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of innovative digital solutions, from interactive UIs to content creation tools.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Categories */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category.slug
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-colors"
            >
              <Link href={project.link}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-muted"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
} 