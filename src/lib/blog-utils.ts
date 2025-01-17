import { blogPosts } from './sample-data';

// Get popular tags from all blog posts
export function getPopularTags(limit = 10) {
  const tagCount = new Map<string, number>();
  
  blogPosts.forEach(post => {
    post.tags.forEach((tag: string) => {
      tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
    });
  });

  return Array.from(tagCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag]) => tag);
}

// Get posts by tag
export function getPostsByTag(tag: string) {
  return blogPosts.filter(post => 
    post.tags.some((t: string) => t.toLowerCase() === tag.toLowerCase())
  );
}

// Get posts by author
export function getPostsByAuthor(author: string) {
  return blogPosts.filter(post => 
    post.author.toLowerCase() === author.toLowerCase()
  );
}

// Get posts by category
export function getPostsByCategory(category: string) {
  return blogPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

// Get recent posts
export function getRecentPosts(limit = 5) {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

// Get featured posts (posts with most tags/categories overlap with current post)
export function getFeaturedPosts(currentPost: any, limit = 3) {
  return blogPosts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => ({
      ...post,
      relevanceScore: calculateRelevanceScore(currentPost, post)
    }))
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit);
}

// Calculate relevance score between two posts
function calculateRelevanceScore(post1: any, post2: any) {
  let score = 0;
  
  // Category match
  if (post1.category === post2.category) {
    score += 2;
  }
  
  // Tags overlap
  const commonTags = post1.tags.filter((tag: string) => 
    post2.tags.includes(tag)
  );
  score += commonTags.length;
  
  return score;
}

// Parse and extract metadata from blog content
export function parseContent(content: string) {
  const headings: { text: string; level: number }[] = [];
  const links: string[] = [];
  const images: string[] = [];

  // Extract headings
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      level: match[1].length,
      text: match[2].trim()
    });
  }

  // Extract links
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  while ((match = linkRegex.exec(content)) !== null) {
    links.push(match[2]);
  }

  // Extract images
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  while ((match = imageRegex.exec(content)) !== null) {
    images.push(match[2]);
  }

  return {
    headings,
    links,
    images
  };
}

// Generate table of contents from content
export function generateTableOfContents(content: string) {
  const { headings } = parseContent(content);
  return headings.map(heading => ({
    ...heading,
    id: heading.text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
  }));
}

// Estimate social share counts
export function estimateShareCounts(post: any) {
  // This would typically come from actual social media APIs
  // For now, we'll generate some random numbers for demonstration
  return {
    twitter: Math.floor(Math.random() * 100),
    facebook: Math.floor(Math.random() * 200),
    linkedin: Math.floor(Math.random() * 50)
  };
}

// Get post statistics
export function getPostStatistics(post: any) {
  const { headings, links, images } = parseContent(post.content);
  const wordCount = post.content.trim().split(/\s+/).length;
  const shareCounts = estimateShareCounts(post);

  return {
    wordCount,
    headingCount: headings.length,
    linkCount: links.length,
    imageCount: images.length,
    shareCounts
  };
}

// Search posts by keyword
export function searchPosts(keyword: string) {
  const searchTerm = keyword.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}

// Get post reading progress
export function getReadingProgress(element: HTMLElement) {
  const window = element.ownerDocument.defaultView;
  const rect = element.getBoundingClientRect();
  const windowHeight = window?.innerHeight || 0;
  const documentHeight = element.scrollHeight;
  const scrollTop = window?.pageYOffset || 0;
  
  const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
  return Math.min(100, Math.max(0, progress));
} 