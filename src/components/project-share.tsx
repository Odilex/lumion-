"use client";

import { motion } from "framer-motion";
import { Share2, Twitter, Facebook, Linkedin, Link } from "lucide-react";
import { useState } from "react";
import { NeonGlow } from "./neon-glow";

interface ProjectShareProps {
  project: {
    title: string;
    description: string;
    slug: string;
  };
}

export function ProjectShare({ project }: ProjectShareProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = `${window.location.origin}/portfolio/${project.slug}`;
  const shareText = `Check out this amazing project: ${project.title}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const shareButtons = [
    {
      icon: Twitter,
      label: "Twitter",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: "#1DA1F2",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "#4267B2",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "#0077B5",
    },
    {
      icon: Link,
      label: copied ? "Copied!" : "Copy Link",
      onClick: handleCopyLink,
      color: "#00ff80",
    },
  ];

  return (
    <div className="relative">
      <NeonGlow color="#00ff80">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <Share2 className="w-5 h-5" />
          <span>Share Project</span>
        </motion.button>
      </NeonGlow>

      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.95,
          y: isOpen ? 0 : -10,
        }}
        transition={{ duration: 0.2 }}
        className={`absolute left-0 mt-2 p-2 bg-background/80 backdrop-blur-md rounded-lg border border-primary/20 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-2">
          {shareButtons.map((button) => (
            <motion.div
              key={button.label}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <NeonGlow color={button.color}>
                {button.href ? (
                  <a
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    <button.icon className="w-5 h-5" />
                    <span>{button.label}</span>
                  </a>
                ) : (
                  <button
                    onClick={button.onClick}
                    className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    <button.icon className="w-5 h-5" />
                    <span>{button.label}</span>
                  </button>
                )}
              </NeonGlow>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 