import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Stats from '@/components/Stats';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import FadeInText from '@/components/FadeInText';
import { Check } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: "Accounting Services",
      description: "Complete bookkeeping, financial reporting, and compliance management to keep your business running smoothly.",
      features: ["Monthly Bookkeeping", "Financial Statements", "Tax Preparation", "Payroll Management"]
    },
    {
      title: "Advisory Services",
      description: "Strategic guidance to optimise your business performance and achieve your long-term financial goals.",
      features: ["Business Strategy", "Growth Planning", "Risk Management", "Performance Analytics"]
    },
    {
      title: "CFO Services",
      description: "Fractional CFO support providing executive-level financial leadership without the full-time cost.",
      features: ["Financial Strategy", "Cash Flow Planning", "Investor Relations", "M&A Support"]
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
      desc: "Services that grow with your business, from start-up to enterprise." 
    }
  ];

  return (
    <>
      <Navigation />
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInText delay={0.2}>
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-5xl font-bold text-black mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive financial solutions tailored to your business needs
              </p>
            </AnimatedSection>
          </FadeInText>

          <FadeInText delay={0.4}>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <ServiceCard {...service} />
                </AnimatedSection>
              ))}
            </div>
          </FadeInText>
        </div>
      </section>

      <Stats />

      {/* Why Choose Us Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-5xl font-bold mb-6">
                  Why Choose <span className="text-[#FF5007]">OCO</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  We combine deep financial expertise with a modern, technology-driven approach to deliver exceptional results for our clients.
                </p>
                <div className="space-y-6">
                  {whyChooseUs.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-2 h-2 bg-[#FF5007] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#FF5007] to-[#ff6a2e] p-12 rounded-3xl">
                  <div className="text-6xl font-bold mb-4">Trusted</div>
                  <p className="text-2xl mb-8">Business Partner</p>
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl">
                      <div className="text-3xl font-bold">Expert</div>
                      <div className="text-sm">Financial Guidance</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl">
                      <div className="text-3xl font-bold">Proven</div>
                      <div className="text-sm">Track Record</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-5xl font-bold text-black mb-6">
              Ready to Transform Your Finances?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Let's discuss how OCO can help your business achieve financial clarity and sustainable growth.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
