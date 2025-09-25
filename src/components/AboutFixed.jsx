import { motion } from 'framer-motion'
import { Code, Shield, Music, User } from 'lucide-react'

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
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column - Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              {/* Profile Image Container */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                  <User className="w-32 h-32 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              
              {/* Animated Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-400 dark:border-blue-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: 'center' }}
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Header */}
            <div>
              <motion.h2 
                variants={itemVariants}
                className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              >
                About Me
              </motion.h2>
              <motion.div 
                variants={itemVariants}
                className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              />
            </div>

            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I&apos;m a passionate developer who loves exploring the intersection of frontend and backend technologies. 
                My journey in tech is driven by curiosity and the desire to create meaningful digital experiences.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me diving into cybersecurity concepts, experimenting with AI, 
                or working on personal projects that challenge me to learn something new.
              </p>
            </motion.div>

            {/* Skills/Interests */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">What I&apos;m passionate about:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {hobbies.map((hobby) => {
                  const IconComponent = hobby.icon
                  return (
                    <motion.div
                      key={hobby.label}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {hobby.label}
                        </span>
                        <span className="ml-2">{hobby.emoji}</span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Fun Fact */}
            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800"
            >
              <p className="text-gray-700 dark:text-gray-300 italic">
                💡 Fun fact: I love building things that make people&apos;s lives easier, whether it&apos;s a smooth user interface or a robust backend system.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About