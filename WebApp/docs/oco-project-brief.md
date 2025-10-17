# OCO Accounting & Advisory - Website Project Brief

## Project Overview

**Client:** OCO Accounting & Advisory  
**Project Type:** Professional Services Website  
**Timeline:** 2-3 weeks  
**Tech Stack:** Next.js 14, React, Tailwind CSS, Vercel (deployment)

---

## Brand Identity

### Colors
- **Primary Orange:** `#FF5007`
- **Primary Black:** `#000000`
- **Primary White:** `#FFFFFF`
- **Accent Orange (hover):** `#ff6a2e`
- **Gray Scale:** 
  - `#1a1a1a` (dark gray)
  - `#6b7280` (medium gray)
  - `#f3f4f6` (light gray)

### Typography
- **Headings:** Bold, large, impactful (sans-serif)
- **Body:** Clean, readable, professional
- **Tone:** Confident, modern, approachable

### Design Style
- **Modern & Bold:** Large typography, high contrast
- **Minimalist:** Plenty of white space
- **Professional:** Trust-building, credible
- **Interactive:** Smooth animations, hover effects
- **Mobile-First:** Fully responsive design

---

## Site Structure

### Pages Required

#### 1. Home (Priority 1)
- Hero Section
- Services Overview
- Why Choose Us
- Social Proof/Stats
- Contact CTA
- Footer

#### 2. Services (Priority 2)
- Accounting Services Detail
- Advisory Services Detail
- CFO Services Detail
- Pricing/Packages
- Service Process

#### 3. About (Priority 2)
- Company Story
- Team Members
- Values & Mission
- Certifications

#### 4. Resources/Blog (Priority 3)
- Financial Tips
- Industry Insights
- Case Studies
- Thought Leadership

#### 5. Contact (Priority 1)
- Contact Form
- Office Information
- Meeting Scheduler Integration
- Map (if physical location)

---

## Technical Specifications

### Development Setup

```bash
# Initialize Project
npx create-next-app@latest webapp --no-typescript --tailwind --app --eslint
cd webapp
npm install lucide-react

# Development
npm run dev

# Build for Production
npm run build
npm start
```

### Project Structure
```
webapp/
├── app/
│   ├── layout.js          # Root layout with nav/footer
│   ├── page.js            # Home page
│   ├── services/
│   │   └── page.js        # Services page
│   ├── about/
│   │   └── page.js        # About page
│   └── contact/
│       └── page.js        # Contact page
├── components/
│   ├── Navigation.jsx     # Header/Nav component
│   ├── Footer.jsx         # Footer component
│   ├── Hero.jsx           # Hero section
│   ├── ServiceCard.jsx    # Service card component
│   ├── ContactForm.jsx    # Contact form
│   └── Button.jsx         # Reusable button
├── public/
│   ├── images/            # Images and assets
│   └── logo.svg           # OCO logo
├── styles/
│   └── globals.css        # Global styles
└── docs/
    └── project-plan.md    # This document
```

### Key Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "tailwindcss": "^3.3.0",
    "eslint": "^8.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0"
  }
}
```

---

## Content Strategy

### Home Page Sections

#### Hero Section
**Headline:** "Financial Clarity. Strategic Growth."  
**Subheadline:** "Expert accounting and advisory services that empower businesses to make confident financial decisions and achieve sustainable growth."  
**CTAs:** 
- Primary: "Schedule Consultation"
- Secondary: "Explore Services"

#### Services Overview
Three main service pillars:

1. **Accounting Services**
   - Monthly bookkeeping
   - Financial statements
   - Tax preparation
   - Payroll management

2. **Advisory Services**
   - Business strategy
   - Growth planning
   - Risk management
   - Performance analytics

3. **CFO Services**
   - Financial strategy
   - Cash flow planning
   - Investor relations
   - M&A support

#### Why Choose OCO
- **Proactive Partnership:** We don't just report numbers—we help you understand and act on them
- **Industry Expertise:** Specialized knowledge across multiple sectors and business stages
- **Technology Forward:** Leveraging the latest tools for efficiency and real-time insights
- **Scalable Solutions:** Services that grow with your business, from startup to enterprise

#### Social Proof
- "500+ Businesses Trust OCO"
- "98% Client Satisfaction"
- "15+ Years Experience"

---

## Design Components

### Navigation
- Fixed header with transparency on scroll
- Logo (left)
- Menu items: Services, About, Resources, Contact
- CTA button (right): "Get Started"
- Mobile hamburger menu

### Buttons
**Primary Button:**
- Background: `#FF5007`
- Text: White
- Rounded: Full (`rounded-full`)
- Hover: Scale 1.05, background `#ff6a2e`

**Secondary Button:**
- Border: 2px white
- Text: White
- Background: Transparent
- Hover: Background white, text black

### Cards
- Light gray background (`#f3f4f6`)
- Rounded corners (`rounded-2xl`)
- Padding: 2rem
- Hover: Shadow-xl, orange border

