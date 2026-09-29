import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface BarbellMeshProps {
  plateCount: number; // 1 to 4 pairs of plates
  isLifting: boolean;
}

function BarbellMesh({ plateCount, isLifting }: BarbellMeshProps) {
  const barbellGroupRef = useRef<THREE.Group>(null);
  const leftPlatesRef = useRef<THREE.Group>(null);
  const rightPlatesRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!barbellGroupRef.current) return;
    
    // Slow cinematic tilt
    barbellGroupRef.current.rotation.y += delta * 0.4;

    // Up and down lifting animation when active
    if (isLifting) {
      const liftY = Math.sin(state.clock.elapsedTime * 2.5) * 0.35;
      barbellGroupRef.current.position.y = liftY;
    } else {
      barbellGroupRef.current.position.y = THREE.MathUtils.lerp(barbellGroupRef.current.position.y, 0, 0.05);
    }
  });

  return (
    <group ref={barbellGroupRef} rotation={[0.1, 0, 0]}>
      {/* Central Olympic Barbell Shaft (Standard 2.2m) */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 3.8, 32]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.95} roughness={0.15} />
      </mesh>

      {/* Knurled Grip Texture indicators */}
      {[-0.6, -0.2, 0.2, 0.6].map((x, i) => (
        <mesh key={i} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.042, 0.042, 0.25, 32]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.85} roughness={0.4} />
        </mesh>
      ))}

      {/* Left Sleeve & Collar */}
      <mesh position={[-1.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.075, 0.075, 1.1, 32]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.12, 0.06, 32]} />
        <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Right Sleeve & Collar */}
      <mesh position={[1.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.075, 0.075, 1.1, 32]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.12, 0.06, 32]} />
        <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Left Weight Plates */}
      <group ref={leftPlatesRef}>
        {plateCount >= 1 && (
          // 20kg Red Olympic Plate 1
          <mesh position={[-0.92, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.48, 0.48, 0.1, 40]} />
            <meshStandardMaterial color="#ef4444" metalness={0.6} roughness={0.3} />
          </mesh>
        )}
        {plateCount >= 2 && (
          // 20kg Red Olympic Plate 2
          <mesh position={[-1.04, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.48, 0.48, 0.1, 40]} />
            <meshStandardMaterial color="#dc2626" metalness={0.6} roughness={0.3} />
          </mesh>
        )}
        {plateCount >= 3 && (
          // 15kg Blue Olympic Plate
          <mesh position={[-1.16, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.42, 0.42, 0.09, 40]} />
            <meshStandardMaterial color="#3b82f6" metalness={0.6} roughness={0.3} />
          </mesh>
        )}
        {plateCount >= 4 && (
          // 10kg Green Olympic Plate
          <mesh position={[-1.27, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.35, 0.35, 0.08, 40]} />
            <meshStandardMaterial color="#10b981" metalness={0.6} roughness={0.3} />
          </mesh>
        )}
        {/* Left Barbell Lock Clamp */}
        <mesh position={[-0.85 - plateCount * 0.115, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.09, 0.09, 0.05, 32]} />
          <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Right Weight Plates */}
      <group ref={rightPlatesRef}>
        {plateCount >= 1 && (
          // 20kg Red Olympic Plate 1
          <mesh position={[0.92, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.48, 0.48, 0.1, 40]} />
            <meshStandardMaterial color="#ef4444" metalness={0.6} roughness={0.3} />
          </mesh>
        )}
        {plateCount >= 2 && (
          // 20kg Red Olympic Plate 2
          <mesh position={[1.04, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.48, 0.48, 0.1, 40]} />
            <meshStandardMaterial color="#dc2626" metalness={0.6} roughness={0.3} />
          </mesh>
        )}
        {plateCount >= 3 && (
          // 15kg Blue Olympic Plate
          <mesh position={[1.16, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.42, 0.42, 0.09, 40]} />
            <meshStandardMaterial color="#3b82f6" metalness={0.6} roughness={0.3} />
          </mesh>
        )}
        {plateCount >= 4 && (
          // 10kg Green Olympic Plate
          <mesh position={[1.27, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.35, 0.35, 0.08, 40]} />
            <meshStandardMaterial color="#10b981" metalness={0.6} roughness={0.3} />
          </mesh>
        )}
        {/* Right Barbell Lock Clamp */}
        <mesh position={[0.85 + plateCount * 0.115, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.09, 0.09, 0.05, 32]} />
          <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
}

interface Barbell3DProps {
  plateCount?: number;
  isLifting?: boolean;
}

export const Barbell3D: React.FC<Barbell3DProps> = ({ plateCount = 3, isLifting = true }) => {
  return (
    <div className="w-full h-[320px] md:h-[380px] relative">
      <Canvas
        camera={{ position: [0, 0.5, 3.4], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 8, 5]} intensity={2.5} color="#ffffff" />
        <pointLight position={[-5, -2, -2]} intensity={1.5} color="#ef4444" />
        <pointLight position={[5, -2, 2]} intensity={1.5} color="#3b82f6" />
        <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
          <BarbellMesh plateCount={plateCount} isLifting={isLifting} />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};
