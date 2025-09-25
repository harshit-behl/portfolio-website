// Futuristic animation utilities for enhanced scroll interactions

// Stagger function factory
export const stagger = (amount = 100) => {
  return (index = 0) => index * amount;
};

// Enhanced easing presets
export const easing = {
  'inOut(1)': [0.25, 0.1, 0.25, 1],
  'inOut(2)': [0.25, 0.2, 0.25, 1],
  'inOut(3)': [0.25, 0.3, 0.25, 1],
  'inOut(4)': [0.25, 0.4, 0.25, 1],
  'smooth': [0.25, 0.1, 0.25, 1],
  'bouncy': [0.68, -0.55, 0.265, 1.55],
  'elastic': [0.175, 0.885, 0.32, 1.275]
};

// Scroll sync factory
export const onScroll = (options = {}) => {
  return {
    sync: options.sync || false,
    threshold: options.threshold || 0.1,
    velocity: options.velocity || 0.1,
    ...options
  };
};

// Create drawable element factory
export const createDrawable = (selector) => {
  return {
    type: 'drawable',
    selector,
    element: null,
    init() {
      if (typeof selector === 'string') {
        this.element = document.querySelector(selector);
      } else if (selector && selector.current) {
        this.element = selector.current;
      } else {
        this.element = selector;
      }
      return this;
    }
  };
};

// Enhanced animate function matching the exact API
export const animate = (drawable, options = {}) => {
  const {
    draw = ['0 0', '0 1', '1 1'],
    delay = 0,
    ease = 'inOut(3)',
    autoplay = null,
    stagger: staggerFn = null
  } = options;

  // Initialize drawable
  const target = drawable.init ? drawable.init() : drawable;
  
  // Calculate actual delay with stagger
  let actualDelay = delay;
  if (typeof staggerFn === 'function') {
    actualDelay = delay + staggerFn(0);
  } else if (typeof staggerFn === 'number') {
    actualDelay = delay + staggerFn;
  }

  // Parse draw values
  const drawValues = draw.map(frame => {
    if (typeof frame === 'string') {
      const parts = frame.trim().split(' ');
      // Return the second value or first if only one exists
      return parseFloat(parts[1] || parts[0] || 0);
    }
    return parseFloat(frame) || 0;
  });

  // Get easing curve
  const easingCurve = easing[ease] || ease || 'easeInOut';

  // Return animation promise
  return new Promise((resolve) => {
    const element = target.element || target;
    
    if (!element) {
      console.warn('No element found for animation');
      resolve();
      return;
    }

    // Create animation keyframes
    const keyframes = drawValues.map((value, index) => ({
      strokeDasharray: element.getTotalLength ? element.getTotalLength() : 1000,
      strokeDashoffset: element.getTotalLength ? 
        element.getTotalLength() * (1 - value) : 
        1000 * (1 - value),
      offset: drawValues.length > 1 ? index / (drawValues.length - 1) : index
    }));

    // Execute animation
    const animation = element.animate(keyframes, {
      duration: 2000,
      delay: actualDelay,
      easing: Array.isArray(easingCurve) ? 
        `cubic-bezier(${easingCurve.join(',')})` : 
        easingCurve,
      fill: 'forwards'
    });

    animation.addEventListener('finish', resolve);

    // Handle scroll sync
    if (autoplay && autoplay.sync) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top + scrollY;
        const progress = Math.max(0, Math.min(1, 
          (scrollY + windowHeight - elementTop) / windowHeight
        ));

        if (progress > autoplay.threshold) {
          animation.play();
          window.removeEventListener('scroll', handleScroll);
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state
    }
  });
};