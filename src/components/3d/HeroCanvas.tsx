import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Ambient Orbital Geometric Nodes
function AmbientCyberCore({ mousePos }: { mousePos: { normalizedX: number; normalizedY: number } }) {
  const coreGroup = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!coreGroup.current) return;
    
    // Subtle rotation
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.25;
    if (ring2Ref.current) ring2Ref.current.rotation.x += delta * 0.3;
    if (ring3Ref.current) ring3Ref.current.rotation.y += delta * 0.2;

    // Follow mouse softly with high damping so it stays in background
    const targetX = mousePos.normalizedX * 0.4;
    const targetY = mousePos.normalizedY * 0.4;
    coreGroup.current.rotation.y = THREE.MathUtils.lerp(coreGroup.current.rotation.y, targetX, 0.04);
    coreGroup.current.rotation.x = THREE.MathUtils.lerp(coreGroup.current.rotation.x, -targetY, 0.04);
  });

  return (
    <group ref={coreGroup} position={[0, 0, -1]}>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
        {/* Delicate Ethereal Wireframe Core - Lower opacity so text is 100% readable */}
        <mesh scale={2.4}>
          <icosahedronGeometry args={[1.2, 2]} />
          <meshStandardMaterial
            color="#38bdf8"
            wireframe={true}
            transparent={true}
            opacity={0.18}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Inner Glowing Shard Core */}
        <mesh scale={1.1}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#06b6d4"
            emissiveIntensity={0.3}
            wireframe={true}
            transparent={true}
            opacity={0.3}
          />
        </mesh>

        {/* Orbit Ring 1 */}
        <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0.2, 0]} scale={3.4}>
          <torusGeometry args={[1, 0.008, 16, 120]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.35} />
        </mesh>

        {/* Orbit Ring 2 */}
        <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 3, 0]} scale={3.8}>
          <torusGeometry args={[1, 0.006, 16, 120]} />
          <meshBasicMaterial color="#ec4899" transparent opacity={0.3} />
        </mesh>

        {/* Orbit Ring 3 */}
        <mesh ref={ring3Ref} rotation={[0.4, -Math.PI / 3, Math.PI / 6]} scale={4.2}>
          <torusGeometry args={[1, 0.005, 16, 120]} />
          <meshBasicMaterial color="#a855f7" transparent opacity={0.25} />
        </mesh>
      </Float>
    </group>
  );
}

// Interactive Starfield / Particle Nebula
function StarParticles({ count = 1000 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorPalette = [
      new THREE.Color('#38bdf8'),
      new THREE.Color('#818cf8'),
      new THREE.Color('#c084fc'),
      new THREE.Color('#f43f5e'),
      new THREE.Color('#ffffff')
    ];

    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 16;
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
    pointsRef.current.rotation.y += delta * 0.03;
    pointsRef.current.rotation.x += delta * 0.015;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.65}
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
    <div className="w-full h-full absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.0} color="#38bdf8" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#8b5cf6" />
        
        <AmbientCyberCore mousePos={mousePos} />
        <StarParticles count={1100} />
      </Canvas>
    </div>
  );
};
