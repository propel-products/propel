import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Propel | Digital & AI Studio | Isle of Man',
  description: 'Propel is a next generation digital studio specialising in clean design, advanced automation and intelligent systems. We help organisations create purposeful digital products.',
  keywords: [
    'Propel',
    'propel.im',
    'digital studio',
    'AI studio',
    'Isle of Man',
    'digital product design',
    'automation',
    'AI engineering',
    'web development',
    'UX design'
  ],
  openGraph: {
    title: 'About Propel | Digital & AI Studio',
    description: 'Propel is a next generation digital studio specialising in clean design, advanced automation and intelligent systems.',
    url: 'https://www.propel.im/about',
    siteName: 'Propel',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Propel - Digital & AI Studio',
      },
    ],
    locale: 'en_IM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Propel | Digital & AI Studio',
    description: 'Propel is a next generation digital studio specialising in clean design, advanced automation and intelligent systems.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.propel.im/about',
  },
}

export default function About() {
  const approach = [
    { title: "Clarity first", desc: "We define the problem clearly before writing a line of code or producing a single design." },
    { title: "Speed through structure", desc: "Our workflow is simple and efficient. We remove noise, avoid unnecessary complexity and deliver frequent, meaningful progress." },
    { title: "Intelligence with intention", desc: "AI is used strategically to enhance core workflows such as search, reporting and decision support." },
    { title: "Design that feels good", desc: "Products should be simple, beautiful and effortless to use." },
    { title: "Build what matters", desc: "We prioritise the features and workflows that create real value." }
  ];

  const principles = [
    "Minimal but powerful",
    "Purpose over complexity",
    "Fast cycles, strong execution",
    "Elegant design with functional depth",
    "Future ready technology with human centred experience"
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[40vh] bg-black flex items-center overflow-hidden pt-32 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            About <span className="text-[#FF5007]">Propel</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            A next generation digital studio specialising in clean design, advanced automation and intelligent systems.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Mission</h2>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            To empower teams with tools that make their work faster, smarter and more enjoyable. Everything we build is rooted in clarity, efficiency and modern technology.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Approach</h2>
          <div className="space-y-8">
            {approach.map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FF5007] text-white rounded-full flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">The Propel Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, idx) => (
              <div key={idx} className="flex gap-4 items-center p-4 bg-gray-50 rounded-xl">
                <div className="w-2 h-2 bg-[#FF5007] rounded-full flex-shrink-0"></div>
                <p className="font-medium text-gray-800">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Ready to build something great?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's turn your concept into a clean, functional and reliable digital experience.
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
              Start a Project
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
