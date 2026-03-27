import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ]

  const handleNavClick = (id: string) => {
    setActiveLink(id)
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const resumeUrl = 'https://drive.google.com/file/d/18WnS9IkPlBT8NQjfh52ypAXnnWISGG_I/view?usp=sharing'

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glassmorphism border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-2xl font-bold font-orbitron glow-purple cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          KC
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-rajdhani transition-all duration-300 relative ${
                activeLink === item.id ? 'text-neon-purple' : 'text-gray-300 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
              {activeLink === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-purple glow-purple"
                  layoutId="underline"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Resume Button + Mobile Menu */}
        <div className="flex items-center gap-4">
          <motion.a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-2 border-2 border-neon-purple text-neon-purple font-rajdhani text-sm rounded hover:box-glow-purple transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px #a855f7' }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-neon-purple"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden glassmorphism border-b border-white/10"
      >
        <div className="px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-2 rounded font-rajdhani transition-all ${
                activeLink === item.id
                  ? 'bg-neon-purple/20 text-neon-purple'
                  : 'text-gray-300 hover:bg-white/5'
              }`}
              whileHover={{ x: 4 }}
            >
              {item.name}
            </motion.button>
          ))}
          <motion.a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2 border-2 border-neon-purple text-neon-purple font-rajdhani rounded hover:box-glow-purple transition-all"
            whileHover={{ scale: 1.02 }}
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  )
}
