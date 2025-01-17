"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function NewsletterSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Subscribe to our newsletter for the latest insights and updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-background placeholder:text-background/60"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-background text-foreground hover:bg-background/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
} 