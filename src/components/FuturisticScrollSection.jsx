import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Enhanced scroll observer that works with the futuristic API
const FuturisticScrollSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const pathControls = useAnimation();
  const circuitControls = useAnimation();

  // Simulate our enhanced API functions
  const stagger = (amount = 100) => (index = 0) => index * amount;
  
  const animate = async (target, options) => {
    const { draw, delay = 0, ease = 'easeInOut', duration = 2 } = options;
    
    if (target && draw) {
      const pathLength = draw[draw.length - 1];
      await target.start({
        pathLength: parseFloat(pathLength) || 1,
        opacity: 1,
        transition: { 
          delay: typeof delay === 'function' ? delay(0) : delay,
          duration,
          ease 
        }
      });
    }
  };

  // Enhanced scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on section visibility
      let progress = 0;
      if (rect.top < windowHeight && rect.bottom > 0) {
        progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + sectionHeight)));
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger animations when visible
  useEffect(() => {
    if (isVisible && scrollProgress > 0.2) {
      // Simulate the exact API syntax we created
      animate(pathControls, {
        draw: ['0 0', '0 1', '1 1'],
        delay: stagger(40),
        ease: 'inOut(3)'
      });

      // Circuit board animation
      setTimeout(() => {
        animate(circuitControls, {
          draw: ['0 0', '0.3 0.3', '0.7 0.7', '1 1'],
          delay: 200,
          ease: 'inOut(2)'
        });
      }, 500);
    }
  }, [isVisible, scrollProgress, pathControls, circuitControls]);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden"
    >
      {/* Dynamic Grid Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, ${0.1 * scrollProgress}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, ${0.1 * scrollProgress}) 1px, transparent 1px)
          `,
          backgroundSize: `${50 + scrollProgress * 20}px ${50 + scrollProgress * 20}px`
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <motion.h2 
          className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          Advanced Scroll Observer
        </motion.h2>

        <motion.p 
          className="text-xl lg:text-2xl mb-12 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Real-time scroll interactions with Lenis smooth scrolling
        </motion.p>

        {/* Progress Display */}
        <div className="mb-12">
          <div className="w-80 h-3 bg-white/20 rounded-full mx-auto overflow-hidden backdrop-blur-sm">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"
              style={{ width: `${scrollProgress * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
          <p className="mt-4 text-lg text-gray-400">
            Section Progress: {Math.round(scrollProgress * 100)}%
          </p>
        </div>

        {/* API Code Example */}
        <motion.div
          className="bg-black/40 backdrop-blur-sm rounded-lg p-6 text-left text-sm font-mono border border-white/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="text-cyan-400 mb-2">{`// Enhanced Scroll Observer API`}</div>
          <div className="text-white">
            <span className="text-purple-400">animate</span>
            (<span className="text-yellow-400">createDrawable</span>
            (<span className="text-green-400">&apos;path&apos;</span>), {'{'}
          </div>
          <div className="ml-4 text-white">
            <span className="text-blue-400">draw</span>: [
            <span className="text-green-400">&apos;0 0&apos;</span>, 
            <span className="text-green-400">&apos;0 1&apos;</span>, 
            <span className="text-green-400">&apos;1 1&apos;</span>],
          </div>
          <div className="ml-4 text-white">
            <span className="text-blue-400">delay</span>: 
            <span className="text-purple-400">stagger</span>(40),
          </div>
          <div className="ml-4 text-white">
            <span className="text-blue-400">ease</span>: 
            <span className="text-green-400">&apos;inOut(3)&apos;</span>,
          </div>
          <div className="ml-4 text-white">
            <span className="text-blue-400">autoplay</span>: 
            <span className="text-purple-400">onScroll</span>({'{'}
            <span className="text-blue-400">sync</span>: 
            <span className="text-yellow-400">true</span> {'}'})
          </div>
          <div className="text-white">{'}'});</div>
        </motion.div>
      </div>

      {/* Animated SVG Paths */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox="0 0 1000 1000"
        style={{ zIndex: 1 }}
      >
        {/* Main Demo Path */}
        <motion.path
          d="M100,500 Q300,200 500,500 T900,300"
          stroke="url(#enhancedGradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={pathControls}
          style={{
            filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))'
          }}
        />

        {/* Circuit Pattern */}
        <g opacity="0.8">
          <motion.path
            d="M150,150 L150,350 L350,350 L350,550 L550,550 L750,550 L750,750"
            stroke="url(#circuitGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={circuitControls}
          />
          
          {/* Connection Points */}
          {[[150, 150], [350, 350], [550, 550], [750, 750]].map(([x, y], i) => (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="8"
              fill="#00ffff"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: isVisible ? 1 : 0, 
                opacity: isVisible ? 1 : 0 
              }}
              transition={{ delay: i * 0.2 + 1, duration: 0.5 }}
            />
          ))}
        </g>

        {/* Enhanced Gradients */}
        <defs>
          <linearGradient id="enhancedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="33%" stopColor="#ff00ff" />
            <stop offset="66%" stopColor="#ffff00" />
            <stop offset="100%" stopColor="#00ffff" />
          </linearGradient>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff00ff" />
            <stop offset="50%" stopColor="#00ffff" />
            <stop offset="100%" stopColor="#ffff00" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${10 + (i * 6) % 80}%`,
            top: `${20 + (i * 8) % 60}%`,
          }}
          animate={{
            y: [-20, -60, -20],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </section>
  );
};

export default FuturisticScrollSection;