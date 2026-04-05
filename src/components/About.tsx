import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative z-20 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-orbitron glow-purple mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-72 h-72">
              {/* Neon Border Ring */}
              <div className="absolute inset-0 border-3 border-neon-purple rounded-3xl"
                style={{
                  boxShadow: '0 0 30px #a855f7, inset 0 0 30px rgba(168, 85, 247, 0.2)',
                }}
              />

              {/* Profile Image */}
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Krishna Chaithanya K"
                className="absolute inset-0 w-full h-full rounded-3xl object-cover p-1"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none'
                }}
              />

              {/* Rotating Border Effect */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 border-2 border-transparent rounded-3xl pointer-events-none"
                style={{
                  borderImage: 'conic-gradient(from 0deg, #a855f7, #06b6d4, #3b82f6, #a855f7) 1',
                }}
              />
            </div>
          </motion.div>

          {/* Right - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Main Text */}
            <div className="glassmorphism p-6 rounded-lg">
              <p className="text-gray-300 font-rajdhani text-lg leading-relaxed">
                Final-year Computer Science Engineering student passionate about building scalable
                and efficient web applications. Specialized in Java Full-Stack Development using
                Java, React, and SQL.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { number: '4+', label: 'Projects', icon: '📁' },
                { number: '2022-2026', label: 'B.E. Duration', icon: '🎓' },
                { number: '2', label: 'Stack Skills', icon: '⚙️' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glassmorphism p-4 rounded-lg border border-neon-purple/20 hover:border-neon-purple/50 transition-all hover:box-glow-purple"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold glow-purple font-orbitron">{stat.number}</div>
                  <div className="text-sm text-gray-400 font-rajdhani">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Specializations */}
            <div className="space-y-2">
              <h3 className="text-lg font-orbitron glow-blue">Specializations:</h3>
              <ul className="space-y-1 text-gray-300 font-rajdhani">
                <li>✦ Java & Spring Boot Backend Development</li>
                <li>✦ React & Modern Frontend Architecture</li>
                <li>✦ Full-Stack Web Application Design</li>
                <li>✦ Database Design & Optimization</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
