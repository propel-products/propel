'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedLogo({ className = "", size = "default" }) {
  const [isVisible, setIsVisible] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState(0);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
    
    // Randomly trigger glow animation every 10-15 seconds
    const interval = setInterval(() => {
      setAnimationTrigger(prev => prev + 1);
    }, Math.random() * 5000 + 10000);

    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    small: "w-16 h-5",
    default: "w-24 h-8", 
    large: "w-32 h-11",
    xlarge: "w-40 h-14"
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, delay: i * 0.2, ease: "easeInOut" },
        opacity: { duration: 0.5, delay: i * 0.2 }
      }
    })
  };

  const glowVariants = {
    initial: { 
      filter: "drop-shadow(0 0 0px #FF5007)",
      scale: 1
    },
    glow: {
      filter: "drop-shadow(0 0 20px #FF5007) drop-shadow(0 0 40px #FF5007)",
      scale: 1.05,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: 3,
        repeatType: "reverse"
      }
    }
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className}`}
      variants={glowVariants}
      initial="initial"
      animate={animationTrigger > 0 ? "glow" : "initial"}
      key={animationTrigger}
    >
      <svg width="100%" height="100%" viewBox="0 0 726 248" fill="none">
        {/* First O */}
        <motion.path
          d="M124 0C192.483 0 248 55.5167 248 124C248 192.483 192.483 248 124 248C55.5167 248 0 192.483 0 124C0 55.5167 55.5167 5.57757e-05 124 0ZM124 50C83.1309 50 50 83.1309 50 124C50 164.869 83.1309 198 124 198C164.869 198 198 164.869 198 124C198 83.1309 164.869 50 124 50Z"
          fill="#FF5007"
          variants={pathVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          custom={0}
        />
        
        {/* C */}
        <motion.path
          d="M388.893 0C423.105 0 451.099 11.5 474.344 36C464 55.5 464 55.5 451.099 80.5C434.4 58.4109 413.971 49.7004 388.893 49.7004C351.704 49.7004 315.118 79.5861 315.118 124C315.118 168.414 352.707 198.3 388.893 198.3C417.359 198.3 432.099 187.5 451.099 168.5C463 193 465.156 195.656 476 215.444C429.5 245.5 416 248 388.893 248C320.469 248 265 192.483 265 124C265 55.5167 320.469 0 388.893 0Z"
          fill="#FF5007"
          variants={pathVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          custom={1}
        />
        
        {/* Second O */}
        <motion.path
          d="M602 0C670.483 0 726 55.5167 726 124C726 192.483 670.483 248 602 248C533.517 248 478 192.483 478 124C478 55.5168 533.517 0.000187755 602 0ZM602 50.2021C561.243 50.2023 528.203 83.2428 528.203 124C528.203 164.757 561.243 197.798 602 197.798C642.757 197.798 675.798 164.757 675.798 124C675.798 83.2427 642.757 50.2021 602 50.2021Z"
          fill="#FF5007"
          variants={pathVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          custom={2}
        />
      </svg>
    </motion.div>
  );
}
