import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function PlantModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        {/* Pot */}
        <group position={[0, -1.5, 0]}>
          <cylinderGeometry args={[0.8, 1, 1, 8]} />
          <meshStandardMaterial color="#3a2f2a" roughness={0.8} />
        </group>
        
        {/* Main stem */}
        <group position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.05, 0.08, 2, 8]} />
          <meshStandardMaterial color="#2d5a3d" />
        </group>
        
        {/* Leaves */}
        {Array.from({ length: 6 }).map((_, i) => (
          <group key={i} position={[0, i * 0.3 - 0.5, 0]} rotation={[0, (i * Math.PI) / 3, 0]}>
            <mesh position={[0.5, 0, 0]}>
              <planeGeometry args={[0.8, 0.6]} />
              <MeshDistortMaterial
                color="#22c55e"
                distort={0.2}
                speed={2}
                roughness={0.4}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        ))}
      </mesh>
    </Float>
  );
}

const Plant3D = () => {
  return (
    <div className="w-full h-full animate-float">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} />
        <PlantModel />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};

export default Plant3D;