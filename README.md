# Propel - Digital & AI Studio Website

A modern, responsive website for Propel built with Next.js 16, React 19, and Tailwind CSS. Features a dynamic theming system, AI playground with live experiments, and creative technology showcases.

## Overview

This is the professional website for Propel, a digital and AI studio based in the Isle of Man, featuring:

- **Dynamic theming** - Switch between Electric Cyan, Violet, and Orange brand colors + dark/light/system modes
- **AI Playground** - Interactive experiments with chat agents, RAG demos, and more
- Modern, responsive design with Framer Motion animations
- Service pages for Digital Product, Automation, AI Engineering, and Creative services
- Contact form with Resend email integration
- SEO optimized with structured data
- Cookie consent management
- Vercel Analytics integration

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19
- **Styling**: Tailwind CSS with CSS custom properties
- **Theming**: next-themes for dark/light modes
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Resend
- **AI**: Azure OpenAI (GPT-4)
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
# Email
RESEND_API_KEY=your_resend_api_key

# Google Verification
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_google_verification_code

# Azure OpenAI (for Playground)
AZURE_OPENAI_API_KEY=your_azure_openai_key
AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com
AZURE_OPENAI_DEPLOYMENT=gpt-4
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
│   ├── playground/      # AI experiments & demos
│   │   ├── chat-agent/  # GPT-4 chat interface
│   │   ├── rag-demo/    # RAG search demo
│   │   └── ...          # More experiments
│   ├── privacy/         # Privacy policy
│   ├── cookies/         # Cookie policy
│   └── api/             # API routes
│       └── playground/  # AI experiment endpoints
├── components/          # React components
│   ├── ThemeProvider.jsx    # Theme context
│   ├── ThemeSwitcher.jsx    # Theme UI
│   └── ...
├── lib/                 # Utilities
│   └── themes.js        # Theme definitions
├── public/              # Static assets
│   ├── favicon-arrow.svg    # Arrow favicon
│   ├── Propel-logo.svg      # Full logo
│   └── ...
└── docs/                # Documentation
```

## Theming

The site supports three brand color themes and dark/light modes:

### Brand Colors
- **Electric Cyan** (#00D4FF) - Default, modern tech feel
- **Violet** (#8B5CF6) - Creative, innovative
- **Propel Orange** (#FF5007) - Original brand color

### Appearance Modes
- Light mode
- Dark mode (default)
- System preference

Theme preferences are persisted in localStorage.

## Playground

The `/playground` section showcases live AI experiments:

| Experiment | Status | Description |
|------------|--------|-------------|
| Chat Agent | ✅ Live | GPT-4 powered conversational AI |
| RAG Demo | 🔜 Coming | Document search with AI |
| Document Processor | 🔜 Coming | AI document analysis |
| Creative AI | 🔜 Coming | Image generation |
| Automation Builder | 🔜 Coming | Visual workflows |
| Data Explorer | 🔜 Coming | Natural language queries |

## Services

- **Digital Product & UX**: UX/UI design, design systems, prototypes
- **Web App Development**: Full stack apps, dashboards, system architecture
- **AI Systems & Agents**: AI chat agents, smart search, automation
- **Automation**: Legal/corporate automation, document automation, workflow orchestration
- **Brand & Creative**: Brand identity, product visuals, creative AI

## Deployment

The site is deployed on Vercel. Push to the main branch to trigger automatic deployment.

## Domain

- **Production**: [propel.im](https://propel.im)
- **Contact**: [enquiries@propel.im](mailto:enquiries@propel.im)

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for the development roadmap including planned features, 3D backgrounds, and additional AI experiments.

## License

This project is proprietary to Propel.
