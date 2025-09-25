import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { animate, createDrawable, stagger, onScroll } from './FuturisticScrollObserver';

// Enhanced interactive card with futuristic animations
export const FuturisticCard = ({ children, className = "", delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  
  // Create drawable paths for border animation
  const borderPath = createDrawable('path');
  
  useEffect(() => {
    // Animate border on scroll
    animate(borderPath, {
      draw: ['0 0', '0 1', '1 1'],
      delay: stagger(50),
      ease: 'inOut(3)',
      autoplay: onScroll({ sync: true }),
    });
  }, [borderPath]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`relative group ${className}`}
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={isVisible ? { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        transition: { delay, duration: 0.8, ease: "easeOut" }
      } : {}}
      whileHover={{ 
        y: -10, 
        rotateX: 5, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border overlay */}
      <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          
          <motion.rect
            x="0" y="0" 
            width="100%" height="100%"
            stroke="url(#borderGradient)"
            strokeWidth="2"
            fill="none"
            rx="12"
            initial={{ pathLength: 0 }}
            animate={borderPath.controls}
            style={{ 
              filter: isHovered 
                ? 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))' 
                : 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.3))'
            }}
          />
        </svg>
      </div>

      {/* Glow effect on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Corner indicators */}
      {isVisible && (
        <>
          <motion.div
            className="absolute -top-1 -left-1 w-3 h-3 bg-blue-400 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay + 0.5, duration: 0.3 }}
          />
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay + 0.7, duration: 0.3 }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

// Futuristic text reveal animation
export const FuturisticTextReveal = ({ text, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);
  const words = text.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={textRef} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : {}}
        transition={{ delay, duration: 0.8, ease: "easeOut" }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={isVisible ? { 
              opacity: 1, 
              y: 0, 
              filter: "blur(0px)",
              transition: { 
                delay: delay + (index * 0.1), 
                duration: 0.6,
                ease: "easeOut"
              }
            } : {}}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

// Interactive skill bar with futuristic styling
export const FuturisticSkillBar = ({ 
  skill, 
  percentage, 
  color = "blue", 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef(null);
  const progressPath = createDrawable('path');

  useEffect(() => {
    animate(progressPath, {
      draw: ['0 0', `0 ${percentage / 100}`, `1 ${percentage / 100}`],
      delay: stagger(30),
      ease: 'inOut(3)',
      autoplay: onScroll({ sync: true }),
    });
  }, [progressPath, percentage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  const colorMap = {
    blue: { from: '#3b82f6', to: '#1d4ed8' },
    purple: { from: '#8b5cf6', to: '#7c3aed' },
    cyan: { from: '#06b6d4', to: '#0891b2' },
    green: { from: '#10b981', to: '#059669' }
  };

  return (
    <motion.div
      ref={barRef}
      className="group"
      initial={{ opacity: 0, x: -50 }}
      animate={isVisible ? { 
        opacity: 1, 
        x: 0,
        transition: { delay, duration: 0.6 }
      } : {}}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill}
        </span>
        <span className="text-sm font-bold text-blue-400">
          {percentage}%
        </span>
      </div>
      
      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        {/* Background glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${colorMap[color].from}20, ${colorMap[color].to}20)`
          }}
          animate={isVisible ? {
            scale: [1, 1.1, 1],
            transition: { duration: 2, repeat: Infinity }
          } : {}}
        />
        
        {/* Progress bar */}
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: `linear-gradient(90deg, ${colorMap[color].from}, ${colorMap[color].to})`
          }}
          initial={{ width: 0 }}
          animate={isVisible ? { 
            width: `${percentage}%`,
            transition: { delay: delay + 0.3, duration: 1.2, ease: "easeOut" }
          } : {}}
        >
          {/* Animated shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ transform: 'skewX(-20deg)' }}
            animate={{
              x: ['-100%', '100%'],
              transition: { duration: 1.5, repeat: Infinity, delay: delay + 1 }
            }}
          />
        </motion.div>
        
        {/* Particle effects */}
        {isVisible && (
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 bg-${color}-400 rounded-full`}
                style={{
                  left: `${(percentage * 0.8) + Math.random() * 10}%`,
                  top: '50%',
                }}
                animate={{
                  y: [-4, -12, -4],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: delay + 1.5 + (i * 0.3)
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};