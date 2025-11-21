import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'About OCO Limited | Gary O\'Connor ACCA Fellow | Isle of Man',
  description: 'Meet Gary O\'Connor, ACCA Fellow and Founder of OCO Limited. Over 25 years of accounting and advisory experience in the Isle of Man. OCO Limited specialises in financial reporting, business valuation, and strategic guidance.',
  keywords: [
    'OCO Limited',
    'OCO Limited founder',
    'Gary O\'Connor OCO',
    'Gary O\'Connor',
    'Gary O\'Connor ACCA',
    'ACCA Fellow Isle of Man',
    'Isle of Man accounting',
    'business valuation expert',
    'financial reporting specialist',
    'PwC experience',
    'Director of the Year',
    'business advisor Isle of Man',
    'fiduciary services',
    'board governance',
    'certified business valuer',
    'CSOEC certified',
    'IoD award winner',
    'OCO accounting'
  ],
  openGraph: {
    title: 'About Gary O\'Connor | OCO Limited - Accounting & Advisory',
    description: 'Meet Gary O\'Connor, ACCA Fellow and Founder of OCO Limited. Over 25 years of accounting and advisory experience in the Isle of Man.',
    url: 'https://www.ocoiom.com/about',
    siteName: 'OCO Limited',
    images: [
      {
        url: '/gary-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Gary O\'Connor - Director and Founder of OCO Limited',
      },
    ],
    locale: 'en_IM',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Gary O\'Connor | OCO Limited',
    description: 'Meet Gary O\'Connor, ACCA Fellow and Founder of OCO Limited. Over 25 years of accounting and advisory experience.',
    images: ['/gary-about.jpg'],
  },
  alternates: {
    canonical: 'https://www.ocoiom.com/about',
  },
}

export default function About() {

  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[40vh] bg-black flex items-center overflow-hidden pt-32 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            About <span className="text-[#FF5007]">OCO</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Empowering businesses with clarity, strategy, and confidence
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Gary's Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full border-4 border-[#FF5007] p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/gary-about.jpg"
                      alt="Gary O'Connor - Director and Founder of OCO Limited"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover grayscale"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gary's Bio */}
            <div className="flex-1">
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p className="text-xl font-semibold text-[#FF5007] mb-4">
                  Gary O'Connor – Director and Founder of OCO Limited in the Isle of Man.
                </p>
                <p>
                  Gary has over 25 years' experience in the accountancy, funds and fiduciary industry and is a Fellow of the Association of Chartered Certified Accountants, qualifying in 2004 with PricewaterhouseCoopers, specialising in <a href="/services" className="text-[#FF5007] hover:underline">financial reporting</a> and audit.
                </p>
                <p>
                  He has a wealth of experience from his previous roles in accountancy and prior to founding OCO, held numerous leadership and board governance positions. Gary was also the winner of the prestigious Isle of Man Institute of Directors (IoD) 'Director of the Year' award. With over a decade of experience in leadership and board governance, Gary is a <a href="/services" className="text-[#FF5007] hover:underline">certified business valuer</a>, recognised by the Conseil Supérieur Ordre des Experts-Comptables (CSOEC), bringing trusted expertise in valuing and advising businesses.
                </p>
                <p className="pt-4">
                  <a href="/contact" className="inline-block bg-[#FF5007] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ff6a2e] transition-all">
                    Schedule a Consultation
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">OCO – experience the difference</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to transform your financial operations with expert guidance?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <a 
              href="/services" 
              className="bg-[#FF5007] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#ff6a2e] transition-all hover:scale-105 text-center"
            >
              Explore Our Services
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-black transition-all text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
