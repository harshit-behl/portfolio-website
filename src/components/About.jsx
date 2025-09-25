import { motion } from 'framer-motion'
import { Code, Shield, Music } from 'lucide-react'
import profilePhoto from '/profile-photo.jpg'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const hobbies = [
    { icon: Code, label: 'Programming', emoji: '💻' },
    { icon: Shield, label: 'Cybersecurity', emoji: '⚡' },
    { icon: Music, label: 'Music', emoji: '🎶' }
  ]

  return (
    <section id="about" className="pt-24 pb-20 lg:pt-32 lg:pb-32 bg-gradient-to-br from-primary-50/30 to-white dark:from-gray-900/50 dark:to-gray-800">
      <div className="max-w-6xl mx-auto section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Animated background rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border-2 border-dashed border-accent-300/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-primary-300/20"
              />
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-white to-gray-50 border-4 border-white"
              >
                <img
                  src={profilePhoto}
                  alt="Professional Photo - Harshit Behl"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Professional fallback
                    e.target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-500 cursor-pointer';
                    fallback.innerHTML = `
                      <div class="text-center">
                        <div class="text-6xl mb-4">👨‍💻</div>
                        <div class="text-2xl font-bold mb-2">Harshit Behl</div>
                        <div class="text-lg opacity-90">Full Stack Developer</div>
                        <div class="text-sm mt-1 opacity-75">& Cybersecurity Expert</div>
                      </div>
                    `;
                    e.target.parentNode.appendChild(fallback);
                  }}
                />
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent-500 rounded-full blur-sm"
              />
              <motion.div
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [1, 0.5, 1] 
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary-500 rounded-full blur-sm"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Section Title */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"></div>
            </div>

            {/* Bio */}
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I&apos;m a passionate Full Stack Developer with a strong background in cybersecurity. 
                My journey began with curiosity about how systems work, leading me to explore both 
                creative development and security aspects of technology.
              </p>
              <p className="text-lg leading-relaxed">
                With expertise in modern web technologies and deep understanding of security principles, 
                I create robust, scalable applications that not only perform excellently but also 
                maintain the highest security standards.
              </p>
              <p className="text-lg leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring cybersecurity trends, contributing to 
                open-source projects, or enjoying music production as a creative outlet.
              </p>
            </div>

            {/* Skills & Hobbies */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {hobbies.map((hobby) => {
                const Icon = hobby.icon
                return (
                  <motion.div
                    key={hobby.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-6 h-6 text-primary-500" />
                      <span className="text-2xl">{hobby.emoji}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {hobby.label}
                    </h3>
                  </motion.div>
                )
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-1">3+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-1">50+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-1">10+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Technologies</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About