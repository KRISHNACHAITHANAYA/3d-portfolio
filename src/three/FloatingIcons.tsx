import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

interface FloatingIconProps {
  position: [number, number, number]
  text: string
  color: string
  initialOffset: number
}

function FloatingIcon({ position, text, color, initialOffset }: FloatingIconProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() + initialOffset) * 0.5
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <Text
        fontSize={0.8}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/rajdhani/v14/hJO4FYJewMZc9TAjCmqJ-2gtYA.woff2"
      >
        {text}
      </Text>
      <pointLight color={color} intensity={0.5} distance={10} />
    </group>
  )
}

export default function FloatingIcons() {
  const icons = [
    { position: [-15, 5, 0] as [number, number, number], text: '⚛ React', color: '#61dafb', offset: 0 },
    { position: [15, 5, 0] as [number, number, number], text: '☕ Java', color: '#a855f7', offset: 1 },
    { position: [-10, -5, -10] as [number, number, number], text: '🐍 Python', color: '#3b82f6', offset: 0.5 },
    { position: [10, -5, -10] as [number, number, number], text: '🗄 MySQL', color: '#06b6d4', offset: 1.5 },
    { position: [0, 10, -15] as [number, number, number], text: '🐳 Docker', color: '#a855f7', offset: 2 },
  ]

  return (
    <>
      {icons.map((icon, i) => (
        <FloatingIcon
          key={i}
          position={icon.position}
          text={icon.text}
          color={icon.color}
          initialOffset={icon.offset}
        />
      ))}
    </>
  )
}
