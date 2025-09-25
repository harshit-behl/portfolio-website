import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import ScrollReveal from './ScrollReveal'
import GradualBlur from './GradualBlur'
import { AnimatedWave, AnimatedCheckmark, AnimatedCircle } from './AnimatedShapes'
import { AnimatedUnderline } from './AnimatedPaths'

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const projects = [
    {
      id: 1,
      title: "ShopSense - Price Comparison App",
      description: "A modern, responsive frontend application for comparing electronics prices between Flipkart and Amazon, built with React, Vite, and TailwindCSS.",
      image: "🛒",
      tags: ["React", "Vite", "TailwindCSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/harshit-behl/ShopSense",
      demo: "https://harshit-behl.github.io/ShopSense/",
      featured: true
    },
    {
      id: 2,
      title: "Portfolio Website (Static)",
      description: "A clean, static portfolio website showcasing my projects and skills with modern design principles and responsive layout.",
      image: "🌟",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "GitHub Pages"],
      github: "https://github.com/harshit-behl/portfolio-static"
    },
    {
      id: 3,
      title: "Jenkins Pipeline Projects",
      description: "Collection of Jenkins CI/CD pipeline implementations and automation scripts for various deployment scenarios.",
      image: "🚀",
      tags: ["Jenkins", "CI/CD", "DevOps", "Automation", "Shell Scripting"],
      github: "https://github.com/harshit-behl/Jenkins-final"
    },
    {
      id: 4,
      title: "Java Programming Projects",
      description: "Various Java applications demonstrating OOP concepts, data structures, and algorithm implementations with clean code practices.",
      image: "☕",
      tags: ["Java", "OOP", "Data Structures", "Algorithms", "Backend"],
      github: "https://github.com/harshit-behl/Java-test"
    },
    {
      id: 5,
      title: "C Programming Solutions",
      description: "Collection of C programming exercises and solutions covering fundamental programming concepts and problem-solving techniques.",
      image: "⚡",
      tags: ["C", "Programming", "Algorithms", "Problem Solving", "Data Structures"],
      github: "https://github.com/harshit-behl/C-repo"
    },
    {
      id: 6,
      title: "Full-Stack Web Applications",
      description: "Modern web applications built with React frontend and Node.js backend, showcasing full-stack development skills and best practices.",
      image: "🌐",
      tags: ["React", "Node.js", "Full-Stack", "JavaScript", "Web Development"],
      github: "https://github.com/harshit-behl"
    }
  ]

  return (
    <section id="projects" className="py-20 lg:py-32 fabric-bg dark:bg-gray-800" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Animated decorative elements */}
          <div className="relative">
            <AnimatedWave 
              className="absolute -top-4 -left-8 text-accent-500 opacity-30" 
              delay={0.5} 
            />
            <AnimatedWave 
              className="absolute -top-4 -right-8 text-primary-500 opacity-30 transform scale-x-[-1]" 
              delay={0.7} 
            />
            
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 relative">
              Featured Projects
            </h2>
          </div>
          
          {/* Animated underline */}
          <AnimatedUnderline className="mb-6" />
          <p className="text-lg md:text-xl text-primary-600 dark:text-primary-400 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in backend development, 
            cybersecurity, and full-stack applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px", amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ScrollReveal 
              key={project.id}
              direction="up" 
              delay={index * 0.15} 
              distance={60}
              className="h-full"
            >
              <div className="relative group h-full">
                {/* Animated checkmark for featured projects */}
                {project.featured && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <AnimatedCheckmark 
                      className="text-green-500"
                      delay={index * 0.15 + 0.5}
                    />
                  </div>
                )}
                
                {/* Animated corner accent */}
                <div className="absolute -top-1 -left-1 opacity-20 group-hover:opacity-60 transition-opacity duration-300">
                  <AnimatedCircle 
                    className="w-4 h-4 text-accent-500"
                    delay={index * 0.15 + 1}
                  />
                </div>
                
                <ProjectCard project={project} />
              </div>
            </ScrollReveal>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View More Projects</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <GradualBlur
        target="parent"
        position="bottom"
        height="8rem"
        strength={4}
        divCount={8}
        curve="bezier"
        exponential={true}
        opacity={0.9}
      />
    </section>
  )
}

export default Projects