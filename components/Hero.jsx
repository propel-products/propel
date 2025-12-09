import Button from './Button';
import { SequentialText, SequentialWords } from './SequentialText';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF5007] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF5007] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 pb-20 md:pb-32 relative z-10">
        <div className="max-w-4xl">
          <SequentialText delay={0.5} className="mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-tight">
              <SequentialWords 
                text="Build Intelligent" 
                delay={0.5} 
                wordDelay={0.15}
                className="text-white text-4xl md:text-5xl lg:text-6xl"
              />
              <SequentialWords 
                text="Products" 
                delay={1.2} 
                wordDelay={0.15}
                className="text-[#FF5007] text-4xl md:text-5xl lg:text-6xl"
              />
            </h1>
          </SequentialText>
          
          <SequentialText delay={1.8} className="mb-12">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl">
              <strong className="text-white">Propel</strong> is a digital and AI studio that designs and builds modern web apps, automation systems and intelligent tools for teams who want to move fast without sacrificing quality.
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
