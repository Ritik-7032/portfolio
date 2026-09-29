import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const TECH_ITEMS = [
  { name: 'C++', color: '#00599C', border: '#06b6d4' },
  { name: 'React', color: '#61DAFB', border: '#38bdf8' },
  { name: 'TypeScript', color: '#3178C6', border: '#60a5fa' },
  { name: 'Node.js', color: '#339933', border: '#4ade80' },
  { name: 'Express', color: '#ffffff', border: '#94a3b8' },
  { name: 'BullMQ', color: '#E11D48', border: '#f43f5e' },
  { name: 'Redis', color: '#DC382D', border: '#ef4444' },
  { name: 'PostgreSQL', color: '#4169E1', border: '#818cf8' },
  { name: 'MongoDB', color: '#47A248', border: '#22c55e' },
  { name: 'Docker', color: '#2496ED', border: '#38bdf8' },
  { name: 'AWS (S3/EC2)', color: '#FF9900', border: '#f59e0b' },
  { name: 'Prisma', color: '#2D3748', border: '#a855f7' },
  { name: 'Gemini AI', color: '#8b5cf6', border: '#c084fc' },
  { name: 'Socket.io', color: '#010101', border: '#38bdf8' },
  { name: 'Tailwind CSS', color: '#06B6D4', border: '#06b6d4' },
  { name: 'Git & GitHub', color: '#F05032', border: '#fb7185' },
];

function TechNode({ position, item }: { position: [number, number, number]; item: typeof TECH_ITEMS[0] }) {
  return (
    <group position={position}>
      {/* Node mesh dot */}
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color={item.border} emissive={item.border} emissiveIntensity={0.8} />
      </mesh>

      {/* HTML Tag Badge */}
      <Html
        center
        distanceFactor={6.5}
        zIndexRange={[100, 0]}
        className="pointer-events-none select-none"
      >
        <div 
          className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold whitespace-nowrap backdrop-blur-md shadow-lg transition-transform duration-200"
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            color: '#f8fafc',
            border: `1px solid ${item.border}66`,
            boxShadow: `0 0 15px ${item.border}33`,
          }}
        >
          {item.name}
        </div>
      </Html>
    </group>
  );
}

function SphereCluster() {
  const groupRef = useRef<THREE.Group>(null);

  // Distribute nodes evenly on sphere using Fibonacci sphere algorithm
  const nodes = useMemo(() => {
    const total = TECH_ITEMS.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle
    const radius = 2.4;

    return TECH_ITEMS.map((item, i) => {
      const y = 1 - (i / (total - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * radiusAtY * radius;
      const z = Math.sin(theta) * radiusAtY * radius;

      return {
        item,
        position: [x, y * radius, z] as [number, number, number],
      };
    });
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.18;
    groupRef.current.rotation.x += delta * 0.08;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
      <group ref={groupRef}>
        {/* Central glowing wireframe core */}
        <mesh>
          <sphereGeometry args={[1.5, 16, 16]} />
          <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.15} />
        </mesh>

        {/* Nodes */}
        {nodes.map((node, i) => (
          <TechNode key={i} position={node.position} item={node.item} />
        ))}
      </group>
    </Float>
  );
}

export const SkillSphere: React.FC = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#38bdf8" />
        <pointLight position={[-10, -10, -5]} intensity={1.5} color="#8b5cf6" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
        <SphereCluster />
      </Canvas>
    </div>
  );
};
