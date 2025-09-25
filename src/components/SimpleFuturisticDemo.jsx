import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SimpleFuturisticDemo = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white">
        <motion.h1 
          className="text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Futuristic Scroll Observer
        </motion.h1>

        <motion.p 
          className="text-xl mb-12 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Interactive Animations with Smooth Scroll
        </motion.p>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-gray-400">
            Scroll Progress: {Math.round(scrollProgress * 100)}%
          </p>
        </div>
      </div>

      {/* Simple Animated Paths */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox="0 0 1000 1000"
        style={{ zIndex: 1 }}
      >
        {/* Main Demo Path */}
        <motion.path
          d="M100,500 Q300,200 500,500 T900,300"
          stroke="url(#gradient1)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          style={{
            filter: 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.6))'
          }}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="50%" stopColor="#ff00ff" />
            <stop offset="100%" stopColor="#ffff00" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default SimpleFuturisticDemo;