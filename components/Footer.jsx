import Link from 'next/link';
import Image from 'next/image';
import AnimatedLogo from './AnimatedLogo';

export default function Footer() {
  const footerLinks = {
    services: [
      { label: 'Digital Product', href: '/services#digital' },
      { label: 'Automation', href: '/services#automation' },
      { label: 'AI Engineering', href: '/services#ai' },
      { label: 'Creative', href: '/services#creative' }
    ],
    connect: [
      { label: 'Email', href: 'mailto:enquiries@propel.im' }
    ]
  };

  return (
    <footer className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8">
          <div>
            <div className="mb-4">
              <AnimatedLogo size="small" color="auto" />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-light tracking-wide uppercase">Digital / AI Studio</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Services</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              {footerLinks.services.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Company</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Connect</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              {footerLinks.connect.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Legal</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p className="mb-4">&copy; 2025 Propel. All rights reserved.</p>
          <p className="text-sm text-gray-500 max-w-4xl mx-auto px-4">
            Propel is a digital and AI studio based in the Isle of Man, serving clients internationally.
          </p>
        </div>
      </div>
    </footer>
  );
}
