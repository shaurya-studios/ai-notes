import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Text, useCursor, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { easing } from 'maath';
import { NativeChapter } from '../types/content';
import { CHAPTER_DATABASE } from '../data/database';

interface LibrarySceneProps {
  viewState: 'landing' | 'archive';
  onEnterArchive: () => void;
  onSelectChapter: (chapterId: string) => void;
}

export function LibraryScene({ viewState, onEnterArchive, onSelectChapter }: LibrarySceneProps) {
  return (
    <div className="absolute inset-0 z-10 bg-[#050505]">
      {/* HTML Overlays */}
      <div className={`absolute inset-0 pointer-events-none flex flex-col items-center justify-center transition-opacity duration-1000 z-20 ${viewState === 'landing' ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-6xl md:text-8xl font-serif text-white tracking-tight mb-8 drop-shadow-2xl">
          The Archive
        </h1>
        <p className="text-neutral-500 tracking-[0.4em] uppercase text-xs md:text-sm font-semibold mb-12">
          Curated Study Environment
        </p>
        <button 
          onClick={onEnterArchive}
          className="pointer-events-auto px-10 py-5 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-500 transition-all duration-500 uppercase tracking-[0.3em] text-xs font-bold backdrop-blur-md bg-black/10 rounded-sm"
        >
          Enter Library
        </button>
      </div>

      <div className={`absolute top-0 left-0 w-full p-8 md:px-12 pointer-events-none transition-opacity duration-1000 z-20 flex justify-between items-center ${viewState === 'archive' ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-neutral-500 tracking-[0.3em] uppercase text-xs font-bold">Volume I</span>
        <span className="text-neutral-500 tracking-[0.3em] uppercase text-xs font-bold hidden md:block">Select Chapter</span>
      </div>

      {/* 3D Canvas */}
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 35 }}>
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 10, 30]} />
        
        <ambientLight intensity={0.1} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} color="#ffffff" />
        <spotLight position={[-10, 20, 10]} angle={0.15} penumbra={1} intensity={1} color="#ffffff" />
        
        <SceneController viewState={viewState} />
        
        <group position={[0, -1, 0]}>
          {CHAPTER_DATABASE.map((chapter, i) => (
            <ChapterSlab 
              key={chapter.id} 
              chapter={chapter} 
              index={i} 
              total={CHAPTER_DATABASE.length}
              isActive={viewState === 'archive'}
              onSelect={() => onSelectChapter(chapter.id)}
            />
          ))}
        </group>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

function SceneController({ viewState }: { viewState: 'landing' | 'archive' }) {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 0, 15));
  const lookAtTarget = useRef(new THREE.Vector3(0, 0, 0));
  
  useEffect(() => {
    if (viewState === 'landing') {
      targetPos.current.set(0, 0, 22);
    } else {
      targetPos.current.set(0, 0, 14);
    }
  }, [viewState]);

  useFrame((state, delta) => {
    // Smooth camera movement
    easing.damp3(camera.position, targetPos.current, 0.8, delta);
    
    // Parallax on mouse move only in archive
    if (viewState === 'archive') {
      const targetX = (state.pointer.x * 2.5);
      const targetY = (state.pointer.y * 1.5);
      
      easing.damp3(
        camera.position,
        [targetPos.current.x + targetX, targetPos.current.y + targetY, camera.position.z],
        0.8,
        delta
      );
      
      // Look at center softly
      easing.damp3(lookAtTarget.current, [targetX * 0.2, targetY * 0.2, 0], 0.5, delta);
      camera.lookAt(lookAtTarget.current);
    } else {
      easing.damp3(lookAtTarget.current, [0, 0, 0], 0.5, delta);
      camera.lookAt(lookAtTarget.current);
    }
  });

  return null;
}

function ChapterSlab({ chapter, index, total, isActive, onSelect }: { chapter: NativeChapter, index: number, total: number, isActive: boolean, onSelect: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  useCursor(hovered && isActive, 'pointer', 'auto');

  // Calculate position in a wide arc/gallery
  const spacing = 3.2;
  const offset = (index - (total - 1) / 2);
  const x = offset * spacing;
  const z = Math.abs(offset) * 1.8; // Curve backward
  const rotationY = -offset * 0.12; // Face inward slightly

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Target values
    const targetZ = clicked ? z + 5 : hovered ? z - 0.8 : z;
    const targetY = hovered ? 0.3 : 0;
    
    // Smooth interpolation
    easing.damp3(meshRef.current.position, [x, targetY, -targetZ], 0.25, delta);
    easing.dampE(meshRef.current.rotation, [0, rotationY, 0], 0.25, delta);
  });

  const handleClick = (e: any) => {
    if (!isActive) return;
    e.stopPropagation();
    setClicked(true);
    // Delay selection to allow animation to play
    setTimeout(() => {
      onSelect();
      setClicked(false);
    }, 600);
  };

  return (
    <mesh 
      ref={meshRef}
      position={[x, 0, -z]}
      rotation={[0, rotationY, 0]}
      onPointerOver={(e) => {
        if (!isActive) return;
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      <boxGeometry args={[2.4, 3.8, 0.2]} />
      
      {/* Dark premium glass material */}
      <MeshTransmissionMaterial 
        background={new THREE.Color('#050505')}
        thickness={0.8}
        roughness={0.2}
        transmission={0.9}
        ior={1.4}
        color={hovered ? "#222222" : "#0a0a0a"}
        distortion={0.1}
        distortionScale={0.2}
        temporalDistortion={0.05}
      />

      {/* Chapter Number */}
      <Text
        position={[-0.9, 1.4, 0.11]}
        fontSize={0.15}
        color={hovered ? "#ffffff" : "#555555"}
        font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff"
        anchorX="left"
        anchorY="top"
      >
        {chapter.number}
      </Text>

      {/* Chapter Title */}
      <Text
        position={[0, 0, 0.11]}
        fontSize={0.24}
        maxWidth={2.0}
        lineHeight={1.3}
        color={hovered ? "#ffffff" : "#a3a3a3"}
        font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff"
        anchorX="center"
        anchorY="middle"
        textAlign="center"
      >
        {chapter.title}
      </Text>

      {/* Page Count & Details */}
      <Text
        position={[0, -1.3, 0.11]}
        fontSize={0.1}
        color="#555555"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        anchorX="center"
        anchorY="bottom"
        letterSpacing={0.2}
      >
        {`${chapter.pages.length} PAGES`}
      </Text>

      {/* Credit tag */}
      <Text
        position={[0, -1.5, 0.11]}
        fontSize={0.06}
        color={hovered ? "#888888" : "#333333"}
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        anchorX="center"
        anchorY="bottom"
        letterSpacing={0.2}
      >
        AI NOTES 2026 • BY SHAURYA
      </Text>

      {/* Inner subtle outline */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(2.4, 3.8, 0.2)]} />
        <lineBasicMaterial color={hovered ? "#444444" : "#1a1a1a"} linewidth={1} />
      </lineSegments>
    </mesh>
  );
}
