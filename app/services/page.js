import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import FadeInText from '@/components/FadeInText';

export const metadata = {
  title: 'Our Expertise | Accounting, Advisory & CFO Services',
  description: 'Comprehensive accounting, advisory, and fractional CFO services for growing businesses in the Isle of Man. Financial reporting, tax compliance, business valuation, and strategic planning by ACCA-certified professionals.',
  keywords: [
    'accounting services Isle of Man',
    'advisory services',
    'fractional CFO services',
    'financial reporting',
    'tax compliance',
    'business valuation',
    'management accounts',
    'audit liaison',
    'business strategy',
    'growth planning',
    'performance analytics',
    'cash flow management',
    'board reporting',
    'corporate governance',
    'M&A support',
    'exit planning'
  ],
  openGraph: {
    title: 'Our Expertise | Accounting, Advisory & CFO Services',
    description: 'Comprehensive accounting, advisory, and fractional CFO services for growing businesses in the Isle of Man.',
    url: 'https://www.ocoiom.com/services',
    siteName: 'OCO Limited',
    images: [
      {
        url: '/og-services.jpg',
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
    title: 'Our Expertise | Accounting, Advisory & CFO Services',
    description: 'Comprehensive accounting, advisory, and fractional CFO services for growing businesses.',
    images: ['/og-services.jpg'],
  },
  alternates: {
    canonical: 'https://www.ocoiom.com/services',
  },
}

export default function Services() {
  const detailedServices = [
    {
      category: "Accounting Services",
      tagline: "Keep your books perfect, stay compliant",
      services: [
        {
          title: "Financial statement preparation",
          description: "Financial reporting, built on technical experience",
          features: ["Production of annual statutory or non-statutory financial statements", "Production of management accounts and management information", "Preparation of budgets and cash flow forecasts", "Transaction recording"]
        },
        {
          title: "Tax Compliance",
          description: "Delivering accurate, timely, and fully compliant tax reporting",
          features: ["Personal tax return preparation", "Company tax return preparation", "VAT returns"]
        },
        {
          title: "Audit liaison services",
          description: "Coordinating seamlessly between you and your auditors",
          features: ["Audit pack preparation", "Acting as the conduit for audit queries", "Technical guidance and dispute resolution"]
        }
      ]
    },
    {
      category: "Advisory Services",
      tagline: "Strategic guidance for sustainable growth",
      services: [
        {
          title: "Business Strategy and growth planning",
          description: "Develop and execute strategies for your business growth and profitability",
          features: ["Strategic planning and business advice", "Market and pricing analysis", "Growth modelling", "Risk management and due diligence assistance"]
        },
        {
          title: "Performance Analytics",
          description: "Adding value at every stage of your business journey",
          features: ["KPI development", "Financial modelling", "Benchmarking", "Tailored frameworks to build resilience for long-term success"]
        },
        {
          title: "Independent Business Valuation Services",
          description: "Valuations that guide strategic decisions and uncover opportunities",
          features: ["Independent business valuations to establish a value for your company", "Complex dispute valuations", "Transaction valuations", "Expert witness"]
        }
      ]
    },
    {
      category: "Fractional CFO Services",
      tagline: "Executive financial leadership, fractional cost",
      services: [
        {
          title: "Financial Strategy & Planning",
          description: "Long-term financial vision and strategic execution",
          features: ["Strategic level financial support and financial planning", "Transaction and M&A support", "Exit planning", "Bridging the gap between operational and financial strategy"]
        },
        {
          title: "Board and stakeholder Relations",
          description: "Manage relationships with investors, the board and key stakeholders",
          features: ["Board reporting and financial updates", "Corporate governance services", "Maintain investor and banking relations"]
        },
        {
          title: "Cash Flow Management",
          description: "Optimise working capital and ensure liquidity",
          features: ["Cash flow forecasting and liquidity monitoring", "Working capital optimisation", "Credit management", "Scenario planning"]
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
            <span className="text-[#FF5007]">Expertise</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Financial solutions for every stage of business growth.
          </p>
        </div>
      </section>

      {/* Services Details */}
      {detailedServices.map((category, idx) => (
        <section key={idx} className={`py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
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
