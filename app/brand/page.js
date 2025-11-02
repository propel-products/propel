import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedLogo from '@/components/AnimatedLogo';
import BrandPageNav from '@/components/BrandPageNav';
import BrandPageClient from '@/components/BrandPageClient';
import Image from 'next/image';
import { Download } from 'lucide-react';

export const metadata = {
  title: 'Brand Guidelines | OCO Limited',
  description: 'OCO Limited brand guidelines including logo usage, typography, colors, and marketing assets.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function BrandPage() {
  const navSections = [
    { id: 'logo-usage', label: 'Logo Usage' },
    { id: 'logo-downloads', label: 'Logo Downloads' },
    { id: 'typography', label: 'Typography' },
    { id: 'color-palette', label: 'Color Palette' },
    { id: 'linkedin-banners', label: 'LinkedIn Banners' },
    { id: 'marketing-examples', label: 'Marketing Examples' },
  ];
  const linkedInBanners = [
    { name: 'Personal Profile v1', src: '/brand-assets/linkedin-banners/1128x191-LinkedIn-personal-v1.webp', dimensions: '1128 × 191' },
    { name: 'Personal Profile v2', src: '/brand-assets/linkedin-banners/1128x191-LinkedIn-personal-v2.webp', dimensions: '1128 × 191' },
    { name: 'Personal Profile v3', src: '/brand-assets/linkedin-banners/1128x191-LinkedIn-personal-v3.webp', dimensions: '1128 × 191' },
    { name: 'Business Page v1', src: '/brand-assets/linkedin-banners/1584x396-LinkedIn-Business-v1.webp', dimensions: '1584 × 396' },
    { name: 'Business Page v2', src: '/brand-assets/linkedin-banners/1584x396-LinkedIn-Business-v2.webp', dimensions: '1584 × 396' },
    { name: 'Business Page v3', src: '/brand-assets/linkedin-banners/1584x396-LinkedIn-Business-v3.webp', dimensions: '1584 × 396' },
  ];

  const marketingExamples = [
    { name: 'Marketing Example 1', src: '/brand-assets/marketing-examples/OCO-1A.webp' },
    { name: 'Marketing Example 2', src: '/brand-assets/marketing-examples/OCO-2A.webp' },
    { name: 'Marketing Example 3', src: '/brand-assets/marketing-examples/OCO-3A.webp' },
    { name: 'Marketing Example 4', src: '/brand-assets/marketing-examples/OCO-4A.webp' },
    { name: 'Marketing Example 5', src: '/brand-assets/marketing-examples/OCO-5A.webp' },
  ];

  const brandColors = [
    { name: 'Primary Orange', hex: '#FF5007', usage: 'Primary brand color, CTAs, highlights' },
    { name: 'Primary Black', hex: '#000000', usage: 'Text, backgrounds, primary content' },
    { name: 'Primary White', hex: '#FFFFFF', usage: 'Text on dark backgrounds, card backgrounds' },
    { name: 'Accent Orange', hex: '#ff6a2e', usage: 'Hover states, secondary accents' },
    { name: 'Dark Gray', hex: '#1a1a1a', usage: 'Secondary backgrounds, subtle elements' },
    { name: 'Medium Gray', hex: '#6b7280', usage: 'Secondary text, borders' },
    { name: 'Light Gray', hex: '#f3f4f6', usage: 'Card backgrounds, subtle sections' },
  ];

  const logoVariants = [
    { name: 'Orange', color: '#FF5007', bg: 'bg-black', svg: '/logo-assets/OCO-logo-orange.svg', png: '/logo-assets/OCO-logo-orange.png' },
    { name: 'White', color: '#FFFFFF', bg: 'bg-black', svg: '/logo-assets/OCO-logo-white.svg', png: '/logo-assets/OCO-logo-white.png' },
    { name: 'Black', color: '#000000', bg: 'bg-white', svg: '/logo-assets/OCO-logo-black.svg', png: '/logo-assets/OCO-logo-black.png' },
  ];

  return (
    <>
      <Navigation />
      <BrandPageNav sections={navSections} />
      
      <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:pl-72">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              OCO <span className="text-[#FF5007]">Brand</span> Guidelines
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Guidelines for using OCO Limited's brand assets, including logo, typography, colors, and marketing materials.
            </p>
          </div>

          {/* Logo Usage Section */}
          <section id="logo-usage" className="mb-24 scroll-mt-32">
            <h2 className="text-4xl font-bold mb-8 border-b border-gray-800 pb-4">Logo Usage</h2>
            
            <div className="space-y-12">
              {/* Logo Sizes */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#FF5007]">Logo Sizes</h3>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <div className="mb-4 h-20 flex items-center justify-center">
                      <AnimatedLogo size="small" />
                    </div>
                    <p className="text-sm text-gray-400 text-center">Small</p>
                    <p className="text-xs text-gray-500 text-center mt-1">64 × 21px</p>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <div className="mb-4 h-20 flex items-center justify-center">
                      <AnimatedLogo size="default" />
                    </div>
                    <p className="text-sm text-gray-400 text-center">Default</p>
                    <p className="text-xs text-gray-500 text-center mt-1">96 × 32px</p>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <div className="mb-4 h-20 flex items-center justify-center">
                      <AnimatedLogo size="large" />
                    </div>
                    <p className="text-sm text-gray-400 text-center">Large</p>
                    <p className="text-xs text-gray-500 text-center mt-1">128 × 44px</p>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <div className="mb-4 h-20 flex items-center justify-center">
                      <AnimatedLogo size="xlarge" />
                    </div>
                    <p className="text-sm text-gray-400 text-center">X-Large</p>
                    <p className="text-xs text-gray-500 text-center mt-1">160 × 56px</p>
                  </div>
                </div>
              </div>

              {/* Logo on Different Backgrounds */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#FF5007]">Logo on Backgrounds</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-black p-8 rounded-lg border border-gray-800">
                    <div className="mb-4 flex justify-center">
                      <AnimatedLogo size="default" color="#FF5007" />
                    </div>
                    <p className="text-sm text-gray-400 text-center">Dark Background</p>
                  </div>
                  <div className="bg-white p-8 rounded-lg border border-gray-800">
                    <div className="mb-4 flex justify-center">
                      <AnimatedLogo size="default" color="#FF5007" />
                    </div>
                    <p className="text-sm text-gray-400 text-center">Light Background</p>
                  </div>
                  <div className="bg-[#FF5007] p-8 rounded-lg">
                    <div className="mb-4 flex justify-center">
                      <AnimatedLogo size="default" color="#FFFFFF" />
                    </div>
                    <p className="text-sm text-white text-center">Orange Background</p>
                  </div>
                </div>
              </div>

              {/* Logo Guidelines */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-[#FF5007]">Guidelines</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF5007]">•</span>
                    <span>Maintain minimum clear space around the logo equal to the height of the "O" in the logo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF5007]">•</span>
                    <span>Do not stretch, distort, or modify the logo proportions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF5007]">•</span>
                    <span>Use the orange version (#FF5007) on dark backgrounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF5007]">•</span>
                    <span>Use white version on coloured or dark backgrounds when needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF5007]">•</span>
                    <span>Ensure sufficient contrast for accessibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Logo Downloads Section */}
          <section id="logo-downloads" className="mb-24 scroll-mt-32">
            <h2 className="text-4xl font-bold mb-8 border-b border-gray-800 pb-4">Logo Downloads</h2>
            <p className="text-gray-300 mb-8">
              Download high-quality OCO Limited logo files in multiple formats and colour variants.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {logoVariants.map((variant, idx) => (
                <div key={idx} className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <div className={`${variant.bg} p-8 rounded-lg mb-6 flex items-center justify-center min-h-[120px]`}>
                    <Image
                      src={variant.svg}
                      alt={`OCO Logo ${variant.name}`}
                      width={300}
                      height={100}
                      className="w-full h-auto max-w-[250px]"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">{variant.name} Logo</h3>
                  <div className="space-y-3">
                    <a
                      href={variant.svg}
                      download
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#FF5007] hover:bg-[#ff6a2e] text-white rounded-lg transition-colors font-medium"
                    >
                      <Download size={18} />
                      Download SVG
                    </a>
                    <a
                      href={variant.png}
                      download
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-gray-700 hover:border-[#FF5007] text-gray-300 hover:text-[#FF5007] rounded-lg transition-colors font-medium"
                    >
                      <Download size={18} />
                      Download PNG
                    </a>
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    SVG: Vector format (scalable)
                    <br />
                    PNG: 3000px width (high quality)
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Typography Section */}
          <section id="typography" className="mb-24 scroll-mt-32">
            <h2 className="text-4xl font-bold mb-8 border-b border-gray-800 pb-4">Typography</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-[#FF5007]">Font Family</h3>
                <p className="text-gray-300 mb-4">
                  OCO Limited uses system fonts for optimal performance and cross-platform consistency:
                </p>
                <div className="bg-black p-4 rounded mt-4 font-mono text-sm">
                  <code className="text-[#FF5007]">font-family:</code> <code className="text-gray-300">-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif</code>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#FF5007]">Heading Styles</h3>
                <div className="space-y-6 bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-2">Heading 1</h1>
                    <p className="text-sm text-gray-400">text-5xl md:text-7xl font-bold</p>
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">Heading 2</h2>
                    <p className="text-sm text-gray-400">text-4xl md:text-5xl font-bold</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Heading 3</h3>
                    <p className="text-sm text-gray-400">text-3xl font-bold</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold mb-2">Heading 4</h4>
                    <p className="text-sm text-gray-400">text-2xl font-semibold</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#FF5007]">Body Text Styles</h3>
                <div className="space-y-6 bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <div>
                    <p className="text-xl text-gray-300 mb-2">Large Body Text</p>
                    <p className="text-sm text-gray-400">text-xl text-gray-300</p>
                  </div>
                  <div>
                    <p className="text-lg text-gray-300 mb-2">Regular Body Text</p>
                    <p className="text-sm text-gray-400">text-lg text-gray-300</p>
                  </div>
                  <div>
                    <p className="text-base text-gray-400 mb-2">Small Body Text</p>
                    <p className="text-sm text-gray-400">text-base text-gray-400</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Extra Small Text</p>
                    <p className="text-sm text-gray-400">text-sm text-gray-500</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Color Palette Section */}
          <section id="color-palette" className="mb-24 scroll-mt-32">
            <h2 className="text-4xl font-bold mb-8 border-b border-gray-800 pb-4">Color Palette</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandColors.map((color, idx) => (
                <div key={idx} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <div 
                    className="w-full h-24 rounded-lg mb-4"
                    style={{ backgroundColor: color.hex }}
                  />
                  <h3 className="text-lg font-semibold mb-1">{color.name}</h3>
                  <p className="text-[#FF5007] font-mono text-sm mb-2">{color.hex}</p>
                  <p className="text-sm text-gray-400">{color.usage}</p>
                </div>
              ))}
            </div>
          </section>

          {/* LinkedIn Banners Section */}
          <section id="linkedin-banners" className="mb-24 scroll-mt-32">
            <h2 className="text-4xl font-bold mb-8 border-b border-gray-800 pb-4">LinkedIn Banners</h2>
            <p className="text-gray-300 mb-8">
              Professional banner images optimised for LinkedIn personal profiles and business pages. Click any image to view in full size.
            </p>
            
            <BrandPageClient 
              linkedInBanners={linkedInBanners}
              marketingExamples={[]}
              type="linkedin"
            />
          </section>

          {/* Marketing Examples Section */}
          <section id="marketing-examples" className="mb-24 scroll-mt-32">
            <h2 className="text-4xl font-bold mb-8 border-b border-gray-800 pb-4">Marketing Examples</h2>
            <p className="text-gray-300 mb-8">
              Examples of marketing materials showcasing the OCO Limited brand in action. Click any image to view in full size.
            </p>
            
            <BrandPageClient 
              linkedInBanners={[]}
              marketingExamples={marketingExamples}
              type="marketing"
            />
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

