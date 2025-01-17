"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'All', slug: 'all' },
  { name: 'Software Development', slug: 'software-development' },
  { name: 'Web Development', slug: 'web-development' },
  { name: 'Digital Marketing', slug: 'digital-marketing' },
  { name: 'SEO', slug: 'seo' },
  { name: 'UI/UX Design', slug: 'design' },
  { name: 'Technology', slug: 'technology' },
  { name: 'Business', slug: 'business' }
];

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: What to Expect in 2024',
    excerpt: 'Explore the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks.',
    category: 'Web Development',
    author: 'John Smith',
    date: '2024-03-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000',
    slug: 'future-of-web-development-2024'
  },
  {
    id: 2,
    title: 'Mastering SEO: A Complete Guide for 2024',
    excerpt: 'Learn the essential strategies and techniques to improve your website\'s search engine rankings and drive organic traffic.',
    category: 'SEO',
    author: 'Sarah Johnson',
    date: '2024-03-14',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000',
    slug: 'mastering-seo-guide-2024'
  },
  {
    id: 3,
    title: 'AI in Digital Marketing: Transforming Customer Engagement',
    excerpt: 'Discover how artificial intelligence is revolutionizing digital marketing strategies and enhancing customer experiences.',
    category: 'Digital Marketing',
    author: 'Michael Chen',
    date: '2024-03-13',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000',
    slug: 'ai-digital-marketing-transformation'
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
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
              Insights & Resources
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in software development, digital marketing, and technology.
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
              placeholder="Search articles..."
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

        {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary">
                    Read More
                    <ArrowRight className="w-4 h-4" />
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