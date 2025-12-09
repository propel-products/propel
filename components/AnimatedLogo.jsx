'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function AnimatedLogo({ className = "", size = "default", color = "auto" }) {
  const [isVisible, setIsVisible] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState(0);
  const [themeColor, setThemeColor] = useState('#00D4FF');
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Trigger animation on mount
    setIsVisible(true);
    
    // Get the CSS variable value for glow effects
    const computedColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();
    if (computedColor) setThemeColor(computedColor);
    
    // Randomly trigger glow animation every 10-15 seconds
    const interval = setInterval(() => {
      setAnimationTrigger(prev => prev + 1);
      // Update color in case theme changed
      const newColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();
      if (newColor) setThemeColor(newColor);
    }, Math.random() * 5000 + 10000);

    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    small: "w-20 h-5",
    default: "w-28 h-7", 
    large: "w-36 h-9",
    xlarge: "w-44 h-11"
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, delay: i * 0.1, ease: "easeInOut" },
        opacity: { duration: 0.5, delay: i * 0.1 }
      }
    })
  };

  const glowColor = color === "white" ? "#FFFFFF" : color === "black" ? "#111827" : themeColor;
  
  const glowVariants = {
    initial: { 
      filter: `drop-shadow(0 0 0px ${glowColor})`,
      scale: 1
    },
    glow: {
      filter: `drop-shadow(0 0 20px ${glowColor}) drop-shadow(0 0 40px ${glowColor})`,
      scale: 1.05,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: 3,
        repeatType: "reverse"
      }
    }
  };

  // Determine fill color based on color prop and theme
  // "auto" = responds to light/dark mode (black on light, white on dark)
  // "white" = always white (for dark backgrounds)
  // "black" = always black (for light backgrounds)  
  // "primary" = always uses brand accent color
  const getFillColor = () => {
    if (color === "white") return "#FFFFFF";
    if (color === "black") return "#111827";
    if (color === "primary") return themeColor;
    // "auto" - respond to theme
    if (!mounted) return themeColor; // SSR fallback
    return resolvedTheme === "dark" ? "#FFFFFF" : "#111827";
  };

  const fillColor = getFillColor();

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className}`}
      variants={glowVariants}
      initial="initial"
      animate={animationTrigger > 0 ? "glow" : "initial"}
      key={animationTrigger}
    >
      <svg width="100%" height="100%" viewBox="0 0 420 105" fill="none">
        {/* P */}
        <motion.path
          d="M17.7289 54.0794H49.6909V14.4544H17.7289V54.0794ZM67.4198 13.4575V55.0762L53.9359 68.5338H17.7289V87.2248H0V0H53.9359L67.4198 13.4575Z"
          fill={fillColor}
          variants={pathVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          custom={0}
        />
        
        {/* R */}
        <motion.path
          d="M76.6596 87.2249V31.1518L90.3933 17.4451H126.351V33.3947H94.3885V87.2249H76.6596Z"
          fill={fillColor}
          variants={pathVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          custom={1}
        />
        
        {/* O */}
        <motion.path
          d="M133.183 74.0166V30.6534L146.417 17.4451H183.623L196.857 30.6534V74.0166L183.623 87.2249H146.417L133.183 74.0166ZM150.912 72.7705H179.128V31.8995H150.912V72.7705Z"
          fill={fillColor}
          variants={pathVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          custom={2}
        />
        
        {/* P */}
        <motion.path
          d="M207.674 104.67V17.4451H258.738L272.971 31.6502V73.0197L258.738 87.2249H225.403V104.67H207.674ZM255.242 32.3979H225.403V72.2721H255.242V32.3979Z"
          fill={fillColor}
          variants={pathVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          custom={3}
        />
        
        {/* E */}
        <motion.path
          d="M282.973 74.0166V30.6534L296.207 17.4451H345.399V56.5716H300.702V72.2721H342.902V87.2249H296.207L282.973 74.0166ZM300.702 46.8523L329.917 45.6062V31.401H300.702V46.8523Z"
          fill={fillColor}
          variants={pathVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          custom={4}
        />
        
        {/* L */}
        <motion.path
          d="M356.241 87.2248V0H373.97V87.2248H356.241Z"
          fill={fillColor}
          variants={pathVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          custom={5}
        />
        
        {/* Triangle */}
        <motion.path
          d="M404 70L417.856 87.25H390.144L404 70Z"
          fill={fillColor}
          variants={pathVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          custom={6}
        />
      </svg>
    </motion.div>
  );
}
