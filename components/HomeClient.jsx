'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/HeroVariants';
import ServiceCard from '@/components/ServiceCard';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';
import PartnerLogos from '@/components/PartnerLogos';
import CaseStudies from '@/components/CaseStudies';
import DevMenu from '@/components/DevMenu';
import { SequentialText, SequentialSection } from '@/components/SequentialText';
import Link from 'next/link';

export default function HomeClient() {
  const [config, setConfig] = useState({
    hero: 'minimal',
    showCaseStudies: true,
    showPartnerLogos: true,
    logoVariant: 'static',
  });

  // Load config from localStorage on mount
  useEffect(() => {
    const savedConfig = localStorage.getItem('propel-dev-config');
    if (savedConfig) {
      try {
        setConfig(prev => ({ ...prev, ...JSON.parse(savedConfig) }));
      } catch (e) {
        // Ignore parse errors
      }
    }
  }, []);

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
      <Hero variant={config.hero} />
      
      {/* Partner Logos (conditionally shown based on hero variant and config) */}
      {config.showPartnerLogos && config.hero !== 'logos' && (
        <PartnerLogos variant={config.logoVariant} title="Powered by Industry Leaders" />
      )}

      {/* Case Studies Section */}
      {config.showCaseStudies && (
        <CaseStudies 
          title="Selected Work"
          subtitle="Recent projects showcasing our approach to design, automation and AI."
        />
      )}
      
      {/* Services Section */}
      <SequentialSection delay={0.5} className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <SequentialText delay={0.7} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From UX design and web development to AI agents and automated workflows, we combine design and engineering into one streamlined process.
            </p>
          </SequentialText>

          <SequentialText delay={1.2}>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <SequentialText key={idx} delay={1.4 + (idx * 0.2)}>
                  <ServiceCard {...service} />
                </SequentialText>
              ))}
            </div>
          </SequentialText>

          <SequentialText delay={2.0}>
            <div className="text-center mt-12">
              <Link href="/services" className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-hover transition-all hover:scale-105">
                View All Services
              </Link>
            </div>
          </SequentialText>
        </div>
      </SequentialSection>

      <SequentialSection delay={2.5} className="py-12 sm:py-16">
        <Stats />
      </SequentialSection>

      {/* Why Choose Us Section */}
      <SequentialSection delay={3.5} className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SequentialText delay={3.7}>
              <div>
                <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                  Why <span className="text-primary">Propel</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  We combine clean design with practical engineering to deliver exceptional digital products for our clients.
                </p>
                <div className="space-y-6">
                  {whyChooseUs.map((item, idx) => (
                    <SequentialText key={idx} delay={3.9 + (idx * 0.2)}>
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

      {/* Dev Menu - only shows in development */}
      <DevMenu 
        initialConfig={config}
        onConfigChange={setConfig}
      />
    </>
  );
}
