'use client';

import Button from './Button';
import { SequentialText, SequentialWords } from './SequentialText';
import PartnerLogos from './PartnerLogos';

// Variant A: Current minimal hero (default)
export function HeroMinimal() {
  return (
    <section className="relative min-h-screen bg-white dark:bg-black flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 pb-20 md:pb-32 relative z-10">
        <div className="max-w-4xl">
          <SequentialText delay={0.5} className="mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-gray-900 dark:text-white leading-tight">
              <SequentialWords 
                text="Build Intelligent" 
                delay={0.5} 
                wordDelay={0.15}
                className="text-gray-900 dark:text-white text-4xl md:text-5xl lg:text-6xl"
              />
              <SequentialWords 
                text="Products" 
                delay={1.2} 
                wordDelay={0.15}
                className="text-primary text-4xl md:text-5xl lg:text-6xl"
              />
            </h1>
          </SequentialText>
          
          <SequentialText delay={1.8} className="mb-12">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl">
              <strong className="text-gray-900 dark:text-white">Propel</strong> is a digital and AI studio that designs and builds modern web apps, automation systems and intelligent tools for teams who want to move fast without sacrificing quality.
            </p>
          </SequentialText>
          
          <SequentialText delay={2.5} className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" icon>
              Start a Project
            </Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </SequentialText>
        </div>
      </div>
    </section>
  );
}

// Variant B: With partner logos marquee
export function HeroWithLogos() {
  return (
    <>
      <section className="relative min-h-[85vh] bg-white dark:bg-black flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <SequentialText delay={0.5} className="mb-6">
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-gray-900 dark:text-white leading-tight">
                <SequentialWords 
                  text="Build Intelligent" 
                  delay={0.5} 
                  wordDelay={0.15}
                  className="text-gray-900 dark:text-white text-4xl md:text-5xl lg:text-6xl"
                />
                <SequentialWords 
                  text="Products" 
                  delay={1.2} 
                  wordDelay={0.15}
                  className="text-primary text-4xl md:text-5xl lg:text-6xl"
                />
              </h1>
            </SequentialText>
            
            <SequentialText delay={1.8} className="mb-12">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl">
                <strong className="text-gray-900 dark:text-white">Propel</strong> is a digital and AI studio that designs and builds modern web apps, automation systems and intelligent tools for teams who want to move fast without sacrificing quality.
              </p>
            </SequentialText>
            
            <SequentialText delay={2.5} className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" icon>
                Start a Project
              </Button>
              <Button href="/services" variant="secondary">
                Explore Services
              </Button>
            </SequentialText>
          </div>
        </div>
      </section>
      <PartnerLogos variant="static" title="Powered by Industry Leaders" />
    </>
  );
}

// Variant C: Bold statement hero (like Product™)
export function HeroBoldStatement() {
  return (
    <section className="relative min-h-screen bg-white dark:bg-black flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10 text-center">
        <SequentialText delay={0.3} className="mb-4">
          <span className="inline-block px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium">
            AI Studio • Isle of Man
          </span>
        </SequentialText>

        <SequentialText delay={0.6} className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight">
            The AI Studio<br />
            <span className="text-primary">That Ships</span>
          </h1>
        </SequentialText>
        
        <SequentialText delay={1.2} className="mb-12">
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We design and build intelligent products with speed, clarity and purpose.
          </p>
        </SequentialText>
        
        <SequentialText delay={1.8} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" icon>
            Start a Project
          </Button>
          <Button href="/services" variant="secondary">
            See Our Work
          </Button>
        </SequentialText>

        {/* Stats row */}
        <SequentialText delay={2.4} className="mt-20">
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">50+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">3x</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Faster Deployment</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">24/7</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">AI Support</div>
            </div>
          </div>
        </SequentialText>
      </div>
    </section>
  );
}

// Variant D: Split layout with visual
export function HeroSplit() {
  return (
    <section className="relative min-h-screen bg-white dark:bg-black flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <SequentialText delay={0.3} className="mb-4">
              <span className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for new projects
              </span>
            </SequentialText>

            <SequentialText delay={0.6} className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Build Intelligent<br />
                <span className="text-primary">Products</span>
              </h1>
            </SequentialText>
            
            <SequentialText delay={1.0} className="mb-8">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-white">Propel</strong> is a digital and AI studio that designs and builds modern web apps, automation systems and intelligent tools for teams who want to move fast without sacrificing quality.
              </p>
            </SequentialText>
            
            <SequentialText delay={1.4} className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" icon>
                Start a Project
              </Button>
              <Button href="/services" variant="secondary">
                Explore Services
              </Button>
            </SequentialText>
          </div>

          {/* Right: Visual */}
          <SequentialText delay={0.8}>
            <div className="relative">
              {/* Gradient orbs */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
              
              {/* Card stack */}
              <div className="relative space-y-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 transform rotate-1 shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                    <div className="h-4 bg-primary/30 rounded w-5/6"></div>
                  </div>
                </div>
                
                <div className="bg-gray-900 dark:bg-gray-900 rounded-2xl p-6 transform -rotate-1 shadow-xl ml-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">AI Agent Active</span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    Processing 1,247 requests today...
                  </div>
                </div>
              </div>
            </div>
          </SequentialText>
        </div>
      </div>
    </section>
  );
}

// Default export - can be changed to any variant
export default function Hero({ variant = 'minimal' }) {
  switch (variant) {
    case 'logos':
      return <HeroWithLogos />;
    case 'bold':
      return <HeroBoldStatement />;
    case 'split':
      return <HeroSplit />;
    case 'minimal':
    default:
      return <HeroMinimal />;
  }
}
