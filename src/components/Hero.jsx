import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import GradualBlur from './GradualBlur'

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative fabric-bg dark:bg-gray-900 pt-20" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-primary-50/50 to-accent-50/30 dark:from-gray-900/80 dark:via-gray-800/50 dark:to-gray-700/30"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto section-padding text-center">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border border-accent-500/30"
              />
              
              {/* Profile Image */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/80 shadow-2xl">
                {/* Your actual professional photo */}
                <img
                  src="/profile-photo.jpg"
                  alt="Harshit Behl - Full Stack Developer"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to professional gradient if image fails
                    e.target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-600 text-white hover:scale-110 transition-transform duration-500';
                    fallback.innerHTML = `
                      <div class="text-center">
                        <div class="text-3xl md:text-4xl font-bold">HB</div>
                        <div class="text-xs opacity-90">Professional</div>
                      </div>
                    `;
                    e.target.parentNode.appendChild(fallback);
                  }}
                />
              </div>
              
              {/* Floating particles */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 w-3 h-3 bg-accent-500 rounded-full opacity-70"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary-500 rounded-full opacity-70"
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-medium"
          >
            Hi, I&apos;m
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight"
          >
            Harshit Behl
          </motion.h1>

          {/* Subtitle */}
          <ScrollReveal direction="up" delay={0.6} distance={40}>
            <p className="text-xl md:text-2xl lg:text-3xl text-primary-700 dark:text-primary-300 font-light max-w-3xl mx-auto leading-relaxed">
              💻 Exploring Frontend & Backend | 🤖 Having fun with AI | 🚀 Always building & learning
            </p>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal direction="up" delay={0.8} distance={50}>
            <p className="text-base md:text-lg text-primary-600 dark:text-primary-400 max-w-2xl mx-auto leading-relaxed">
              Currently working on a React + Node.js price comparison app. I love collaborating on open-source web projects and fun side apps. Always learning AI and perfecting frontend design tips! 🎨
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <button 
              onClick={scrollToAbout}
              className="btn-primary"
            >
              Learn More About Me
            </button>
            <a 
              href="#contact"
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {[
              { icon: Github, href: 'https://github.com/harshit-behl', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/harshitsbehl', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:harshitsachinbehl@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-primary-700 hover:text-accent-600 hover:shadow-xl transition-all duration-200"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <GradualBlur
        target="parent"
        position="bottom"
        height="8rem"
        strength={3}
        divCount={6}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </section>
  )
}

export default Hero