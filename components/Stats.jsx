export default function Stats() {
  const stats = [
    { number: 'Expert', label: 'Financial Guidance' },
    { number: 'Trusted', label: 'Business Partner' },
    { number: 'Proven', label: 'Track Record' },
    { number: 'Dedicated', label: 'Client Support' }
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
