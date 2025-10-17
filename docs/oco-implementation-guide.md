# OCO Website - Implementation Roadmap

**Complete step-by-step guide to build the OCO website in Cursor**

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Open Terminal in Cursor
```bash
cd /path/to/your/WebApp
cursor .
```

### Step 2: Initialize Next.js Project
```bash
# Run this in Cursor's terminal
npx create-next-app@latest . --no-typescript --tailwind --app --eslint

# When prompted:
# ✓ Would you like to use Turbopack? › No
# ✓ Would you like to customize the import alias? › No

# Install icons
npm install lucide-react
```

### Step 3: Create Folder Structure
```bash
mkdir -p components docs public/images
```

### Step 4: Start Development Server
```bash
npm run dev
# Open http://localhost:3000
```

---

## 📁 Day 1: Project Setup & Foundation

### Task 1.1: Save Documentation
**Action:** Save these files to your `docs/` folder:
- `project-plan.md` (Project Brief document)
- `components-library.md` (Component Library document)
- `implementation-guide.md` (This document)

### Task 1.2: Configure Tailwind
**File:** `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'oco-orange': '#FF5007',
        'oco-orange-hover': '#ff6a2e',
      },
    },
  },
  plugins: [],
}
```

### Task 1.3: Update Global Styles
**File:** `app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply antialiased;
  }
}
```

### Task 1.4: Add OCO Logo
**Action:** Save the OCO logo SVG to `public/logo.svg`

```xml
<!-- public/logo.svg -->
<svg width="726" height="248" viewBox="0 0 726 248" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M602 0C670.483 0 726 55.5167 726 124C726 192.483 670.483 248 602 248C533.517 248 478 192.483 478 124C478 55.5168 533.517 0.000187755 602 0ZM602 50.2021C561.243 50.2023 528.203 83.2428 528.203 124C528.203 164.757 561.243 197.798 602 197.798C642.757 197.798 675.798 164.757 675.798 124C675.798 83.2427 642.757 50.2021 602 50.2021Z" fill="#FF5007"/>
  <path d="M388.893 0C423.105 0 451.099 11.5 474.344 36C464 55.5 464 55.5 451.099 80.5C434.4 58.4109 413.971 49.7004 388.893 49.7004C351.704 49.7004 315.118 79.5861 315.118 124C315.118 168.414 352.707 198.3 388.893 198.3C417.359 198.3 432.099 187.5 451.099 168.5C463 193 465.156 195.656 476 215.444C429.5 245.5 416 248 388.893 248C320.469 248 265 192.483 265 124C265 55.5167 320.469 0 388.893 0Z" fill="#FF5007"/>
  <path d="M124 0C192.483 0 248 55.5167 248 124C248 192.483 192.483 248 124 248C55.5167 248 0 192.483 0 124C0 55.5167 55.5167 5.57757e-05 124 0ZM124 50C83.1309 50 50 83.1309 50 124C50 164.869 83.1309 198 124 198C164.869 198 198 164.869 198 124C198 83.1309 164.869 50 124 50Z" fill="#FF5007"/>
</svg>
```

---

## 📦 Day 2-3: Build Core Components

### Task 2.1: Create Button Component
**File:** `components/Button.jsx`
Copy from Components Library → Button Component

**Test it:**
```bash
# In Cursor, use Cmd+L and ask:
"Create a test page at app/test/page.js that uses the Button component"
```

### Task 2.2: Create Navigation
**File:** `components/Navigation.jsx`
Copy from Components Library → Navigation Component

### Task 2.3: Create Footer
**File:** `components/Footer.jsx`
Copy from Components Library → Footer Component

### Task 2.4: Create Service Card
**File:** `components/ServiceCard.jsx`
Copy from Components Library → Service Card Component

### Task 2.5: Create Contact Form
**File:** `components/ContactForm.jsx`
Copy from Components Library → Contact Form Component

### Task 2.6: Create Hero
**File:** `components/Hero.jsx`
Copy from Components Library → Hero Component

### Task 2.7: Create Stats
**File:** `components/Stats.jsx`
Copy from Components Library → Stats Component

**Checkpoint:** Test each component individually before moving on!

