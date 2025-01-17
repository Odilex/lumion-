'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GlitchText } from '@/components/glitch-text';
import { BlogPostCard } from '@/components/blog-post-card';
import { BlogPost } from '@/lib/blog-data';
import { getPostsByCategory } from '@/lib/blog-functions';
import { notFound } from 'next/navigation';

export default function BlogCategoryPage({ params }: { params: { slug: string } }) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const category = decodeURIComponent(params.slug);

  useEffect(() => {
    const categoryPosts = getPostsByCategory(category);
    if (categoryPosts.length === 0) {
      notFound();
    }
    setPosts(categoryPosts);
  }, [category]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <GlitchText
              text={category}
              className="text-4xl md:text-5xl font-bold mb-6"
            />
            <p className="text-xl text-muted-foreground">
              Explore our latest articles about {category.toLowerCase()}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 