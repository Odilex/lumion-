import React from 'react';
import CaseStudyContent from './case-study-content';

interface Props {
  params: {
    slug: string;
  };
}

// Generate static paths for case studies
export async function generateStaticParams() {
  // In a real app, this would fetch from your CMS or database
  return [
    { slug: 'digital-transformation' },
    { slug: 'cloud-migration' },
    { slug: 'ai-implementation' }
  ];
}

export default function CaseStudyPage({ params }: Props) {
  return <CaseStudyContent params={params} />;
} 