---

## 🏠 Day 4-5: Build Home Page

### Task 3.1: Create Root Layout
**File:** `app/layout.js`
```javascript
import './globals.css'

export const metadata = {
  title: 'OCO Accounting & Advisory | Financial Clarity for Modern Businesses',
  description: 'Expert accounting and advisory services for businesses. Bookkeeping, tax preparation, CFO services, and strategic financial guidance.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### Task 3.2: Build Home Page
**File:** `app/page.js`
```javascript
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Stats from '@/components/Stats';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: "Accounting Services",
      description: "Complete bookkeeping, financial reporting, and compliance management to keep your business running smoothly.",
      features: ["Monthly Bookkeeping", "Financial Statements", "Tax Preparation", "Payroll Management"]
    },
    {
      title: "Advisory Services",
      description: "Strategic guidance to optimize your business performance and achieve your long-term financial goals.",
      features: ["Business Strategy", "Growth Planning", "Risk Management", "Performance Analytics"]
    },
    {
      title: "CFO Services",
      description: "Fractional CFO support providing executive-level financial leadership without the full-time cost.",
      features: ["Financial Strategy", "Cash Flow Planning", "Investor Relations", "M&A Support"]
    }
  ];

  const whyChooseUs = [
    { 
      title: "Proactive Partnership", 
      desc: "We don't just report numbers—we help you understand and act on them." 
    },
    { 
      title: "Industry Expertise", 
      desc: "Specialized knowledge across multiple sectors and business stages." 
    },
    { 
      title: "Technology Forward", 
      desc: "Leveraging the latest tools for efficiency and real-time insights." 
    },
    { 
      title: "Scalable Solutions", 
      desc: "Services that grow with your business, from startup to enterprise." 
    }
  ];

  return (
    <>
      <Navigation />
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      <Stats />

      {/* Why Choose Us Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Why Choose <span className="text-[#FF5007]">OCO</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We combine deep financial expertise with a modern, technology-driven approach to deliver exceptional results for our clients.
              </p>
              <div className="space-y-6">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-2 h-2 bg-[#FF5007] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#FF5007] to-[#ff6a2e] p-12 rounded-3xl">
                <div className="text-6xl font-bold mb-4">500+</div>
                <p className="text-2xl mb-8">Businesses Trust OCO</p>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl">
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-sm">Client Satisfaction</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-black mb-6">
            Ready to Transform Your Finances?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Let's discuss how OCO can help your business achieve financial clarity and sustainable growth.
          </p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
```

**Test:** Visit http://localhost:3000 and verify everything works!

---

## 📄 Day 6-7: Build Additional Pages

### Task 4.1: Services Page
**File:** `app/services/page.js`
```javascript
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';

export const metadata = {
  title: 'Our Services | OCO Accounting & Advisory',
  description: 'Comprehensive accounting, advisory, and CFO services for growing businesses.',
}

export default function Services() {
  const detailedServices = [
    {
      category: "Accounting Services",
      tagline: "Keep your books perfect, stay compliant",
      services: [
        {
          title: "Monthly Bookkeeping",
          description: "Accurate, timely recording of all financial transactions",
          features: ["Transaction Recording", "Account Reconciliation", "Expense Tracking", "Financial Reports"]
        },
        {
          title: "Tax Preparation & Planning",
          description: "Minimize tax liability while ensuring full compliance",
          features: ["Tax Return Preparation", "Tax Planning Strategy", "IRS Correspondence", "Audit Support"]
        },
        {
          title: "Payroll Management",
          description: "End-to-end payroll processing and compliance",
          features: ["Payroll Processing", "Tax Filings", "Benefits Administration", "Compliance Management"]
        }
      ]
    },
    {
      category: "Advisory Services",
      tagline: "Strategic guidance for sustainable growth",
      services: [
        {
          title: "Business Strategy",
          description: "Develop and execute strategies for growth and profitability",
          features: ["Strategic Planning", "Market Analysis", "Competitive Positioning", "Growth Modeling"]
        },
        {
          title: "Performance Analytics",
          description: "Data-driven insights to improve business performance",
          features: ["KPI Development", "Financial Modeling", "Benchmarking", "Dashboard Creation"]
        },
        {
          title: "Risk Management",
          description: "Identify and mitigate financial and operational risks",
          features: ["Risk Assessment", "Internal Controls", "Compliance Review", "Crisis Planning"]
        }
      ]
    },
    {
      category: "CFO Services",
      tagline: "Executive financial leadership, fractional cost",
      services: [
        {
          title: "Financial Strategy & Planning",
          description: "Long-term financial vision and strategic execution",
          features: ["Strategic Financial Planning", "Capital Structure", "Investment Strategy", "Exit Planning"]
        },
        {
          title: "Cash Flow Management",
          description: "Optimize working capital and ensure liquidity",
          features: ["Cash Flow Forecasting", "Working Capital Optimization", "Credit Management", "Banking Relations"]
        },
        {
          title: "Investor & Stakeholder Relations",
          description: "Manage relationships with investors and key stakeholders",
          features: ["Board Reporting", "Investor Communications", "Due Diligence", "Fundraising Support"]
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-black flex items-center overflow-hidden pt-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF5007] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-[#FF5007]">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Comprehensive financial solutions designed to support your business at every stage of growth
          </p>
        </div>
      </section>

      {/* Services Details */}
      {detailedServices.map((category, idx) => (
        <section key={idx} className={`py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">{category.category}</h2>
              <p className="text-xl text-gray-600">{category.tagline}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {category.services.map((service, serviceIdx) => (
                <ServiceCard key={serviceIdx} {...service} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss which services are right for your business
          </p>
          <Button href="/contact" variant="primary" icon>
            Schedule Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
```

### Task 4.2: About Page
**File:** `app/about/page.js`
```javascript
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export const metadata = {
  title: 'About Us | OCO Accounting & Advisory',
  description: 'Learn about OCO\'s mission, values, and the team behind our expert financial services.',
}

export default function About() {
  const values = [
    {
      title: "Integrity",
      description: "We operate with the highest ethical standards and transparency in everything we do"
    },
    {
      title: "Excellence",
      description: "We're committed to delivering exceptional quality and exceeding client expectations"
    },
    {
      title: "Innovation",
      description: "We embrace technology and modern solutions to provide better service"
    },
    {
      title: "Partnership",
      description: "We build long-term relationships based on trust and mutual success"
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-black flex items-center overflow-hidden pt-32">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            About <span className="text-[#FF5007]">OCO</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Empowering businesses with clarity, strategy, and confidence since 2010
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              OCO was founded with a simple belief: businesses deserve financial partners who truly understand their challenges and opportunities. We saw too many companies struggling with traditional accounting firms that simply processed numbers without providing real strategic value.
            </p>
            <p>
              Today, OCO serves over 500 businesses across multiple industries, from fast-growing startups to established enterprises. Our team combines deep financial expertise with modern technology to deliver services that are both comprehensive and accessible.
            </p>
            <p>
              We're not just accountants—we're strategic partners invested in your success. Every recommendation we make, every insight we provide, is designed to help you make better decisions and achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-[#FF5007]">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Join 500+ Businesses</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the OCO difference
          </p>
          <Button href="/contact" variant="primary" icon>
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
```

### Task 4.3: Contact Page
**File:** `app/contact/page.js`
```javascript
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | OCO Accounting & Advisory',
  description: 'Get in touch with OCO for accounting and advisory services. Schedule a consultation today.',
}

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      detail: "hello@oco.com",
      link: "mailto:hello@oco.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin size={24} />,
      title: "Office",
      detail: "123 Financial District, New York, NY 10004",
      link: "#"
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[40vh] bg-black flex items-center overflow-hidden pt-32">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Let's <span className="text-[#FF5007]">Connect</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Ready to transform your financial operations? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a question about our services? Want to schedule a consultation? We'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, idx) => (
                  <a 
                    key={idx}
                    href={item.link}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-[#FF5007] mt-1">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-gray-600">{item.detail}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                <h3 className="font-bold text-xl mb-2">Office Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p className="text-gray-600">Saturday - Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
```

---

## ⚙️ Day 8-9: Forms & Functionality

### Task 5.1: Set Up Form Submission

**Option A: Formspree (Easiest)**
1. Go to https://formspree.io and create free account
2. Create new form and get endpoint
3. Update `ContactForm.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('sending');
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } else {
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
  }
};
```

**Option B: Next.js API Route**
**File:** `app/api/contact/route.js`
```javascript
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // TODO: Send email using service like SendGrid, Resend, or Nodemailer
    // Example with console log for now:
    console.log('Contact form submission:', data);
    
    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({ 
      success: true, 
      message: 'Message received!' 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Something went wrong' 
    }, { status: 500 });
  }
}
```

Then update `ContactForm.jsx`:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('sending');
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (result.success) {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } else {
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
  }
};
```

---

## 🎨 Day 10-11: Polish & Animations

### Task 6.1: Add Scroll Animations (Optional)
```bash
npm install framer-motion
```

**Create Animated Wrapper:**
**File:** `components/AnimatedSection.jsx`
```javascript
'use client';
import { motion } from 'framer-motion';

export default function AnimatedSection({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
```

**Use in pages:**
```javascript
import AnimatedSection from '@/components/AnimatedSection';

<AnimatedSection>
  <ServiceCard {...service} />
</AnimatedSection>
```

### Task 6.2: Add Loading States
**File:** `components/LoadingSpinner.jsx`
```javascript
export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF5007]"></div>
    </div>
  );
}
```

### Task 6.3: Add 404 Page
**File:** `app/not-found.js`
```javascript
import Link from 'next/link';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#FF5007] mb-4">404</h1>
        <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Button href="/" variant="primary">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
```

---

## 🔍 Day 12-13: SEO & Performance

### Task 7.1: Add Metadata to All Pages
Already done in page examples above! Each page should have:
```javascript
export const metadata = {
  title: 'Page Title | OCO',
  description: 'Page description',
}
```

### Task 7.2: Create Sitemap
**File:** `app/sitemap.js`
```javascript
export default function sitemap() {
  const baseUrl = 'https://oco.com'; // Replace with your domain
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
```

### Task 7.3: Create robots.txt
**File:** `app/robots.js`
```javascript
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://oco.com/sitemap.xml', // Replace with your domain
  };
}
```

### Task 7.4: Optimize Images
- Save all images in `public/images/`
- Use Next.js Image component:

```javascript
import Image from 'next/image';

<Image
  src="/images/hero-bg.jpg"
  alt="Description"
  width={1200}
  height={600}
  priority // For above-the-fold images
/>
```

### Task 7.5: Add Open Graph Image
**File:** `app/opengraph-image.png`
- Create a 1200x630px image with OCO branding
- Save as `app/opengraph-image.png`

---

## 🚀 Day 14: Testing & Deployment

### Task 8.1: Local Testing Checklist

```bash
# Run production build locally
npm run build
npm start

# Check for errors
# Test all pages
# Test all forms
# Test mobile responsiveness
```

**Manual Testing:**
- [ ] All navigation links work
- [ ] Forms submit successfully
- [ ] Mobile menu works
- [ ] Images load properly
- [ ] No console errors
- [ ] Responsive on mobile (375px)
- [ ] Responsive on tablet (768px)
- [ ] Responsive on desktop (1440px)

### Task 8.2: Deploy to Vercel

**Method 1: Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Method 2: GitHub + Vercel (Recommended)**
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial OCO website"
git branch -M main
git remote add origin https://github.com/yourusername/oco-website.git
git push -u origin main

# Then:
# 1. Go to vercel.com
# 2. Click "Add New Project"
# 3. Import your GitHub repo
# 4. Click "Deploy"
```

### Task 8.3: Post-Deployment Tasks

**Add Custom Domain:**
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., oco.com)
3. Update DNS records as instructed

**Environment Variables (if using API routes):**
1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add any API keys or secrets

---

## 📊 Day 15: Launch & Monitor

### Task 9.1: Set Up Analytics

**Google Analytics:**
**File:** `app/layout.js`
```javascript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Task 9.2: Performance Monitoring

**Run Lighthouse Audit:**
```bash
# In Chrome DevTools:
# 1. Right-click → Inspect
# 2. Go to Lighthouse tab
# 3. Click "Generate report"
# 4. Aim for 90+ in all categories
```

### Task 9.3: Launch Checklist

- [ ] All pages live and working
- [ ] Forms submitting correctly
- [ ] Custom domain connected
- [ ] HTTPS enabled
- [ ] Analytics tracking
- [ ] Sitemap submitted to Google Search Console
- [ ] Social media meta tags working
- [ ] Performance score 90+
- [ ] Mobile responsive
- [ ] Cross-browser tested

---

## 🛠️ Troubleshooting Common Issues

### Issue 1: Components Not Found
```bash
# Make sure you're using correct import paths
# In Next.js 13+ with app directory, use:
import Component from '@/components/Component'

# Not:
import Component from '../components/Component'
```

### Issue 2: Tailwind Classes Not Working
```bash
# Restart dev server
npm run dev

# Check tailwind.config.js has correct content paths
# Clear .next folder and rebuild
rm -rf .next
npm run dev
```

### Issue 3: Icons Not Showing
```bash
# Make sure lucide-react is installed
npm install lucide-react

# Import correctly
import { Menu, X, ArrowRight } from 'lucide-react';
```

### Issue 4: Forms Not Submitting
```bash
# Check browser console for errors
# Verify API endpoint or Formspree URL
# Check CORS settings if using external API
```

---

## 📝 Quick Reference Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Deploy to Vercel
vercel --prod

# Install new package
npm install package-name

# Check for updates
npm outdated

# Update packages
npm update
```

---

## 🎯 Next Steps After Launch

### Week 2-4: Content & SEO
- [ ] Write blog posts for Resources section
- [ ] Add case studies with client results
- [ ] Optimize all content for SEO keywords
- [ ] Submit sitemap to Google Search Console
- [ ] Create social media content

### Month 2: Features
- [ ] Add client testimonials carousel
- [ ] Create service pricing calculator
- [ ] Add live chat widget
- [ ] Build resources/blog functionality
- [ ] Add newsletter signup

### Month 3: Growth
- [ ] A/B test CTAs and headlines
- [ ] Implement conversion tracking
- [ ] Add more interactive elements
- [ ] Create lead magnets (ebooks, guides)
- [ ] Launch email marketing campaigns

---

## 💡 Tips for Working with Cursor

**Use AI Chat (Cmd/Ctrl + L):**
```
"Create a new testimonials section component for the home page"
"Fix the mobile menu not closing when clicking links"
"Add smooth scroll behavior to anchor links"
"Optimize images in the public folder"
```

**Use Inline Editing (Cmd/Ctrl + K):**
- Select code you want to modify
- Press Cmd/Ctrl + K
- Describe what you want changed
- AI will suggest edits

**Ask Questions:**
```
"How do I add form validation to the contact form?"
"What's the best way to implement lazy loading for images?"
"How can I improve the performance score?"
```

---

## 📚 Resources

**Documentation:**
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Lucide Icons: https://lucide.dev
- Vercel: https://vercel.com/docs

**Tools:**
- Formspree: https://formspree.io
- Google Analytics: https://analytics.google.com
- Google Search Console: https://search.google.com/search-console

---

## ✅ Final Checklist

### Pre-Launch
- [ ] All components created
- [ ] All pages built (Home, Services, About, Contact)
- [ ] Forms working and tested
- [ ] Navigation works on all pages
- [ ] Footer links correct
- [ ] Mobile responsive
- [ ] Images optimized
- [ ] SEO metadata added
- [ ] No console errors

### Launch
- [ ] Deployed to Vercel
- [ ] Custom domain connected
- [ ] HTTPS enabled
- [ ] Analytics installed
- [ ] Sitemap live
- [ ] Social sharing working

### Post-Launch
- [ ] Monitor analytics
- [ ] Check form submissions
- [ ] Review performance
- [ ] Gather user feedback
- [ ] Plan next features

---

**Document Version:** 1.0  
**Last Updated:** October 17, 2025  
**Status:** Ready to Implement

**Need Help?** Come back to claude.ai and ask me anything!