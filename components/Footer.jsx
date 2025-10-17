import Link from 'next/link';
import AnimatedLogo from './AnimatedLogo';

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
      { label: 'LinkedIn', href: 'https://linkedin.com/company/oco-accounting' },
      { label: 'Twitter', href: 'https://twitter.com/ocoaccounting' },
      { label: 'Email', href: 'mailto:hello@ocoiom.com' }
    ]
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <AnimatedLogo size="small" />
            </div>
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
          <p>&copy; 2025 OCOIOM Limited - Accounting & Advisory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
