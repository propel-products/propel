import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact OCO Limited | Accounting & Advisory | Isle of Man',
  description: 'Contact OCO Limited for expert accounting and advisory services in the Isle of Man. Schedule a consultation with Gary O\'Connor, ACCA Fellow. Call or email OCO accounting today at enquiries@ocoiom.com',
  keywords: [
    'contact OCO Limited',
    'OCO Limited contact',
    'OCO accounting contact',
    'contact accounting services Isle of Man',
    'Isle of Man accounting consultation',
    'Gary O\'Connor contact',
    'OCO advisory consultation',
    'financial advisory consultation',
    'business valuation consultation',
    'CFO services consultation',
    'accounting services Isle of Man',
    'enquiries@ocoiom.com',
    'OCO Limited enquiries',
    'professional financial guidance'
  ],
  openGraph: {
    title: 'Contact OCO Limited | Professional Financial Guidance',
    description: 'Contact OCO Limited for expert accounting and advisory services in the Isle of Man. Schedule a consultation with Gary O\'Connor, ACCA Fellow.',
    url: 'https://www.ocoiom.com/contact',
    siteName: 'OCO Limited',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact OCO Limited - Professional Accounting & Advisory Services',
      },
    ],
    locale: 'en_IM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact OCO Limited | Professional Financial Guidance',
    description: 'Contact OCO Limited for expert accounting and advisory services in the Isle of Man.',
    images: ['/og-contact.jpg'],
  },
  alternates: {
    canonical: 'https://www.ocoiom.com/contact',
  },
}

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      detail: "enquiries@ocoiom.com",
      link: "mailto:enquiries@ocoiom.com"
    },
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[40vh] bg-black flex items-center overflow-hidden pt-32 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Let's <span className="text-[#FF5007]">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your financial operations? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a question about our services? Want to schedule a consultation? We'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, idx) => (
                  <a 
                    key={idx}
                    href={item.link}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-[#FF5007] mt-1">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-gray-600">{item.detail}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
