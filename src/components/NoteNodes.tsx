import React, { useRef, useState, useEffect } from 'react';
import { Text, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { Note } from '../hooks/useNotes';

function NoteNode({ note }: { note: Note }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!groupRef.current) return;
    
    // GSAP physics and elasticity animations
    if (expanded) {
      gsap.to(groupRef.current.scale, { 
        x: 1.5, y: 1.5, z: 0.1, 
        duration: 0.8, ease: "elastic.out(1, 0.5)" 
      });
      gsap.to(groupRef.current.position, {
        z: 2, // Bring closer to camera
        duration: 0.8, ease: "power3.out"
      });
    } else if (hovered) {
      gsap.to(groupRef.current.scale, { 
        x: 1.15, y: 1.15, z: 1.15, 
        duration: 0.5, ease: "back.out(1.7)" 
      });
      gsap.to(groupRef.current.position, {
        z: 0.5,
        duration: 0.5, ease: "power2.out"
      });
    } else {
      gsap.to(groupRef.current.scale, { 
        x: 1, y: 1, z: 1, 
        duration: 0.5, ease: "power2.out" 
      });
      gsap.to(groupRef.current.position, {
        z: 0,
        duration: 0.5, ease: "power2.out"
      });
    }
  }, [expanded, hovered]);

  const handleClick = (e: any) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  // Subtle floating animation when idle
  const timeRef = useRef(0);
  
  useFrame((state, delta) => {
    timeRef.current += delta;
    if (groupRef.current && !expanded) {
      const time = timeRef.current;
      groupRef.current.position.y = note.y + Math.sin(time * 1.5 + note.x) * 0.15;
      groupRef.current.rotation.x = Math.sin(time + note.x) * 0.05;
      groupRef.current.rotation.y = Math.cos(time + note.y) * 0.05;
    } else if (groupRef.current && expanded) {
      // Keep it perfectly straight for reading
      groupRef.current.rotation.x = 0;
      groupRef.current.rotation.y = 0;
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={[note.x, note.y, 0]} 
      onClick={handleClick} 
      onPointerOver={() => {
        document.body.style.cursor = 'pointer';
        setHovered(true);
      }} 
      onPointerOut={() => {
        document.body.style.cursor = 'auto';
        setHovered(false);
      }}
    >
      {/* 3D Soft-body Droplet / Reading Pane */}
      <mesh ref={meshRef} castShadow receiveShadow>
        {expanded ? (
          <boxGeometry args={[4, 5, 0.2]} />
        ) : (
          <sphereGeometry args={[0.7, 64, 64]} />
        )}
        
        {/* Premium tactile glass material */}
        <MeshTransmissionMaterial 
          background={new THREE.Color('#020202')}
          thickness={expanded ? 0.2 : 2}
          roughness={0.05}
          transmission={1}
          ior={1.4}
          chromaticAberration={0.05}
          anisotropy={0.5}
          color={note.color}
        />
      </mesh>
      
      {/* Embedded Typography */}
      <Text
        position={[0, expanded ? 1.8 : 0.9, expanded ? 0.11 : 0]}
        fontSize={expanded ? 0.25 : 0.18}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff"
      >
        {note.title}
      </Text>
      
      {expanded && (
        <Text
          position={[0, 0, 0.11]}
          fontSize={0.12}
          color="#d1d1d1"
          maxWidth={3.2}
          lineHeight={1.5}
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        >
          {note.content}
        </Text>
      )}
      
      {/* Small metadata tag at bottom when expanded */}
      {expanded && (
        <Text
          position={[0, -2, 0.11]}
          fontSize={0.08}
          color="#888888"
          letterSpacing={0.2}
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        >
          {`UPDATED BY ${note.updated_by.toUpperCase()}`}
        </Text>
      )}
    </group>
  );
}

export function NoteNodes({ notes }: { notes: Note[] }) {
  return (
    <group>
      {notes.map(note => (
        <NoteNode key={note.id} note={note} />
      ))}
    </group>
  );
}
