import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  icon = false,
  className = '' 
}) {
  const baseStyles = "px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto";
  
  const variants = {
    primary: "bg-[#FF5007] text-white hover:bg-[#ff6a2e] hover:scale-105 focus:outline-2 focus:outline-white focus:outline-offset-2",
    secondary: "border-2 border-white text-white hover:bg-white hover:text-black focus:outline-2 focus:outline-white focus:outline-offset-2",
    outline: "border-2 border-[#FF5007] text-[#FF5007] hover:bg-[#FF5007] hover:text-white focus:outline-2 focus:outline-[#FF5007] focus:outline-offset-2"
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight size={20} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
}
