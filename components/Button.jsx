import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  icon = false,
  className = '' 
}) {
  const baseStyles = "relative px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto overflow-hidden group";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover hover:scale-105 focus:outline-2 focus:outline-white focus:outline-offset-2",
    secondary: "border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black focus:outline-2 focus:outline-offset-2",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:outline-2 focus:outline-offset-2"
  };

  const content = (
    <>
      {/* Animated pattern overlay for primary buttons */}
      {variant === 'primary' && (
        <span 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent 0px, transparent 2px, currentColor 2px, currentColor 3px, transparent 3px, transparent 5px)`,
            backgroundSize: '7px 7px',
          }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
      </span>
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
