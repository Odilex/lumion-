'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, BarChart, Target, Users, Mail, Megaphone } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Globe,
    title: "Social Media Marketing",
    description: "Strategic social media campaigns across all major platforms"
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Data-driven insights and performance tracking"
  },
  {
    icon: Target,
    title: "PPC Advertising",
    description: "Targeted paid advertising campaigns for maximum ROI"
  },
  {
    icon: Users,
    title: "Content Marketing",
    description: "Engaging content that connects with your audience"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Strategic email campaigns that convert"
  },
  {
    icon: Megaphone,
    title: "Brand Strategy",
    description: "Comprehensive brand development and positioning"
  }
];

const platforms = [
  {
    category: "Social Media",
    items: ["Facebook", "Instagram", "LinkedIn", "Twitter", "TikTok"]
  },
  {
    category: "Advertising",
    items: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Instagram Ads"]
  },
  {
    category: "Analytics",
    items: ["Google Analytics", "Meta Pixel", "HotJar", "SEMrush"]
  },
  {
    category: "Marketing Tools",
    items: ["Mailchimp", "HubSpot", "Buffer", "Hootsuite"]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Strategy Development",
    description: "Creating a tailored digital marketing strategy"
  },
  {
    number: "02",
    title: "Campaign Setup",
    description: "Setting up and optimizing marketing campaigns"
  },
  {
    number: "03",
    title: "Content Creation",
    description: "Developing engaging content for your audience"
  },
  {
    number: "04",
    title: "Monitor & Optimize",
    description: "Continuous monitoring and performance optimization"
  }
];

const metrics = [
  { value: "300%", label: "Average ROI" },
  { value: "10M+", label: "Ad Impressions" },
  { value: "50K+", label: "Leads Generated" },
  { value: "95%", label: "Client Satisfaction" }
];

export default function DigitalMarketingPage() {
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
              Digital Marketing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-gray-300 mb-8"
            >
              Drive growth and engagement with data-driven digital marketing strategies
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
              Our Marketing Services
            </h2>
            <p className="text-gray-400 text-lg">
              Comprehensive digital marketing solutions for your business
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

      {/* Metrics Section */}
      <section className="py-20 relative bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  {metric.value}
                </div>
                <div className="text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Platforms & Tools
            </h2>
            <p className="text-gray-400 text-lg">
              We leverage the best platforms to maximize your reach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group"
              >
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors">
                  {platform.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {platform.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-sm bg-white/10 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
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
              Our Marketing Process
            </h2>
            <p className="text-gray-400 text-lg">
              A data-driven approach to digital marketing
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
              Ready to Grow Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create a marketing strategy that drives results
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:from-purple-600 hover:to-blue-600 transition-all group">
              Start Your Campaign
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 