import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact Propel | Start a Project | Isle of Man',
  description: 'Contact Propel to start your next digital project. We design and build modern web apps, automation systems and intelligent tools. Email enquiries@propel.im',
  keywords: [
    'contact Propel',
    'start a project',
    'digital product consultation',
    'web app development',
    'AI engineering consultation',
    'automation consultation',
    'Isle of Man digital agency',
    'enquiries@propel.im'
  ],
  openGraph: {
    title: 'Contact Propel | Start a Project',
    description: 'Contact Propel to start your next digital project. We design and build modern web apps, automation systems and intelligent tools.',
    url: 'https://www.propel.im/contact',
    siteName: 'Propel',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Propel - Digital & AI Studio',
      },
    ],
    locale: 'en_IM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Propel | Start a Project',
    description: 'Contact Propel to start your next digital project.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.propel.im/contact',
  },
}

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      detail: "enquiries@propel.im",
      link: "mailto:enquiries@propel.im"
    },
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[40vh] bg-white dark:bg-black flex items-center overflow-hidden pt-32 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Start a <span className="text-primary">Project</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to build something great? We're here to help turn your concept into reality.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Get In Touch</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Every project begins with discovery and definition. Outline your idea, goals and timeline. We respond with a clear, structured plan and proposal.
              </p>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, idx) => (
                  <a 
                    key={idx}
                    href={item.link}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="text-primary mt-1">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{item.title}</div>
                      <div className="text-gray-600 dark:text-gray-400">{item.detail}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">What to include:</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• What you want to build</li>
                  <li>• Any problems you're trying to solve</li>
                  <li>• Who the users are</li>
                  <li>• Important workflows</li>
                  <li>• Timeframes and budget</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
