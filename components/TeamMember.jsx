import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

export default function TeamMember({ 
  name, 
  role, 
  summary, 
  email, 
  phone, 
  imageSrc 
}) {
  return (
    <div className="text-center">
      <div className="relative w-48 h-48 mx-auto mb-6">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="rounded-lg object-cover border-4 border-[#FF5007]"
        />
      </div>
      
      <h3 className="text-2xl font-bold text-black mb-2">{name}</h3>
      <p className="text-[#FF5007] font-semibold mb-4">{role}</p>
      <p className="text-gray-600 mb-6 max-w-xs mx-auto leading-relaxed">
        {summary}
      </p>
      
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Mail size={16} />
          <a href={`mailto:${email}`} className="hover:text-[#FF5007] transition-colors">
            {email}
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Phone size={16} />
          <a href={`tel:${phone}`} className="hover:text-[#FF5007] transition-colors">
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
}
