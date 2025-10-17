# OCO Component Library

Complete reusable components for the OCO website. Copy each component into your `components/` folder.

---

## Navigation Component

**File:** `components/Navigation.jsx`

```javascript
'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <svg width="120" height="41" viewBox="0 0 726 248" fill="none">
            <path d="M602 0C670.483 0 726 55.5167 726 124C726 192.483 670.483 248 602 248C533.517 248 478 192.483 478 124C478 55.5168 533.517 0.000187755 602 0ZM602 50.2021C561.243 50.2023 528.203 83.2428 528.203 124C528.203 164.757 561.243 197.798 602 197.798C642.757 197.798 675.798 164.757 675.798 124C675.798 83.2427 642.757 50.2021 602 50.2021Z" fill="#FF5007"/>
            <path d="M388.893 0C423.105 0 451.099 11.5 474.344 36C464 55.5 464 55.5 451.099 80.5C434.4 58.4109 413.971 49.7004 388.893 49.7004C351.704 49.7004 315.118 79.5861 315.118 124C315.118 168.414 352.707 198.3 388.893 198.3C417.359 198.3 432.099 187.5 451.099 168.5C463 193 465.156 195.656 476 215.444C429.5 245.5 416 248 388.893 248C320.469 248 265 192.483 265 124C265 55.5167 320.469 0 388.893 0Z" fill="#FF5007"/>
            <path d="M124 0C192.483 0 248 55.5167 248 124C248 192.483 192.483 248 124 248C55.5167 248 0 192.483 0 124C0 55.5167 55.5167 5.57757e-05 124 0ZM124 50C83.1309 50 50 83.1309 50 124C50 164.869 83.1309 198 124 198C164.869 198 198 164.869 198 124C198 83.1309 164.869 50 124 50Z" fill="#FF5007"/>
          </svg>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              className="text-white hover:text-[#FF5007] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact"
            className="bg-[#FF5007] text-white px-6 py-2.5 rounded-full hover:bg-[#ff6a2e] transition-all hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg py-6 px-6">
          <div className="flex flex-col gap-4">
            {navLinks.map(link => (
              <Link 
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#FF5007] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="bg-[#FF5007] text-white px-6 py-3 rounded-full text-center hover:bg-[#ff6a2e] transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
```

---

## Button Component

**File:** `components/Button.jsx`

```javascript
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  icon = false,
  className = '' 
}) {
  const baseStyles = "px-8 py-4 rounded-full text-lg font-semibold transition-all inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#FF5007] text-white hover:bg-[#ff6a2e] hover:scale-105",
    secondary: "border-2 border-white text-white hover:bg-white hover:text-black",
    outline: "border-2 border-[#FF5007] text-[#FF5007] hover:bg-[#FF5007] hover:text-white"
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight size={20} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
}
```

---

## Service Card Component

**File:** `components/ServiceCard.jsx`

