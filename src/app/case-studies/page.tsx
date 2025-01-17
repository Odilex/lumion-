'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
  {
    title: "AI-Powered Analytics Platform",
    category: "Artificial Intelligence",
    description: "Developed a custom analytics platform using machine learning to provide predictive insights for a major financial institution.",
    metrics: [
      { label: "Efficiency Increase", value: "85%" },
      { label: "Cost Reduction", value: "40%" },
      { label: "ROI", value: "250%" }
    ],
    technologies: ["Python", "TensorFlow", "AWS", "React"],
    image: "/projects/analytics.jpg"
  },
  {
    title: "E-Commerce Mobile App",
    category: "App Development",
    description: "Built a cross-platform mobile app for a leading retail chain, enabling seamless shopping experiences.",
    metrics: [
      { label: "User Growth", value: "200%" },
      { label: "Sales Increase", value: "150%" },
      { label: "App Rating", value: "4.8" }
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
    image: "/projects/ecommerce.jpg"
  },
  {
    title: "Enterprise Security System",
    category: "Cybersecurity",
    description: "Implemented comprehensive security infrastructure for a government agency, ensuring data protection.",
    metrics: [
      { label: "Security Score", value: "98%" },
      { label: "Threat Prevention", value: "100%" },
      { label: "Compliance", value: "100%" }
    ],
    technologies: ["Python", "AWS Security", "Kubernetes", "Docker"],
    image: "/projects/security.jpg"
  }
];

export default function CaseStudiesPage() {
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
              Case Studies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-gray-300 mb-8"
            >
              Explore our successful projects and transformative solutions
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <span className="text-purple-400 font-medium mb-2 block">
                      {study.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                      {study.title}
                    </h2>
                    <p className="text-gray-400 mb-8 text-lg">
                      {study.description}
                    </p>

                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {study.metrics.map((metric) => (
                        <div key={metric.label}>
                          <div className="text-2xl font-bold text-white mb-1">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-400">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mb-8">
                      <div className="text-sm text-gray-400 mb-2">Technologies Used:</div>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-sm bg-white/10 text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      View Full Case Study
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                    </div>
                  </div>
                </div>
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
              Ready to Build Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create something extraordinary together
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:from-purple-600 hover:to-blue-600 transition-all group">
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 