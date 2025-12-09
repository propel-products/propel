import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import FadeInText from '@/components/FadeInText';

export const metadata = {
  title: 'Services | Digital Product, Automation & AI | Propel',
  description: 'Propel provides digital product design, web app development, AI systems, automation for professional services, and brand creative. Modern technology solutions for teams who want to move fast.',
  keywords: [
    'digital product design',
    'UX design',
    'web app development',
    'AI engineering',
    'automation',
    'AI agents',
    'document automation',
    'legal tech',
    'brand identity',
    'creative technology',
    'Isle of Man',
    'professional services automation'
  ],
  openGraph: {
    title: 'Services | Digital Product, Automation & AI',
    description: 'Digital product design, web app development, AI systems, automation and creative services.',
    url: 'https://www.propel.im/services',
    siteName: 'Propel',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Propel - Digital & AI Studio Services',
      },
    ],
    locale: 'en_IM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Digital Product, Automation & AI',
    description: 'Digital product design, web app development, AI systems, automation and creative services.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.propel.im/services',
  },
}

export default function Services() {
  const detailedServices = [
    {
      category: "Digital Product & UX",
      id: "digital",
      tagline: "Interfaces that are easy to understand, quick to navigate and a pleasure to use",
      services: [
        {
          title: "UX and UI Design",
          description: "Create interfaces that feel fast, fluid and effortless",
          features: ["User experience design", "Interface design", "Interaction and motion design", "User journeys and flows"]
        },
        {
          title: "Design Systems",
          description: "Consistent foundations for future growth",
          features: ["Component libraries", "Style guides", "Design tokens", "Documentation"]
        },
        {
          title: "Prototypes",
          description: "Validate ideas before building",
          features: ["Interactive prototypes", "User testing", "Concept validation", "Rapid iteration"]
        }
      ]
    },
    {
      category: "Web App Development",
      id: "development",
      tagline: "Fast, modern and scalable web applications using current technologies",
      services: [
        {
          title: "Full Stack Web Apps",
          description: "Modern frameworks and clean code",
          features: ["React / Next.js applications", "API development", "Database design", "Cloud deployments"]
        },
        {
          title: "Dashboards & Tools",
          description: "Data-driven interfaces for your operations",
          features: ["Lightweight dashboards", "Admin consoles", "Workflow hubs", "Utilities and tools"]
        },
        {
          title: "System Architecture",
          description: "Modular systems that scale",
          features: ["API integrations", "Authentication and permissions", "Structured architecture", "Performance optimisation"]
        }
      ]
    },
    {
      category: "AI Systems & Agents",
      id: "ai",
      tagline: "Intelligent tools that improve speed, accuracy and decision making",
      services: [
        {
          title: "AI Chat Agents",
          description: "Custom trained assistants for specific tasks",
          features: ["Internal knowledge agents", "Support response agents", "Document extraction agents", "Custom AI workflows"]
        },
        {
          title: "Smart Search",
          description: "Retrieval augmented search for documents",
          features: ["Entity detection", "AI summarisation", "Cross document search", "Structured results"]
        },
        {
          title: "Automation & Reporting",
          description: "Reduce workload and improve efficiency",
          features: ["Automated summarisation", "Document classification", "Data analysis", "Insight generation"]
        }
      ]
    },
    {
      category: "Automation for Professional Services",
      id: "automation",
      tagline: "Streamline and automate time-sensitive processes",
      services: [
        {
          title: "Legal & Corporate",
          description: "Structured process automation",
          features: ["Legal search and registry tools", "Corporate filings automation", "Compliance workflows", "Case-linked data handling"]
        },
        {
          title: "Document Automation",
          description: "Generate and process documents at scale",
          features: ["Automated email generation", "Document templates", "Multi-stage approvals", "PDF and report outputs"]
        },
        {
          title: "Workflow Orchestration",
          description: "Connect and automate your operations",
          features: ["Scheduling and triggers", "API integrations", "Registry connections", "Status tracking"]
        }
      ]
    },
    {
      category: "Brand & Creative",
      id: "creative",
      tagline: "Visual systems that support function and strengthen perception",
      services: [
        {
          title: "Brand Identity",
          description: "Sharper products need strong identity",
          features: ["Logo design", "Identity systems", "Brand guidelines", "Visual language"]
        },
        {
          title: "Product Visuals",
          description: "Elevate your digital experience",
          features: ["Website graphics", "Social assets", "Motion content", "Marketing materials"]
        },
        {
          title: "Creative AI",
          description: "AI-enhanced creative tooling",
          features: ["Generative visuals", "Content creation", "Asset generation", "Creative automation"]
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[40vh] bg-black flex items-center overflow-hidden pt-32 pb-16 md:pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF5007] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="text-[#FF5007]">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            From UX design and web development to AI agents and automated workflows, we combine design and engineering into one streamlined process.
          </p>
        </div>
      </section>

      {/* Services Details */}
      {detailedServices.map((category, idx) => (
        <section key={idx} id={category.id} className={`py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <FadeInText delay={0.2} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">{category.category}</h2>
              <p className="text-xl text-gray-600">{category.tagline}</p>
            </FadeInText>

            <div className="grid md:grid-cols-3 gap-8">
              {category.services.map((service, serviceIdx) => (
                <ServiceCard key={serviceIdx} {...service} />
              ))}
            </div>
          </div>
        </section>
      ))}


      <Footer />
    </>
  );
}
