import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

// Enhanced scroll observer with futuristic animations
export const useFuturisticScrollObserver = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to various animated values
  const glowIntensity = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const particleCount = useTransform(scrollYProgress, [0, 1], [5, 50]);

  const observeElement = (element, callback) => {
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, element]));
            callback?.(true);
          } else {
            setVisibleElements(prev => {
              const newSet = new Set(prev);
              newSet.delete(element);
              return newSet;
            });
            callback?.(false);
          }
        });
      },
      {
        threshold: [0, 0.1, 0.5, 1],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  };

  return { observeElement, visibleElements, scrollYProgress, glowIntensity, particleCount };
};

// Enhanced drawable path animation system
export const createDrawable = (type) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  return {
    ref,
    controls,
    isVisible,
    progress,
    setIsVisible,
    setProgress,
    type
  };
};

// Stagger function for delays
export const stagger = (ms) => (index) => (index * ms) / 1000;

// Enhanced onScroll with sync capabilities
export const onScroll = (options = {}) => ({
  sync: options.sync || false,
  trigger: options.trigger || 'visible',
  repeat: options.repeat || false
});

// Main animation function with your API
export const animate = (drawable, options = {}) => {
  const {
    draw = ['0 0', '0 1', '1 1'],
    delay = 0,
    ease = 'inOut(3)',
    autoplay = null,
    stagger = 40
  } = options;

  useEffect(() => {
    if (!drawable.ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || (autoplay && autoplay.sync)) {
            drawable.setIsVisible(true);
            
            // Convert draw array to animation sequence
            const animations = draw.map((frame, index) => {
              const [start, end] = typeof frame === 'string' 
                ? frame.split(' ').map(Number) 
                : [0, frame];
              
              return {
                pathLength: end,
                opacity: end > 0 ? 1 : 0,
                filter: `drop-shadow(0 0 ${end * 10}px #3b82f6)`,
                transition: {
                  delay: (typeof delay === 'function' ? delay(index) : delay) + (index * stagger) / 1000,
                  duration: 1.5,
                  ease: ease.includes('inOut') ? 'easeInOut' : ease
                }
              };
            });

            // Execute animations in sequence
            animations.forEach((anim, index) => {
              setTimeout(() => {
                drawable.controls.start(anim);
                drawable.setProgress((index + 1) / animations.length);
              }, anim.transition.delay * 1000);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -20% 0px'
      }
    );

    observer.observe(drawable.ref.current);
    return () => observer.disconnect();
  }, [drawable, draw, delay, ease, autoplay, stagger]);

  return drawable;
};

// Futuristic animated path component
export const FuturisticPath = ({ 
  d, 
  className = "", 
  glowColor = "#3b82f6",
  strokeWidth = 2,
  animationDelay = 0 
}) => {
  const pathDrawable = createDrawable('path');
  
  // Use the animate function with your API
  animate(pathDrawable, {
    draw: ['0 0', '0 1', '1 1'],
    delay: stagger(40),
    ease: 'inOut(3)',
    autoplay: onScroll({ sync: true }),
  });

  return (
    <svg 
      ref={pathDrawable.ref}
      viewBox="0 0 100 100" 
      className={`${className} pointer-events-none`}
      style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' }}
    >
      <defs>
        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={glowColor} stopOpacity="0.8" />
          <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
          <stop offset="100%" stopColor={glowColor} stopOpacity="0.8" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <motion.path
        d={d}
        stroke="url(#pathGradient)"
        strokeWidth={strokeWidth}
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={pathDrawable.controls}
        style={{
          strokeLinecap: "round",
          strokeLinejoin: "round",
          filter: "url(#glow)"
        }}
      />
    </svg>
  );
};

// Interactive scroll particles
export const ScrollParticles = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity }}
    >
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            scale
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </motion.div>
  );
};

// Futuristic section wrapper with enhanced animations
export const FuturisticSection = ({ children, className = "", id }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start({
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
              duration: 1.2,
              ease: "easeOut",
              staggerChildren: 0.1
            }
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
      animate={controls}
    >
      {/* Futuristic border lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FuturisticPath
          d="M0,0 L100,0 L100,100 L0,100 Z"
          className="absolute inset-0 w-full h-full"
          glowColor="#3b82f6"
          strokeWidth={1}
          animationDelay={0.5}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Animated corner accents */}
      {isVisible && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-blue-400"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          />
          <motion.div
            className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-blue-400"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-blue-400"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-blue-400"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          />
        </>
      )}
    </motion.section>
  );
};