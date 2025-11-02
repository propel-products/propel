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
    connect: [
      { label: 'LinkedIn', href: 'https://im.linkedin.com/in/gary-o-connor' },
      { label: 'Email', href: 'mailto:enquiries@ocoiom.com' }
    ]
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8">
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
              <li>
                <Link href="/about" className="hover:text-[#FF5007] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-[#FF5007] transition-colors">
                  Contact Us
                </Link>
              </li>
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
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-[#FF5007] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-[#FF5007] transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          {/* Certifications and Badges */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-6">
            <div className="flex items-center gap-3">
              <Image 
                src="/acca-badge.png" 
                alt="ACCA Badge" 
                width={60} 
                height={60}
                className="object-contain"
              />
              <div className="text-sm text-gray-500 leading-tight">
                <div>Chartered</div>
                <div>Certified</div>
                <div>Accountants</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Image 
                src="/business-valuations-certificate.png" 
                alt="Business Valuations Certificate" 
                width={60} 
                height={60}
                className="object-contain"
              />
              <div className="text-sm text-gray-500 leading-tight">
                <div>Certified</div>
                <div>Business</div>
                <div>Valuer</div>
              </div>
            </div>
          </div>
          
          <p className="mb-4">&copy; 2025 OCO Limited (Company No. 138078C) - Accounting & Advisory. All rights reserved.</p>
          <p className="text-sm text-gray-500 max-w-4xl mx-auto px-4">
            OCO Limited is registered as a designated business by the Isle of Man Financial Services Authority in accordance with the Designated Business (Registration and Oversight) Act 2015
          </p>
        </div>
      </div>
    </footer>
  );
}
