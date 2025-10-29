'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Lock } from 'lucide-react';
import Link from 'next/link';
import AnimatedLogo from './AnimatedLogo';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/services', label: 'Expertise' },
    { href: '/about', label: 'About' },
    { href: '/about', label: 'Company' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="w-full px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="scale-150">
            <AnimatedLogo size="default" />
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              className="text-white hover:text-[#FF5007] transition-colors flex items-center gap-1"
            >
              {link.label}
              {link.icon}
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
                className="text-white hover:text-[#FF5007] transition-colors py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                {link.icon}
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
