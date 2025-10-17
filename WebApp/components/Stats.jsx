export default function Stats() {
  const stats = [
    { number: '500+', label: 'Businesses Trust OCO' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '15+', label: 'Years Experience' },
    { number: '$2B+', label: 'Assets Under Management' }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#FF5007] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
