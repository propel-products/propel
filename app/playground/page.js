import Link from 'next/link';
import { Bot, Search, FileText, Sparkles, Zap, Database, ArrowRight } from 'lucide-react';

const experiments = [
  {
    id: 'chat-agent',
    title: 'AI Chat Agent',
    description: 'Conversational AI powered by GPT-4. Ask questions, get assistance, explore the capabilities of modern language models.',
    icon: Bot,
    status: 'live',
    tags: ['GPT-4', 'Azure OpenAI', 'Conversational AI'],
    href: '/playground/chat-agent',
  },
  {
    id: 'rag-demo',
    title: 'RAG Search',
    description: 'Retrieval-Augmented Generation demo. Search through documents with AI-enhanced understanding and contextual responses.',
    icon: Search,
    status: 'coming-soon',
    tags: ['RAG', 'Vector Search', 'Document AI'],
    href: '/playground/rag-demo',
  },
  {
    id: 'document-processor',
    title: 'Document Processor',
    description: 'AI-powered document analysis. Extract insights, summarize content, and transform documents intelligently.',
    icon: FileText,
    status: 'coming-soon',
    tags: ['Document AI', 'OCR', 'Summarization'],
    href: '/playground/document-processor',
  },
  {
    id: 'creative-ai',
    title: 'Creative AI Studio',
    description: 'Generate images, designs, and creative content using state-of-the-art generative AI models.',
    icon: Sparkles,
    status: 'coming-soon',
    tags: ['Image Generation', 'DALL-E', 'Creative'],
    href: '/playground/creative-ai',
  },
  {
    id: 'automation-builder',
    title: 'Automation Builder',
    description: 'Visual workflow automation. Connect services, trigger actions, and build intelligent automations.',
    icon: Zap,
    status: 'coming-soon',
    tags: ['Workflow', 'Integration', 'Automation'],
    href: '/playground/automation-builder',
  },
  {
    id: 'data-explorer',
    title: 'Data Explorer',
    description: 'Natural language data queries. Ask questions about data in plain English and get instant visualizations.',
    icon: Database,
    status: 'coming-soon',
    tags: ['Analytics', 'NL2SQL', 'Visualization'],
    href: '/playground/data-explorer',
  },
];

function ExperimentCard({ experiment }) {
  const Icon = experiment.icon;
  const isLive = experiment.status === 'live';
  
  return (
    <Link 
      href={experiment.href}
      className={`group relative bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:border-primary hover:bg-gray-50 dark:hover:bg-gray-900/80 ${
        !isLive ? 'opacity-60 pointer-events-none' : ''
      }`}
    >
      {/* Status badge */}
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
        isLive 
          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
          : 'bg-gray-200 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600/30'
      }`}>
        {isLive ? 'Live' : 'Coming Soon'}
      </div>

      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
        {experiment.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
        {experiment.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {experiment.tags.map((tag) => (
          <span 
            key={tag}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      {isLive && (
        <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
          Try it now
          <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </Link>
  );
}

export default function PlaygroundPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          AI Experiments & Tools
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Playground
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore interactive AI experiments, demos, and tools. Test the latest in AI technology and see what&apos;s possible.
        </p>
      </div>

      {/* Experiments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiments.map((experiment) => (
          <ExperimentCard key={experiment.id} experiment={experiment} />
        ))}
      </div>

      {/* Coming Soon Section */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">More Coming Soon</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8">
          We&apos;re constantly building new experiments and tools. Check back regularly or get in touch if you have ideas for what you&apos;d like to see.
        </p>
        <Link 
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-hover transition-colors"
        >
          Share Your Ideas
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
