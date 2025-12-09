import './globals.css'
import StructuredData from '@/components/StructuredData'
import CookieBanner from '@/components/CookieBanner'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata = {
  title: {
    default: 'Propel | Digital & AI Studio | Isle of Man',
    template: '%s | Propel - Digital & AI Studio'
  },
  description: 'Propel is a modern digital and AI studio that designs and builds web apps, automation systems and intelligent digital products. UX design, AI engineering, and creative technology.',
  keywords: [
    'Propel',
    'propel.im',
    'digital product design',
    'AI engineering',
    'automation studio',
    'web app development',
    'legal tech solutions',
    'document automation',
    'AI search',
    'isle of man digital agency',
    'corporate services automation',
    'creative technology',
    'UX design',
    'AI agents',
    'process automation',
    'smart search',
    'data processing',
    'API integrations'
  ],
  authors: [{ name: 'Propel', url: 'https://www.propel.im' }],
  creator: 'Propel',
  publisher: 'Propel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.propel.im'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IM',
    url: 'https://www.propel.im',
    siteName: 'Propel',
    title: 'Propel | Digital & AI Studio | Isle of Man',
    description: 'Build intelligent products with speed, clarity and purpose. Digital product design, automation and AI engineering.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Propel - Digital & AI Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Propel | Digital & AI Studio | Isle of Man',
    description: 'Build intelligent products with speed, clarity and purpose. Digital product design, automation and AI engineering.',
    images: ['/og-image.jpg'],
    site: '@propelim',
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
  other: {
    'msvalidate.01': 'your-bing-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon-arrow.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon-192.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#00D4FF" />
        <meta name="msapplication-TileColor" content="#00D4FF" />
      </head>
      <body>
        <ThemeProvider>
          <StructuredData />
          {children}
          <CookieBanner />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
