import { getCategories, getPostsByCategory } from '@/lib/blog-functions';
import { notFound } from 'next/navigation';
import { GlitchText } from '@/components/glitch-text';
import { BlogPostCard } from '@/components/blog-post-card';
import { BlogPost } from '@/lib/blog-data';

export default async function BlogCategoryPage({ params }: { params: { slug: string } }) {
  const category = decodeURIComponent(params.slug);
  const posts = getPostsByCategory(category);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <GlitchText
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {category}
            </GlitchText>
            <p className="text-xl text-muted-foreground">
              Explore our latest articles about {category.toLowerCase()}
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.slug}>
                <BlogPostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  const categories = getCategories();
  return categories.map((category) => ({
    slug: category,
  }));
} 