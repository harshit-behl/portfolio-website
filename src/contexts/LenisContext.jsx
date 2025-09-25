import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { LenisContext } from './lenis-context';

export const LenisProvider = ({ children }) => {
  const lenisRef = useRef();
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    // Initialize Lenis with futuristic settings
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Futuristic easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenisInstance;
    setLenis(lenisInstance);

    // Animation loop
    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  );
};

export default LenisProvider;