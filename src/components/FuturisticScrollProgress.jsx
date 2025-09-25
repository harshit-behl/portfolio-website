import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { animate, createDrawable, stagger, onScroll } from './FuturisticScrollObserver';

export const FuturisticScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  
  // Create animated path for progress bar
  const progressPath = createDrawable('path');
  
  // Animate the progress path using your API
  useEffect(() => {
    animate(progressPath, {
      draw: ['0 0', '0 1', '1 1'],
      delay: stagger(20),
      ease: 'inOut(3)',
      autoplay: onScroll({ sync: true }),
    });
  }, [progressPath]);

  // Transform values for various effects
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const glowIntensity = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const pulseScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setIsVisible(latest > 0.01);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        style={{
          scaleX: pathLength,
          transformOrigin: 'left',
          filter: `drop-shadow(0 0 ${glowIntensity}px #3b82f6)`,
        }}
      />
      
      {/* Futuristic progress indicator */}
      <motion.div 
        className="fixed top-4 right-4 z-50"
        style={{ scale: pulseScale }}
      >
        <svg width="60" height="60" className="transform -rotate-90">
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          
          {/* Background circle */}
          <circle
            cx="30"
            cy="30"
            r="25"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Progress circle */}
          <motion.circle
            cx="30"
            cy="30"
            r="25"
            stroke="url(#progressGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            style={{ 
              pathLength: pathLength,
              filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))'
            }}
            strokeDasharray="157" // 2 * π * 25
          />
          
          {/* Center dot */}
          <motion.circle
            cx="30"
            cy="30"
            r="3"
            fill="url(#progressGradient)"
            style={{ scale: pulseScale }}
          />
        </svg>
        
        {/* Percentage text */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center text-xs font-bold text-blue-400"
          style={{ transform: 'rotate(90deg)' }}
        >
          {Math.round(scrollYProgress.get() * 100)}%
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${10 + i * 20}%`,
              top: '10px',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </>
  );
};