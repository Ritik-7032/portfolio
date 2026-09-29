import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Floating Geometric Core that reacts to cursor
function FloatingCrystal({ mousePos }: { mousePos: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!meshRef.current || !outerRef.current) return;
    
    // Smooth rotation
    meshRef.current.rotation.x += delta * 0.3;
    meshRef.current.rotation.y += delta * 0.4;

    // Follow mouse gently
    const targetX = mousePos.x * 0.6;
    const targetY = mousePos.y * 0.6;
    outerRef.current.rotation.y = THREE.MathUtils.lerp(outerRef.current.rotation.y, targetX, 0.05);
    outerRef.current.rotation.x = THREE.MathUtils.lerp(outerRef.current.rotation.x, -targetY, 0.05);
  });

  return (
    <group ref={outerRef}>
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5}>
        {/* Core distorted energetic mesh */}
        <mesh ref={meshRef} scale={1.8}>
          <icosahedronGeometry args={[1.2, 3]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            emissive="#06b6d4"
            emissiveIntensity={0.6}
            roughness={0.1}
            metalness={0.9}
            distort={0.4}
            speed={2}
            wireframe={false}
          />
        </mesh>

        {/* Outer Wireframe Cage */}
        <mesh scale={2.2}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshBasicMaterial
            color="#38bdf8"
            wireframe={true}
            transparent={true}
            opacity={0.35}
          />
        </mesh>

        {/* Glowing Orbital Ring 1 */}
        <mesh rotation={[Math.PI / 3, 0, 0]} scale={2.8}>
          <torusGeometry args={[1, 0.015, 16, 100]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.6} />
        </mesh>

        {/* Glowing Orbital Ring 2 */}
        <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]} scale={3.1}>
          <torusGeometry args={[1, 0.012, 16, 100]} />
          <meshBasicMaterial color="#f43f5e" transparent opacity={0.5} />
        </mesh>
      </Float>
    </group>
  );
}

// Interactive Starfield / Particle Cloud
function ParticleField({ count = 800 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorPalette = [
      new THREE.Color('#06b6d4'),
      new THREE.Color('#8b5cf6'),
      new THREE.Color('#38bdf8'),
      new THREE.Color('#f43f5e'),
      new THREE.Color('#ffffff')
    ];

    for (let i = 0; i < count; i++) {
      // Spread in a spherical shell
      const r = 6 + Math.random() * 14;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.04;
    pointsRef.current.rotation.x += delta * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

interface HeroCanvasProps {
  mousePos: { normalizedX: number; normalizedY: number };
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ mousePos }) => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#38bdf8" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#8b5cf6" />
        <pointLight position={[5, -5, 5]} intensity={1.5} color="#f43f5e" />

        <FloatingCrystal mousePos={{ x: mousePos.normalizedX, y: mousePos.normalizedY }} />
        <ParticleField count={900} />
      </Canvas>
    </div>
  );
};
