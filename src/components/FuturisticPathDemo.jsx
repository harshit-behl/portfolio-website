import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { animate, createDrawable, stagger, onScroll } from '../utils/animationUtils';
import { useScrollObserver } from '../hooks/useScrollObserver';

const FuturisticPathDemo = () => {
  const pathRef = useRef(null);
  const circuitRef = useRef(null);
  const { scrollProgress } = useScrollObserver();

  useEffect(() => {
    // Demo of the exact API syntax requested
    const runAnimations = async () => {
      // Example 1: Basic path drawing with exact syntax
      await animate(createDrawable(pathRef), {
        draw: ['0 0', '0 1', '1 1'],
        delay: stagger(40),
        ease: 'inOut(3)',
        autoplay: onScroll({ sync: true })
      });

      // Example 2: Circuit board effect
      setTimeout(() => {
        animate(createDrawable(circuitRef), {
          draw: ['0 0', '0.3 0.3', '0.7 0.7', '1 1'],
          delay: 200,
          ease: 'inOut(2)',
          autoplay: onScroll({ sync: true, threshold: 0.2 })
        });
      }, 500);
    };

    runAnimations();
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>
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
          Interactive Path Animations with Lenis Smooth Scroll
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

      {/* Animated Paths */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox="0 0 1000 1000"
        style={{ zIndex: 1 }}
      >
        {/* Main Demo Path */}
        <path
          ref={pathRef}
          d="M100,500 Q300,200 500,500 T900,300"
          stroke="url(#gradient1)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.6))'
          }}
        />

        {/* Circuit Board Pattern */}
        <g ref={circuitRef} opacity="0.6">
          <path
            d="M200,100 L200,300 L400,300 L400,500 L600,500"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M600,500 L800,500 L800,700 L600,700"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="400" cy="300" r="8" fill="#00ffff" opacity="0.8" />
          <circle cx="600" cy="500" r="8" fill="#ff00ff" opacity="0.8" />
          <circle cx="800" cy="700" r="8" fill="#ffff00" opacity="0.8" />
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="50%" stopColor="#ff00ff" />
            <stop offset="100%" stopColor="#ffff00" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff00ff" />
            <stop offset="100%" stopColor="#00ffff" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
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

export default FuturisticPathDemo;