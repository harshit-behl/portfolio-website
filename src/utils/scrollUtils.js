// Smooth scrolling utility functions
export const smoothScrollTo = (elementId, offset = 100) => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.offsetTop - offset
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

export const smoothScrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Intersection Observer for scroll-triggered animations
export const createScrollObserver = (callback, options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '-10% 0px -10% 0px'
  }
  
  return new IntersectionObserver(callback, { ...defaultOptions, ...options })
}

// Throttled scroll event listener
export const throttledScrollListener = (callback, delay = 16) => {
  let timeoutId = null
  let lastExecTime = 0
  
  return function (...args) {
    const currentTime = Date.now()
    
    if (currentTime - lastExecTime > delay) {
      callback.apply(this, args)
      lastExecTime = currentTime
    } else {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        callback.apply(this, args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }
}

// Easing functions for custom animations
export const easingFunctions = {
  easeInOut: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeOut: (t) => t * (2 - t),
  easeIn: (t) => t * t,
  bounce: (t) => {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t
    } else if (t < 2 / 2.75) {
      return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
    } else if (t < 2.5 / 2.75) {
      return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
    } else {
      return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
    }
  }
}