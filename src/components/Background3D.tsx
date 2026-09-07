import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Float, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedShape({ isDarkMode }: { isDarkMode: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x -= delta * 0.1;
      coreRef.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Icosahedron ref={meshRef} args={[1, 1]} scale={2.8}>
        <meshStandardMaterial 
          color="#D4AF37" 
          wireframe 
          transparent
          opacity={isDarkMode ? 0.7 : 0.9}
        />
      </Icosahedron>
      {/* Solid inner core to give it depth */}
      <Sphere ref={coreRef} args={[2, 32, 32]} scale={0.95}>
        <meshStandardMaterial 
          color={isDarkMode ? "#0a0a0a" : "#f5f5f5"} 
          metalness={0.9} 
          roughness={0.1} 
        />
      </Sphere>
    </Float>
  );
}

export function Background3D({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 8] }} className="w-full h-full opacity-70">
        <ambientLight intensity={isDarkMode ? 0.8 : 1.5} />
        <directionalLight position={[10, 10, 5]} intensity={isDarkMode ? 2 : 3} color="#D4AF37" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />
        <AnimatedShape isDarkMode={isDarkMode} />
        {isDarkMode && <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />}
      </Canvas>
    </div>
  );
}
