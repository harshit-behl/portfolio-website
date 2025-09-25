// Enhanced draw animation system with futuristic scroll observer
export const createDrawable = (type) => {
  // Return a factory function that creates drawable objects
  return {
    type,
    id: Math.random().toString(36).substr(2, 9),
    animations: [],
    scrollProgress: 0
  };
};

// Enhanced animate function with your exact API
export const animate = (drawable, options = {}) => {
  if (!drawable || typeof drawable !== 'object') return drawable;

  const {
    draw = ['0 0', '0 1', '1 1'],
    delay = 0,
    ease = 'inOut(3)',
    autoplay = null,
    stagger = null
  } = options;

  // Parse ease function
  const parseEase = (easeStr) => {
    if (typeof easeStr === 'string' && easeStr.includes('inOut')) {
      const strength = easeStr.match(/\d+/)?.[0] || 2;
      return [0.25, 0.1 * strength, 0.25, 1];
    }
    return 'easeInOut';
  };

  // Calculate delay with stagger
  const calculateDelay = (baseDelay, staggerFn) => {
    if (typeof staggerFn === 'function') {
      return baseDelay + staggerFn(0); // Default index 0
    }
    return baseDelay;
  };

  const finalDelay = calculateDelay(delay, stagger);
  const finalEase = parseEase(ease);

  // Store animation config
  const animationConfig = {
    draw,
    delay: finalDelay,
    ease: finalEase,
    autoplay
  };

  drawable.animations = drawable.animations || [];
  drawable.animations.push(animationConfig);

  return drawable;
};

// Stagger function generator
export const stagger = (ms) => (index) => (index * ms) / 1000;

// Scroll synchronization options
export const onScroll = (options) => ({
  sync: options?.sync || false,
  threshold: options?.threshold || 0.5,
  rootMargin: options?.rootMargin || "-100px"
});

