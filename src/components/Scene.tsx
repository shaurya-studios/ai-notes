import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { LiquidCanvas } from './LiquidCanvas';
import { NoteNodes } from './NoteNodes';
import { useNotes } from '../hooks/useNotes';
import * as THREE from 'three';

// Cinematic Mouse/Pointer Camera Rig
function CameraRig() {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 10));

  useFrame((state, delta) => {
    // Smooth lerp camera target position based on pointer for parallax
    target.current.x = pointer.x * 3;
    target.current.y = pointer.y * 3;
    
    // Smooth damping
    camera.position.x += (target.current.x - camera.position.x) * 2 * delta;
    camera.position.y += (target.current.y - camera.position.y) * 2 * delta;
    
    // Always focus on center
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export function Scene() {
  const notes = useNotes();

  return (
    <Canvas 
      shadows 
      camera={{ position: [0, 0, 10], fov: 35 }} 
      gl={{ antialias: true, alpha: false, toneMapping: THREE.ACESFilmicToneMapping }}
    >
      <color attach="background" args={['#020202']} />
      
      {/* Pristine Lighting Setup */}
      <ambientLight intensity={0.4} color="#ffffff" />
      
      {/* Main directional soft shadow caster */}
      <directionalLight 
        position={[10, 20, 15]} 
        intensity={1.5} 
        color="#ffffff" 
        castShadow 
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      />
      
      {/* Cool fill light from left */}
      <spotLight 
        position={[-15, 10, 15]} 
        angle={0.4} 
        penumbra={1} 
        intensity={3} 
        color="#8899bb" 
      />
      
      {/* Warm rim light from bottom right */}
      <spotLight 
        position={[15, -15, 10]} 
        angle={0.4} 
        penumbra={1} 
        intensity={1.5} 
        color="#cc9988" 
      />
      
      <CameraRig />
      <LiquidCanvas />
      <NoteNodes notes={notes} />
    </Canvas>
  );
}
