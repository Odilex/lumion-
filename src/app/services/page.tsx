'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxSection } from '@/components/parallax-section';
import { GlitchText } from '@/components/glitch-text';
import { HologramCard } from '@/components/hologram-card';
import { NeonGlow } from '@/components/neon-glow';
import { Code, Globe, Smartphone, Rocket, BarChart, Palette } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs, from web applications to enterprise systems.',
    features: [
      'Custom Application Development',
      'API Integration',
      'Cloud Solutions',
      'Legacy System Modernization'
    ]
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications that deliver exceptional user experiences.',
    features: [
      'Frontend Development',
      'Backend Development',
      'E-commerce Solutions',
      'CMS Development'
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that engage users and drive results.',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-platform Solutions',
      'Mobile UI/UX Design'
    ]
  },
  {
    icon: Rocket,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing services to boost your online presence and reach your target audience.',
    features: [
      'SEO Optimization',
      'Content Marketing',
      'Social Media Management',
      'Email Marketing'
    ]
  },
  {
    icon: BarChart,
    title: 'Analytics & Data',
    description: 'Data-driven insights and analytics solutions to help you make informed business decisions.',
    features: [
      'Data Analysis',
      'Business Intelligence',
      'Performance Tracking',
      'Custom Reporting'
    ]
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create engaging and intuitive digital experiences.',
    features: [
      'User Interface Design',
      'User Experience Design',
      'Prototyping',
      'Design Systems'
    ]
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by understanding your business goals, requirements, and challenges.'
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Developing a comprehensive plan tailored to your specific needs and objectives.'
  },
  {
    number: '03',
    title: 'Development',
    description: 'Implementing solutions using cutting-edge technologies and best practices.'
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Deploying your solution and ensuring everything runs smoothly.'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        title="Our Services"
        subtitle="Innovative Digital Solutions for Modern Businesses"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000"
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <GlitchText className="text-3xl md:text-4xl font-bold mb-4">
              What We Offer
            </GlitchText>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business thrive in the modern age
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <HologramCard className="p-6 h-full">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                        {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </HologramCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <GlitchText className="text-3xl md:text-4xl font-bold mb-4">
              Our Process
            </GlitchText>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NeonGlow className="p-6 h-full">
                  <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </NeonGlow>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <GlitchText className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </GlitchText>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help you achieve your digital goals
            </p>
          <NeonGlow>
              <a
                href="/contact"
                className="inline-block px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform"
              >
                Get Started
              </a>
          </NeonGlow>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 