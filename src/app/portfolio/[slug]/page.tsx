"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxSection } from '@/components/parallax-section';
import { GlitchText } from '@/components/glitch-text';
import { HologramCard } from '@/components/hologram-card';
import { NeonGlow } from '@/components/neon-glow';
import { Globe, Code, Rocket, Users, Calendar, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

// This would typically come from a CMS or API
const projectData = {
  'e-commerce-platform': {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with cutting-edge technologies, providing a seamless shopping experience for customers and powerful management tools for administrators.',
    client: 'TechRetail Inc.',
    duration: '4 months',
    team: '6 developers',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1000',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    features: [
      'Responsive design for all devices',
      'Real-time inventory management',
      'Secure payment processing',
      'Advanced search and filtering',
      'Customer reviews and ratings',
      'Order tracking system'
    ],
    results: [
      '150% increase in online sales',
      '40% reduction in cart abandonment',
      '99.9% uptime',
      '4.8/5 customer satisfaction'
    ],
    liveUrl: 'https://example.com',
    images: [
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1000',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000',
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000'
    ]
  }
  // Add more projects as needed
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-primary hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <ParallaxSection
        title={project.title}
        subtitle="Case Study"
        backgroundImage={project.image}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <GlitchText className="text-3xl md:text-4xl font-bold mb-6">
              Project Overview
            </GlitchText>
            <p className="text-lg text-muted-foreground mb-8">
                {project.description}
              </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <HologramCard className="p-6">
                <Globe className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-1">Client</h3>
                <p className="text-muted-foreground">{project.client}</p>
              </HologramCard>
              <HologramCard className="p-6">
                <Calendar className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-1">Duration</h3>
                <p className="text-muted-foreground">{project.duration}</p>
              </HologramCard>
              <HologramCard className="p-6">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-1">Team Size</h3>
                <p className="text-muted-foreground">{project.team}</p>
              </HologramCard>
              <HologramCard className="p-6">
                <LinkIcon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-1">Website</h3>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Visit Site
                </a>
              </HologramCard>
            </div>
            </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <GlitchText className="text-3xl font-bold mb-6">
              Technologies Used
            </GlitchText>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech) => (
                <NeonGlow key={tech} className="px-6 py-3 rounded-full">
                  {tech}
                </NeonGlow>
              ))}
          </div>
          </motion.div>

          {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <GlitchText className="text-3xl font-bold mb-6">
              Key Features
            </GlitchText>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <HologramCard key={index} className="p-6">
                  <Code className="w-6 h-6 text-primary mb-4" />
                  <p>{feature}</p>
                </HologramCard>
            ))}
          </div>
          </motion.div>

          {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <GlitchText className="text-3xl font-bold mb-6">
              Project Results
            </GlitchText>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <HologramCard key={index} className="p-6">
                  <Rocket className="w-6 h-6 text-primary mb-4" />
                  <p>{result}</p>
                </HologramCard>
            ))}
          </div>
          </motion.div>

          {/* Project Images */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <GlitchText className="text-3xl font-bold mb-6">
              Project Gallery
            </GlitchText>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <HologramCard key={index} className="overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </HologramCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 