import { useEffect, useRef, useCallback, useState } from 'react';
import { useAnimation, useInView } from 'framer-motion';
import { useLenis } from './useLenis';

// Futuristic scroll observer with enhanced path drawing
export const useScrollObserver = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const observersRef = useRef(new Map());
  const { lenis } = useLenis();

  // Enhanced scroll tracking with velocity
  useEffect(() => {
    if (!lenis) return;

    const handleScroll = (e) => {
      const progress = e.progress || 0;
      const currentVelocity = e.velocity || 0;
      
      setScrollProgress(progress);
      setVelocity(currentVelocity);

      // Trigger scroll-based animations
      observersRef.current.forEach((observer) => {
        if (observer.callback) {
          observer.callback({
            progress,
            velocity: currentVelocity,
            direction: e.direction || 0
          });
        }
      });
    };

    lenis.on('scroll', handleScroll);

    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [lenis]);

  // Register scroll observer
  const observe = useCallback((id, callback, options = {}) => {
    observersRef.current.set(id, {
      callback,
      options,
      active: true
    });

    return () => {
      observersRef.current.delete(id);
    };
  }, []);

  return {
    scrollProgress,
    velocity,
    observe,
    lenis
  };
};

// Enhanced drawable hook that works with scroll observer
export const useDrawable = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: false, margin: "-100px", amount: 0.3 });
  const { observe } = useScrollObserver();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const animateDrawing = useCallback((options = {}) => {
    const {
      draw = ['0 0', '0 1', '1 1'],
      delay = 0,
      ease = 'inOut(3)',
      autoplay = null,
      stagger = null
    } = options;

    // Parse ease curves
    const parseEase = (easeStr) => {
      if (typeof easeStr === 'string' && easeStr.includes('inOut')) {
        const strength = parseFloat(easeStr.match(/\d+(\.\d+)?/)?.[0] || 2);
        return [0.25, 0.1 * strength, 0.25, 1];
      }
      return 'easeInOut';
    };

    // Calculate staggered delay
    const calculateDelay = (baseDelay, staggerFn) => {
      if (typeof staggerFn === 'function') {
        return baseDelay + staggerFn(0);
      }
      return baseDelay;
    };

    const finalDelay = calculateDelay(delay, stagger);
    const finalEase = parseEase(ease);

    // Convert draw array to pathLength values
    const pathLengths = draw.map(frame => {
      if (typeof frame === 'string') {
        const parts = frame.trim().split(' ');
        return parseFloat(parts[1] || parts[0] || 0);
      }
      return parseFloat(frame) || 0;
    });

    // Execute animation
    if (isInView || (autoplay && autoplay.sync)) {
      setIsAnimating(true);
      
      controls.start({
        pathLength: pathLengths,
        opacity: 1,
        transition: {
          pathLength: {
            delay: finalDelay,
            duration: 2,
            ease: finalEase,
            times: pathLengths.length > 1 ? pathLengths.map((_, i) => i / (pathLengths.length - 1)) : [0, 1]
          },
          opacity: {
            delay: finalDelay,
            duration: 0.5
          }
        },
        onComplete: () => setIsAnimating(false)
      });
    }

    // Setup scroll sync if needed
    if (autoplay && autoplay.sync && ref.current) {
      const unobserve = observe(ref.current.id || Math.random().toString(), 
        ({ progress, velocity }) => {
          if (isInView && !isAnimating) {
            // Trigger based on scroll progress
            const trigger = progress > 0.1 && Math.abs(velocity) > 0.1;
            if (trigger) {
              controls.start({
                pathLength: pathLengths[Math.floor(progress * pathLengths.length)] || 1,
                transition: { duration: 0.3 }
              });
            }
          }
        }
      );

      return unobserve;
    }
  }, [controls, isInView, observe, isAnimating]);

  return {
    ref,
    controls,
    isInView,
    isAnimating,
    animate: animateDrawing
  };
};