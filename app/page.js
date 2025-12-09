import HomeClient from '@/components/HomeClient';

export default function Home() {
  return <HomeClient />;
}

export const metadata = {
  title: 'Propel | Digital & AI Studio | Isle of Man',
  description: 'Propel is a digital and AI studio that designs and builds modern web apps, automation systems and intelligent tools. UX design, AI engineering, and creative technology.',
  keywords: [
    'Propel',
    'propel.im',
    'digital product design',
    'AI engineering',
    'automation studio',
    'web app development',
    'UX design',
    'AI agents',
    'process automation',
    'Isle of Man digital agency',
    'smart search',
    'document automation',
    'creative technology'
  ],
  openGraph: {
    title: 'Propel | Digital & AI Studio | Isle of Man',
    description: 'Build intelligent products with speed, clarity and purpose. Digital product design, automation and AI engineering.',
    url: 'https://www.propel.im',
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
    title: 'Propel | Digital & AI Studio | Isle of Man',
    description: 'Build intelligent products with speed, clarity and purpose.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.propel.im',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
