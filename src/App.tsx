import React from 'react';
import { Scene } from './components/Scene';

export default function App() {
  return (
    <div className="w-full h-screen bg-[#020202] overflow-hidden text-white relative font-sans">
      {/* Minimal HTML Overlay (UI sitting above 3D Canvas) */}
      <div className="absolute top-0 left-0 w-full p-8 pointer-events-none z-10 flex justify-between items-center mix-blend-difference">
        <div className="font-serif text-2xl tracking-tight">Synapse</div>
        <div className="text-xs uppercase tracking-[0.3em] font-bold opacity-60">
          Collaborative Nodes
        </div>
      </div>
      
      {/* 3D Canvas rendering borderless 100vw/100vh */}
      <Scene />
    </div>
  );
}