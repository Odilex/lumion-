import { getAllTags, getPostsByTag } from '@/lib/blog-functions';
import { notFound } from 'next/navigation';
import BlogPostList from '@/components/blog/blog-post-list';

export default async function BlogTagPage({ params }: { params: { slug: string } }) {
  const posts = getPostsByTag(params.slug);
  
  if (!posts || posts.length === 0) {
    notFound();
  }

  return (
    <main className="container py-6 md:py-12">
      <div className="flex items-center gap-2 mb-8">
        <h1 className="text-3xl font-bold">Posts tagged with</h1>
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
          {params.slug}
        </div>
      </div>
      <BlogPostList posts={posts} />
    </main>
  );
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    slug: tag,
  }));
} 