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
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-lg py-4' : 'bg-transparent py-8'
    }`}>
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-20 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="OCO Limited Home">
          <div className="scale-125 sm:scale-150 lg:scale-150">
            <AnimatedLogo size="default" />
          </div>
        </Link>
        
        <div className="hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8 ml-auto">
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
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg py-8 px-6">
          <div className="flex flex-col gap-6">
            {navLinks.map(link => (
              <Link 
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#FF5007] transition-colors py-3 px-2 flex items-center gap-2 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
