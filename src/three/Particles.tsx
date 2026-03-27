import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Particles() {
  const particlesRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const count = 8000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = Math.random() * 50 + 10
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.cos(phi)
      positions[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta)

      const colorChoice = Math.random()
      if (colorChoice < 0.4) {
        colors[i3] = 0.66 // purple
        colors[i3 + 1] = 0.33
        colors[i3 + 2] = 0.97
      } else if (colorChoice < 0.8) {
        colors[i3] = 0.23 // blue
        colors[i3 + 1] = 0.51
        colors[i3 + 2] = 0.96
      } else {
        colors[i3] = 1 // white
        colors[i3 + 1] = 1
        colors[i3 + 2] = 1
      }
    }

    return { positions, colors }
  }, [])

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0003
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} sizeAttenuation transparent vertexColors />
    </points>
  )
}
