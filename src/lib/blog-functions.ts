import { blogPosts, authors } from './blog-data';

export function getAllPosts() {
  return blogPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}

export function getAuthorById(id: number) {
  return authors.find(author => author.id === id);
}

export function getPostsByAuthor(authorId: number) {
  return blogPosts.filter(post => post.author.id === authorId);
}

export function getCategories() {
  const categories = new Set(blogPosts.map(post => post.category));
  return Array.from(categories);
}

export function getPostsByCategory(category: string) {
  return blogPosts.filter(post => post.category === category);
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function getPostsByTag(tag: string) {
  return blogPosts.filter(post => post.tags?.includes(tag));
}

export function getAllTags() {
  const tags = new Set<string>();
  blogPosts.forEach(post => {
    post.tags?.forEach(tag => tags.add(tag));
  });
  return Array.from(tags);
} 