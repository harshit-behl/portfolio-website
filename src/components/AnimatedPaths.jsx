import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Simple animated SVG paths component
const AnimatedPaths = ({ className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { 
          delay, 
          duration: 2, 
          ease: "easeInOut" 
        },
        opacity: { 
          delay, 
          duration: 0.5 
        }
      }
    })
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      <svg 
        width="100" 
        height="100" 
        viewBox="0 0 100 100" 
        className="absolute inset-0"
      >
        {/* Animated connecting lines */}
        <motion.path
          d="M10,50 Q30,20 50,50 T90,50"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={pathVariants}
          custom={0}
          className="text-accent-500 opacity-30"
        />
        
        <motion.path
          d="M20,80 L50,20 L80,80"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={pathVariants}
          custom={0.5}
          className="text-primary-500 opacity-20"
        />
        
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={pathVariants}
          custom={1}
          className="text-accent-300 opacity-15"
        />
      </svg>
    </div>
  );
};

// Animated underline component
export const AnimatedUnderline = ({ className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={className}>
      <svg width="80" height="8" viewBox="0 0 80 8" className="mx-auto">
        <motion.path
          d="M5,4 Q20,2 40,4 T75,4"
          stroke="url(#underline-gradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ 
            pathLength: { duration: 1.5, ease: "easeInOut" },
            opacity: { duration: 0.5 }
          }}
        />
        <defs>
          <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AnimatedPaths;