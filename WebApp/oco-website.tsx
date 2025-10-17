import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check } from 'lucide-react';

export default function OCOWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-lg py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="120" height="41" viewBox="0 0 726 248" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M602 0C670.483 0 726 55.5167 726 124C726 192.483 670.483 248 602 248C533.517 248 478 192.483 478 124C478 55.5168 533.517 0.000187755 602 0ZM602 50.2021C561.243 50.2023 528.203 83.2428 528.203 124C528.203 164.757 561.243 197.798 602 197.798C642.757 197.798 675.798 164.757 675.798 124C675.798 83.2427 642.757 50.2021 602 50.2021Z" fill="#FF5007"/>
              <path d="M388.893 0C423.105 0 451.099 11.5 474.344 36C464 55.5 464 55.5 451.099 80.5C434.4 58.4109 413.971 49.7004 388.893 49.7004C351.704 49.7004 315.118 79.5861 315.118 124C315.118 168.414 352.707 198.3 388.893 198.3C417.359 198.3 432.099 187.5 451.099 168.5C463 193 465.156 195.656 476 215.444C429.5 245.5 416 248 388.893 248C320.469 248 265 192.483 265 124C265 55.5167 320.469 0 388.893 0Z" fill="#FF5007"/>
              <path d="M124 0C192.483 0 248 55.5167 248 124C248 192.483 192.483 248 124 248C55.5167 248 0 192.483 0 124C0 55.5167 55.5167 5.57757e-05 124 0ZM124 50C83.1309 50 50 83.1309 50 124C50 164.869 83.1309 198 124 198C164.869 198 198 164.869 198 124C198 83.1309 164.869 50 124 50Z" fill="#FF5007"/>
            </svg>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-white hover:text-[#FF5007] transition-colors">Services</a>
            <a href="#about" className="text-white hover:text-[#FF5007] transition-colors">About</a>
            <a href="#expertise" className="text-white hover:text-[#FF5007] transition-colors">Expertise</a>
            <a href="#contact" className="bg-[#FF5007] text-white px-6 py-2.5 rounded-full hover:bg-[#ff6a2e] transition-all hover:scale-105">
              Get Started
            </a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg py-6 px-6">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-white hover:text-[#FF5007] transition-colors py-2">Services</a>
              <a href="#about" className="text-white hover:text-[#FF5007] transition-colors py-2">About</a>
              <a href="#expertise" className="text-white hover:text-[#FF5007] transition-colors py-2">Expertise</a>
              <a href="#contact" className="bg-[#FF5007] text-white px-6 py-3 rounded-full text-center hover:bg-[#ff6a2e] transition-all">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF5007] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF5007] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Financial Clarity.
              <span className="text-[#FF5007]"> Strategic Growth.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
              Expert accounting and advisory services that empower businesses to make confident financial decisions and achieve sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-[#FF5007] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ff6a2e] transition-all hover:scale-105 flex items-center justify-center gap-2">
                Schedule Consultation
                <ArrowRight size={20} />
              </a>
              <a href="#services" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all flex items-center justify-center">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Accounting Services",
                description: "Complete bookkeeping, financial reporting, and compliance management to keep your business running smoothly.",
                features: ["Monthly Bookkeeping", "Financial Statements", "Tax Preparation", "Payroll Management"]
              },
              {
                title: "Advisory Services",
                description: "Strategic guidance to optimize your business performance and achieve your long-term financial goals.",
                features: ["Business Strategy", "Growth Planning", "Risk Management", "Performance Analytics"]
              },
              {
                title: "CFO Services",
                description: "Fractional CFO support providing executive-level financial leadership without the full-time cost.",
                features: ["Financial Strategy", "Cash Flow Planning", "Investor Relations", "M&A Support"]
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border-2 border-transparent hover:border-[#FF5007]">
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <Check size={20} className="text-[#FF5007] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">Why Choose <span className="text-[#FF5007]">OCO</span></h2>
              <p className="text-xl text-gray-300 mb-8">
                We combine deep financial expertise with a modern, technology-driven approach to deliver exceptional results for our clients.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Proactive Partnership", desc: "We don't just report numbers—we help you understand and act on them." },
                  { title: "Industry Expertise", desc: "Specialized knowledge across multiple sectors and business stages." },
                  { title: "Technology Forward", desc: "Leveraging the latest tools for efficiency and real-time insights." },
                  { title: "Scalable Solutions", desc: "Services that grow with your business, from startup to enterprise." }
                ].map((item, idx) => (
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
            <div className="relative">
              <div className="bg-gradient-to-br from-[#FF5007] to-[#ff6a2e] p-12 rounded-3xl">
                <div className="text-6xl font-bold mb-4">500+</div>
                <p className="text-2xl mb-8">Businesses Trust OCO</p>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl">
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-sm">Client Satisfaction</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-black mb-6">Ready to Transform Your Finances?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Let's discuss how OCO can help your business achieve financial clarity and sustainable growth.
          </p>
          <div className="bg-gray-50 p-12 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#FF5007] focus:outline-none"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#FF5007] focus:outline-none"
              />
            </div>
            <input 
              type="text" 
              placeholder="Company Name" 
              className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#FF5007] focus:outline-none mb-6"
            />
            <textarea 
              placeholder="Tell us about your needs..." 
              rows="4"
              className="w-full px-6 py-4 rounded-3xl border-2 border-gray-200 focus:border-[#FF5007] focus:outline-none mb-6"
            ></textarea>
            <button className="w-full bg-[#FF5007] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ff6a2e] transition-all hover:scale-105">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <svg width="100" height="34" viewBox="0 0 726 248" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                <path d="M602 0C670.483 0 726 55.5167 726 124C726 192.483 670.483 248 602 248C533.517 248 478 192.483 478 124C478 55.5168 533.517 0.000187755 602 0ZM602 50.2021C561.243 50.2023 528.203 83.2428 528.203 124C528.203 164.757 561.243 197.798 602 197.798C642.757 197.798 675.798 164.757 675.798 124C675.798 83.2427 642.757 50.2021 602 50.2021Z" fill="#FF5007"/>
                <path d="M388.893 0C423.105 0 451.099 11.5 474.344 36C464 55.5 464 55.5 451.099 80.5C434.4 58.4109 413.971 49.7004 388.893 49.7004C351.704 49.7004 315.118 79.5861 315.118 124C315.118 168.414 352.707 198.3 388.893 198.3C417.359 198.3 432.099 187.5 451.099 168.5C463 193 465.156 195.656 476 215.444C429.5 245.5 416 248 388.893 248C320.469 248 265 192.483 265 124C265 55.5167 320.469 0 388.893 0Z" fill="#FF5007"/>
                <path d="M124 0C192.483 0 248 55.5167 248 124C248 192.483 192.483 248 124 248C55.5167 248 0 192.483 0 124C0 55.5167 55.5167 5.57757e-05 124 0ZM124 50C83.1309 50 50 83.1309 50 124C50 164.869 83.1309 198 124 198C164.869 198 198 164.869 198 124C198 83.1309 164.869 50 124 50Z" fill="#FF5007"/>
              </svg>
              <p className="text-gray-400">Financial clarity for modern businesses</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#FF5007] transition-colors">Accounting</a></li>
                <li><a href="#" className="hover:text-[#FF5007] transition-colors">Advisory</a></li>
                <li><a href="#" className="hover:text-[#FF5007] transition-colors">CFO Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#FF5007] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#FF5007] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#FF5007] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#FF5007] transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-[#FF5007] transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-[#FF5007] transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 OCO Accounting & Advisory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}