### Forms
- Rounded inputs (`rounded-full` for text inputs)
- Orange focus border
- Large padding for touch-friendly
- White background with gray border

---

## Animation & Interactions

### Scroll Effects
- Fade in sections as they enter viewport
- Navigation bar background on scroll
- Parallax on hero section (optional)

### Hover States
- Scale buttons: 1.05
- Change card borders to orange
- Underline link hover effects
- Icon rotations (arrows, etc.)

### Page Transitions
- Smooth page changes
- Loading states for forms

---

## SEO & Performance

### Meta Tags Required
```html
<title>OCO Accounting & Advisory | Financial Clarity for Modern Businesses</title>
<meta name="description" content="Expert accounting and advisory services for businesses. Bookkeeping, tax preparation, CFO services, and strategic financial guidance." />
<meta property="og:title" content="OCO Accounting & Advisory" />
<meta property="og:description" content="Financial clarity and strategic growth for your business" />
<meta property="og:image" content="/og-image.png" />
```

### Performance Goals
- Lighthouse Score: 90+ (all categories)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s

### Image Optimization
- Use Next.js Image component
- WebP format with fallbacks
- Lazy loading below fold
- Proper sizing and compression

---

## Forms & Lead Capture

### Contact Form Fields
```javascript
{
  name: { required: true, type: "text" },
  email: { required: true, type: "email" },
  company: { required: false, type: "text" },
  phone: { required: false, type: "tel" },
  message: { required: true, type: "textarea" },
  service: { required: false, type: "select", 
             options: ["Accounting", "Advisory", "CFO Services", "Other"] }
}
```

### Form Integration Options
1. **Formspree** (easiest): Free tier available
2. **Netlify Forms**: If deploying to Netlify
3. **Custom API Route**: Next.js API route + email service
4. **Third-party**: HubSpot, Mailchimp, etc.

---

## Deployment Strategy

### Recommended: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Benefits:**
- Zero config for Next.js
- Automatic HTTPS
- Global CDN
- Preview deployments for each push
- Free tier available

### Alternative: Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### DNS Setup
- Point custom domain to Vercel/Netlify
- Add www redirect
- Enable HTTPS

---

## Testing Checklist

### Functionality
- [ ] All navigation links work
- [ ] Forms submit successfully
- [ ] Mobile menu opens/closes
- [ ] CTAs link to correct pages
- [ ] Images load properly
- [ ] Contact form validation works

### Responsiveness
- [ ] Mobile (375px)
- [ ] Tablet (768px)
- [ ] Desktop (1024px)
- [ ] Large desktop (1440px+)

### Browser Testing
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Performance
- [ ] Lighthouse audit 90+
- [ ] Images optimized
- [ ] No console errors
- [ ] Fast load times

### SEO
- [ ] Meta tags present
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] Alt tags on images
- [ ] Semantic HTML

---

## Phase Breakdown

### Phase 1: Setup (Day 1)
- Initialize Next.js project
- Install dependencies
- Set up Tailwind config
- Create folder structure
- Add OCO logo/assets

### Phase 2: Core Pages (Days 2-7)
- Build home page
- Create reusable components
- Implement navigation/footer
- Build services page
- Create about page

### Phase 3: Forms & Interactivity (Days 8-10)
- Implement contact form
- Add form validation
- Set up email integration
- Add animations/transitions

### Phase 4: Content & Polish (Days 11-13)
- Add all final content
- Optimize images
- Fine-tune responsive design
- Add micro-interactions

### Phase 5: Testing & Launch (Days 14-15)
- Cross-browser testing
- Performance optimization
- SEO implementation
- Deploy to production

---

## Future Enhancements (Post-Launch)

### Phase 2 Features
- Client portal login
- Blog/resources section
- Case studies with results
- Testimonials carousel
- Service calculator/estimator
- Email newsletter signup

### Phase 3 Features
- Online booking system
- Document upload portal
- Client dashboard
- Live chat integration
- Multi-language support

---

## Success Metrics

### Launch Goals (First 30 Days)
- 1000+ unique visitors
- 50+ contact form submissions
- 10+ consultation bookings
- < 3s average load time
- < 40% bounce rate

### Long-term Goals (6 Months)
- 5000+ monthly visitors
- 200+ monthly leads
- 30+ new client acquisitions
- Top 3 ranking for key search terms

---

## Support & Maintenance

### Monthly Tasks
- Update content/blog posts
- Monitor analytics
- Check forms/submissions
- Review performance metrics
- Update dependencies

### Quarterly Tasks
- Design refreshes
- A/B testing
- Feature additions
- Comprehensive audit

---

## Contact & Resources

### Key Stakeholders
- **Project Manager:** [Name]
- **Lead Developer:** [Name]
- **Designer:** [Name]
- **Content Writer:** [Name]

### Useful Links
- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- Vercel Dashboard: https://vercel.com/dashboard
- Lucide Icons: https://lucide.dev

---

**Document Version:** 1.0  
**Last Updated:** October 17, 2025  
**Status:** Ready for Development