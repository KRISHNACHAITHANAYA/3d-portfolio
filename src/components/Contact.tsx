import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const resumeUrl = 'https://drive.google.com/file/d/18WnS9IkPlBT8NQjfh52ypAXnnWISGG_I/view?usp=sharing'

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors = { name: '', email: '', message: '' }

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrors(newErrors)
      return
    }

    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 4000)
  }

  const scrollToForm = () => {
    const formElement = document.querySelector('form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="contact" ref={ref} className="relative z-20 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-orbitron glow-purple mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan" />
        </motion.div>

        {/* CTA Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glassmorphism p-8 md:p-12 rounded-lg border border-neon-cyan/30 mb-12 text-center"
        >
          <div className="flex justify-center mb-4 text-4xl">
            🟢
          </div>
          <h3 className="text-3xl md:text-4xl font-bold font-orbitron glow-cyan mb-4">
            Available for Opportunities
          </h3>
          <p className="text-gray-300 font-rajdhani text-lg mb-6 max-w-2xl mx-auto">
            I'm actively looking for full-time roles and freelance opportunities. Whether you have
            questions or just want to connect, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={scrollToForm}
              className="px-8 py-3 bg-neon-purple/20 border-2 border-neon-purple text-neon-purple font-rajdhani font-semibold rounded hover:box-glow-purple transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-neon-blue/20 border-2 border-neon-blue text-neon-blue font-rajdhani font-semibold rounded hover:box-glow-blue transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glassmorphism-hover p-8 rounded-lg border border-white/10"
            style={{
              borderColor: isInView ? 'rgba(168, 85, 247, 0.3)' : 'rgba(255, 255, 255, 0.1)',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-rajdhani text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Krishna Chaithanya"
                  className={`w-full px-4 py-3 bg-white/5 border rounded font-rajdhani text-white placeholder-gray-500 transition-all focus:outline-none ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-white/20 focus:border-neon-purple focus:box-glow-purple'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1 font-rajdhani">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-rajdhani text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3 bg-white/5 border rounded font-rajdhani text-white placeholder-gray-500 transition-all focus:outline-none ${
                    errors.email
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-white/20 focus:border-neon-blue focus:box-glow-blue'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1 font-rajdhani">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-rajdhani text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className={`w-full px-4 py-3 bg-white/5 border rounded font-rajdhani text-white placeholder-gray-500 transition-all focus:outline-none resize-none ${
                    errors.message
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-white/20 focus:border-neon-cyan focus:box-glow-cyan'
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1 font-rajdhani">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-rajdhani font-semibold rounded hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>

          {/* Success Toast */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="mt-6 glassmorphism p-4 rounded-lg border border-green-500/30 bg-green-500/10 flex items-center gap-3"
              >
                <CheckCircle className="text-green-400" size={24} />
                <div>
                  <p className="font-rajdhani text-green-400 font-semibold">
                    Message sent successfully! ✓
                  </p>
                  <p className="text-sm text-gray-400">I'll get back to you soon.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 font-rajdhani mb-6">Or connect with me on</p>
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/KRISHNACHAITHANAYA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glassmorphism border border-neon-blue/30 rounded hover:border-neon-blue/80 transition-all text-neon-blue font-rajdhani"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>GitHub</span>
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-2 px-4 py-2 glassmorphism border border-neon-purple/30 rounded hover:border-neon-purple/80 transition-all text-neon-purple font-rajdhani"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
