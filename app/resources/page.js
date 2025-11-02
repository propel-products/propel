import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, Download, ExternalLink, Calendar, User } from 'lucide-react';

export const metadata = {
  title: 'Financial Resources | Guides, Templates & Tools',
  description: 'Access OCO Limited\'s comprehensive library of financial resources, guides, templates, and tools to help your business thrive. Download free financial planning guides, Excel templates, and attend webinars.',
  keywords: [
    'financial resources',
    'business guides',
    'financial templates',
    'Excel templates',
    'financial planning guides',
    'tax planning strategies',
    'cash flow management',
    'budget planning',
    'invoice templates',
    'financial webinars',
    'business workshops',
    'financial tools',
    'accounting resources',
    'business planning tools',
    'financial education'
  ],
  openGraph: {
    title: 'Financial Resources | Guides, Templates & Tools',
    description: 'Access OCO Limited\'s comprehensive library of financial resources, guides, templates, and tools to help your business thrive.',
    url: 'https://www.ocoiom.com/resources',
    siteName: 'OCO Limited',
    images: [
      {
        url: '/og-resources.jpg',
        width: 1200,
        height: 630,
        alt: 'OCO Limited - Financial Resources and Business Tools',
      },
    ],
    locale: 'en_IM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financial Resources | Guides, Templates & Tools',
    description: 'Access OCO Limited\'s comprehensive library of financial resources and business tools.',
    images: ['/og-resources.jpg'],
  },
  alternates: {
    canonical: 'https://www.ocoiom.com/resources',
  },
}

export default function Resources() {
  const resources = [
    {
      category: "Financial Guides",
      items: [
        {
          title: "Start-up Financial Planning Guide",
          description: "A comprehensive guide to setting up your financial systems from day one.",
          type: "PDF Guide",
          icon: <FileText size={20} />,
          download: true
        },
        {
          title: "Tax Planning Strategies 2025",
          description: "Latest tax planning strategies to optimise your business finances.",
          type: "PDF Guide",
          icon: <FileText size={20} />,
          download: true
        },
        {
          title: "Cash Flow Management Best Practices",
          description: "Essential strategies for maintaining healthy cash flow in your business.",
          type: "PDF Guide",
          icon: <FileText size={20} />,
          download: true
        }
      ]
    },
    {
      category: "Templates & Tools",
      items: [
        {
          title: "Monthly Financial Dashboard Template",
          description: "Excel template for tracking key financial metrics and KPIs.",
          type: "Excel Template",
          icon: <Download size={20} />,
          download: true
        },
        {
          title: "Budget Planning Worksheet",
          description: "Comprehensive budget planning template for businesses of all sizes.",
          type: "Excel Template",
          icon: <Download size={20} />,
          download: true
        },
        {
          title: "Invoice Template Pack",
          description: "Professional invoice templates in multiple formats.",
          type: "Template Pack",
          icon: <Download size={20} />,
          download: true
        }
      ]
    },
    {
      category: "Webinars & Events",
      items: [
        {
          title: "Financial Planning for Scale-ups",
          description: "Recorded webinar covering financial strategies for growing businesses.",
          type: "Video Recording",
          icon: <Calendar size={20} />,
          download: false,
          external: true
        },
        {
          title: "Tax Efficiency Workshop",
          description: "Interactive workshop on tax optimisation strategies.",
          type: "Live Event",
          icon: <User size={20} />,
          download: false,
          external: true
        },
        {
          title: "CFO Insights: Q1 2025",
          description: "Quarterly insights from our CFO advisory team.",
          type: "Video Series",
          icon: <ExternalLink size={20} />,
          download: false,
          external: true
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[40vh] bg-black flex items-center overflow-hidden pt-32 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Financial <span className="text-[#FF5007]">Resources</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Essential guides, templates, and tools for business success.
          </p>
        </div>
      </section>

      {/* Resources Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From financial planning guides to practical templates, our resources are designed to give you the tools and knowledge to make informed business decisions.
            </p>
          </div>

          <div className="space-y-16">
            {resources.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold mb-8 text-gray-900">{category.category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {category.items.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-[#FF5007]">{resource.icon}</div>
                        <span className="text-sm font-semibold text-[#FF5007] bg-[#FF5007]/10 px-3 py-1 rounded-full">
                          {resource.type}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold mb-3 text-gray-900">{resource.title}</h4>
                      <p className="text-gray-600 mb-6">{resource.description}</p>
                      
                      <div className="flex gap-3">
                        {resource.download ? (
                          <button className="flex-1 bg-[#FF5007] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ff6a2e] transition-colors">
                            Download
                          </button>
                        ) : (
                          <button className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                            View
                          </button>
                        )}
                        {resource.external && (
                          <button className="px-4 py-3 border-2 border-gray-300 rounded-full hover:border-[#FF5007] transition-colors">
                            <ExternalLink size={16} />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need More Personalised Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team of experts is ready to provide tailored financial guidance for your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <a 
              href="/contact" 
              className="bg-[#FF5007] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#ff6a2e] transition-all hover:scale-105 text-center"
            >
              Schedule Consultation
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-black transition-all text-center"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
