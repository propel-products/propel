import { redirect } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';
import { SequentialText, SequentialSection } from '@/components/SequentialText';

// Force dynamic rendering to ensure redirect works
export const dynamic = 'force-dynamic';

export default function Home({ searchParams }) {
  // Allow bypassing redirect with ?preview=true query parameter
  if (!searchParams?.preview) {
    redirect('/holding');
  }

  // If preview parameter is present, show the actual home page
  const services = [
    {
      title: "Accounting Services",
      description: "Complete financial reporting to keep your business running smoothly and compliant.",
      features: ["Financial Statements preparation", "Production of Management accounts and management information", "Tax compliance", "Audit liaison services"]
    },
    {
      title: "Advisory Services",
      description: "Strategic guidance to optimise your business performance and achieve your long-term financial goals.",
      features: ["Business strategy and growth planning", "Performance analytics", "Independent Business Valuation Services", "Non-Executive Director services"]
    },
    {
      title: "CFO Services",
      description: "Fractional CFO support providing executive-level financial leadership without the full-time cost.",
      features: ["Financial Strategy and planning", "Board and stakeholder relations", "Advising on cash flow management and additional sources to finance"]
    }
  ];

  const whyChooseUs = [
    { 
      title: "Proactive Partnership", 
      desc: "We don't just report numbers—we help you understand and act on them." 
    },
    { 
      title: "Industry Expertise", 
      desc: "Specialised knowledge across multiple sectors and business stages." 
    },
    { 
      title: "Technology Forward", 
      desc: "Leveraging the latest tools for efficiency and real-time insights." 
    },
    { 
      title: "Scalable Solutions", 
      desc: "Services and expertise that grow with your business." 
    }
  ];

  return (
    <>
      <Navigation />
      <Hero />
      
      {/* Services Section */}
      <SequentialSection delay={3.5} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SequentialText delay={3.7} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4">Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              With over 25 years' experience solving complex business problems and unlocking growth, our comprehensive financial solutions are tailored to your business needs
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
        </div>
      </SequentialSection>

      <SequentialSection delay={5.5} className="py-12 sm:py-16 bg-black text-white">
        <Stats />
      </SequentialSection>

      {/* Why Choose Us Section */}
      <SequentialSection delay={6.5} className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SequentialText delay={6.7}>
              <div>
                <h2 className="text-5xl font-bold mb-6">
                  Why Choose <span className="text-[#FF5007]">OCO</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  We combine deep financial expertise with a modern, technology-driven approach to deliver exceptional results for our clients.
                </p>
                <div className="space-y-6">
                  {whyChooseUs.map((item, idx) => (
                    <SequentialText key={idx} delay={6.9 + (idx * 0.2)}>
                      <div className="flex gap-4">
                        <div className="w-2 h-2 bg-[#FF5007] rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                          <p className="text-gray-400">{item.desc}</p>
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
  title: 'OCO Limited | Financial Clarity for Modern Businesses',
  description: 'Expert accounting and advisory services for businesses in the Isle of Man. Gary O\'Connor, ACCA Fellow, provides comprehensive financial solutions including bookkeeping, tax preparation, CFO services, and business valuation.',
  keywords: [
    'accounting services Isle of Man',
    'advisory services',
    'CFO services',
    'business valuation',
    'tax preparation',
    'financial planning',
    'Gary O\'Connor',
    'ACCA certified',
    'Isle of Man accounting',
    'fractional CFO',
    'business strategy',
    'financial reporting',
    'bookkeeping services',
    'management accounts',
    'audit liaison',
    'business growth planning'
  ],
  openGraph: {
    title: 'OCO Limited | Financial Clarity for Modern Businesses',
    description: 'Expert accounting and advisory services for businesses in the Isle of Man. Gary O\'Connor, ACCA Fellow, provides comprehensive financial solutions.',
    url: 'https://www.ocoiom.com',
    siteName: 'OCO Limited',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'OCO Limited - Professional Accounting & Advisory Services',
      },
    ],
    locale: 'en_IM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OCO Limited | Financial Clarity for Modern Businesses',
    description: 'Expert accounting and advisory services for businesses in the Isle of Man.',
    images: ['/og-home.jpg'],
  },
  alternates: {
    canonical: 'https://www.ocoiom.com',
  },
};