```javascript
import { Check } from 'lucide-react';

export default function ServiceCard({ title, description, features }) {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border-2 border-transparent hover:border-[#FF5007] group">
      <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-[#FF5007] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-700">
            <Check size={20} className="text-[#FF5007] flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Contact Form Component

**File:** `components/ContactForm.jsx`

```javascript
'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // TODO: Replace with your actual form submission logic
    // Example: Formspree, API route, etc.
    
    try {
      // Simulated submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-12 rounded-3xl">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <input 
          type="text" 
          name="name"
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required
          className="px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#FF5007] focus:outline-none"
        />
        <input 
          type="email" 
          name="email"
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required
          className="px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#FF5007] focus:outline-none"
        />
      </div>
      <input 
        type="text" 
        name="company"
        placeholder="Company Name" 
        value={formData.company}
        onChange={handleChange}
        className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#FF5007] focus:outline-none mb-6"
      />
      <textarea 
        name="message"
        placeholder="Tell us about your needs..." 
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full px-6 py-4 rounded-3xl border-2 border-gray-200 focus:border-[#FF5007] focus:outline-none mb-6"
      ></textarea>
      
      <button 
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-[#FF5007] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ff6a2e] transition-all hover:scale-105 disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="mt-4 text-green-600 text-center">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-600 text-center">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
```

---

## Footer Component

**File:** `components/Footer.jsx`

```javascript
import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    services: [
      { label: 'Accounting', href: '/services#accounting' },
      { label: 'Advisory', href: '/services#advisory' },
      { label: 'CFO Services', href: '/services#cfo' }
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' }
    ],
    connect: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'Email', href: 'mailto:info@oco.com' }
    ]
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <svg width="100" height="34" viewBox="0 0 726 248" fill="none" className="mb-4">
              <path d="M602 0C670.483 0 726 55.5167 726 124C726 192.483 670.483 248 602 248C533.517 248 478 192.483 478 124C478 55.5168 533.517 0.000187755 602 0ZM602 50.2021C561.243 50.2023 528.203 83.2428 528.203 124C528.203 164.757 561.243 197.798 602 197.798C642.757 197.798 675.798 164.757 675.798 124C675.798 83.2427 642.757 50.2021 602 50.2021Z" fill="#FF5007"/>
              <path d="M388.893 0C423.105 0 451.099 11.5 474.344 36C464 55.5 464 55.5 451.099 80.5C434.4 58.4109 413.971 49.7004 388.893 49.7004C351.704 49.7004 315.118 79.5861 315.118 124C315.118 168.414 352.707 198.3 388.893 198.3C417.359 198.3 432.099 187.5 451.099 168.5C463 193 465.156 195.656 476 215.444C429.5 245.5 416 248 388.893 248C320.469 248 265 192.483 265 124C265 55.5167 320.469 0 388.893 0Z" fill="#FF5007"/>
              <path d="M124 0C192.483 0 248 55.5167 248 124C248 192.483 192.483 248 124 248C55.5167 248 0 192.483 0 124C0 55.5167 55.5167 5.57757e-05 124 0ZM124 50C83.1309 50 50 83.1309 50 124C50 164.869 83.1309 198 124 198C164.869 198 198 164.869 198 124C198 83.1309 164.869 50 124 50Z" fill="#FF5007"/>
            </svg>
            <p className="text-gray-400">Financial clarity for modern businesses</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.services.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#FF5007] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.company.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#FF5007] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.connect.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#FF5007] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 OCO Accounting & Advisory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
```

---

## Hero Component

**File:** `components/Hero.jsx`

```javascript
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF5007] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF5007] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Financial Clarity.
            <span className="text-[#FF5007]"> Strategic Growth.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
            Expert accounting and advisory services that empower businesses to make confident financial decisions and achieve sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" icon>
              Schedule Consultation
            </Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## Stats Component

**File:** `components/Stats.jsx`

```javascript
export default function Stats() {
  const stats = [
    { number: '500+', label: 'Businesses Trust OCO' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '15+', label: 'Years Experience' },
    { number: '$2B+', label: 'Assets Under Management' }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#FF5007] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Usage Instructions

### Import Components in Your Pages

```javascript
// app/page.js (Home Page)
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Stats from '@/components/Stats';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  const services = [
    {
      title: "Accounting Services",
      description: "Complete bookkeeping, financial reporting, and compliance management.",
      features: ["Monthly Bookkeeping", "Financial Statements", "Tax Preparation", "Payroll Management"]
    },
    // Add more services...
  ];

  return (
    <>
      <Navigation />
      <Hero />
      <Stats />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12">Get In Touch</h2>
          <ContactForm />
        </div>
      </section>
      
      <Footer />
    </>
  );
}
```

---

## Component Customization Guide

### Changing Colors
All components use the OCO brand colors. To change globally, update Tailwind config:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'oco-orange': '#FF5007',
        'oco-orange-hover': '#ff6a2e',
      }
    }
  }
}
```

Then replace `[#FF5007]` with `oco-orange` in components.

### Adding Animations
Install framer-motion for advanced animations:

```bash
npm install framer-motion
```

Example with motion:
```javascript
import { motion } from 'framer-motion';

export default function AnimatedCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
```

---

## Testing Components

```javascript
// Test in any page:
import ServiceCard from '@/components/ServiceCard';

export default function TestPage() {
  return (
    <div className="p-8">
      <ServiceCard
        title="Test Service"
        description="This is a test description"
        features={["Feature 1", "Feature 2", "Feature 3"]}
      />
    </div>
  );
}
```