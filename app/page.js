import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';
import { SequentialText, SequentialSection } from '@/components/SequentialText';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: "Digital Product",
      description: "We design intuitive interfaces and create modern web applications that feel fast, fluid and effortless to use.",
      features: ["UX and UI design", "Responsive web interfaces", "Component libraries", "Design systems and style guides"]
    },
    {
      title: "Automation",
      description: "We build systems that handle repetitive processes, streamline operations and reduce human error.",
      features: ["Process automation", "Workflow orchestration", "Document generation", "API integrations"]
    },
    {
      title: "AI Engineering",
      description: "We integrate AI to enhance search, reasoning, reporting, decision making and customer interaction.",
      features: ["AI chat agents", "Smart search", "Document extraction", "Automated summarisation"]
    }
  ];

  const whyChooseUs = [
    { 
      title: "Speed without compromise", 
      desc: "We work quickly but with clarity, delivering real progress at every stage." 
    },
    { 
      title: "Clean, modern design", 
      desc: "Interfaces and interactions that feel intuitive and refined." 
    },
    { 
      title: "Intelligent by default", 
      desc: "AI is embedded where it enhances the product, not added as noise." 
    },
    { 
      title: "Built to scale", 
      desc: "Every solution is designed to evolve, extend and integrate." 
    }
  ];

  return (
    <>
      <Navigation />
      <Hero />
      
      {/* Services Section */}
      <SequentialSection delay={3.5} className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <SequentialText delay={3.7} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From UX design and web development to AI agents and automated workflows, we combine design and engineering into one streamlined process.
            </p>
          </SequentialText>

          <SequentialText delay={4.2}>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <SequentialText key={idx} delay={4.4 + (idx * 0.2)}>
                  <ServiceCard {...service} />
                </SequentialText>
              ))}
            </div>
          </SequentialText>

          <SequentialText delay={5.0}>
            <div className="text-center mt-12">
              <Link href="/services" className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-hover transition-all hover:scale-105">
                View All Services
              </Link>
            </div>
          </SequentialText>
        </div>
      </SequentialSection>

      <SequentialSection delay={5.5} className="py-12 sm:py-16">
        <Stats />
      </SequentialSection>

      {/* Why Choose Us Section */}
      <SequentialSection delay={6.5} className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SequentialText delay={6.7}>
              <div>
                <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                  Why <span className="text-primary">Propel</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  We combine clean design with practical engineering to deliver exceptional digital products for our clients.
                </p>
                <div className="space-y-6">
                  {whyChooseUs.map((item, idx) => (
                    <SequentialText key={idx} delay={6.9 + (idx * 0.2)}>
                      <div className="flex gap-4">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                          <p className="text-gray-500 dark:text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    </SequentialText>
                  ))}
                </div>
              </div>
            </SequentialText>
          </div>
        </div>
      </SequentialSection>

      <Footer />
    </>
  );
}

export const metadata = {
  title: 'Propel | Digital & AI Studio | Isle of Man',
  description: 'Propel is a digital and AI studio that designs and builds modern web apps, automation systems and intelligent tools. UX design, AI engineering, and creative technology.',
  keywords: [
    'Propel',
    'propel.im',
    'digital product design',
    'AI engineering',
    'automation studio',
    'web app development',
    'UX design',
    'AI agents',
    'process automation',
    'Isle of Man digital agency',
    'smart search',
    'document automation',
    'creative technology'
  ],
  openGraph: {
    title: 'Propel | Digital & AI Studio | Isle of Man',
    description: 'Build intelligent products with speed, clarity and purpose. Digital product design, automation and AI engineering.',
    url: 'https://www.propel.im',
    siteName: 'Propel',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Propel - Digital & AI Studio',
      },
    ],
    locale: 'en_IM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Propel | Digital & AI Studio | Isle of Man',
    description: 'Build intelligent products with speed, clarity and purpose.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.propel.im',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
