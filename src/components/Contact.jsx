import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('')
      }, 3000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'harshitsachinbehl@gmail.com',
      href: 'mailto:harshitsachinbehl@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@harshit-behl',
      href: 'https://github.com/harshit-behl'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: null
    }
  ]

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/harshit-behl', color: 'hover:text-gray-700' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/harshitsbehl', color: 'hover:text-blue-600' },
    { icon: Mail, label: 'Email', href: 'mailto:harshitsachinbehl@gmail.com', color: 'hover:text-red-500' }
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 fabric-bg dark:bg-gray-900">
      <div className="max-w-6xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-primary-600 dark:text-primary-400 max-w-3xl mx-auto leading-relaxed">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about web development and AI.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-800 dark:text-primary-200 mb-6">
                Let&apos;s Connect
              </h3>
              
              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center text-white">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-primary-600 dark:text-primary-400">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-primary-800 dark:text-primary-200 hover:text-accent-600 transition-colors duration-200 font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-primary-800 dark:text-primary-200 font-medium">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-semibold text-primary-800">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-primary-600 ${social.color} transition-all duration-200`}
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Quick Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-6 bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl border border-accent-200/50"
            >
              <h4 className="font-semibold text-primary-800 mb-2">
                💡 Quick Response
              </h4>
              <p className="text-primary-600 text-sm leading-relaxed">
                I typically respond to messages within 24 hours. For urgent matters, feel free to reach out via phone or LinkedIn.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-primary-800 dark:text-primary-200 mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-200 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm"
                  >
                    ✅ Thank you for your message! I&apos;ll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact