"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { HologramCard } from '@/components/hologram-card';
import { GlitchText } from '@/components/glitch-text';
import { NeonGlow } from '@/components/neon-glow';

interface Props {
  params: {
    slug: string;
  };
}

// This would typically come from your CMS or database
const blogPost = {
  title: 'The Future of Web Development: What to Expect in 2024',
  excerpt: 'Explore the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks.',
  content: `
    <p>The web development landscape is constantly evolving, and 2024 promises to bring even more exciting changes and innovations. In this article, we'll explore the key trends and technologies that are shaping the future of web development.</p>

    <h2>1. AI-Powered Development Tools</h2>
    <p>Artificial Intelligence is revolutionizing how we build websites and applications. From code completion to automated testing, AI tools are making developers more productive than ever.</p>

    <h2>2. WebAssembly and Edge Computing</h2>
    <p>WebAssembly continues to gain traction, enabling high-performance applications in the browser. Combined with edge computing, it's changing how we think about web application architecture.</p>

    <h2>3. Enhanced User Experiences</h2>
    <p>With the rise of motion design and interactive elements, user experiences are becoming more engaging and immersive than ever before.</p>
  `,
  category: 'Web Development',
  author: 'John Smith',
  date: '2024-03-15',
  readTime: '5 min read',
  image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000',
  tags: ['Web Development', 'Technology', 'Future Trends', 'AI', 'WebAssembly']
};

export default function BlogPostPage({ params }: Props) {
  return (
    <main className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
      </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {blogPost.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(blogPost.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {blogPost.readTime}
                </span>
              <span>{blogPost.category}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <HologramCard>
              <div className="relative aspect-video">
            <Image
                  src={blogPost.image}
                  alt={blogPost.title}
              fill
              className="object-cover"
            />
          </div>
            </HologramCard>

            <div className="prose prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </div>

      {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8">
              {blogPost.tags.map((tag, index) => (
              <Link
                  key={index}
                  href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3 py-1 rounded-full text-sm bg-muted hover:bg-muted/80 transition-colors"
              >
                  #{tag}
              </Link>
            ))}
          </div>
        </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Author Card */}
            <HologramCard className="p-6">
              <h2 className="text-xl font-bold mb-4">About the Author</h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170"
                    alt={blogPost.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{blogPost.author}</h3>
                  <p className="text-sm text-muted-foreground">Technical Writer</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                John is a seasoned web developer and technical writer with over 10 years of experience in the industry.
              </p>
            </HologramCard>

            {/* Share Card */}
            <HologramCard className="p-6">
              <h2 className="text-xl font-bold mb-4">Share this Article</h2>
              <div className="flex gap-4">
                <NeonGlow>
                  <button className="p-2 rounded-full hover:scale-110 transition-transform">
                    <Twitter className="w-5 h-5" />
                  </button>
                </NeonGlow>
                <NeonGlow>
                  <button className="p-2 rounded-full hover:scale-110 transition-transform">
                    <Facebook className="w-5 h-5" />
                  </button>
                </NeonGlow>
                <NeonGlow>
                  <button className="p-2 rounded-full hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </button>
                </NeonGlow>
                <NeonGlow>
                  <button className="p-2 rounded-full hover:scale-110 transition-transform">
                    <Share2 className="w-5 h-5" />
                  </button>
                </NeonGlow>
              </div>
            </HologramCard>

            {/* Newsletter Card */}
            <HologramCard className="p-6">
              <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground mb-4">
                Get the latest articles and insights delivered straight to your inbox.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <NeonGlow>
                  <button
                    type="submit"
                    className="w-full py-2 font-semibold"
                  >
                    Subscribe
                  </button>
                </NeonGlow>
              </form>
            </HologramCard>
          </div>
        </div>
      </div>
    </main>
  );
} 