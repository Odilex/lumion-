import Link from 'next/link';
import { Calendar, Clock, Tag } from 'lucide-react';
import { BlogPost } from '@/lib/blog-data';
import { formatDate } from '@/lib/blog-functions';
import { HologramCard } from './hologram-card';
import { motion } from 'framer-motion';

interface BlogPostCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured';
}

export function BlogPostCard({ post, variant = 'default' }: BlogPostCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <HologramCard className={isFeatured ? 'md:grid md:grid-cols-2 gap-8' : ''}>
        <div className={`relative ${isFeatured ? 'h-full' : 'h-48 mb-4'}`}>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 rounded-full bg-primary/90 text-xs font-medium">
              {post.category}
            </span>
          </div>
        </div>
        <div className={isFeatured ? 'p-6' : 'px-4'}>
          <h3 className={`${isFeatured ? 'text-2xl' : 'text-xl'} font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2`}>
            {post.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {post.description}
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="font-medium">{post.author.name}</div>
              <div className="text-sm text-muted-foreground">
                {post.author.title}
              </div>
            </div>
          </div>
          {isFeatured && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag.toLowerCase()}`}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-xs hover:bg-muted/80 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </div>
      </HologramCard>
    </Link>
  );
} 