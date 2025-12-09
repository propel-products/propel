import { Check } from 'lucide-react';

export default function ServiceCard({ title, description, features }) {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border-2 border-transparent hover:border-primary group">
      <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-primary transition-colors text-center">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-700">
            <Check size={20} className="text-primary flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
