import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-accent-300 bg-clip-text text-transparent">
              Harshit Behl
            </h3>
            <p className="text-primary-300 leading-relaxed">
              💻 Exploring Frontend & Backend | 🤖 Having fun with AI | 🚀 Always building & learning
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-accent-300">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => {
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  whileHover={{ x: 4 }}
                  className="text-primary-300 hover:text-accent-300 transition-colors duration-200 text-left"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-accent-300">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:harshitsachinbehl@gmail.com"
                className="block text-primary-300 hover:text-accent-300 transition-colors duration-200"
              >
                harshitsachinbehl@gmail.com
              </a>
              <a
                href="https://github.com/harshit-behl"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary-300 hover:text-accent-300 transition-colors duration-200"
              >
                @harshit-behl
              </a>
              <p className="text-primary-300">India</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-700 dark:border-gray-600 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-primary-300"
          >
            <span>© {currentYear} Harshit Behl. All rights reserved.</span>
          </motion.div>

          {/* Inspired by anime.js */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-2 text-primary-300"
          >
            <span>Designed with</span>
            <Heart size={16} className="text-red-400 fill-current" />
            <span>inspired by anime.js</span>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-primary-300 hover:text-accent-300 transition-colors duration-200 bg-primary-800 dark:bg-gray-700 hover:bg-primary-700 dark:hover:bg-gray-600 px-4 py-2 rounded-full"
          >
            <ArrowUp size={16} />
            <span>Back to Top</span>
          </motion.button>
        </div>

        {/* Fun Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-8 pt-8 border-t border-primary-700/50"
        >
          <p className="text-xs text-primary-400">
            🚀 Built with React, TailwindCSS & Framer Motion • Hosted with ❤️
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer