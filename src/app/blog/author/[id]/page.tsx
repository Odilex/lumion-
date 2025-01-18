'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { getAuthorById, getPostsByAuthor } from '@/lib/blog-functions';
import { BlogPostCard } from '@/components/blog-post-card';
import { BlogPost, Author } from '@/lib/blog-data';

export default function AuthorPage({ params }: { params: { id: string } }) {
  const [author, setAuthor] = useState<Author | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const authorId = parseInt(params.id);
    const foundAuthor = getAuthorById(authorId);
    if (!foundAuthor) {
      notFound();
    }
    setAuthor(foundAuthor as Author);

    const authorPosts = getPostsByAuthor(authorId);
    setPosts(authorPosts as BlogPost[]);
  }, [params.id]);

  if (!author) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Author Info */}
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-4xl font-bold text-white">
              {author.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">{author.name}</h1>
            <p className="text-purple-400 mb-4">{author.title}</p>
            <p className="text-gray-400 mb-6">{author.bio}</p>
            <div className="flex justify-center space-x-4">
              {Object.entries(author.social).map(([platform, url]) => (
                url && (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Author's Posts */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white mb-6">Latest Posts by {author.name}</h2>
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 