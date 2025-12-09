'use client';

import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Seeded random number generator for deterministic values (avoids hydration mismatch)
const seededRandom = (seed) => {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
};

// Effect Components

// 1. Gradient Orbs - Animated blur orbs
const GradientOrbs = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    <div 
      className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl"
      style={{
        background: 'linear-gradient(135deg, #00D4FF 0%, #0EA5E9 100%)',
        opacity: 0.4,
        animation: 'orbFloat1 8s ease-in-out infinite'
      }}
    />
    <div 
      className="absolute top-20 right-20 w-48 h-48 rounded-full blur-3xl"
      style={{
        background: 'linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%)',
        opacity: 0.4,
        animation: 'orbFloat2 10s ease-in-out infinite'
      }}
    />
    <div 
      className="absolute bottom-10 left-1/3 w-56 h-56 rounded-full blur-3xl"
      style={{
        background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
        opacity: 0.3,
        animation: 'orbFloat3 12s ease-in-out infinite'
      }}
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Gradient Orbs</span>
    </div>
  </div>
);

// 2. Grid Pattern - Animated CSS grid
const GridPattern = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        animation: 'gridMove 20s linear infinite'
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950" />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Grid Pattern</span>
    </div>
  </div>
);

// 3. Floating Particles - Fixed positions with animation
const FloatingParticles = () => {
  const particles = [
    { left: '10%', top: '20%', delay: 0, size: 8 },
    { left: '25%', top: '60%', delay: 0.5, size: 6 },
    { left: '40%', top: '30%', delay: 1, size: 10 },
    { left: '55%', top: '70%', delay: 1.5, size: 5 },
    { left: '70%', top: '40%', delay: 2, size: 8 },
    { left: '85%', top: '25%', delay: 2.5, size: 7 },
    { left: '15%', top: '80%', delay: 3, size: 6 },
    { left: '60%', top: '15%', delay: 3.5, size: 9 },
    { left: '80%', top: '65%', delay: 4, size: 5 },
    { left: '35%', top: '85%', delay: 4.5, size: 8 },
    { left: '5%', top: '45%', delay: 1.2, size: 6 },
    { left: '95%', top: '55%', delay: 2.8, size: 7 },
  ];

  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-cyan-400"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: 0.6,
            animation: `particleFloat 4s ease-in-out infinite`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white/60 text-sm font-medium">Floating Particles</span>
      </div>
    </div>
  );
};

// 4. Glowing Border - Animated gradient border
const GlowingBorder = () => (
  <div className="relative h-96 overflow-hidden rounded-xl p-[2px]" style={{
    background: 'linear-gradient(90deg, #00D4FF, #8B5CF6, #D946EF, #00D4FF)',
    backgroundSize: '300% 100%',
    animation: 'gradientBorder 4s linear infinite'
  }}>
    <div className="h-full w-full bg-slate-950 rounded-xl flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Glowing Border</span>
    </div>
  </div>
);

// 5. Wave Animation - SVG waves
const WaveAnimation = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    <svg className="absolute bottom-0 w-full h-48" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path 
        fill="rgba(0, 212, 255, 0.2)"
        d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128L1440,320L0,320Z"
        style={{ animation: 'waveMove 8s ease-in-out infinite' }}
      />
      <path 
        fill="rgba(139, 92, 246, 0.2)"
        d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L0,320Z"
        style={{ animation: 'waveMove 10s ease-in-out infinite reverse' }}
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Wave Animation</span>
    </div>
  </div>
);

// 6. 3D Rotating Cube
const Cube3D = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl" style={{ perspective: '800px' }}>
    <div className="absolute inset-0 flex items-center justify-center">
      <div 
        className="relative w-24 h-24"
        style={{ 
          transformStyle: 'preserve-3d',
          animation: 'cubeRotate 8s linear infinite'
        }}
      >
        {/* Front */}
        <div className="absolute w-24 h-24 border-2 border-cyan-400/50 bg-cyan-400/10" style={{ transform: 'translateZ(48px)' }} />
        {/* Back */}
        <div className="absolute w-24 h-24 border-2 border-cyan-400/50 bg-cyan-400/10" style={{ transform: 'translateZ(-48px) rotateY(180deg)' }} />
        {/* Left */}
        <div className="absolute w-24 h-24 border-2 border-purple-400/50 bg-purple-400/10" style={{ transform: 'translateX(-48px) rotateY(-90deg)' }} />
        {/* Right */}
        <div className="absolute w-24 h-24 border-2 border-purple-400/50 bg-purple-400/10" style={{ transform: 'translateX(48px) rotateY(90deg)' }} />
        {/* Top */}
        <div className="absolute w-24 h-24 border-2 border-emerald-400/50 bg-emerald-400/10" style={{ transform: 'translateY(-48px) rotateX(90deg)' }} />
        {/* Bottom */}
        <div className="absolute w-24 h-24 border-2 border-emerald-400/50 bg-emerald-400/10" style={{ transform: 'translateY(48px) rotateX(-90deg)' }} />
      </div>
    </div>
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-white/60 text-sm font-medium">3D Cube</span>
    </div>
  </div>
);

// 7. Noisy Gradient
const NoisyGradient = () => (
  <div className="relative h-96 overflow-hidden rounded-xl">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-pink-500/30" />
    <svg className="absolute inset-0 w-full h-full opacity-40">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Noisy Gradient</span>
    </div>
  </div>
);

// 8. Glitch Text
const GlitchText = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div className="relative">
      <span className="text-6xl font-bold text-white relative inline-block">
        PROPEL
        <span 
          className="absolute top-0 left-0 text-6xl font-bold text-cyan-400 opacity-80"
          style={{ 
            clipPath: 'polygon(0 0, 100% 0, 100% 33%, 0 33%)',
            animation: 'glitch1 2s infinite linear alternate-reverse'
          }}
        >
          PROPEL
        </span>
        <span 
          className="absolute top-0 left-0 text-6xl font-bold text-pink-400 opacity-80"
          style={{ 
            clipPath: 'polygon(0 67%, 100% 67%, 100% 100%, 0 100%)',
            animation: 'glitch2 2s infinite linear alternate-reverse'
          }}
        >
          PROPEL
        </span>
      </span>
    </div>
  </div>
);

// 9. Morphing Blob
const MorphingBlob = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div 
      className="w-48 h-48 bg-gradient-to-br from-cyan-400 to-purple-500 blur-sm opacity-70"
      style={{ animation: 'blobMorph 8s ease-in-out infinite' }}
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/80 text-sm font-medium">Morphing Blob</span>
    </div>
  </div>
);

// 10. Radial Pulse
const RadialPulse = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    {[0, 1, 2, 3].map((i) => (
      <div
        key={i}
        className="absolute w-24 h-24 border-2 border-cyan-400/60 rounded-full"
        style={{
          animation: 'pulseFade 2s ease-out infinite',
          animationDelay: `${i * 0.5}s`
        }}
      />
    ))}
    <div className="w-6 h-6 bg-cyan-400 rounded-full" />
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-white/60 text-sm font-medium">Radial Pulse</span>
    </div>
  </div>
);

// 11. Matrix Rain
const MatrixRain = () => {
  const columns = Array.from({ length: 20 }, (_, i) => ({
    chars: 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'.split(''),
    delay: i * 0.3,
    speed: 2 + seededRandom(i + 100) * 2
  }));

  return (
    <div className="relative h-96 bg-black overflow-hidden rounded-xl font-mono">
      {columns.map((col, i) => (
        <div
          key={i}
          className="absolute text-emerald-400 text-xs leading-tight"
          style={{
            left: `${i * 5}%`,
            animation: `matrixFall ${col.speed}s linear infinite`,
            animationDelay: `${col.delay}s`
          }}
        >
          {col.chars.slice(0, 15).map((char, j) => (
            <div key={j} style={{ opacity: 1 - j * 0.06 }}>{char}</div>
          ))}
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-emerald-400/80 text-sm font-medium bg-black/50 px-3 py-1 rounded">Matrix Rain</span>
      </div>
    </div>
  );
};

// 12. Spotlight Effect
const SpotlightEffect = () => {
  const containerRef = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setPos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-96 bg-slate-950 overflow-hidden rounded-xl cursor-none"
    >
      <div 
        className="absolute w-64 h-64 rounded-full pointer-events-none transition-all duration-75"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, transparent 70%)',
          filter: 'blur(20px)'
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white/60 text-sm font-medium">Spotlight (move mouse)</span>
      </div>
    </div>
  );
};

// 13. Isometric Grid - Working SVG pattern
const IsometricGrid = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="isoPattern" width="56" height="100" patternUnits="userSpaceOnUse">
          <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="0.5"/>
          <path d="M28 0L28 34L0 50L0 16L28 0" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="0.5"/>
          <path d="M28 0L28 34L56 50L56 16L28 0" fill="none" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#isoPattern)" />
    </svg>
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950" />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Isometric Grid</span>
    </div>
  </div>
);

// 14. Circuit Board
const CircuitBoard = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circuitPattern" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="3" fill="rgba(0, 212, 255, 0.6)" />
          <circle cx="40" cy="25" r="2" fill="rgba(0, 212, 255, 0.4)" />
          <circle cx="70" cy="60" r="3" fill="rgba(0, 212, 255, 0.6)" />
          <circle cx="25" cy="70" r="2" fill="rgba(0, 212, 255, 0.4)" />
          <path d="M10 10 L40 10 L40 25" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="1" fill="none" />
          <path d="M40 25 L70 25 L70 60" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="1" fill="none" />
          <path d="M70 60 L70 70 L25 70" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" fill="none" />
          <path d="M25 70 L10 70 L10 10" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuitPattern)" />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Circuit Board</span>
    </div>
  </div>
);

