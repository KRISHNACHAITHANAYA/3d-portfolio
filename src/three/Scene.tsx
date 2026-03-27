import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import * as THREE from 'three'
import Particles from './Particles'
import FloatingIcons from './FloatingIcons'

function OrbitingSphere({ position, color, speed, radius }: any) {
  const groupRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speed
      groupRef.current.position.x = Math.cos(clock.getElapsedTime() * speed * 2) * radius
      groupRef.current.position.z = Math.sin(clock.getElapsedTime() * speed * 2) * radius
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          emissive={color}
          emissiveIntensity={1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <pointLight color={color} intensity={1} distance={20} />
    </group>
  )
}

function GridFloor() {
  const gridRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current && meshRef.current.material) {
      (meshRef.current.material as THREE.MeshBasicMaterial).opacity = 0.3 + Math.sin(Date.now() * 0.001) * 0.1
    }
  })

  return (
    <group ref={gridRef} position={[0, -15, 0]}>
      <mesh ref={meshRef}>
        <planeGeometry args={[200, 200]} />
        <meshBasicMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  )
}

function CameraController() {
  const { camera } = useThree()
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  useFrame(() => {
    camera.position.x += (mouseX.current - camera.position.x) * 0.05
    camera.position.y += (mouseY.current - camera.position.y) * 0.05
  })

  const handleMouseMove = (event: MouseEvent) => {
    mouseX.current = (event.clientX / window.innerWidth - 0.5) * 0.3
    mouseY.current = (event.clientY / window.innerHeight - 0.5) * 0.3
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', handleMouseMove)
  }

  return null
}

function SceneContent() {
  return (
    <>
      <CameraController />
      <Particles />
      <FloatingIcons />
      <GridFloor />
      <OrbitingSphere position={[0, 0, 0]} color="#a855f7" speed={0.002} radius={5} />
      <OrbitingSphere position={[5, 5, -5]} color="#3b82f6" speed={0.001} radius={8} />
      <OrbitingSphere position={[-5, -5, -5]} color="#06b6d4" speed={0.0015} radius={6} />
      <OrbitingSphere position={[8, 0, 0]} color="#a855f7" speed={0.0008} radius={10} />
      <OrbitingSphere position={[-8, 5, 5]} color="#3b82f6" speed={0.0012} radius={7} />
      <OrbitingSphere position={[0, -8, 10]} color="#06b6d4" speed={0.001} radius={9} />
      <EffectComposer>
        <Bloom intensity={1.5} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
      </EffectComposer>
    </>
  )
}

export default function Scene() {
  return (
    <Canvas
      className="w-full h-screen fixed top-0 left-0 -z-10"
      camera={{ position: [0, 0, 30], fov: 75 }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={['#050510']} />
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  )
}
