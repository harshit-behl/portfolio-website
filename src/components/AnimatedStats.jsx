import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useScrollEffects'

const CounterAnimation = ({ 
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '',
  className = '' 
}) => {
  const [count, setCount] = useState(0)
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 })

  useEffect(() => {
    if (!isIntersecting) return

    let startTime = null
    const startValue = 0
    const endValue = end

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(easeOutQuart * (endValue - startValue) + startValue)
      
      setCount(current)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isIntersecting, end, duration])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  )
}

// Stats component to showcase achievements
const StatsSection = () => {
  const stats = [
    { value: 50, suffix: '+', label: 'Projects Completed', icon: '🚀' },
    { value: 15, suffix: '+', label: 'Technologies Mastered', icon: '💻' },
    { value: 2, suffix: '+', label: 'Years Learning', icon: '📚' },
    { value: 98, suffix: '%', label: 'Code Quality Score', icon: '⭐' }
  ]

  return (
    <div className="py-16 bg-gradient-to-r from-primary-50 to-accent-50">
      <div className="max-w-6xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold gradient-text mb-4">
            By the Numbers
          </h3>
          <p className="text-primary-600">
            A snapshot of my journey in tech
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <CounterAnimation
                end={stat.value}
                suffix={stat.suffix}
                className="text-3xl md:text-4xl font-bold gradient-text block mb-2"
                duration={2.5}
              />
              <p className="text-primary-600 text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { CounterAnimation, StatsSection }