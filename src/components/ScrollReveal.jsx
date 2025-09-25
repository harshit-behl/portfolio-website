import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useScrollEffects'

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  distance = 30,
  className = '',
  threshold = 0.1 
}) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      scale: direction === 'scale' ? 0.8 : 1,
      rotateY: direction === 'rotateY' ? 90 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal