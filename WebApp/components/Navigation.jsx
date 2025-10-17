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
