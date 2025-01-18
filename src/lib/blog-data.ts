import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";

export interface Author {
  id: number;
  name: string;
  title: string;
  avatar: string;
  bio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  date: string;
  author: Author;
  category: string;
  tags: string[];
  readingTime: string;
}

export const authors = [
  {
    id: 1,
    name: "Ishimwe Kevin",
    title: "Founder & CEO",
    avatar: "/team/kevin.jpg",
    bio: "Visionary leader with expertise in software architecture and AI solutions",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: 2,
    name: "Didier Junior",
    title: "CTO",
    avatar: "/team/didier.jpg",
    bio: "Technology expert specializing in AI and cloud solutions",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: 3,
    name: "Murenzi Dan",
    title: "Lead Developer",
    avatar: "/team/dan.jpg",
    bio: "Full-stack developer with a passion for clean code and modern technologies",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    slug: "future-of-web-development-2024",
    description: "Explore the latest trends and technologies shaping the future of web development.",
    content: `# The Future of Web Development in 2024

Web development continues to evolve at a rapid pace, with new technologies and methodologies emerging constantly. Here's what we expect to see in 2024...`,
    image: "/blog/web-dev-2024.jpg",
    date: "2024-02-15",
    author: authors[0],
    category: "Web Development",
    tags: ["Web Development", "Technology", "Trends"],
    readingTime: "5 min read"
  },
  {
    id: 2,
    title: "AI in Modern Business: A Practical Guide",
    slug: "ai-in-modern-business",
    description: "Learn how businesses are leveraging AI to transform their operations and drive growth.",
    content: `# AI in Modern Business: A Practical Guide

Artificial Intelligence is revolutionizing how businesses operate. In this guide, we'll explore practical applications...`,
    image: "/blog/ai-business.jpg",
    date: "2024-02-10",
    author: authors[1],
    category: "AI & Technology",
    tags: ["AI", "Business", "Technology"],
    readingTime: "7 min read"
  },
  {
    id: 3,
    title: "Creating Engaging User Experiences: A Designer's Guide",
    slug: "creating-engaging-user-experiences",
    description: "Discover the principles and practices behind creating compelling user experiences that keep visitors coming back.",
    content: `# Creating Engaging User Experiences

A great user experience is essential for any successful digital product. Let's explore the key principles...`,
    image: "/blog/ux-design.jpg",
    date: "2024-02-05",
    author: authors[2],
    category: "Design",
    tags: ["Design", "UX", "UI"],
    readingTime: "6 min read"
  }
]; 