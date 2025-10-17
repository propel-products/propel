import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | OCO Accounting & Advisory',
  description: 'Get in touch with OCO for accounting and advisory services. Schedule a consultation today.',
}

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      detail: "hello@ocoiom.com",
      link: "mailto:hello@ocoiom.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      detail: "+44162400000",
      link: "tel:+44162400000"
    },
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[40vh] bg-black flex items-center overflow-hidden pt-32">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Let's <span className="text-[#FF5007]">Connect</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
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

              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                <h3 className="font-bold text-xl mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p className="text-gray-600">Saturday - Sunday: Closed</p>
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
