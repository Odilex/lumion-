"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ParallaxSection } from '@/components/parallax-section';
import { GlitchText } from '@/components/glitch-text';
import { HologramCard } from '@/components/hologram-card';
import { NeonGlow } from '@/components/neon-glow';
import { Code, Globe, Smartphone, Rocket, BarChart, Palette } from 'lucide-react';

const categories = [
  { name: 'All', slug: 'all' },
  { name: 'Web Development', slug: 'web' },
  { name: 'Mobile Apps', slug: 'mobile' },
  { name: 'Software', slug: 'software' },
  { name: 'UI/UX Design', slug: 'design' },
  { name: 'Digital Marketing', slug: 'marketing' }
];

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with advanced features and seamless user experience.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1000',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    link: '/portfolio/e-commerce-platform'
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure and intuitive mobile banking application with real-time transactions.',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    link: '/portfolio/mobile-banking'
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Business intelligence platform with advanced AI capabilities for data analysis.',
    category: 'software',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
    technologies: ['Python', 'TensorFlow', 'Docker', 'PostgreSQL'],
    link: '/portfolio/ai-analytics'
  }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <main className="min-h-screen">
      <ParallaxSection
        title="Our Portfolio"
        subtitle="Showcasing Our Digital Excellence"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <GlitchText className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </GlitchText>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our latest work and see how we've helped businesses achieve their digital goals
            </p>

          <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-6 py-2 rounded-full border ${
                    selectedCategory === category.slug
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'border-border hover:border-primary/50 transition-colors'
                  }`}
                >
                {category.name}
                </motion.button>
            ))}
          </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
                <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <HologramCard className="group h-full">
                  <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                        <img
                          src={project.image}
                          alt={project.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                      </div>
                      <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                            <span
                              key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                    <NeonGlow>
                      <a
                        href={project.link}
                        className="inline-block w-full py-3 text-center font-semibold hover:scale-105 transition-transform"
                      >
                        View Project
                      </a>
                    </NeonGlow>
                      </div>
                    </HologramCard>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
} 