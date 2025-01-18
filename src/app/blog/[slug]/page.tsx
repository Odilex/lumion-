import React from 'react';
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { HologramCard } from '@/components/hologram-card';
import { GlitchText } from '@/components/glitch-text';
import { NeonGlow } from '@/components/neon-glow';
import { getAllPosts, getPostBySlug } from '@/lib/blog-functions';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

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
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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
                {post.readingTime}
              </span>
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <HologramCard>
              <div className="relative aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            </HologramCard>

            <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Author Info */}
            <HologramCard>
              <div className="p-6">
                <GlitchText className="text-xl font-bold mb-4">Author</GlitchText>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{post.author.name}</h3>
                    <p className="text-sm text-muted-foreground">{post.author.title}</p>
                  </div>
                </div>
              </div>
            </HologramCard>

            {/* Share */}
            <HologramCard>
              <div className="p-6">
                <GlitchText className="text-xl font-bold mb-4">Share</GlitchText>
                <div className="flex gap-4">
                  <NeonGlow>
                    <button className="p-2 hover:text-primary">
                      <Twitter className="w-5 h-5" />
                    </button>
                  </NeonGlow>
                  <NeonGlow>
                    <button className="p-2 hover:text-primary">
                      <Facebook className="w-5 h-5" />
                    </button>
                  </NeonGlow>
                  <NeonGlow>
                    <button className="p-2 hover:text-primary">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </NeonGlow>
                </div>
              </div>
            </HologramCard>

            {/* Tags */}
            <HologramCard>
              <div className="p-6">
                <GlitchText className="text-xl font-bold mb-4">Tags</GlitchText>
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag}`}
                      className="px-3 py-1 bg-muted rounded-full text-sm hover:bg-primary/20"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </HologramCard>
          </div>
        </div>
      </div>
    </main>
  );
} 