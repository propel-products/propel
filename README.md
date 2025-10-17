# OCO Accounting & Advisory Website

A modern, responsive website for OCO Accounting & Advisory built with Next.js 14, React, and Tailwind CSS.

## 🚀 Live Website

**Production URL**: [Deployed on Vercel](https://vercel.com/hi-5098s-projects/oco)

## 📋 Project Overview

This is a professional website for OCO Accounting & Advisory, featuring:
- Modern, responsive design with UK English content
- Complete business website with all essential pages
- Contact form with API integration
- Smooth animations and interactions
- SEO optimized with sitemap and robots.txt
- Professional OCO branding and styling

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Version Control**: Git (GitHub)

## 📁 Project Structure

```
Oco/
├── WebApp/                    # Next.js application
│   ├── app/                   # App Router pages
│   │   ├── about/            # About page
│   │   ├── contact/          # Contact page
│   │   ├── services/         # Services page
│   │   ├── api/              # API routes
│   │   ├── globals.css       # Global styles
│   │   ├── layout.js         # Root layout
│   │   ├── page.js           # Home page
│   │   ├── not-found.js      # 404 page
│   │   ├── robots.js         # Robots.txt
│   │   └── sitemap.js        # Sitemap
│   ├── components/           # Reusable components
│   │   ├── AnimatedSection.jsx
│   │   ├── Button.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── ServiceCard.jsx
│   │   └── Stats.jsx
│   ├── public/               # Static assets
│   │   └── logo.svg          # OCO logo
│   ├── docs/                 # Project documentation
│   │   ├── oco-project-brief.md
│   │   ├── oco-implementation-guide.md
│   │   └── oco-quick-start.md
│   ├── package.json          # Dependencies
│   ├── next.config.js        # Next.js configuration
│   ├── tailwind.config.js    # Tailwind configuration
│   ├── postcss.config.js     # PostCSS configuration
│   └── jsconfig.json         # JavaScript configuration
├── vercel.json               # Vercel deployment config
├── package.json              # Root package.json
├── .gitignore                # Git ignore rules
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/propel-products/oco.git
   cd oco
   ```

2. **Install dependencies**
   ```bash
   cd WebApp
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# From root directory
npm run dev          # Start dev server from WebApp
npm run build        # Build from WebApp
npm run start        # Start production from WebApp
```

## 📄 Pages & Features

### Home Page (`/`)
- Hero section with call-to-action
- Services overview with feature cards
- Statistics section
- Why choose OCO section
- Contact form

### Services Page (`/services`)
- Detailed service descriptions
- Accounting Services
- Advisory Services
- CFO Services

### About Page (`/about`)
- Company story and mission
- Core values
- Team information
- Call-to-action

### Contact Page (`/contact`)
- Contact information
- Interactive contact form
- API integration for form submissions

### API Routes
- `/api/contact` - Handles contact form submissions

## 🎨 Design System

### Brand Colors
- **Primary Orange**: `#FF5007`
- **Secondary Orange**: `#ff6a2e`
- **Black**: `#000000`
- **White**: `#FFFFFF`
- **Gray**: Various shades for text and backgrounds

### Typography
- **Headings**: Bold, modern sans-serif
- **Body Text**: Clean, readable sans-serif
- **Responsive**: Scales appropriately across devices

### Components
- **Button**: Primary, secondary, and outline variants
- **ServiceCard**: Consistent service presentation
- **AnimatedSection**: Smooth scroll-triggered animations
- **Navigation**: Responsive with mobile menu
- **Footer**: Comprehensive site links and information

## 🌐 Deployment

### Vercel Deployment
The project is configured for automatic deployment on Vercel:

1. **Automatic Deployment**: Pushes to `main` branch trigger automatic deployments
2. **Configuration**: `vercel.json` specifies the WebApp directory as the build source
3. **Environment**: Production builds are optimized and cached

### Manual Deployment
```bash
# Build the project
cd WebApp
npm run build

# Deploy to Vercel (if Vercel CLI is installed)
vercel --prod
```

## 🔧 Configuration

### Environment Variables
No environment variables are currently required for basic functionality.

### Build Configuration
- **Framework**: Next.js 14 with App Router
- **Output**: Static and server-rendered pages
- **Optimization**: Automatic code splitting and optimization

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader compatibility

## 🔍 SEO Features

- **Meta Tags**: Optimized for search engines
- **Sitemap**: Automatic generation at `/sitemap.xml`
- **Robots.txt**: Search engine crawling instructions
- **Structured Data**: Ready for implementation
- **Performance**: Optimized loading times

## 🧪 Testing

### Local Testing
```bash
# Start development server
npm run dev

# Test all pages
# - Home: http://localhost:3000
# - Services: http://localhost:3000/services
# - About: http://localhost:3000/about
# - Contact: http://localhost:3000/contact
```

### Production Testing
- Test contact form functionality
- Verify all links work correctly
- Check responsive design on different devices
- Validate SEO elements

## 📝 Content Management

### UK English
All content uses British English spelling and terminology:
- "optimise" instead of "optimize"
- "specialised" instead of "specialized"
- "whilst" instead of "while"

### Content Updates
To update content:
1. Edit the relevant page files in `WebApp/app/`
2. Update component content in `WebApp/components/`
3. Commit and push changes
4. Vercel will automatically redeploy

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clear cache and rebuild
   rm -rf .next
   npm run build
   ```

2. **Port Already in Use**
   ```bash
   # Next.js will automatically use the next available port
   # Or specify a port: npm run dev -- -p 3001
   ```

3. **Module Resolution Issues**
   ```bash
   # Check jsconfig.json for path aliases
   # Ensure all imports use correct paths
   ```

## 📞 Support

For technical support or questions about this project:
- **Repository**: [GitHub Issues](https://github.com/propel-products/oco/issues)
- **Documentation**: Check the `docs/` folder for detailed guides

## 📄 License

This project is proprietary to OCO Accounting & Advisory.

## 🏆 Project Status

✅ **Complete**: All core features implemented  
✅ **Deployed**: Live on Vercel  
✅ **Responsive**: Mobile and desktop optimized  
✅ **SEO Ready**: Search engine optimized  
✅ **Accessible**: WCAG compliant  

---

**Last Updated**: January 2025  
**Version**: 1.0.0  
**Maintainer**: Development Team
