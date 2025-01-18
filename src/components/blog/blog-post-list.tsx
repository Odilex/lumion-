import { BlogPost } from '@/lib/blog-data';
import { BlogPostCard } from '@/components/blog-post-card';
import { motion } from 'framer-motion';

interface BlogPostListProps {
  posts: BlogPost[];
}

export default function BlogPostList({ posts }: BlogPostListProps) {
  return (
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
  );
} 