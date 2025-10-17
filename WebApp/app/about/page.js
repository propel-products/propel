import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export const metadata = {
  title: 'About Us | OCO Accounting & Advisory',
  description: 'Learn about OCO\'s mission, values, and the team behind our expert financial services.',
}

export default function About() {
  const values = [
    {
      title: "Integrity",
      description: "We operate with the highest ethical standards and transparency in everything we do"
    },
    {
      title: "Excellence",
      description: "We're committed to delivering exceptional quality and exceeding client expectations"
    },
    {
      title: "Innovation",
      description: "We embrace technology and modern solutions to provide better service"
    },
    {
      title: "Partnership",
      description: "We build long-term relationships based on trust and mutual success"
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-black flex items-center overflow-hidden pt-32">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            About <span className="text-[#FF5007]">OCO</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Empowering businesses with clarity, strategy, and confidence since 2010
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              OCO was founded with a simple belief: businesses deserve financial partners who truly understand their challenges and opportunities. We saw too many companies struggling with traditional accounting firms that simply processed numbers without providing real strategic value.
            </p>
            <p>
              Today, OCO serves over 500 businesses across multiple industries, from fast-growing startups to established enterprises. Our team combines deep financial expertise with modern technology to deliver services that are both comprehensive and accessible.
            </p>
            <p>
              We're not just accountants—we're strategic partners invested in your success. Every recommendation we make, every insight we provide, is designed to help you make better decisions and achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-[#FF5007]">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Join 500+ Businesses</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the OCO difference
          </p>
          <Button href="/contact" variant="primary" icon>
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
