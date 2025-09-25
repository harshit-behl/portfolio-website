import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'

const ParallaxSection = ({ children, speed = 0.5, className = '' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  )
}

const FloatingElements = () => {
  const { scrollYProgress } = useScroll()
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating geometric shapes */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-r from-accent-200/20 to-primary-200/20 rounded-full"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 left-10 w-16 h-16 bg-gradient-to-r from-primary-200/15 to-accent-200/15 rotate-45"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-32 right-32 w-12 h-12 border-2 border-accent-300/20 rounded-full"
      />
      <motion.div
        style={{ y: y2, rotate: rotate }}
        className="absolute bottom-20 left-20 w-8 h-8 bg-gradient-to-r from-accent-300/25 to-primary-300/25 rotate-12"
      />
    </div>
  )
}

export { ParallaxSection, FloatingElements }