import AnimatedLogo from '@/components/AnimatedLogo';

export const metadata = {
  title: 'Coming Soon | OCO Limited - Accounting & Advisory',
  description: 'OCO Limited website is coming soon. Expert accounting and advisory services for businesses in the Isle of Man.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function HoldingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <div className="scale-150">
            <AnimatedLogo color="#FF5007" />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Coming Soon
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            We're putting the finishing touches on our new website.
          </p>
          
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            OCO Limited provides expert accounting and advisory services for businesses in the Isle of Man. 
            Our new site will be launching shortly.
          </p>

          {/* Contact Information */}
          <div className="pt-8 border-t border-gray-800 space-y-4">
            <p className="text-gray-400 mb-4">In the meantime, you can reach us:</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300">
              <a 
                href="mailto:hello@ocoiom.com" 
                className="hover:text-[#FF5007] transition-colors duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@ocoiom.com
              </a>
              
              <span className="hidden sm:inline text-gray-600">•</span>
              
              <a 
                href="tel:+44162400000" 
                className="hover:text-[#FF5007] transition-colors duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +44 (0) 1624 00000
              </a>
            </div>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-gray-500 pt-8">
            © 2025 OCO Limited (Company No. 138078C) - Accounting & Advisory
          </p>
        </div>
      </div>
    </div>
  );
}

