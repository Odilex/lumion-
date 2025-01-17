'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    content: "The team's innovative approach transformed our digital presence completely. Their expertise in both development and design is unmatched.",
    author: "Alex Chen",
    role: "CTO, TechVision",
    image: "/testimonials/avatar1.jpg"
  },
  {
    content: "Working with them was a game-changer for our business. They delivered beyond our expectations and were always responsive to our needs.",
    author: "Sarah Johnson",
    role: "CEO, InnovateCo",
    image: "/testimonials/avatar2.jpg"
  },
  {
    content: "Their attention to detail and technical expertise helped us launch our platform months ahead of schedule. Truly exceptional service.",
    author: "Michael Park",
    role: "Founder, NextGen",
    image: "/testimonials/avatar3.jpg"
  }
];

export const TestimonialsSection = () => {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          style={{ y: y1 }}
          className="absolute -top-1/2 -right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-3xl"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ rotate: index === 1 ? rotate : 0 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all group"
            >
              <div className="mb-6">
                <svg className="w-10 h-10 text-purple-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                </svg>
                <p className="text-gray-300 text-lg italic">{testimonial.content}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 