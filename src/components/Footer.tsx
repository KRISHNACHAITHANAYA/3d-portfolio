import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-20 border-t border-neon-purple/30 bg-black/50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
          {/* Left - Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold font-orbitron glow-purple cursor-pointer hover:scale-110 transition-transform"
              onClick={scrollToTop}
            >
              KC
            </h3>
            <p className="text-sm text-gray-400 font-rajdhani mt-2">
              Full-Stack Developer
            </p>
          </motion.div>

          {/* Center - Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="flex justify-center gap-4 flex-wrap">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-neon-purple transition-colors font-rajdhani"
                  whileHover={{ scale: 1.1 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center md:justify-end gap-4"
          >
            <motion.a
              href="https://github.com/KRISHNACHAITHANAYA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded border border-neon-blue/30 text-neon-blue hover:border-neon-blue hover:box-glow-blue transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="#"
              className="p-2 rounded border border-neon-purple/30 text-neon-purple hover:border-neon-purple hover:box-glow-purple transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-gray-500 font-rajdhani"
        >
          <p>
            © {currentYear} Krishna Chaithanya K. All rights reserved.
          </p>
          <p className="mt-2 text-xs">
            Designed & Developed with Cyberpunk Neon Aesthetics
          </p>
        </motion.div>

        {/* Floating particles animation in background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-purple rounded-full"
              animate={{
                y: [0, -40, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                left: `${20 + i * 30}%`,
                bottom: 0,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}
