import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useScrollEffects'

const SectionWrapper = ({ 
  children, 
  id, 
  className = '',
  parallaxSpeed = 0,
  delay = 0,
  background = 'transparent'
}) => {
  const ref = useRef(null)
  const [intersectionRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [parallaxSpeed, -parallaxSpeed])
  
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.section
      ref={(node) => {
        ref.current = node
        intersectionRef(node)
      }}
      id={id}
      style={{ y: parallaxSpeed ? y : 0, background }}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={sectionVariants}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  )
}

export default SectionWrapper