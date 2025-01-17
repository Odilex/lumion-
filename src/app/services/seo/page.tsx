'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, BarChart, Globe, Target, Zap } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Search,
    title: "Keyword Research & Analysis",
    description: "In-depth research to target the most valuable search terms for your business"
  },
  {
    icon: BarChart,
    title: "Performance Tracking",
    description: "Detailed analytics and reporting to measure your SEO success"
  },
  {
    icon: Globe,
    title: "Technical SEO",
    description: "Optimize your website's structure and performance for better rankings"
  },
  {
    icon: Target,
    title: "Local SEO",
    description: "Boost your visibility in local search results"
  },
  {
    icon: Zap,
    title: "Content Optimization",
    description: "Create and optimize content that ranks and converts"
  }
];

const processSteps = [
  {
    number: "01",
    title: "SEO Audit",
    description: "Comprehensive analysis of your current SEO performance"
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Custom SEO strategy tailored to your goals"
  },
  {
    number: "03",
    title: "Implementation",
    description: "Execute optimizations and improvements"
  },
  {
    number: "04",
    title: "Monitoring & Refinement",
    description: "Track progress and adjust strategy for optimal results"
  }
];

export default function SEOPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
          <div className="absolute right-0 top-20 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute left-20 bottom-20 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
            >
              Search Engine Optimization
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-gray-300 mb-8"
            >
              Drive organic traffic and increase your online visibility with our data-driven SEO services
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:from-purple-600 hover:to-blue-600 transition-all group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Our SEO Services
            </h2>
            <p className="text-gray-400 text-lg">
              Comprehensive SEO solutions to improve your search rankings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Process Section */}
      <section className="py-20 relative bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Our SEO Process
            </h2>
            <p className="text-gray-400 text-lg">
              A proven methodology for SEO success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors mt-4">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Ready to Improve Your Search Rankings?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our SEO services can help grow your business
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:from-purple-600 hover:to-blue-600 transition-all group">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 