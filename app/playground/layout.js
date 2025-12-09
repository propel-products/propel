import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Playground | Propel',
  description: 'Explore AI experiments, interactive demos, and innovative digital tools built by Propel. Chat agents, RAG systems, automation showcases, and more.',
  keywords: [
    'AI experiments',
    'interactive demos',
    'chat agents',
    'RAG demo',
    'AI playground',
    'automation tools',
    'digital experiments'
  ],
};

export default function PlaygroundLayout({ children }) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-black pt-24">
        {children}
      </main>
      <Footer />
    </>
  );
}
