import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  const resumeUrl = 'https://drive.google.com/file/d/18WnS9IkPlBT8NQjfh52ypAXnnWISGG_I/view?usp=sharing'

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10"
    >
      {/* Scanlines overlay */}
      <div className="scanlines fixed top-0 left-0 w-full h-screen pointer-events-none z-10" />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Label */}
          <motion.p
            variants={itemVariants}
            className="text-sm font-mono text-neon-cyan"
          >
            &lt; Hello World /&gt;
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold font-orbitron glow-purple leading-tight"
          >
            Krishna Chaithanya K
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            variants={itemVariants}
            className="h-12 flex items-center"
          >
            <TypeAnimation
              sequence={[
                'Java Full Stack Developer',
                1500,
                'Spring Boot Engineer',
                1500,
                'React Developer',
                1500,
                'Open Source Contributor',
                1500,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-rajdhani text-neon-blue glow-blue"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-gray-300 font-rajdhani text-lg leading-relaxed max-w-md"
          >
            Building Real-World Applications with Clean Code & Scalable Architecture.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-neon-purple/20 border-2 border-neon-purple text-neon-purple font-rajdhani font-semibold rounded hover:box-glow-purple transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-neon-blue/20 border-2 border-neon-blue text-neon-blue font-rajdhani font-semibold rounded hover:box-glow-blue transition-all text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right - Profile Avatar with Rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center items-center relative"
        >
          <div className="relative w-80 h-80">
            {/* Center Avatar - Static, no animations */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Avatar Gradient Border Circle */}
              <div className="w-56 h-56 rounded-full flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `conic-gradient(from 0deg, #a855f7, #06b6d4, #3b82f6, #a855f7)`,
                  boxShadow: '0 0 40px #a855f7, inset 0 0 40px rgba(168, 85, 247, 0.3)',
                  padding: '3px',
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Krishna Chaithanya K"
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `<div style="width:100%;height:100%;border-radius:9999px;background:linear-gradient(135deg,#1e1b2e,#2d2639);display:flex;align-items:center;justify-content:center;font-family:Orbitron,sans-serif;font-size:3rem;font-weight:700;color:white;">KC</div>`
                    }
                  }}
                />
              </div>
            </div>

            {/* Ring 1 - Static */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 320 320"
            >
              <circle
                cx="160"
                cy="160"
                r="140"
                fill="none"
                stroke="#a855f7"
                strokeWidth="2"
                opacity="0.6"
                strokeDasharray="8,4"
                filter="drop-shadow(0 0 10px #a855f7)"
              />
            </svg>

            {/* Ring 2 - Static */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 320 320"
            >
              <circle
                cx="160"
                cy="160"
                r="110"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2"
                opacity="0.6"
                strokeDasharray="8,4"
                filter="drop-shadow(0 0 10px #06b6d4)"
              />
            </svg>

            {/* Ring 3 - Static */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 320 320"
            >
              <circle
                cx="160"
                cy="160"
                r="170"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                opacity="0.4"
                strokeDasharray="6,3"
                filter="drop-shadow(0 0 8px #3b82f6)"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
