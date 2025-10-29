import './globals.css'
import StructuredData from '@/components/StructuredData'

export const metadata = {
  title: {
    default: 'OCO Limited | Financial Clarity for Modern Businesses',
    template: '%s | OCO Limited - Accounting & Advisory'
  },
  description: 'Expert accounting and advisory services for businesses in the Isle of Man. Bookkeeping, tax preparation, CFO services, and strategic financial guidance by Gary O\'Connor, ACCA Fellow.',
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
  metadataBase: new URL('https://oco.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IM',
    url: 'https://oco.com',
    siteName: 'OCO Limited',
    title: 'OCO Limited | Financial Clarity for Modern Businesses',
    description: 'Expert accounting and advisory services for businesses in the Isle of Man. Bookkeeping, tax preparation, CFO services, and strategic financial guidance.',
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
    title: 'OCO Limited | Financial Clarity for Modern Businesses',
    description: 'Expert accounting and advisory services for businesses in the Isle of Man.',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FF5007" />
        <meta name="msapplication-TileColor" content="#FF5007" />
      </head>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
