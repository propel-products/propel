export default function Stats() {
  const stats = [
    { number: 'Clean', label: 'Modern Design' },
    { number: 'Smart', label: 'AI Integration' },
    { number: 'Fast', label: 'Delivery Cycles' },
    { number: 'Focused', label: 'Partnership' }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center px-4 py-6 sm:py-8">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-3 sm:mb-4 leading-tight whitespace-nowrap">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xs mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
