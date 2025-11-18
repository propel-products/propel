import './globals.css'
import StructuredData from '@/components/StructuredData'
import CookieBanner from '@/components/CookieBanner'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: {
    default: 'OCO | Accounting / Advisor',
    template: '%s | OCO Limited - Accounting & Advisory'
  },
  description: 'OCO is a leading accounting and advisory practice based in the Isle of Man that empowers businesses to make confident financial decisions and achieve sustainable growth.',
  keywords: [
    'accounting services Isle of Man',
    'advisory services',
    'CFO services',
    'business valuation',
    'tax preparation',
    'financial planning',
    'Gary O\'Connor',
    'ACCA certified',
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
    title: 'OCO | Accounting / Advisor',
    description: 'OCO is a leading accounting and advisory practice based in the Isle of Man that empowers businesses to make confident financial decisions and achieve sustainable growth.',
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
    title: 'OCO | Accounting / Advisor',
    description: 'OCO is a leading accounting and advisory practice based in the Isle of Man that empowers businesses to make confident financial decisions and achieve sustainable growth.',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
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
