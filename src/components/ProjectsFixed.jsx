import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2 } from 'lucide-react'

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const projects = [
    {
      id: 1,
      title: "ShopSense",
      description: "An intelligent e-commerce platform with advanced product comparison and filtering capabilities.",
      tech: ["React", "JavaScript", "CSS", "Responsive Design"],
      github: "https://github.com/harshit-behl/ShopSense",
      demo: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with React and Framer Motion featuring smooth animations.",
      tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      github: "https://github.com/harshit-behl/portfolio",
      demo: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "AI Experiments",
      description: "Collection of AI-powered projects exploring machine learning and natural language processing.",
      tech: ["Python", "TensorFlow", "React", "APIs"],
      github: "https://github.com/harshit-behl",
      demo: "#",
      color: "from-green-500 to-teal-500"
    }
  ]

  return (
    <section id="projects" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I&apos;ve been working on, showcasing my skills in development and design.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Project Card Header */}
                <div className={`h-32 bg-gradient-to-r ${project.color} relative`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="https://github.com/harshit-behl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects