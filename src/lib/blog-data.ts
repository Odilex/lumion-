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

export const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    slug: "future-of-web-development-2024",
    description: "Explore the latest trends and technologies shaping the future of web development.",
    content: `# The Future of Web Development in 2024

Web development continues to evolve at a rapid pace, with new technologies and methodologies emerging constantly. Here's what we expect to see in 2024...`,
    author: {
      id: 1,
      name: "Ishimwe Kevin",
      role: "Founder & CEO",
      image: "/team/kevin.jpg"
    },
    publishedAt: "2024-02-15",
    readTime: "5 min read",
    category: "Web Development"
  },
  {
    id: 2,
    title: "AI in Modern Business: A Practical Guide",
    slug: "ai-in-modern-business",
    description: "Learn how businesses are leveraging AI to transform their operations and drive growth.",
    content: `# AI in Modern Business: A Practical Guide

Artificial Intelligence is revolutionizing how businesses operate. In this guide, we'll explore practical applications...`,
    author: {
      id: 2,
      name: "Didier Junior",
      role: "CTO",
      image: "/team/didier.jpg"
    },
    publishedAt: "2024-02-10",
    readTime: "7 min read",
    category: "AI & Technology"
  },
  {
    id: 3,
    title: "Creating Engaging User Experiences: A Designer's Guide",
    slug: "creating-engaging-user-experiences",
    description: "Discover the principles and practices behind creating compelling user experiences that keep visitors coming back.",
    content: `# Creating Engaging User Experiences

A great user experience is essential for any successful digital product. Let's explore the key principles...`,
    author: {
      id: 3,
      name: "Murenzi Dan",
      role: "Lead Developer",
      image: "/team/dan.jpg"
    },
    publishedAt: "2024-02-05",
    readTime: "6 min read",
    category: "Design"
  }
];

export const authors = [
  {
    id: 1,
    name: "Ishimwe Kevin",
    role: "Founder & CEO",
    image: "/team/kevin.jpg",
    bio: "Visionary leader with expertise in software architecture and AI solutions",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: 2,
    name: "Didier Junior",
    role: "CTO",
    image: "/team/didier.jpg",
    bio: "Technical innovator specializing in cloud architecture and cybersecurity",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: 3,
    name: "Murenzi Dan",
    role: "Lead Developer",
    image: "/team/dan.jpg",
    bio: "Full-stack expert with a passion for creating scalable solutions",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  }
]; 