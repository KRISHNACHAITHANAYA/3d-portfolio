import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github } from 'lucide-react'

const projectsData = [
  {
    title: 'Coconut Leaf Disease Detection System',
    description:
      'An AI-powered plant pathology system using deep learning to detect and classify coconut leaf diseases in real-time with high accuracy.',
    tech: ['Python', 'TensorFlow', 'PyTorch', 'Flask', 'React', 'YOLOv5', 'Google Gemini API'],
    github: 'https://github.com/KRISHNACHAITHANAYA/Kalpavruksha.git',
    highlights: ['95%+ detection accuracy', 'Real-time inference', 'Gemini AI integration'],
  },
]

interface ProjectCardProps {
  project: typeof projectsData[0]
  index: number
  isInView: boolean
}

function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const techColors: Record<string, string> = {
    'Python': '#3b82f6',
    'TensorFlow': '#a855f7',
    'PyTorch': '#ec4899',
    'Flask': '#06b6d4',
    'React': '#61dafb',
    'YOLOv5': '#f59e0b',
    'Google Gemini API': '#34d399',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glassmorphism-hover neon-border-animated p-6 rounded-lg overflow-hidden group cursor-pointer relative"
      style={{
        perspective: '1000px',
        transform: isHovered ? 'rotateX(2deg) rotateY(-2deg)' : 'rotateX(0) rotateY(0)',
        transition: 'transform 0.3s ease',
      }}
    >
      {/* Floating particles on hover */}
      {isHovered && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-purple rounded-full pointer-events-none"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [1, 0],
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
              }}
              style={{
                left: `${50 + Math.random() * 30 - 15}%`,
                top: `${50 + Math.random() * 30 - 15}%`,
              }}
            />
          ))}
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <h3 className="text-2xl font-bold font-orbitron glow-purple mb-3">{project.title}</h3>

        {/* Description */}
        <p className="text-gray-300 font-rajdhani text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-4 space-y-1">
          {project.highlights.map((highlight, i) => (
            <p key={i} className="text-neon-cyan text-sm font-rajdhani">
              ✦ {highlight}
            </p>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <motion.span
              key={tech}
              className="px-3 py-1 text-xs font-rajdhani rounded border"
              style={{
                borderColor: techColors[tech] || '#a855f7',
                color: techColors[tech] || '#a855f7',
                backgroundColor: `${techColors[tech] || '#a855f7'}15`,
              }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* GitHub Button */}
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-neon-purple text-neon-purple font-rajdhani font-semibold rounded hover:box-glow-purple transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github size={18} />
          View Code
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  return (
    <section id="projects" ref={ref} className="relative z-20 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-orbitron glow-purple mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 font-rajdhani mb-4">
            Want to see more projects?
          </p>
          <motion.a
            href="https://github.com/KRISHNACHAITHANAYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-neon-blue text-neon-blue font-rajdhani font-semibold rounded hover:box-glow-blue transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            Visit My GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