// 15. Aurora Effect
const AuroraEffect = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    <div 
      className="absolute -top-20 left-0 w-full h-64 bg-gradient-to-r from-emerald-500/30 via-cyan-500/20 to-purple-500/30 blur-3xl"
      style={{ animation: 'auroraWave1 8s ease-in-out infinite' }}
    />
    <div 
      className="absolute -top-10 left-1/4 w-3/4 h-48 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/30 blur-3xl"
      style={{ animation: 'auroraWave2 10s ease-in-out infinite' }}
    />
    <div 
      className="absolute top-0 right-0 w-1/2 h-56 bg-gradient-to-l from-emerald-400/20 to-transparent blur-3xl"
      style={{ animation: 'auroraWave3 12s ease-in-out infinite' }}
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Aurora Borealis</span>
    </div>
  </div>
);

// 16. Typewriter Effect
const TypewriterText = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Building the future of AI...';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        setTimeout(() => { index = 0; }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
      <div className="text-2xl font-mono text-white">
        {displayText}
        <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1" style={{ animation: 'cursorBlink 1s step-end infinite' }} />
      </div>
    </div>
  );
};

// 17. Hexagon Grid (NEW)
const HexagonGrid = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hexPattern" width="60" height="52" patternUnits="userSpaceOnUse">
          <path d="M30 0 L60 15 L60 37 L30 52 L0 37 L0 15 Z" fill="none" stroke="rgba(0, 212, 255, 0.2)" strokeWidth="0.5"/>
          <path d="M30 52 L60 67 M30 52 L0 67" fill="none" stroke="rgba(0, 212, 255, 0.15)" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexPattern)" />
    </svg>
    <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-950" />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Hexagon Grid</span>
    </div>
  </div>
);

// 18. Concentric Circles (NEW)
const ConcentricCircles = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full border border-cyan-400/20"
        style={{
          width: `${(i + 1) * 50}px`,
          height: `${(i + 1) * 50}px`,
          animation: `concentricPulse 4s ease-in-out infinite`,
          animationDelay: `${i * 0.2}s`
        }}
      />
    ))}
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-white/60 text-sm font-medium">Concentric Circles</span>
    </div>
  </div>
);

// 19. DNA Helix (NEW)
const DNAHelix = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div className="relative w-32 h-full">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="absolute w-full flex justify-between items-center" style={{ top: `${i * 5}%` }}>
          <div 
            className="w-3 h-3 rounded-full bg-cyan-400"
            style={{ 
              animation: `dnaSwing 3s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`
            }}
          />
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 via-transparent to-purple-400/50 mx-1" />
          <div 
            className="w-3 h-3 rounded-full bg-purple-400"
            style={{ 
              animation: `dnaSwing 3s ease-in-out infinite reverse`,
              animationDelay: `${i * 0.15}s`
            }}
          />
        </div>
      ))}
    </div>
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-white/60 text-sm font-medium">DNA Helix</span>
    </div>
  </div>
);

// 20. Meteor Shower (NEW)
const MeteorShower = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 bg-gradient-to-b from-white to-transparent"
        style={{
          left: `${10 + i * 9}%`,
          top: '-20%',
          height: '80px',
          transform: 'rotate(45deg)',
          animation: `meteorFall 2s linear infinite`,
          animationDelay: `${i * 0.3}s`,
          opacity: 0
        }}
      />
    ))}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Meteor Shower</span>
    </div>
  </div>
);

// 21. Breathing Ring (NEW)
const BreathingRing = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div 
      className="w-32 h-32 rounded-full border-4 border-cyan-400"
      style={{
        boxShadow: '0 0 20px rgba(0, 212, 255, 0.5), inset 0 0 20px rgba(0, 212, 255, 0.3)',
        animation: 'breathe 4s ease-in-out infinite'
      }}
    />
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-white/60 text-sm font-medium">Breathing Ring</span>
    </div>
  </div>
);

// 22. Dot Wave (NEW)
const DotWave = () => {
  const dots = Array.from({ length: 15 }, (_, i) => i);
  
  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
      <div className="flex gap-2">
        {dots.map((i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-cyan-400"
            style={{
              animation: 'dotWave 1.5s ease-in-out infinite',
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <span className="text-white/60 text-sm font-medium">Dot Wave</span>
      </div>
    </div>
  );
};

// 23. Spinning Rings (NEW)
const SpinningRings = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center" style={{ perspective: '800px' }}>
    <div 
      className="absolute w-40 h-40 rounded-full border-2 border-cyan-400/50"
      style={{ animation: 'spinX 4s linear infinite' }}
    />
    <div 
      className="absolute w-40 h-40 rounded-full border-2 border-purple-400/50"
      style={{ animation: 'spinY 5s linear infinite' }}
    />
    <div 
      className="absolute w-40 h-40 rounded-full border-2 border-emerald-400/50"
      style={{ animation: 'spinZ 6s linear infinite' }}
    />
    <div className="w-4 h-4 rounded-full bg-white" />
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-white/60 text-sm font-medium">Spinning Rings</span>
    </div>
  </div>
);

// 24. Ripple Effect (NEW)
const RippleEffect = () => {
  const [ripples, setRipples] = useState([]);
  
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const id = Date.now();
    setRipples(prev => [...prev, { id, x, y }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 1000);
  };

  return (
    <div 
      className="relative h-96 bg-slate-950 overflow-hidden rounded-xl cursor-pointer"
      onClick={handleClick}
    >
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute w-4 h-4 border-2 border-cyan-400 rounded-full"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            transform: 'translate(-50%, -50%)',
            animation: 'rippleExpand 1s ease-out forwards'
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-white/60 text-sm font-medium">Click for Ripple</span>
      </div>
    </div>
  );
};

// 25. Starfield (NEW)
const Starfield = () => {
  const stars = Array.from({ length: 100 }, (_, i) => ({
    left: `${seededRandom(i) * 100}%`,
    top: `${seededRandom(i + 100) * 100}%`,
    size: seededRandom(i + 200) * 2 + 1,
    delay: seededRandom(i + 300) * 3,
    duration: 1 + seededRandom(i + 400) * 2
  }));

  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animation: `starTwinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white/60 text-sm font-medium">Starfield</span>
      </div>
    </div>
  );
};

// 26. Gradient Mesh (NEW)
const GradientMesh = () => (
  <div className="relative h-96 overflow-hidden rounded-xl">
    <div className="absolute inset-0" style={{
      background: `
        radial-gradient(at 40% 20%, rgba(0, 212, 255, 0.4) 0px, transparent 50%),
        radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.4) 0px, transparent 50%),
        radial-gradient(at 0% 50%, rgba(16, 185, 129, 0.4) 0px, transparent 50%),
        radial-gradient(at 80% 50%, rgba(236, 72, 153, 0.4) 0px, transparent 50%),
        radial-gradient(at 0% 100%, rgba(139, 92, 246, 0.4) 0px, transparent 50%),
        radial-gradient(at 80% 100%, rgba(0, 212, 255, 0.4) 0px, transparent 50%),
        radial-gradient(at 0% 0%, rgba(16, 185, 129, 0.4) 0px, transparent 50%)
      `,
      backgroundColor: '#020617'
    }} />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Gradient Mesh</span>
    </div>
  </div>
);

// 27. Rotating Squares (NEW)
const RotatingSquares = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="absolute border-2 border-cyan-400/30"
        style={{
          width: `${80 + i * 40}px`,
          height: `${80 + i * 40}px`,
          animation: `squareRotate ${6 + i * 2}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`
        }}
      />
    ))}
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-white/60 text-sm font-medium">Rotating Squares</span>
    </div>
  </div>
);

// 28. Scan Line (NEW)
const ScanLine = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    <div 
      className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      style={{ animation: 'scanMove 3s linear infinite' }}
    />
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 212, 255, 0.1) 2px, rgba(0, 212, 255, 0.1) 4px)'
    }} />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Scan Line</span>
    </div>
  </div>
);

// 29. Plasma Effect
const PlasmaEffect = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    <div className="absolute inset-0" style={{
      background: `
        radial-gradient(circle at 20% 50%, rgba(255, 0, 128, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 50%, rgba(0, 255, 255, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 50% 20%, rgba(128, 0, 255, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 50% 80%, rgba(0, 255, 128, 0.3) 0%, transparent 50%)
      `,
      animation: 'plasmaMove 10s ease-in-out infinite'
    }} />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Plasma Effect</span>
    </div>
  </div>
);

// 30. Neon Lines
const NeonLines = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="absolute h-px w-full"
        style={{
          top: `${20 + i * 15}%`,
          background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? '#00D4FF' : '#8B5CF6'}, transparent)`,
          boxShadow: `0 0 10px ${i % 2 === 0 ? '#00D4FF' : '#8B5CF6'}`,
          animation: `neonPulse 2s ease-in-out infinite`,
          animationDelay: `${i * 0.3}s`
        }}
      />
    ))}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Neon Lines</span>
    </div>
  </div>
);

// 31. Floating Cubes
const FloatingCubes = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl" style={{ perspective: '1000px' }}>
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute border border-cyan-400/30 bg-cyan-400/5"
        style={{
          width: `${30 + i * 10}px`,
          height: `${30 + i * 10}px`,
          left: `${10 + i * 15}%`,
          top: `${20 + (i % 3) * 20}%`,
          animation: `floatCube ${4 + i}s ease-in-out infinite`,
          animationDelay: `${i * 0.5}s`,
          transformStyle: 'preserve-3d'
        }}
      />
    ))}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Floating Cubes</span>
    </div>
  </div>
);

// 32. Lightning
const Lightning = () => {
  const [bolts, setBolts] = useState([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const x = 20 + Math.random() * 60;
      setBolts(prev => [...prev, { id, x }]);
      setTimeout(() => setBolts(prev => prev.filter(b => b.id !== id)), 200);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
      {bolts.map(bolt => (
        <svg key={bolt.id} className="absolute inset-0 w-full h-full">
          <path
            d={`M${bolt.x}% 0 L${bolt.x - 5}% 30% L${bolt.x + 3}% 35% L${bolt.x - 8}% 70% L${bolt.x + 5}% 75% L${bolt.x - 3}% 100%`}
            stroke="#00D4FF"
            strokeWidth="2"
            fill="none"
            style={{ filter: 'drop-shadow(0 0 10px #00D4FF)' }}
          />
        </svg>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white/60 text-sm font-medium">Lightning</span>
      </div>
    </div>
  );
};

// 33. Vortex
const Vortex = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="absolute border-t-2 border-cyan-400/40 rounded-full"
        style={{
          width: `${50 + i * 25}px`,
          height: `${50 + i * 25}px`,
          animation: `vortexSpin ${3 + i * 0.5}s linear infinite`,
          opacity: 1 - i * 0.07
        }}
      />
    ))}
    <div className="w-4 h-4 bg-cyan-400 rounded-full" style={{ boxShadow: '0 0 20px #00D4FF' }} />
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-white/60 text-sm font-medium">Vortex</span>
    </div>
  </div>
);

// 34. Particle Explosion
const ParticleExplosion = () => {
  const [particles, setParticles] = useState([]);
  
  const explode = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x, y,
      angle: (i / 20) * 360,
      color: ['#00D4FF', '#8B5CF6', '#D946EF', '#10B981'][i % 4]
    }));
    setParticles(prev => [...prev, ...newParticles]);
    setTimeout(() => setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id))), 1000);
  };

  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl cursor-pointer" onClick={explode}>
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: p.color,
            animation: 'particleExplode 1s ease-out forwards',
            transform: `rotate(${p.angle}deg)`
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-white/60 text-sm font-medium">Click to Explode</span>
      </div>
    </div>
  );
};

// 35. Sine Wave
const SineWave = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <svg className="w-full h-32" viewBox="0 0 400 100" preserveAspectRatio="none">
      <path
        d="M0 50 Q25 0, 50 50 T100 50 T150 50 T200 50 T250 50 T300 50 T350 50 T400 50"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="2"
        style={{ animation: 'sineMove 2s linear infinite' }}
      />
      <path
        d="M0 50 Q25 0, 50 50 T100 50 T150 50 T200 50 T250 50 T300 50 T350 50 T400 50"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="2"
        style={{ animation: 'sineMove 2s linear infinite', animationDelay: '-0.5s' }}
      />
    </svg>
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-white/60 text-sm font-medium">Sine Wave</span>
    </div>
  </div>
);

// 36. Prism
const Prism = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center" style={{ perspective: '800px' }}>
    <div 
      className="relative w-32 h-32"
      style={{ transformStyle: 'preserve-3d', animation: 'prismRotate 10s linear infinite' }}
    >
      {/* Triangular faces */}
      <div className="absolute w-0 h-0" style={{
        borderLeft: '64px solid transparent',
        borderRight: '64px solid transparent',
        borderBottom: '110px solid rgba(0, 212, 255, 0.2)',
        transform: 'translateZ(37px)',
        filter: 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.5))'
      }} />
      <div className="absolute w-0 h-0" style={{
        borderLeft: '64px solid transparent',
        borderRight: '64px solid transparent',
        borderBottom: '110px solid rgba(139, 92, 246, 0.2)',
        transform: 'rotateY(120deg) translateZ(37px)',
        filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))'
      }} />
      <div className="absolute w-0 h-0" style={{
        borderLeft: '64px solid transparent',
        borderRight: '64px solid transparent',
        borderBottom: '110px solid rgba(16, 185, 129, 0.2)',
        transform: 'rotateY(240deg) translateZ(37px)',
        filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))'
      }} />
    </div>
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-white/60 text-sm font-medium">Prism</span>
    </div>
  </div>
);

// 37. Bouncing Balls
const BouncingBalls = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="absolute w-8 h-8 rounded-full"
        style={{
          left: `${15 + i * 18}%`,
          bottom: '10%',
          background: ['#00D4FF', '#8B5CF6', '#D946EF', '#10B981', '#F59E0B'][i],
          boxShadow: `0 0 15px ${['#00D4FF', '#8B5CF6', '#D946EF', '#10B981', '#F59E0B'][i]}`,
          animation: `bounce 1s ease-in-out infinite`,
          animationDelay: `${i * 0.15}s`
        }}
      />
    ))}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Bouncing Balls</span>
    </div>
  </div>
);

// 38. Text Scramble
const TextScramble = () => {
  const [text, setText] = useState('PROPEL');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const target = 'PROPEL';
  
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setText(prev => 
        target.split('').map((char, i) => {
          if (i < iteration) return target[i];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      iteration += 1/3;
      if (iteration >= target.length) {
        setTimeout(() => { iteration = 0; }, 1000);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
      <span className="text-5xl font-mono font-bold text-cyan-400" style={{ textShadow: '0 0 20px rgba(0, 212, 255, 0.5)' }}>
        {text}
      </span>
    </div>
  );
};

// 39. Kaleidoscope
const Kaleidoscope = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div className="relative w-64 h-64" style={{ animation: 'kaleidoRotate 20s linear infinite' }}>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{ transform: `rotate(${i * 60}deg)` }}
        >
          <div 
            className="absolute top-0 left-1/2 w-32 h-32 -translate-x-1/2"
            style={{
              background: `linear-gradient(${i * 60}deg, rgba(0, 212, 255, 0.3), rgba(139, 92, 246, 0.3))`,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              animation: `kaleidoPulse 3s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        </div>
      ))}
    </div>
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-white/60 text-sm font-medium">Kaleidoscope</span>
    </div>
  </div>
);

// 40. Liquid Metal
const LiquidMetal = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div 
      className="w-48 h-48 rounded-full"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #1a1a2e 75%, #16213e 100%)',
        backgroundSize: '400% 400%',
        animation: 'liquidFlow 4s ease infinite',
        boxShadow: 'inset -10px -10px 30px rgba(255,255,255,0.1), inset 10px 10px 30px rgba(0,0,0,0.5), 0 0 40px rgba(0, 212, 255, 0.2)'
      }}
    />
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-white/60 text-sm font-medium">Liquid Metal</span>
    </div>
  </div>
);

// 41. Fire Effect
const FireEffect = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${40 + seededRandom(i) * 20}%`,
            width: `${10 + seededRandom(i + 20) * 20}px`,
            height: `${30 + seededRandom(i + 40) * 60}px`,
            background: `linear-gradient(to top, #ff4500, #ff8c00, #ffd700, transparent)`,
            filter: 'blur(3px)',
            animation: `fireFlicker ${0.5 + seededRandom(i + 60) * 0.5}s ease-in-out infinite`,
            animationDelay: `${seededRandom(i + 80) * 0.5}s`,
            opacity: 0.8
          }}
        />
      ))}
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Fire Effect</span>
    </div>
  </div>
);

// 42. Radar Sweep
const RadarSweep = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    {/* Rings */}
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full border border-cyan-400/20"
        style={{ width: `${(i + 1) * 60}px`, height: `${(i + 1) * 60}px` }}
      />
    ))}
    {/* Sweep */}
    <div 
      className="absolute w-32 h-32"
      style={{
        background: 'conic-gradient(from 0deg, transparent 0deg, rgba(0, 212, 255, 0.3) 30deg, transparent 60deg)',
        borderRadius: '50%',
        animation: 'radarSweep 2s linear infinite'
      }}
    />
    {/* Blips */}
    <div className="absolute w-2 h-2 bg-cyan-400 rounded-full" style={{ top: '35%', left: '55%', boxShadow: '0 0 10px #00D4FF' }} />
    <div className="absolute w-2 h-2 bg-cyan-400 rounded-full" style={{ top: '60%', left: '40%', boxShadow: '0 0 10px #00D4FF' }} />
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-white/60 text-sm font-medium">Radar Sweep</span>
    </div>
  </div>
);

// 43. Pendulum Wave
const PendulumWave = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    <div className="absolute top-8 left-0 right-0 flex justify-center gap-3">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="relative h-64">
          <div 
            className="absolute top-0 left-1/2 w-px h-48 bg-gray-600 origin-top"
            style={{ animation: `pendulum ${1.5 + i * 0.05}s ease-in-out infinite` }}
          >
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400"
              style={{ boxShadow: '0 0 15px #00D4FF' }}
            />
          </div>
        </div>
      ))}
    </div>
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-white/60 text-sm font-medium">Pendulum Wave</span>
    </div>
  </div>
);

// 44. Smoke Effect
const SmokeEffect = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
        style={{
          width: `${60 + i * 20}px`,
          height: `${60 + i * 20}px`,
          background: `radial-gradient(circle, rgba(100, 100, 100, ${0.3 - i * 0.03}) 0%, transparent 70%)`,
          animation: `smokeRise ${4 + i * 0.5}s ease-out infinite`,
          animationDelay: `${i * 0.3}s`
        }}
      />
    ))}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Smoke Effect</span>
    </div>
  </div>
);

// 45. Wormhole
const Wormhole = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center" style={{ perspective: '500px' }}>
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full border border-purple-400/30"
        style={{
          width: `${300 - i * 12}px`,
          height: `${300 - i * 12}px`,
          animation: `wormhole 3s linear infinite`,
          animationDelay: `${i * 0.15}s`
        }}
      />
    ))}
    <div className="w-4 h-4 bg-white rounded-full" style={{ boxShadow: '0 0 30px #fff' }} />
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-white/60 text-sm font-medium">Wormhole</span>
    </div>
  </div>
);

// 46. Pixel Rain
const PixelRain = () => {
  const columns = Array.from({ length: 30 }, (_, i) => ({
    delay: seededRandom(i) * 2,
    speed: 1 + seededRandom(i + 30) * 2,
    color: ['#00D4FF', '#8B5CF6', '#10B981', '#D946EF'][Math.floor(seededRandom(i + 60) * 4)]
  }));

  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
      {columns.map((col, i) => (
        <div
          key={i}
          className="absolute top-0 w-2 h-8"
          style={{
            left: `${(i / 30) * 100}%`,
            background: `linear-gradient(to bottom, ${col.color}, transparent)`,
            animation: `pixelFall ${col.speed}s linear infinite`,
            animationDelay: `${col.delay}s`
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white/60 text-sm font-medium bg-slate-950/50 px-3 py-1 rounded">Pixel Rain</span>
      </div>
    </div>
  );
};

// 47. Heartbeat
const Heartbeat = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <svg className="w-64 h-32" viewBox="0 0 200 50">
      <path
        d="M0 25 L40 25 L50 25 L55 10 L60 40 L65 5 L70 45 L75 25 L80 25 L200 25"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="2"
        style={{ 
          strokeDasharray: '300',
          strokeDashoffset: '300',
          animation: 'heartbeatLine 2s ease-in-out infinite'
        }}
      />
    </svg>
    <div 
      className="absolute w-16 h-16 text-red-500"
      style={{ animation: 'heartbeatPulse 1s ease-in-out infinite' }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </div>
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-white/60 text-sm font-medium">Heartbeat</span>
    </div>
  </div>
);

// 48. Magnetic Field
const MagneticField = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    {[...Array(8)].map((_, i) => (
      <svg key={i} className="absolute w-full h-full">
        <ellipse
          cx="50%"
          cy="50%"
          rx={`${20 + i * 8}%`}
          ry={`${10 + i * 4}%`}
          fill="none"
          stroke="rgba(0, 212, 255, 0.2)"
          strokeWidth="1"
          style={{
            transform: `rotate(${i * 22.5}deg)`,
            transformOrigin: 'center',
            animation: `magneticPulse 3s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`
          }}
        />
      </svg>
    ))}
    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-blue-500 rounded-full" style={{ boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }} />
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-white/60 text-sm font-medium">Magnetic Field</span>
    </div>
  </div>
);

// 49. Neon Text
const NeonText = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <span 
      className="text-6xl font-bold"
      style={{
        color: '#fff',
        textShadow: `
          0 0 5px #fff,
          0 0 10px #fff,
          0 0 20px #00D4FF,
          0 0 40px #00D4FF,
          0 0 80px #00D4FF,
          0 0 90px #00D4FF,
          0 0 100px #00D4FF
        `,
        animation: 'neonFlicker 2s ease-in-out infinite'
      }}
    >
      NEON
    </span>
  </div>
);

// 50. Wavy Text
const WavyText = () => {
  const text = 'PROPEL AI';
  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
      <div className="flex">
        {text.split('').map((char, i) => (
          <span
            key={i}
            className="text-5xl font-bold text-cyan-400 inline-block"
            style={{
              animation: 'wavyBounce 1s ease-in-out infinite',
              animationDelay: `${i * 0.1}s`
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
};

// 51. Gradient Text Flow
const GradientTextFlow = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <span 
      className="text-6xl font-bold"
      style={{
        background: 'linear-gradient(90deg, #00D4FF, #8B5CF6, #D946EF, #10B981, #00D4FF)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'gradientTextFlow 3s linear infinite'
      }}
    >
      GRADIENT
    </span>
  </div>
);

// 52. 3D Text
const Text3D = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center" style={{ perspective: '500px' }}>
    <span 
      className="text-6xl font-bold text-white"
      style={{
        textShadow: `
          1px 1px 0 #0ea5e9,
          2px 2px 0 #0d9488,
          3px 3px 0 #0891b2,
          4px 4px 0 #0284c7,
          5px 5px 0 #0369a1,
          6px 6px 0 #075985,
          7px 7px 10px rgba(0,0,0,0.5)
        `,
        animation: 'text3dRotate 4s ease-in-out infinite'
      }}
    >
      3D TEXT
    </span>
  </div>
);

// 53. Cyber Grid
const CyberGrid = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl" style={{ perspective: '500px' }}>
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        transform: 'rotateX(60deg) translateY(-50%)',
        transformOrigin: 'center center',
        animation: 'cyberGridMove 5s linear infinite'
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Cyber Grid</span>
    </div>
  </div>
);

// 54. Energy Ball
const EnergyBall = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div className="relative">
      {/* Core */}
      <div 
        className="w-24 h-24 rounded-full bg-cyan-400"
        style={{
          boxShadow: '0 0 60px 30px rgba(0, 212, 255, 0.5), inset 0 0 30px rgba(255,255,255,0.5)',
          animation: 'energyPulse 2s ease-in-out infinite'
        }}
      />
      {/* Orbiting particles */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
          style={{ animation: `orbit ${2 + i * 0.5}s linear infinite` }}
        >
          <div 
            className="absolute w-3 h-3 rounded-full bg-white"
            style={{ 
              top: '0', 
              left: '50%', 
              transform: 'translateX(-50%)',
              boxShadow: '0 0 10px #fff'
            }}
          />
        </div>
      ))}
    </div>
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-white/60 text-sm font-medium">Energy Ball</span>
    </div>
  </div>
);

// 55. Split Text Reveal
const SplitTextReveal = () => {
  const text = 'REVEAL';
  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
      <div className="relative overflow-hidden">
        <div className="flex">
          {text.split('').map((char, i) => (
            <span
              key={i}
              className="text-6xl font-bold text-white inline-block"
              style={{
                animation: 'splitReveal 2s ease-out infinite',
                animationDelay: `${i * 0.1}s`
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// 56. Bubble Rise
const BubbleRise = () => (
  <div className="relative h-96 bg-gradient-to-b from-slate-950 to-blue-950 overflow-hidden rounded-xl">
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full border border-white/20 bg-white/5"
        style={{
          width: `${10 + seededRandom(i) * 30}px`,
          height: `${10 + seededRandom(i + 15) * 30}px`,
          left: `${seededRandom(i + 30) * 100}%`,
          bottom: '-50px',
          animation: `bubbleRise ${3 + seededRandom(i + 45) * 4}s ease-in infinite`,
          animationDelay: `${seededRandom(i + 60) * 3}s`
        }}
      />
    ))}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Bubble Rise</span>
    </div>
  </div>
);

// 57. Countdown Numbers
const CountdownNumbers = () => {
  const [count, setCount] = useState(9);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev <= 0 ? 9 : prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
      <span 
        key={count}
        className="text-9xl font-bold text-cyan-400"
        style={{
          animation: 'countdownPop 1s ease-out',
          textShadow: '0 0 40px rgba(0, 212, 255, 0.5)'
        }}
      >
        {count}
      </span>
    </div>
  );
};

// 58. Holographic Card
const HolographicCard = () => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const x = (e.clientY - rect.top - rect.height / 2) / 10;
      const y = -(e.clientX - rect.left - rect.width / 2) / 10;
      setRotation({ x, y });
    }
  };

  const handleMouseLeave = () => setRotation({ x: 0, y: 0 });

  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center" style={{ perspective: '1000px' }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-48 h-64 rounded-xl cursor-pointer transition-transform duration-200"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(139, 92, 246, 0.3), rgba(217, 70, 239, 0.3))',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <div 
          className="absolute inset-0 rounded-xl opacity-50"
          style={{
            background: `linear-gradient(${135 + rotation.y * 2}deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)`,
          }}
        />
        <div className="absolute inset-4 flex items-center justify-center">
          <span className="text-white/80 text-lg font-medium">Hover Me</span>
        </div>
      </div>
    </div>
  );
};

// 59. Aurora Grid
const AuroraGrid = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(148, 163, 184, 0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(148, 163, 184, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        opacity: 0.5,
      }}
    />
    <div
      className="absolute -inset-10 blur-3xl"
      style={{
        background:
          'conic-gradient(from 180deg at 50% 50%, rgba(56, 189, 248, 0.7), rgba(168, 85, 247, 0.7), rgba(248, 113, 113, 0.7), rgba(56, 189, 248, 0.7))',
        animation: 'auroraDrift 16s ease-in-out infinite',
        opacity: 0.65,
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950" />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Aurora Grid</span>
    </div>
  </div>
);

// 60. Noise Tunnel
const NoiseTunnel = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div
      className="relative w-64 h-64 rounded-full overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at center, rgba(15, 23, 42, 0.1) 0, rgba(15, 23, 42, 1) 55%)',
        boxShadow: '0 0 80px rgba(0, 212, 255, 0.4)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-radial-gradient(circle at center, rgba(34, 211, 238, 0.7), rgba(34, 211, 238, 0.7) 1px, transparent 1px, transparent 4px)',
          mixBlendMode: 'screen',
          animation: 'tunnelRotate 18s linear infinite',
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          filter: 'url(#noiseFilter)',
        }}
      />
    </div>
    <div className="absolute bottom-4 inset-x-0 text-center">
      <span className="text-white/60 text-sm font-medium">Noise Tunnel</span>
    </div>
  </div>
);

// 61. Solar Flare
const SolarFlare = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div
      className="relative w-40 h-40 rounded-full"
      style={{
        background: 'radial-gradient(circle at 30% 30%, #facc15, #f97316, #7c2d12)',
        boxShadow:
          '0 0 60px rgba(250, 204, 21, 0.8), 0 0 120px rgba(248, 113, 113, 0.7)',
        animation: 'flarePulse 6s ease-in-out infinite',
      }}
    >
      <div
        className="absolute -inset-16 rounded-full"
        style={{
          background:
            'conic-gradient(from 0deg, transparent, rgba(251, 191, 36, 0.4), transparent 40%)',
          animation: 'flareSweep 10s linear infinite',
          mixBlendMode: 'screen',
        }}
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
    <div className="absolute bottom-4 inset-x-0 text-center">
      <span className="text-white/60 text-sm font-medium">Solar Flare</span>
    </div>
  </div>
);

// 62. Fiber Optic
const FiberOptic = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    {[...Array(40)].map((_, i) => (
      <div
        key={i}
        className="absolute bottom-0 w-0.5"
        style={{
          left: `${(i / 40) * 100}%`,
          height: `${40 + (i % 5) * 15}%`,
          background:
            'linear-gradient(to top, rgba(15, 23, 42, 0), rgba(56, 189, 248, 0.4), rgba(236, 72, 153, 0.8))',
          animation: 'fiberScan 3s ease-in-out infinite',
          animationDelay: `${(i % 10) * 0.15}s`,
        }}
      />
    ))}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-900/50" />
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span className="text-white/60 text-sm font-medium">Fiber Optic</span>
    </div>
  </div>
);

// 63. Echo Rings
const EchoRings = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full border border-cyan-400/40"
        style={{
          width: `${40 + i * 40}px`,
          height: `${40 + i * 40}px`,
          animation: 'echoRing 4s ease-out infinite',
          animationDelay: `${i * 0.4}s`,
        }}
      />
    ))}
    <div className="relative z-10 text-center">
      <span className="text-white/70 text-sm font-medium">Echo Rings</span>
    </div>
  </div>
);

// 64. Spectrum Bars
const SpectrumBars = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-end justify-center px-6 pb-8">
    <div className="flex w-full max-w-md items-end justify-between gap-1">
      {[...Array(24)].map((_, i) => (
        <div
          key={i}
          className="w-2 rounded-t-full bg-gradient-to-t from-cyan-500 via-sky-400 to-emerald-400"
          style={{
            height: '60%',
            opacity: 0.85,
            animation: 'spectrumUp 1.2s ease-in-out infinite',
            animationDelay: `${(i % 8) * 0.12}s`,
          }}
        />
      ))}
    </div>
    <div className="absolute top-4 inset-x-0 text-center">
      <span className="text-white/60 text-sm font-medium">Spectrum Bars</span>
    </div>
  </div>
);

// 65. Spiral Dots
const SpiralDots = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div
      className="relative w-56 h-56 rounded-full border border-slate-700/80"
      style={{ animation: 'spiralOrbit 20s linear infinite' }}
    >
      {[...Array(32)].map((_, i) => {
        const angle = (i / 32) * Math.PI * 2;
        const radius = 16 + (i / 32) * 56;
        const x = 64 + radius * Math.cos(angle);
        const y = 64 + radius * Math.sin(angle);
        return (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-400"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
              opacity: 0.8,
            }}
          />
        );
      })}
    </div>
    <div className="absolute bottom-4 inset-x-0 text-center">
      <span className="text-white/60 text-sm font-medium">Spiral Dots</span>
    </div>
  </div>
);

// 66. Orbiting Planets
const OrbitingPlanets = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div className="relative w-52 h-52">
      <div
        className="absolute inset-0 rounded-full border border-slate-700/80"
        style={{ boxShadow: '0 0 40px rgba(56, 189, 248, 0.4)' }}
      />
      <div
        className="absolute inset-10 rounded-full border border-slate-700/80"
        style={{ boxShadow: '0 0 30px rgba(96, 165, 250, 0.4)' }}
      />
      <div
        className="absolute inset-20 rounded-full border border-slate-700/80"
        style={{ boxShadow: '0 0 20px rgba(129, 140, 248, 0.4)' }}
      />

      {[0, 1, 2].map((ring, index) => (
        <div
          key={ring}
          className="absolute inset-0"
          style={{ animation: `planetOrbit ${10 + ring * 4}s linear infinite` }}
        >
          <div
            className="absolute w-4 h-4 rounded-full"
            style={{
              background:
                ring === 0
                  ? 'radial-gradient(circle at 30% 30%, #facc15, #f97316)'
                  : ring === 1
                  ? 'radial-gradient(circle at 30% 30%, #38bdf8, #0ea5e9)'
                  : 'radial-gradient(circle at 30% 30%, #a855f7, #7c3aed)',
              left: ring === 0 ? '50%' : ring === 1 ? '50%' : '50%',
              top: ring === 0 ? '2%' : ring === 1 ? '8%' : '15%',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 20px rgba(248, 250, 252, 0.8)',
            }}
          />
        </div>
      ))}
    </div>
    <div className="absolute bottom-4 inset-x-0 text-center">
      <span className="text-white/60 text-sm font-medium">Orbiting Planets</span>
    </div>
  </div>
);

// 67. Laser Grid
const LaserGrid = () => (
  <div className="relative h-96 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden rounded-xl">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(15, 23, 42, 0.9) 1px, transparent 1px),
          linear-gradient(90deg, rgba(15, 23, 42, 0.9) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: 'linear-gradient(90deg, rgba(59, 130, 246, 0.5), rgba(14, 165, 233, 0.8))',
        mixBlendMode: 'screen',
        opacity: 0.3,
      }}
    />
    <div
      className="absolute inset-y-0 w-24"
      style={{
        left: '-20%',
        background:
          'radial-gradient(circle at center, rgba(56, 189, 248, 0.8), transparent 70%)',
        filter: 'blur(8px)',
        animation: 'laserSweep 6s linear infinite',
      }}
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Laser Grid</span>
    </div>
  </div>
);

// 68. Pixel Tunnel
const PixelTunnel = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="absolute"
        style={{
          width: `${40 + i * 20}px`,
          height: `${40 + i * 20}px`,
          border: '1px solid rgba(148, 163, 184, 0.5)',
          boxShadow: i === 0 ? '0 0 20px rgba(56, 189, 248, 0.7)' : 'none',
          animation: 'tunnelZoom 6s ease-in-out infinite',
          animationDelay: `${i * 0.25}s`,
        }}
      />
    ))}
    <div className="absolute bottom-4 inset-x-0 text-center">
      <span className="text-white/60 text-sm font-medium">Pixel Tunnel</span>
    </div>
  </div>
);

// 69. Lava Lamp
const LavaLamp = () => (
  <div className="relative h-96 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden rounded-xl flex items-center justify-center">
    <div className="relative w-32 h-64 rounded-full bg-slate-900/80 border border-slate-600/60 overflow-hidden">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${40 + i * 10}%`,
            height: `${35 + i * 12}%`,
            left: `${10 + i * 8}%`,
            bottom: `${-20 + i * 20}%`,
            background:
              'radial-gradient(circle at 30% 30%, rgba(248, 250, 252, 0.9), rgba(244, 63, 94, 0.9))',
            filter: 'blur(2px)',
            animation: 'lavaBlob 10s ease-in-out infinite',
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}
    </div>
    <div className="absolute bottom-4 inset-x-0 text-center">
      <span className="text-white/60 text-sm font-medium">Lava Lamp</span>
    </div>
  </div>
);

// 70. 3D Carousel
const Carousel3D = () => (
  <div
    className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center"
    style={{ perspective: '1200px' }}
  >
    <div
      className="relative w-64 h-40"
      style={{
        transformStyle: 'preserve-3d',
        animation: 'carouselRotate 18s linear infinite',
      }}
    >
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const translateZ = 160;
        return (
          <div
            key={i}
            className="absolute w-32 h-24 rounded-xl border border-white/10 flex items-center justify-center text-xs text-white/80"
            style={{
              background:
                'linear-gradient(135deg, rgba(56, 189, 248, 0.6), rgba(129, 140, 248, 0.7))',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.8)',
              transform: `rotateY(${(angle * 180) / Math.PI}deg) translateZ(${translateZ}px)`,
            }}
          >
            Slide {i + 1}
          </div>
        );
      })}
    </div>
    <div className="absolute bottom-4 inset-x-0 text-center">
      <span className="text-white/60 text-sm font-medium">3D Carousel</span>
    </div>
  </div>
);

// 71. Rotating Pyramid
const RotatingPyramid = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div
      className="relative w-32 h-32"
      style={{
        transformStyle: 'preserve-3d',
        animation: 'pyramidSpin 10s linear infinite',
      }}
    >
      {[0, 1, 2, 3].map((face) => (
        <div
          key={face}
          className="absolute left-1/2 bottom-0"
          style={{
            width: 0,
            height: 0,
            borderLeft: '40px solid transparent',
            borderRight: '40px solid transparent',
            borderBottom: '70px solid rgba(56, 189, 248, 0.8)',
            transformOrigin: '50% 100%',
            transform: `rotateY(${face * 90}deg) translateZ(40px)`,
          }}
        />
      ))}
    </div>
    <div className="absolute bottom-4 inset-x-0 text-center">
      <span className="text-white/60 text-sm font-medium">Rotating Pyramid</span>
    </div>
  </div>
);

// 72. Orbital Rings 3D
const OrbitalRings3D = () => (
  <div
    className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center"
    style={{ perspective: '1000px' }}
  >
    <div className="relative w-40 h-40">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-cyan-400/60"
          style={{
            transformStyle: 'preserve-3d',
            transform:
              i === 0
                ? 'rotateX(60deg)'
                : i === 1
                ? 'rotateY(60deg)'
                : 'rotateX(60deg) rotateY(60deg)',
            animation: 'ringOrbit3D 12s linear infinite',
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}
      <div className="absolute inset-10 rounded-full bg-cyan-400/30 blur-xl" />
    </div>
    <div className="absolute bottom-4 inset-x-0 text-center">
      <span className="text-white/60 text-sm font-medium">Orbital Rings 3D</span>
    </div>
  </div>
);

// 73. Hover Tiles
const HoverTiles = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div className="grid grid-cols-6 grid-rows-4 gap-1">
      {[...Array(24)].map((_, i) => (
        <div
          key={i}
          className="w-10 h-10 rounded-md bg-slate-800/80 transition-all duration-300 hover:bg-cyan-400/80 hover:scale-110 hover:shadow-[0_0_16px_rgba(34,211,238,0.8)]"
        />
      ))}
    </div>
    <div className="absolute bottom-4 inset-x-0 text-center">
      <span className="text-white/60 text-sm font-medium">Hover Tiles</span>
    </div>
  </div>
);

// 74. Magnetic Cursor Ring
const MagneticCursorRing = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-96 bg-slate-950 overflow-hidden rounded-xl"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute w-40 h-40 rounded-full pointer-events-none"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(circle at center, rgba(56, 189, 248, 0.9), transparent 70%)',
          filter: 'blur(8px)',
          opacity: 0.9,
          animation: 'cursorRingPulse 2.2s ease-in-out infinite',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-white/60 text-sm font-medium">Magnetic Cursor</span>
      </div>
    </div>
  );
};

// 75. Parallax Layers
const ParallaxLayers = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setOffset({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-96 bg-slate-950 overflow-hidden rounded-xl"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at top, rgba(56, 189, 248, 0.3), transparent 60%)',
          transform: `translate(${offset.x * 20}px, ${offset.y * 20}px)`,
          transition: 'transform 120ms ease-out',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at bottom, rgba(236, 72, 153, 0.35), transparent 60%)',
          transform: `translate(${offset.x * -30}px, ${offset.y * -30}px)`,
          transition: 'transform 120ms ease-out',
        }}
      />
      <div
        className="absolute inset-8 rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center"
        style={{
          transform: `translate(${offset.x * 10}px, ${offset.y * 10}px)`,
          transition: 'transform 120ms ease-out',
        }}
      >
        <span className="text-white/70 text-sm font-medium">Parallax Layers</span>
      </div>
    </div>
  );
};

// 76. Scanline Text
const ScanlineText = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div className="relative px-10 py-6 border border-slate-700/80 rounded-xl bg-slate-900/60 overflow-hidden">
      <div
        className="text-4xl md:text-5xl font-bold tracking-wide text-transparent bg-clip-text"
        style={{
          backgroundImage:
            'linear-gradient(90deg, #38bdf8, #a855f7, #ec4899, #38bdf8)',
        }}
      >
        SCANLINE
      </div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 0.7) 2%, transparent 4%)',
          backgroundSize: '100% 6px',
          mixBlendMode: 'soft-light',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(226, 232, 240, 0.65), transparent)',
          mixBlendMode: 'screen',
          animation: 'scanlineText 3s linear infinite',
        }}
      />
    </div>
  </div>
);

// 77. Outline Glow Text
const OutlineGlowText = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div className="relative">
      <div
        className="text-5xl md:text-6xl font-extrabold tracking-[0.2em] text-transparent"
        style={{
          WebkitTextStroke: '2px rgba(248, 250, 252, 0.8)',
          textShadow:
            '0 0 20px rgba(56, 189, 248, 0.8), 0 0 40px rgba(129, 140, 248, 0.8)',
          animation: 'outlinePulse 4s ease-in-out infinite',
        }}
      >
        OUTLINE
      </div>
    </div>
  </div>
);

// 78. Shadow Trail Text
const ShadowTrailText = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div className="relative">
      {[0, 1, 2].map((layer) => (
        <div
          key={layer}
          className="absolute inset-0 text-5xl md:text-6xl font-bold"
          style={{
            color: layer === 0 ? '#38bdf8' : layer === 1 ? '#a855f7' : '#0f172a',
            transform: `translate(${layer * 4}px, ${layer * 4}px)`,
            opacity: layer === 2 ? 1 : 0.75,
            animation: 'shadowTrail 3s ease-in-out infinite',
            animationDelay: `${layer * 0.2}s`,
          }}
        >
          TRAIL
        </div>
      ))}
      <div className="relative text-5xl md:text-6xl font-bold text-slate-50">
        TRAIL
      </div>
    </div>
  </div>
);

// 79. Chromatic Aberration Text
const ChromaticText = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div className="relative">
      <span className="absolute text-5xl md:text-6xl font-black text-red-500/70" style={{ transform: 'translate(-3px, 0)' }}>CHROME</span>
      <span className="absolute text-5xl md:text-6xl font-black text-blue-500/70" style={{ transform: 'translate(3px, 0)' }}>CHROME</span>
      <span className="text-5xl md:text-6xl font-black text-white">CHROME</span>
    </div>
  </div>
);

// 80. Morphing Text
const MorphingText = () => {
  const words = ['PROPEL', 'CREATE', 'BUILD', 'LAUNCH'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
      <span
        key={index}
        className="text-5xl md:text-6xl font-bold text-cyan-400"
        style={{ animation: 'morphFade 2s ease-in-out' }}
      >
        {words[index]}
      </span>
    </div>
  );
};

// 81. Retro CRT
const RetroCRT = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-slate-950" />
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.6) 100%)',
      }}
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-emerald-400 font-mono text-xl" style={{ textShadow: '0 0 10px rgba(52, 211, 153, 0.8)' }}>
        RETRO CRT DISPLAY
      </span>
    </div>
  </div>
);

// 82. Crosshatch Pattern
const CrosshatchPattern = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(56, 189, 248, 0.1) 10px, rgba(56, 189, 248, 0.1) 11px),
          repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(139, 92, 246, 0.1) 10px, rgba(139, 92, 246, 0.1) 11px)
        `,
        animation: 'crosshatchShift 20s linear infinite',
      }}
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Crosshatch Pattern</span>
    </div>
  </div>
);

// 83. Topographic Lines
const TopographicLines = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute border border-cyan-400/30 rounded-full"
        style={{
          width: `${60 + i * 40}px`,
          height: `${40 + i * 30}px`,
          transform: `rotate(${i * 5}deg)`,
          animation: 'topoPulse 6s ease-in-out infinite',
          animationDelay: `${i * 0.3}s`,
        }}
      />
    ))}
    <div className="absolute bottom-4 inset-x-0 text-center">
      <span className="text-white/60 text-sm font-medium">Topographic Lines</span>
    </div>
  </div>
);

// 84. Barcode
const BarcodeEffect = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div className="flex items-end gap-0.5 h-48">
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className="bg-white/90"
          style={{
            width: i % 3 === 0 ? '3px' : '1px',
            height: `${40 + Math.sin(i * 0.5) * 30 + seededRandom(i) * 20}%`,
            animation: 'barcodeGrow 2s ease-in-out infinite',
            animationDelay: `${i * 0.02}s`,
          }}
        />
      ))}
    </div>
  </div>
);

// 85. Sound Wave
const SoundWaveEffect = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div className="flex items-center gap-1">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="w-1 rounded-full bg-gradient-to-t from-cyan-500 to-purple-500"
          style={{
            height: '4px',
            animation: 'soundWaveBar 1s ease-in-out infinite',
            animationDelay: `${i * 0.05}s`,
          }}
        />
      ))}
    </div>
  </div>
);

// 86. Dotted Globe
const DottedGlobe = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div
      className="relative w-48 h-48 rounded-full border border-slate-700/50"
      style={{ animation: 'globeSpin 20s linear infinite' }}
    >
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 flex justify-center"
          style={{ transform: `rotateY(${i * 30}deg)` }}
        >
          {[...Array(9)].map((_, j) => (
            <div
              key={j}
              className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/60"
              style={{ top: `${10 + j * 10}%` }}
            />
          ))}
        </div>
      ))}
    </div>
    <div className="absolute bottom-4 inset-x-0 text-center">
      <span className="text-white/60 text-sm font-medium">Dotted Globe</span>
    </div>
  </div>
);

// 87. Heartbeat Monitor
const HeartbeatMonitor = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <svg className="w-full h-32" viewBox="0 0 400 100" preserveAspectRatio="none">
      <path
        d="M0,50 L80,50 L100,20 L120,80 L140,50 L200,50 L220,30 L240,70 L260,50 L400,50"
        fill="none"
        stroke="rgba(52, 211, 153, 0.9)"
        strokeWidth="2"
        style={{
          strokeDasharray: 600,
          animation: 'heartbeatDraw 2s linear infinite',
          filter: 'drop-shadow(0 0 8px rgba(52, 211, 153, 0.8))',
        }}
      />
    </svg>
    <div className="absolute bottom-4 inset-x-0 text-center">
      <span className="text-white/60 text-sm font-medium">Heartbeat Monitor</span>
    </div>
  </div>
);

// 88. Confetti Burst
const ConfettiBurst = () => {
  const colors = ['#38bdf8', '#a855f7', '#ec4899', '#facc15', '#34d399'];
  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-3 rounded-sm"
          style={{
            left: '50%',
            top: '50%',
            backgroundColor: colors[i % colors.length],
            animation: 'confettiFall 3s ease-out infinite',
            animationDelay: `${seededRandom(i) * 2}s`,
            transform: `rotate(${seededRandom(i + 50) * 360}deg)`,
            '--confetti-x': `${(seededRandom(i + 100) - 0.5) * 300}px`,
            '--confetti-y': `${-200 - seededRandom(i + 150) * 200}px`,
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white/60 text-sm font-medium z-10">Confetti Burst</span>
      </div>
    </div>
  );
};

// 89. Tilt Card
const TiltCard = () => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientY - rect.top - rect.height / 2) / 8;
    const y = -(e.clientX - rect.left - rect.width / 2) / 8;
    setTilt({ x, y });
  };

  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center" style={{ perspective: '1000px' }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        className="w-56 h-36 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center cursor-pointer transition-transform duration-150"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <span className="text-white/80 font-medium">Tilt Me</span>
      </div>
    </div>
  );
};

// 90. Snowfall
const Snowfall = () => (
  <div className="relative h-96 bg-gradient-to-b from-slate-800 to-slate-950 overflow-hidden rounded-xl">
    {[...Array(60)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full bg-white/80"
        style={{
          left: `${seededRandom(i) * 100}%`,
          top: '-10px',
          animation: 'snowFall 6s linear infinite',
          animationDelay: `${seededRandom(i + 60) * 6}s`,
          opacity: 0.4 + seededRandom(i + 120) * 0.6,
        }}
      />
    ))}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Snowfall</span>
    </div>
  </div>
);

// 91. Water Droplet
const WaterDroplet = () => (
  <div className="relative h-96 bg-gradient-to-b from-slate-900 to-blue-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div
      className="relative w-24 h-32 rounded-b-full rounded-t-[50%_80%]"
      style={{
        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), rgba(56, 189, 248, 0.8), rgba(14, 165, 233, 0.9))',
        boxShadow: 'inset -10px -10px 30px rgba(0,0,0,0.2), 0 20px 40px rgba(56, 189, 248, 0.4)',
        animation: 'dropletWobble 3s ease-in-out infinite',
      }}
    >
      <div className="absolute top-4 left-4 w-4 h-4 rounded-full bg-white/40 blur-sm" />
    </div>
  </div>
);

// 92. Loading Spinner
const LoadingSpinner = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div className="relative w-20 h-20">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-6 rounded-full bg-cyan-400"
          style={{
            left: '50%',
            top: '0',
            transformOrigin: '50% 40px',
            transform: `translateX(-50%) rotate(${i * 30}deg)`,
            opacity: 0.2 + (i / 12) * 0.8,
            animation: 'spinnerFade 1.2s linear infinite',
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  </div>
);

// 93. Progress Ring
const ProgressRing = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const circumference = 2 * Math.PI * 60;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
      <svg className="w-40 h-40 -rotate-90">
        <circle cx="80" cy="80" r="60" fill="none" stroke="rgba(148, 163, 184, 0.2)" strokeWidth="8" />
        <circle
          cx="80"
          cy="80"
          r="60"
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 50ms linear' }}
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute text-2xl font-bold text-white">{progress}%</span>
    </div>
  );
};

// 94. Flip Card
const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center" style={{ perspective: '1000px' }}>
      <div
        className="relative w-48 h-64 cursor-pointer"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.6s', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)' }}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center backface-hidden">
          <span className="text-white font-bold text-xl">FRONT</span>
        </div>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
          <span className="text-white font-bold text-xl">BACK</span>
        </div>
      </div>
    </div>
  );
};

// 95. Elastic Button
const ElasticButton = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
      <button
        className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg transition-transform"
        style={{ transform: pressed ? 'scale(0.9)' : 'scale(1)', animation: pressed ? 'none' : 'elasticBounce 2s ease-in-out infinite' }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
      >
        Click Me
      </button>
    </div>
  );
};

// 96. Floating Badge
const FloatingBadge = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div
      className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold shadow-lg"
      style={{
        animation: 'floatBadge 3s ease-in-out infinite',
        boxShadow: '0 10px 40px rgba(52, 211, 153, 0.4)',
      }}
    >
      NEW FEATURE
    </div>
  </div>
);

// 97. Typing Cursor
const TypingCursor = () => {
  const text = 'Hello, World!';
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayed('');
        setIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
      <div className="font-mono text-3xl text-cyan-400">
        {displayed}
        <span className="inline-block w-0.5 h-8 bg-cyan-400 ml-1" style={{ animation: 'cursorBlink 1s step-end infinite' }} />
      </div>
    </div>
  );
};

// 98. Pulsing Dot Grid
const PulsingDotGrid = () => (
  <div className="relative h-96 bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
    <div className="grid grid-cols-10 gap-4">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full bg-cyan-400/60"
          style={{
            animation: 'dotGridPulse 2s ease-in-out infinite',
            animationDelay: `${(i % 10) * 0.1 + Math.floor(i / 10) * 0.1}s`,
          }}
        />
      ))}
    </div>
  </div>
);

const effects = [
  { name: 'Gradient Orbs', component: GradientOrbs, category: 'Background' },
  { name: 'Grid Pattern', component: GridPattern, category: 'Background' },
  { name: 'Floating Particles', component: FloatingParticles, category: 'Background' },
  { name: 'Isometric Grid', component: IsometricGrid, category: 'Background' },
  { name: 'Hexagon Grid', component: HexagonGrid, category: 'Background' },
  { name: 'Circuit Board', component: CircuitBoard, category: 'Background' },
  { name: 'Noisy Gradient', component: NoisyGradient, category: 'Background' },
  { name: 'Aurora Effect', component: AuroraEffect, category: 'Background' },
  { name: 'Starfield', component: Starfield, category: 'Background' },
  { name: 'Gradient Mesh', component: GradientMesh, category: 'Background' },
  { name: 'Glowing Border', component: GlowingBorder, category: 'Animation' },
  { name: 'Wave Animation', component: WaveAnimation, category: 'Animation' },
  { name: 'Morphing Blob', component: MorphingBlob, category: 'Animation' },
  { name: 'Radial Pulse', component: RadialPulse, category: 'Animation' },
  { name: 'Matrix Rain', component: MatrixRain, category: 'Animation' },
  { name: 'Concentric Circles', component: ConcentricCircles, category: 'Animation' },
  { name: 'Meteor Shower', component: MeteorShower, category: 'Animation' },
  { name: 'Breathing Ring', component: BreathingRing, category: 'Animation' },
  { name: 'Dot Wave', component: DotWave, category: 'Animation' },
  { name: 'Rotating Squares', component: RotatingSquares, category: 'Animation' },
  { name: 'Scan Line', component: ScanLine, category: 'Animation' },
  { name: 'Neon Lines', component: NeonLines, category: 'Animation' },
  { name: 'Bouncing Balls', component: BouncingBalls, category: 'Animation' },
  { name: 'Sine Wave', component: SineWave, category: 'Animation' },
  { name: 'DNA Helix', component: DNAHelix, category: '3D' },
  { name: '3D Cube', component: Cube3D, category: '3D' },
  { name: 'Spinning Rings', component: SpinningRings, category: '3D' },
  { name: 'Floating Cubes', component: FloatingCubes, category: '3D' },
  { name: 'Prism', component: Prism, category: '3D' },
  { name: 'Vortex', component: Vortex, category: '3D' },
  { name: 'Spotlight', component: SpotlightEffect, category: 'Interactive' },
  { name: 'Ripple Effect', component: RippleEffect, category: 'Interactive' },
  { name: 'Lightning', component: Lightning, category: 'Interactive' },
  { name: 'Particle Explosion', component: ParticleExplosion, category: 'Interactive' },
  { name: 'Glitch Text', component: GlitchText, category: 'Text' },
  { name: 'Typewriter', component: TypewriterText, category: 'Text' },
  { name: 'Text Scramble', component: TextScramble, category: 'Text' },
  { name: 'Plasma Effect', component: PlasmaEffect, category: 'Background' },
  { name: 'Kaleidoscope', component: Kaleidoscope, category: 'Animation' },
  { name: 'Liquid Metal', component: LiquidMetal, category: 'Animation' },
  { name: 'Fire Effect', component: FireEffect, category: 'Animation' },
  { name: 'Radar Sweep', component: RadarSweep, category: 'Animation' },
  { name: 'Pendulum Wave', component: PendulumWave, category: 'Animation' },
  { name: 'Smoke Effect', component: SmokeEffect, category: 'Animation' },
  { name: 'Wormhole', component: Wormhole, category: '3D' },
  { name: 'Pixel Rain', component: PixelRain, category: 'Animation' },
  { name: 'Heartbeat', component: Heartbeat, category: 'Animation' },
  { name: 'Magnetic Field', component: MagneticField, category: 'Animation' },
  { name: 'Cyber Grid', component: CyberGrid, category: 'Background' },
  { name: 'Energy Ball', component: EnergyBall, category: 'Animation' },
  { name: 'Bubble Rise', component: BubbleRise, category: 'Animation' },
  { name: 'Countdown Numbers', component: CountdownNumbers, category: 'Animation' },
  { name: 'Holographic Card', component: HolographicCard, category: 'Interactive' },
  { name: 'Neon Text', component: NeonText, category: 'Text' },
  { name: 'Wavy Text', component: WavyText, category: 'Text' },
  { name: 'Gradient Text', component: GradientTextFlow, category: 'Text' },
  { name: '3D Text', component: Text3D, category: 'Text' },
  { name: 'Split Reveal', component: SplitTextReveal, category: 'Text' },
  { name: 'Aurora Grid', component: AuroraGrid, category: 'Background' },
  { name: 'Noise Tunnel', component: NoiseTunnel, category: 'Background' },
  { name: 'Solar Flare', component: SolarFlare, category: 'Background' },
  { name: 'Fiber Optic', component: FiberOptic, category: 'Background' },
  { name: 'Echo Rings', component: EchoRings, category: 'Animation' },
  { name: 'Spectrum Bars', component: SpectrumBars, category: 'Animation' },
  { name: 'Spiral Dots', component: SpiralDots, category: 'Animation' },
  { name: 'Orbiting Planets', component: OrbitingPlanets, category: 'Animation' },
  { name: 'Laser Grid', component: LaserGrid, category: 'Animation' },
  { name: 'Pixel Tunnel', component: PixelTunnel, category: 'Animation' },
  { name: 'Lava Lamp', component: LavaLamp, category: 'Animation' },
  { name: '3D Carousel', component: Carousel3D, category: '3D' },
  { name: 'Rotating Pyramid', component: RotatingPyramid, category: '3D' },
  { name: 'Orbital Rings 3D', component: OrbitalRings3D, category: '3D' },
  { name: 'Hover Tiles', component: HoverTiles, category: 'Interactive' },
  { name: 'Magnetic Cursor', component: MagneticCursorRing, category: 'Interactive' },
  { name: 'Parallax Layers', component: ParallaxLayers, category: 'Interactive' },
  { name: 'Scanline Text', component: ScanlineText, category: 'Text' },
  { name: 'Outline Glow Text', component: OutlineGlowText, category: 'Text' },
  { name: 'Shadow Trail Text', component: ShadowTrailText, category: 'Text' },
  { name: 'Chromatic Text', component: ChromaticText, category: 'Text' },
  { name: 'Morphing Text', component: MorphingText, category: 'Text' },
  { name: 'Retro CRT', component: RetroCRT, category: 'Background' },
  { name: 'Crosshatch Pattern', component: CrosshatchPattern, category: 'Background' },
  { name: 'Topographic Lines', component: TopographicLines, category: 'Animation' },
  { name: 'Barcode', component: BarcodeEffect, category: 'Animation' },
  { name: 'Sound Wave', component: SoundWaveEffect, category: 'Animation' },
  { name: 'Dotted Globe', component: DottedGlobe, category: '3D' },
  { name: 'Heartbeat Monitor', component: HeartbeatMonitor, category: 'Animation' },
  { name: 'Confetti Burst', component: ConfettiBurst, category: 'Animation' },
  { name: 'Tilt Card', component: TiltCard, category: 'Interactive' },
  { name: 'Snowfall', component: Snowfall, category: 'Animation' },
  { name: 'Water Droplet', component: WaterDroplet, category: 'Animation' },
  { name: 'Loading Spinner', component: LoadingSpinner, category: 'Animation' },
  { name: 'Progress Ring', component: ProgressRing, category: 'Interactive' },
  { name: 'Flip Card', component: FlipCard, category: 'Interactive' },
  { name: 'Elastic Button', component: ElasticButton, category: 'Interactive' },
  { name: 'Floating Badge', component: FloatingBadge, category: 'Animation' },
  { name: 'Typing Cursor', component: TypingCursor, category: 'Text' },
  { name: 'Pulsing Dot Grid', component: PulsingDotGrid, category: 'Animation' },
];

const categories = ['All', 'Background', 'Animation', '3D', 'Interactive', 'Text'];

export default function EffectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredEffects = activeCategory === 'All' 
    ? effects 
    : effects.filter(e => e.category === activeCategory);

  // Show loading skeleton during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                Dev Resources
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Effects Library
              </h1>
              <p className="text-foreground/60 max-w-2xl mx-auto">
                Loading effects...
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Inline styles for animations */}
      <style jsx global>{`
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -20px); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 30px); }
        }
        @keyframes orbFloat3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-30px) scale(1.2); opacity: 1; }
        }
        @keyframes gradientBorder {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
        @keyframes waveMove {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-5%); }
        }
        @keyframes cubeRotate {
          0% { transform: rotateX(0) rotateY(0); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
        @keyframes glitch1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
        }
        @keyframes glitch2 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(3px, -3px); }
          40% { transform: translate(3px, 3px); }
          60% { transform: translate(-3px, -3px); }
          80% { transform: translate(-3px, 3px); }
        }
        @keyframes blobMorph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 50% 40% 60% / 40% 50% 60% 50%; }
          75% { border-radius: 40% 60% 50% 50% / 60% 40% 50% 60%; }
        }
        @keyframes pulseFade {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(4); opacity: 0; }
        }
        @keyframes matrixFall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400px); }
        }
        @keyframes auroraWave1 {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(50px) scale(1.1); }
        }
        @keyframes auroraWave2 {
          0%, 100% { transform: translateX(0) scale(1.1); }
          50% { transform: translateX(-30px) scale(1); }
        }
        @keyframes auroraWave3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        @keyframes cursorBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes concentricPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }
        @keyframes dnaSwing {
          0%, 100% { transform: translateX(-20px); }
          50% { transform: translateX(20px); }
        }
        @keyframes meteorFall {
          0% { transform: translateX(0) translateY(0) rotate(45deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateX(300px) translateY(500px) rotate(45deg); opacity: 0; }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
        }
        @keyframes dotWave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spinX {
          0% { transform: rotateX(0deg) rotateY(60deg); }
          100% { transform: rotateX(360deg) rotateY(60deg); }
        }
        @keyframes spinY {
          0% { transform: rotateX(60deg) rotateY(0deg); }
          100% { transform: rotateX(60deg) rotateY(360deg); }
        }
        @keyframes spinZ {
          0% { transform: rotateZ(0deg); }
          100% { transform: rotateZ(360deg); }
        }
        @keyframes rippleExpand {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(20); opacity: 0; }
        }
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes squareRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes scanMove {
          0% { top: -4px; }
          100% { top: 100%; }
        }
        @keyframes plasmaMove {
          0%, 100% { filter: hue-rotate(0deg); transform: scale(1); }
          50% { filter: hue-rotate(180deg); transform: scale(1.1); }
        }
        @keyframes neonPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes floatCube {
          0%, 100% { transform: translateY(0) rotateX(0) rotateY(0); }
          50% { transform: translateY(-30px) rotateX(180deg) rotateY(180deg); }
        }
        @keyframes vortexSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes particleExplode {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(calc(cos(var(--angle)) * 100px), calc(sin(var(--angle)) * 100px)) scale(0); opacity: 0; }
        }
        @keyframes sineMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50px); }
        }
        @keyframes prismRotate {
          0% { transform: rotateY(0deg) rotateX(15deg); }
          100% { transform: rotateY(360deg) rotateX(15deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-150px); }
        }
        @keyframes kaleidoRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes kaleidoPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes liquidFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fireFlicker {
          0%, 100% { transform: scaleY(1) translateY(0); opacity: 0.8; }
          50% { transform: scaleY(1.2) translateY(-10px); opacity: 1; }
        }
        @keyframes radarSweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pendulum {
          0%, 100% { transform: rotate(-30deg); }
          50% { transform: rotate(30deg); }
        }
        @keyframes smokeRise {
          0% { transform: translateX(-50%) translateY(0) scale(1); opacity: 0.3; }
          100% { transform: translateX(-50%) translateY(-300px) scale(2); opacity: 0; }
        }
        @keyframes wormhole {
          0% { transform: translateZ(0) scale(1); opacity: 1; }
          100% { transform: translateZ(200px) scale(0.5); opacity: 0; }
        }
        @keyframes pixelFall {
          0% { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(400px); opacity: 0; }
        }
        @keyframes heartbeatLine {
          0% { stroke-dashoffset: 300; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -300; }
        }
        @keyframes heartbeatPulse {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.2); }
          30% { transform: scale(1); }
          45% { transform: scale(1.15); }
          60% { transform: scale(1); }
        }
        @keyframes magneticPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        @keyframes neonFlicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
          20%, 24%, 55% { opacity: 0.6; }
        }
        @keyframes wavyBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes gradientTextFlow {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes text3dRotate {
          0%, 100% { transform: rotateY(-5deg); }
          50% { transform: rotateY(5deg); }
        }
        @keyframes cyberGridMove {
          0% { background-position: 0 0; }
          100% { background-position: 0 50px; }
        }
        @keyframes energyPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 60px 30px rgba(0, 212, 255, 0.5), inset 0 0 30px rgba(255,255,255,0.5); }
          50% { transform: scale(1.1); box-shadow: 0 0 80px 40px rgba(0, 212, 255, 0.7), inset 0 0 40px rgba(255,255,255,0.7); }
        }
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes splitReveal {
          0% { transform: translateY(100%); opacity: 0; }
          20% { transform: translateY(0); opacity: 1; }
          80% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        @keyframes auroraDrift {
          0% { transform: translateX(-20%) translateY(0) rotate(0deg); }
          50% { transform: translateX(20%) translateY(-10%) rotate(10deg); }
          100% { transform: translateX(-20%) translateY(0) rotate(0deg); }
        }
        @keyframes tunnelRotate {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        @keyframes flarePulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes flareSweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fiberScan {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(-30px); opacity: 1; }
        }
        @keyframes echoRing {
          0% { transform: scale(0.6); opacity: 0.2; }
          50% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        @keyframes spectrumUp {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        @keyframes spiralOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes planetOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes laserSweep {
          0% { transform: translateX(0); opacity: 0.2; }
          40% { opacity: 1; }
          100% { transform: translateX(220%); opacity: 0; }
        }
        @keyframes tunnelZoom {
          0% { transform: scale(0.4); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes lavaBlob {
          0%, 100% { transform: translateY(0) scale(1); border-radius: 35% 65% 60% 40%; }
          50% { transform: translateY(-20px) scale(1.05); border-radius: 60% 40% 35% 65%; }
        }
        @keyframes carouselRotate {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes pyramidSpin {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes ringOrbit3D {
          0% { transform: rotateZ(0deg); }
          100% { transform: rotateZ(360deg); }
        }
        @keyframes cursorRingPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
        }
        @keyframes scanlineText {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes outlinePulse {
          0%, 100% { text-shadow: 0 0 24px rgba(56, 189, 248, 0.9), 0 0 40px rgba(129, 140, 248, 0.8); }
          50% { text-shadow: 0 0 40px rgba(56, 189, 248, 1), 0 0 70px rgba(129, 140, 248, 1); }
        }
        @keyframes shadowTrail {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }
        @keyframes bubbleRise {
          0% { transform: translateY(0) scale(1); opacity: 0.7; }
          100% { transform: translateY(-500px) scale(1.5); opacity: 0; }
        }
        @keyframes countdownPop {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes morphFade {
          0% { opacity: 0; transform: scale(0.8); }
          20% { opacity: 1; transform: scale(1); }
          80% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.1); }
        }
        @keyframes crosshatchShift {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        @keyframes topoPulse {
          0%, 100% { transform: rotate(var(--r, 0deg)) scale(1); opacity: 0.3; }
          50% { transform: rotate(var(--r, 0deg)) scale(1.05); opacity: 0.6; }
        }
        @keyframes barcodeGrow {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.15); }
        }
        @keyframes soundWaveBar {
          0%, 100% { height: 4px; }
          50% { height: 60px; }
        }
        @keyframes globeSpin {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes heartbeatDraw {
          0% { stroke-dashoffset: 600; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -600; }
        }
        @keyframes confettiFall {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          100% { transform: translate(var(--confetti-x, 0), var(--confetti-y, -200px)) rotate(720deg); opacity: 0; }
        }
        @keyframes snowFall {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(500px) translateX(20px); }
        }
        @keyframes dropletWobble {
          0%, 100% { transform: scaleX(1) scaleY(1); }
          50% { transform: scaleX(0.95) scaleY(1.05); }
        }
        @keyframes spinnerFade {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes elasticBounce {
          0%, 100% { transform: scale(1); }
          30% { transform: scale(1.05); }
          50% { transform: scale(0.98); }
          70% { transform: scale(1.02); }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes dotGridPulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.5); opacity: 1; }
        }
      `}</style>
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Dev Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Effects Library
            </h1>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              A collection of {effects.length} background effects, animations, and 3D visualizations 
              ready to use in your projects.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-foreground/5 text-foreground/60 hover:bg-foreground/10'
                }`}
              >
                {category}
                <span className="ml-1.5 text-xs opacity-60">
                  ({category === 'All' ? effects.length : effects.filter(e => e.category === category).length})
                </span>
              </button>
            ))}
          </div>

          {/* Effects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredEffects.map((effect, index) => {
              const EffectComponent = effect.component;
              return (
                <div key={index} className="group">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{effect.name}</h3>
                      <span className="text-xs text-foreground/40">{effect.category}</span>
                    </div>
                  </div>
                  <EffectComponent />
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
