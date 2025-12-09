'use client';

import { useState } from 'react';
import Link from 'next/link';

const caseStudies = [
  {
    id: 'fintech-dashboard',
    title: 'AI-Powered Financial Dashboard',
    client: 'FinTech Startup',
    category: 'Digital Product',
    description: 'A real-time analytics dashboard with AI-driven insights for portfolio management.',
    image: '/cases/fintech.jpg',
    tags: ['React', 'AI', 'Data Viz'],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'legal-automation',
    title: 'Document Automation Platform',
    client: 'Legal Services Firm',
    category: 'Automation',
    description: 'Automated contract generation and review system reducing processing time by 80%.',
    image: '/cases/legal.jpg',
    tags: ['Automation', 'NLP', 'Workflow'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'ai-chatbot',
    title: 'Customer Service AI Agent',
    client: 'E-commerce Platform',
    category: 'AI Engineering',
    description: 'Intelligent chatbot handling 70% of customer queries with human-like responses.',
    image: '/cases/chatbot.jpg',
    tags: ['LLM', 'Chat', 'API'],
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 'saas-platform',
    title: 'SaaS Product Redesign',
    client: 'B2B Software Company',
    category: 'Digital Product',
    description: 'Complete UX overhaul resulting in 45% increase in user engagement.',
    image: '/cases/saas.jpg',
    tags: ['UX', 'Design System', 'React'],
    color: 'from-purple-500 to-pink-600',
  },
];

function CaseStudyCard({ study, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={`/work/${study.id}`}
      className="group relative block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 aspect-[4/3]">
        {/* Gradient placeholder for image */}
        <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
          {/* Category badge */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full">
              {study.category}
            </span>
          </div>

          {/* Title and description */}
          <div className={`transform transition-transform duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-4'}`}>
            <p className="text-sm text-white/70 mb-1">{study.client}</p>
            <h3 className="text-xl md:text-2xl font-bold mb-2">{study.title}</h3>
            <p className={`text-sm text-white/80 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              {study.description}
            </p>
            
            {/* Tags */}
            <div className={`flex flex-wrap gap-2 mt-4 transition-opacity duration-300 delay-100 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              {study.tags.map((tag, idx) => (
                <span key={idx} className="px-2 py-1 text-xs bg-white/10 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hover arrow */}
        <div className={`absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function CaseStudies({ 
  title = "Selected Work",
  subtitle = "Recent projects showcasing our approach to design, automation and AI.",
  showAll = false,
  maxItems = 4 
}) {
  const displayedStudies = showAll ? caseStudies : caseStudies.slice(0, maxItems);

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {displayedStudies.map((study, idx) => (
            <CaseStudyCard key={study.id} study={study} index={idx} />
          ))}
        </div>

        {/* View all link */}
        {!showAll && (
          <div className="text-center mt-12">
            <Link 
              href="/work"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-semibold transition-colors group"
            >
              View All Projects
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
