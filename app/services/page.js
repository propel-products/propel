import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import FadeInText from '@/components/FadeInText';

export const metadata = {
  title: 'Our Services | OCO Accounting & Advisory',
  description: 'Comprehensive accounting, advisory, and CFO services for growing businesses.',
}

export default function Services() {
  const detailedServices = [
    {
      category: "Accounting Services",
      tagline: "Keep your books perfect, stay compliant",
      services: [
        {
          title: "Monthly Bookkeeping",
          description: "Accurate, timely recording of all financial transactions",
          features: ["Transaction Recording", "Account Reconciliation", "Expense Tracking", "Financial Reports"]
        },
        {
          title: "Tax Preparation & Planning",
          description: "Minimise tax liability whilst ensuring full compliance",
          features: ["Tax Return Preparation", "Tax Planning Strategy", "IRS Correspondence", "Audit Support"]
        },
        {
          title: "Payroll Management",
          description: "End-to-end payroll processing and compliance",
          features: ["Payroll Processing", "Tax Filings", "Benefits Administration", "Compliance Management"]
        }
      ]
    },
    {
      category: "Advisory Services",
      tagline: "Strategic guidance for sustainable growth",
      services: [
        {
          title: "Business Strategy",
          description: "Develop and execute strategies for growth and profitability",
          features: ["Strategic Planning", "Market Analysis", "Competitive Positioning", "Growth Modeling"]
        },
        {
          title: "Performance Analytics",
          description: "Data-driven insights to improve business performance",
          features: ["KPI Development", "Financial Modeling", "Benchmarking", "Dashboard Creation"]
        },
        {
          title: "Risk Management",
          description: "Identify and mitigate financial and operational risks",
          features: ["Risk Assessment", "Internal Controls", "Compliance Review", "Crisis Planning"]
        }
      ]
    },
    {
      category: "CFO Services",
      tagline: "Executive financial leadership, fractional cost",
      services: [
        {
          title: "Financial Strategy & Planning",
          description: "Long-term financial vision and strategic execution",
          features: ["Strategic Financial Planning", "Capital Structure", "Investment Strategy", "Exit Planning"]
        },
        {
          title: "Cash Flow Management",
          description: "Optimise working capital and ensure liquidity",
          features: ["Cash Flow Forecasting", "Working Capital Optimisation", "Credit Management", "Banking Relations"]
        },
        {
          title: "Investor & Stakeholder Relations",
          description: "Manage relationships with investors and key stakeholders",
          features: ["Board Reporting", "Investor Communications", "Due Diligence", "Fundraising Support"]
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[40vh] bg-black flex items-center overflow-hidden pt-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF5007] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-[#FF5007]">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss which services are right for your business
          </p>
          <Button href="/contact" variant="primary" icon>
            Schedule Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
