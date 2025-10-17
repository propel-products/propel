'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function SequentialText({ 
  children, 
  delay = 0, 
  className = "",
  stagger = 0.1,
  direction = "up"
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth feel
        staggerChildren: stagger
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Specialized component for text that appears word by word
export function SequentialWords({ 
  text, 
  delay = 0, 
  className = "",
  wordDelay = 0.1 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const words = text.split(' ');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: index * wordDelay,
            ease: "easeOut"
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

// Component for sequential section reveals
export function SequentialSection({ 
  children, 
  delay = 0, 
  className = "",
  direction = "up"
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.section
      initial={{ 
        opacity: 0, 
        y: direction === "up" ? 50 : -50,
        scale: 0.98
      }}
      animate={isVisible ? { 
        opacity: 1, 
        y: 0,
        scale: 1
      } : { 
        opacity: 0, 
        y: direction === "up" ? 50 : -50,
        scale: 0.98
      }}
      transition={{
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// Default export for backward compatibility
export default SequentialText;
