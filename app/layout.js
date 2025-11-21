import './globals.css'
import StructuredData from '@/components/StructuredData'
import CookieBanner from '@/components/CookieBanner'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: {
    default: 'OCO Limited | Accounting & Advisory | Isle of Man',
    template: '%s | OCO Limited - Accounting & Advisory'
  },
  description: 'OCO Limited is a leading accounting and advisory practice based in the Isle of Man. Expert accounting services, business valuation, and fractional CFO services by ACCA Fellow Gary O\'Connor.',
  keywords: [
    'OCO Limited',
    'OCO accounting',
    'OCO Isle of Man',
    'OCO Limited Isle of Man',
    'OCO accounting Isle of Man',
    'OCO advisory',
    'OCO Limited accounting',
    'accounting services Isle of Man',
    'advisory services Isle of Man',
    'CFO services Isle of Man',
    'business valuation Isle of Man',
    'tax preparation Isle of Man',
    'financial planning Isle of Man',
    'Gary O\'Connor',
    'Gary O\'Connor OCO',
    'ACCA certified Isle of Man',
    'Isle of Man accounting',
    'fractional CFO',
    'business strategy',
    'financial reporting'
  ],
  authors: [{ name: 'Gary O\'Connor', url: 'https://im.linkedin.com/in/gary-o-connor' }],
  creator: 'OCO Limited',
  publisher: 'OCO Limited',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.ocoiom.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IM',
    url: 'https://www.ocoiom.com',
    siteName: 'OCO Limited',
    title: 'OCO Limited | Accounting & Advisory | Isle of Man',
    description: 'OCO Limited is a leading accounting and advisory practice based in the Isle of Man. Expert accounting services, business valuation, and fractional CFO services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OCO Limited - Accounting & Advisory Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OCO Limited | Accounting & Advisory | Isle of Man',
    description: 'OCO Limited is a leading accounting and advisory practice based in the Isle of Man. Expert accounting services, business valuation, and fractional CFO services.',
    images: ['/og-image.jpg'],
    site: '@OCOLimited',
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
    // Add your Google Search Console verification code here
    // Get it from: https://search.google.com/search-console
    // It will look like: 'abc123def456ghi789'
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
  other: {
    'msvalidate.01': 'your-bing-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FF5007" />
        <meta name="msapplication-TileColor" content="#FF5007" />
        {/* Preload critical resources */}
        <link rel="preload" href="/og-image.jpg" as="image" />
      </head>
      <body>
        <StructuredData />
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
