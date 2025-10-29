import Link from 'next/link';
import Image from 'next/image';
import AnimatedLogo from './AnimatedLogo';

export default function Footer() {
  const footerLinks = {
    expertise: [
      { label: 'Accounting', href: '/services#accounting' },
      { label: 'Advisory', href: '/services#advisory' },
      { label: 'CFO Services', href: '/services#cfo' }
    ],
    about: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Story', href: '/about' }
    ],
    company: [
      { label: 'Company', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ],
    connect: [
      { label: 'LinkedIn', href: 'https://linkedin.com/company/oco-accounting' },
      { label: 'Email', href: 'mailto:hello@ocoiom.com' }
    ]
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <AnimatedLogo size="small" color="white" />
            </div>
            <p className="text-xs text-gray-500 font-light tracking-wide uppercase">Accounting / Advisory</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.expertise.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#FF5007] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.about.map(link => (
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
          {/* Certifications and Badges */}
          <div className="flex justify-center items-center gap-8 mb-6">
            <div className="flex items-center gap-2">
              <Image 
                src="/acca-badge.png" 
                alt="ACCA Badge" 
                width={60} 
                height={60}
                className="object-contain"
              />
              <span className="text-sm text-gray-500">ACCA Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Image 
                src="/business-valuations-certificate.png" 
                alt="Business Valuations Certificate" 
                width={60} 
                height={60}
                className="object-contain"
              />
              <span className="text-sm text-gray-500">Certified Business Valuer</span>
            </div>
          </div>
          
          <p className="mb-4">&copy; 2025 OCOIOM Limited - Accounting & Advisory. All rights reserved.</p>
          <p className="text-sm text-gray-500">
            OCO Limited is registered as a designated business by the Isle of Man Financial Services Authority in accordance with the Designated Business (Registration and Oversight) Act 2015
          </p>
        </div>
      </div>
    </footer>
  );
}
