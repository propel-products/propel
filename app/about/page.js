import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | Gary O\'Connor & OCO Limited',
  description: 'Meet Gary O\'Connor, ACCA Fellow and Founder of OCO Limited. Over 25 years of accounting and advisory experience in the Isle of Man, specializing in financial reporting, business valuation, and strategic guidance.',
  keywords: [
    'Gary O\'Connor',
    'ACCA Fellow',
    'Isle of Man accounting',
    'business valuation expert',
    'financial reporting specialist',
    'PwC experience',
    'Director of the Year',
    'business advisor',
    'fiduciary services',
    'board governance',
    'OCO Limited founder',
    'certified business valuer',
    'CSOEC certified',
    'IoD award winner'
  ],
  openGraph: {
    title: 'About Gary O\'Connor | OCO Limited - Accounting & Advisory',
    description: 'Meet Gary O\'Connor, ACCA Fellow and Founder of OCO Limited. Over 25 years of accounting and advisory experience in the Isle of Man.',
    url: 'https://oco.com/about',
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
    canonical: 'https://oco.com/about',
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
                      className="w-full h-full object-cover"
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
                  Gary has over 25 years' experience in the accountancy, funds and fiduciary industry and is a Fellow of the Association of Chartered Certified Accountants, qualifying in 2004 with PricewaterhouseCoopers, specialising in financial reporting and audit.
                </p>
                <p>
                  He has a wealth of experience from his previous roles in accountancy and prior to founding OCO, held numerous leadership and board governance positions. Gary was also the winner of the prestigious Isle of Man Institute of Directors (IoD) 'Director of the Year' award. With over a decade of experience in leadership and board governance, Gary is a certified business valuer, recognised by the Conseil Supérieur Ordre des Experts-Comptables (CSOEC), bringing trusted expertise in valuing and advising businesses.
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
        </div>
      </section>

      <Footer />
    </>
  );
}
