import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-primary-200/30 z-50"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-accent-500 to-primary-600 origin-left"
        style={{ scaleX: scrollProgress }}
      />
    </motion.div>
  )
}

export default ScrollProgress