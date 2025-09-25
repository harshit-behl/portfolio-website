import { useState, useEffect } from 'react'

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up')
  const [prevScrollY, setPrevScrollY] = useState(0)

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      
      if (scrollY > prevScrollY) {
        setScrollDirection('down')
      } else if (scrollY < prevScrollY) {
        setScrollDirection('up')
      }
      
      setPrevScrollY(scrollY)
    }

    window.addEventListener('scroll', updateScrollDirection)
    return () => window.removeEventListener('scroll', updateScrollDirection)
  }, [prevScrollY])

  return scrollDirection
}

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', updatePosition)
    updatePosition()
    
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}

export const useIntersectionObserver = (options = {}) => {
  const [ref, setRef] = useState(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
        ...options
      }
    )

    observer.observe(ref)

    return () => {
      if (ref) observer.unobserve(ref)
    }
  }, [ref, options])

  return [setRef, isIntersecting]
}