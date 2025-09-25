import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const ProjectCard = ({ project }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
        project.featured ? 'ring-2 ring-accent-200 dark:ring-accent-400' : ''
      }`}
    >
      {/* Project Image/Icon */}
      <div className="relative h-48 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden">
        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {project.image}
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 bg-accent-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            Featured
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex space-x-3">
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-full text-primary-700 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-200"
                aria-label="View Demo"
              >
                <Eye size={18} />
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-full text-primary-700 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-200"
                aria-label="View Code"
              >
                <Github size={18} />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-primary-800 dark:text-primary-200 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-primary-600 dark:text-primary-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-100 dark:bg-gray-700 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full hover:bg-accent-100 dark:hover:bg-accent-800 hover:text-accent-700 dark:hover:text-accent-300 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between pt-4 border-t border-primary-100 dark:border-gray-700">
          <div className="flex space-x-3">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="text-primary-600 hover:text-accent-600 transition-colors duration-200 flex items-center space-x-1 text-sm font-medium"
              >
                <Github size={16} />
                <span>Code</span>
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="text-primary-600 hover:text-accent-600 transition-colors duration-200 flex items-center space-x-1 text-sm font-medium"
              >
                <ExternalLink size={16} />
                <span>Demo</span>
              </motion.a>
            )}
          </div>
          
          {/* Learn More Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-accent-600 hover:text-accent-700 text-sm font-medium transition-colors duration-200"
          >
            Learn More →
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard