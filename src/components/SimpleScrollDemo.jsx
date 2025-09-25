import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SimpleScrollDemo = () => {
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
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Simple Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <motion.h2 
          className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Scroll Observer Demo
        </motion.h2>

        <motion.p 
          className="text-xl mb-8 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Interactive animations with smooth scrolling
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/20 rounded-full mx-auto mb-4">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
        <p className="text-sm text-gray-400">
          Scroll Progress: {Math.round(scrollProgress * 100)}%
        </p>
      </div>

      {/* Simple SVG Path */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox="0 0 1000 1000"
      >
        <motion.path
          d="M100,500 Q300,200 500,500 T900,300"
          stroke="rgba(0, 255, 255, 0.6)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </svg>
    </section>
  );
};

export default SimpleScrollDemo;