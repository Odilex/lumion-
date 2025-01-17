"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Code, Rocket, Target, Shield, Zap, Globe, Cpu } from 'lucide-react';
import { ProcessSection } from '@/components/process-section';
import { TechnologiesSection } from '@/components/technologies-section';
import { NewsletterSection } from '@/components/newsletter-section';
import { FloatingSphere } from '@/components/floating-sphere';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CursorEffect } from '@/components/cursor-effect';
import { MagneticButton } from '@/components/magnetic-button';

// Features data with enhanced descriptions
const features = [
  {
    icon: Code,
    title: "Clean Architecture",
    description: "Future-proof solutions built with modern best practices and scalable patterns"
  },
  {
    icon: Rocket,
    title: "Rapid Development",
    description: "Swift delivery without compromising on quality or performance"
  },
  {
    icon: Target,
    title: "Strategic Solutions",
    description: "Custom strategies aligned perfectly with your business objectives"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security measures protecting your digital assets"
  }
];

// Enhanced stats with more impressive numbers
const stats = [
  { value: "99.9%", label: "Uptime Guaranteed" },
  { value: "750+", label: "Projects Delivered" },
  { value: "24/7", label: "Expert Support" },
  { value: "100+", label: "Global Clients" }
];

// Updated projects with more diverse categories
const projects = [
  {
    title: "AI-Powered Analytics",
    category: "Machine Learning",
    image: "/projects/ai-analytics.jpg",
    tech: ["Python", "TensorFlow", "React"]
  },
  {
    title: "Smart Banking Platform",
    category: "FinTech",
    image: "/projects/banking.jpg",
    tech: ["Node.js", "PostgreSQL", "AWS"]
  },
  {
    title: "IoT Control Center",
    category: "Internet of Things",
    image: "/projects/iot.jpg",
    tech: ["Rust", "MQTT", "Vue.js"]
  }
];

// New services section data
const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack solutions with modern frameworks and cloud infrastructure",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: Cpu,
    title: "AI Solutions",
    description: "Custom AI models and machine learning implementations",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: Zap,
    title: "Cloud Architecture",
    description: "Scalable cloud solutions with optimal performance",
    color: "from-pink-400 to-purple-600"
  }
];

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <>
      <CursorEffect />
    <main className="flex min-h-screen flex-col bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 opacity-30"
          >
          <div className="absolute right-0 top-20 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute left-20 bottom-20 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute left-1/2 top-1/2 w-48 h-48 bg-pink-500/20 rounded-full filter blur-3xl"></div>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                Digital Innovation
                <br />
                Redefined.
                </motion.h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-xl">
                Transform your vision into reality with our cutting-edge digital solutions. 
                Based in the heart of Kigali, we bring world-class technology to East Africa.
            </p>
              <div className="flex gap-4">
                  <MagneticButton className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 group transition-all">
                Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </MagneticButton>
                  <MagneticButton className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium backdrop-blur-sm transition-all">
                  View Projects
                  </MagneticButton>
            </div>
          </motion.div>

              {/* Right Content - Enhanced 3D Element */}
              <div className="relative hidden lg:block h-[600px] group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
              <FloatingSphere />
                </motion.div>
        </div>
          </div>
        </div>

        {/* Enhanced Scrolling Text Banner */}
        <div className="absolute bottom-0 w-full overflow-hidden py-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ 
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }}
            className="whitespace-nowrap"
          >
            {Array(3).fill(null).map((_, i) => (
              <React.Fragment key={i}>
                  <motion.span 
                    className="text-xl font-medium text-white/80 px-4 inline-block"
                    whileHover={{ scale: 1.1, color: "rgba(255, 255, 255, 1)" }}
                  >
                    BUILD BEAUTIFUL DIGITAL SOLUTIONS
                  </motion.span>
            <span className="text-xl font-medium text-white/80 px-4">•</span>
                  <motion.span 
                    className="text-xl font-medium text-white/80 px-4 inline-block"
                    whileHover={{ scale: 1.1, color: "rgba(255, 255, 255, 1)" }}
                  >
                    INNOVATE WITH CONFIDENCE
                  </motion.span>
            <span className="text-xl font-medium text-white/80 px-4">•</span>
                  <motion.span 
                    className="text-xl font-medium text-white/80 px-4 inline-block"
                    whileHover={{ scale: 1.1, color: "rgba(255, 255, 255, 1)" }}
                  >
                    TRANSFORM YOUR BUSINESS
                  </motion.span>
            <span className="text-xl font-medium text-white/80 px-4">•</span>
              </React.Fragment>
            ))}
          </motion.div>
          </div>
      </section>

        {/* Services Section - Enhanced with hover effects */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
              Our Services
              </motion.h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl transition-all group-hover:blur-2xl"></div>
                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all">
                    <motion.div 
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} p-2.5 mb-6`}
                      whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
                    >
                    <service.icon className="w-full h-full text-white" />
                    </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Why Choose Us
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We combine technical excellence with creative innovation to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all group"
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Showcase with Enhanced Hover Effects */}
      <section className="py-24 bg-black/50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Our Latest Work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our portfolio of successful projects and digital innovations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-sm text-purple-300 mb-2">{project.category}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <div className="flex gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:from-purple-600 hover:to-blue-600 transition-all group"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </main>
    </>
  );
}