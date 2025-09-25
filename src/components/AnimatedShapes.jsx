import { motion } from 'framer-motion';
import PathDrawAnimation from './PathDrawAnimation';

// Animated arrow component
export const AnimatedArrow = ({ className, delay = 0 }) => (
  <PathDrawAnimation
    path="M10,50 L50,10 M50,10 L90,50 M50,10 L50,90"
    className={`w-12 h-12 ${className}`}
    delay={delay}
    duration={1.5}
  />
);

// Animated checkmark component
export const AnimatedCheckmark = ({ className, delay = 0 }) => (
  <PathDrawAnimation
    path="M20,50 L40,70 L80,30"
    stroke="#10b981"
    strokeWidth={4}
    className={`w-8 h-8 ${className}`}
    delay={delay}
    duration={1}
  />
);

// Animated circle component
export const AnimatedCircle = ({ className, delay = 0 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`w-12 h-12 ${className}`}
  >
    <motion.circle
      cx="50"
      cy="50"
      r="40"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        pathLength: { delay, duration: 2, ease: "easeInOut" },
        opacity: { delay, duration: 0.3 }
      }}
    />
  </motion.svg>
);

// Animated wave component
export const AnimatedWave = ({ className, delay = 0 }) => (
  <PathDrawAnimation
    path="M10,50 Q30,20 50,50 T90,50"
    className={`w-16 h-8 ${className}`}
    delay={delay}
    duration={2}
  />
);

