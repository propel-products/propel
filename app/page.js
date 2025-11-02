import { redirect } from 'next/navigation';

// Temporarily redirect to holding page
// To restore main page, restore from app/page.backup.js
export default function Home() {
  redirect('/holding');
}

export const metadata = {
  title: 'OCO Limited | Financial Clarity for Modern Businesses',
  description: 'Expert accounting and advisory services for businesses in the Isle of Man. Gary O\'Connor, ACCA Fellow, provides comprehensive financial solutions including bookkeeping, tax preparation, CFO services, and business valuation.',
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
    'financial reporting',
    'bookkeeping services',
    'management accounts',
    'audit liaison',
    'business growth planning'
  ],
  openGraph: {
    title: 'OCO Limited | Financial Clarity for Modern Businesses',
    description: 'Expert accounting and advisory services for businesses in the Isle of Man. Gary O\'Connor, ACCA Fellow, provides comprehensive financial solutions.',
    url: 'https://www.ocoiom.com',
    siteName: 'OCO Limited',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'OCO Limited - Professional Accounting & Advisory Services',
      },
    ],
    locale: 'en_IM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OCO Limited | Financial Clarity for Modern Businesses',
    description: 'Expert accounting and advisory services for businesses in the Isle of Man.',
    images: ['/og-home.jpg'],
  },
  alternates: {
    canonical: 'https://www.ocoiom.com',
  },
};
