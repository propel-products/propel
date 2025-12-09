# Propel - Digital & AI Studio Website

A modern, responsive website for Propel built with Next.js 14, React, and Tailwind CSS.

## Overview

This is the professional website for Propel, a digital and AI studio based in the Isle of Man, featuring:

- Modern, responsive design
- Animated logo and interactions
- Service pages for Digital Product, Automation, AI Engineering, and Creative services
- Contact form with email integration
- SEO optimized with structured data
- Cookie consent management
- Vercel Analytics integration

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Resend
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/propel-products/propel.git
cd propel
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file for environment variables:
```bash
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_google_verification_code
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── services/        # Services page
│   ├── privacy/         # Privacy policy
│   ├── cookies/         # Cookie policy
│   └── api/             # API routes
├── components/          # React components
├── public/              # Static assets
│   ├── Propel-logo.svg  # Propel logo
│   └── ...              # Other assets
└── resources/           # Additional resources
```

## Services

- **Digital Product & UX**: UX/UI design, design systems, prototypes
- **Web App Development**: Full stack apps, dashboards, system architecture
- **AI Systems & Agents**: AI chat agents, smart search, automation
- **Automation**: Legal/corporate automation, document automation, workflow orchestration
- **Brand & Creative**: Brand identity, product visuals, creative AI

## Deployment

The site is deployed on Vercel. Push to the main branch to trigger automatic deployment.

## Domain

- **Production**: [www.propel.im](https://www.propel.im)
- **Contact**: [enquiries@propel.im](mailto:enquiries@propel.im)

## License

This project is proprietary to Propel.
