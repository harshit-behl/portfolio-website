import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 85, color: "from-blue-400 to-cyan-500" },
        { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-500" },
        { name: "HTML", level: 95, color: "from-orange-400 to-red-500" },
        { name: "CSS", level: 90, color: "from-blue-400 to-purple-500" },
        { name: "TailwindCSS", level: 85, color: "from-cyan-400 to-blue-500" },
        { name: "Vite", level: 80, color: "from-purple-400 to-indigo-500" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 80, color: "from-green-400 to-green-600" },
        { name: "Java", level: 85, color: "from-red-400 to-orange-500" },
        { name: "C", level: 80, color: "from-blue-500 to-blue-700" },
        { name: "C++", level: 85, color: "from-purple-500 to-indigo-600" },
        { name: "REST APIs", level: 80, color: "from-teal-400 to-teal-600" }
      ]
    },
    {
      title: "DevOps & Automation",
      icon: "�",
      skills: [
        { name: "Jenkins", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "Shell Scripting", level: 80, color: "from-gray-500 to-gray-700" },
        { name: "Git", level: 90, color: "from-orange-400 to-red-500" },
        { name: "CI/CD Pipelines", level: 75, color: "from-green-400 to-emerald-600" },
        { name: "Docker", level: 70, color: "from-cyan-400 to-blue-500" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        { name: "AI Integration", level: 75, color: "from-violet-400 to-purple-600" },
        { name: "Machine Learning Concepts", level: 70, color: "from-pink-400 to-rose-600" },
        { name: "Data Analysis", level: 75, color: "from-indigo-400 to-purple-600" },
        { name: "Algorithm Design", level: 80, color: "from-emerald-400 to-green-600" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 lg:py-32 bg-gradient-to-br from-white to-primary-50/50 dark:from-gray-900 dark:to-gray-800/50">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-primary-600 dark:text-primary-400 max-w-3xl mx-auto leading-relaxed">
            My technical toolkit spanning frontend magic, backend logic, DevOps automation, and AI exploration.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal
              key={category.title}
              direction={categoryIndex % 2 === 0 ? "left" : "right"}
              delay={categoryIndex * 0.2}
              distance={80}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-3xl">{category.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-800 dark:text-primary-200">{category.title}</h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-accent-500 to-primary-500 mt-1"></div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="group"
                  >
                    {/* Skill Name and Percentage */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-primary-700 dark:text-primary-300 group-hover:text-accent-600 transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-primary-100 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0, opacity: 0.8 }}
                        whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: [0.25, 0.1, 0.25, 1]
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative shadow-sm`}
                      >
                        {/* Animated shimmer effect */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12"
                          animate={{
                            x: ["-100%", "100%"]
                          }}
                          transition={{
                            duration: 2,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1,
                            ease: "easeInOut"
                          }}
                        />
                        {/* Pulsing glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-primary-800 dark:text-primary-200 mb-8">
            Additional Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "GitHub Actions", "VS Code", "IntelliJ IDEA", "Postman", 
              "Spring Boot", "Express.js", "MongoDB", "MySQL", 
              "Responsive Design", "Web Performance", "Code Review", "Agile"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg text-primary-700 dark:text-primary-300 font-medium text-sm transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills