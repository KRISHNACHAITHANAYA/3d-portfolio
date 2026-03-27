import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const skillsData = {
  Frontend: ['HTML', 'CSS', 'React', 'Tailwind'],
  Backend: ['Java (Spring Boot)', 'Python', 'FastAPI'],
  Database: ['MySQL', 'MongoDB'],
  Tools: ['Git', 'Docker'],
  'AI Tools': ['Claude', 'n8n', 'Zapier', 'GitHub Copilot'],
}

function RotatingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.008
      meshRef.current.rotation.z += 0.003
    }
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial
        color="#a855f7"
        emissive="#a855f7"
        emissiveIntensity={0.5}
        wireframe
      />
    </mesh>
  )
}

function IcosahedronCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
      <color attach="background" args={['#050510']} />
      <light position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <RotatingIcosahedron />
      </Suspense>
    </Canvas>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  const skillCategories = Object.entries(skillsData)
  const allSkills = Object.values(skillsData).flat()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const colorMap: Record<string, string> = {
    Frontend: '#06b6d4',
    Backend: '#a855f7',
    Database: '#3b82f6',
    Tools: '#f59e0b',
    'AI Tools': '#ec4899',
  }

  return (
    <section id="skills" ref={ref} className="relative z-20 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title with Glitch Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-orbitron glow-purple mb-4 glitch">
            Tech Arsenal
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan" />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {skillCategories.map(([category, skills]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="glassmorphism-hover p-6 rounded-lg border border-white/10 cursor-pointer group"
              style={{
                borderColor: `${colorMap[category]}4d`,
              }}
            >
              <div
                className="text-3xl mb-3 group-hover:scale-110 transition-transform"
              >
                {category === 'Frontend' && '🎨'}
                {category === 'Backend' && '⚙️'}
                {category === 'Database' && '🗄️'}
                {category === 'Tools' && '🛠️'}
                {category === 'AI Tools' && '🤖'}
              </div>

              <h3 className="text-xl font-orbitron font-bold mb-4" style={{ color: colorMap[category] }}>
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm font-rajdhani glassmorphism border"
                    style={{
                      borderColor: colorMap[category],
                      color: colorMap[category],
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3D Icosahedron Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glassmorphism rounded-lg p-8 mb-12"
        >
          <div className="h-64 md:h-80 w-full">
            <IcosahedronCanvas />
          </div>
        </motion.div>

        {/* Skills Marquee Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="overflow-hidden py-8 bg-white/5 rounded-lg"
        >
          <div className="flex gap-6 whitespace-nowrap marquee">
            {[...allSkills, ...allSkills].map((skill, index) => (
              <span
                key={index}
                className="inline-block px-4 py-2 font-rajdhani text-gray-300 border border-white/10 rounded"
              >
                ★ {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
