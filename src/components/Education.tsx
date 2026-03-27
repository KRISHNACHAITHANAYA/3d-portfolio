import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const educationData = {
  degree: "Bachelor of Engineering (B.E.)",
  specialization: "Computer Science and Engineering",
  university: "Visvesvaraya Technological University",
  duration: "2022 – 2026",
  location: "Sullia, India",
}

const certifications = [
  { title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services' },
  { title: 'Java Full Stack Development', issuer: 'Industry Standard' },
  { title: 'Machine Learning with Python', issuer: 'Data Science Foundation' },
  { title: 'React Developer Certification', issuer: 'Modern Web Development' },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const certVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="education" ref={ref} className="relative z-20 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-orbitron glow-purple mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan" />
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glassmorphism p-8 rounded-lg border-l-4 border-neon-purple relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-6 top-8 w-4 h-4 bg-neon-purple rounded-full border-4 border-dark-base" />

            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">🎓</span>
              <div>
                <h3 className="text-2xl font-bold font-orbitron glow-purple mb-1">
                  {educationData.degree}
                </h3>
                <p className="text-neon-cyan font-rajdhani">
                  {educationData.specialization}
                </p>
              </div>
            </div>

            <div className="space-y-3 font-rajdhani text-gray-300">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">University:</span>
                <span className="font-semibold">{educationData.university}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Duration:</span>
                <span className="font-semibold text-neon-blue">{educationData.duration}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Location:</span>
                <span className="font-semibold">{educationData.location}</span>
              </div>
            </div>

            {/* Specialization highlights */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400 font-rajdhani mb-3">Current Focus:</p>
              <div className="flex flex-wrap gap-2">
                {['Full-Stack Dev', 'Web Apps', 'AI/ML', 'Database Design'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs font-rajdhani bg-neon-purple/10 border border-neon-purple/50 text-neon-purple rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - decorative element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Animated circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute w-56 h-56 border-2 border-neon-blue/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute w-40 h-40 border-2 border-neon-purple/30 rounded-full"
              />
              <div className="text-6xl">💻</div>
            </div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold font-orbitron glow-cyan mb-8">
            Professional Certifications
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 gap-4"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={certVariants}
                className="glassmorphism-hover p-5 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan/50 group cursor-pointer relative overflow-hidden"
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 translate-x-full group-hover:translate-x-0 transition-all duration-500" />

                <div className="relative z-10 flex items-start gap-3">
                  <span className="text-2xl group-hover:scale-125 transition-transform">✓</span>
                  <div>
                    <h4 className="font-bold font-orbitron text-neon-cyan group-hover:glow-cyan transition-all">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-400 font-rajdhani mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 glassmorphism p-6 rounded-lg border border-neon-blue/30"
        >
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold glow-purple font-orbitron">4+</div>
              <p className="text-gray-400 font-rajdhani text-sm mt-1">Hands-on Projects</p>
            </div>
            <div>
              <div className="text-3xl font-bold glow-cyan font-orbitron">60+</div>
              <p className="text-gray-400 font-rajdhani text-sm mt-1">Hours of Training</p>
            </div>
            <div>
              <div className="text-3xl font-bold glow-blue font-orbitron">2</div>
              <p className="text-gray-400 font-rajdhani text-sm mt-1">Core Tech Stacks</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
