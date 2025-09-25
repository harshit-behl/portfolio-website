import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useIntersectionObserver } from '../hooks/useScrollEffects'

const ScrollText = ({ children, className = '' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])
  
  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const TypewriterText = ({ text, delay = 0, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 })

  useEffect(() => {
    if (!isIntersecting) return

    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }
    }, currentIndex === 0 ? delay : speed)

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, speed, text, isIntersecting])

  useEffect(() => {
    if (isIntersecting) {
      setDisplayText('')
      setCurrentIndex(0)
    }
  }, [isIntersecting])

  return (
    <span ref={ref} className="inline-block">
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="inline-block w-0.5 h-6 bg-accent-500 ml-1"
      />
    </span>
  )
}

export { ScrollText, TypewriterText }