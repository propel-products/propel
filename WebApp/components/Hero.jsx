import Button from './Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF5007] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF5007] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Financial Clarity.
            <span className="text-[#FF5007]"> Strategic Growth.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
            Expert accounting and advisory services that empower businesses to make confident financial decisions and achieve sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" icon>
              Schedule Consultation
            </Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
