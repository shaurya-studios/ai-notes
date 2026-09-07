import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;
  uniform vec2 uPointer;

  void main() {
    vUv = uv;
    vNormal = normal;
    
    vec3 pos = position;
    
    // Smooth fluid wave propagation
    float wave1 = sin(pos.x * 0.3 + uTime * 0.4) * cos(pos.y * 0.3 + uTime * 0.4) * 0.8;
    float wave2 = sin(pos.x * 0.8 - uTime * 0.6) * cos(pos.y * 0.7 + uTime * 0.5) * 0.3;
    
    // Pointer displacement ripple
    float dist = distance(pos.xy, uPointer * 15.0);
    float ripple = sin(dist * 4.0 - uTime * 8.0) * exp(-dist * 0.3) * 0.6;
    
    pos.z += wave1 + wave2 + ripple;
    vPosition = pos;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform vec3 uColor;
  
  void main() {
    // Compute faceted normals based on derivatives for dynamic fluid lighting reflection
    vec3 dx = dFdx(vPosition);
    vec3 dy = dFdy(vPosition);
    vec3 normal = normalize(cross(dx, dy));
    
    vec3 viewDir = normalize(cameraPosition - vPosition);
    
    // Calculate Fresnel effect for high-transmission / glossy look
    float fresnel = dot(viewDir, normal);
    fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
    fresnel = pow(fresnel, 3.0);
    
    // Base dark satin/ink color
    vec3 baseColor = vec3(0.05, 0.05, 0.06); 
    // Specular silver reflection
    vec3 reflectionColor = vec3(0.4, 0.45, 0.55); 
    
    vec3 finalColor = mix(baseColor, reflectionColor, fresnel * 1.5);
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export function LiquidCanvas() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { pointer } = useThree();

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uPointer: { value: new THREE.Vector2(0, 0) },
    uColor: { value: new THREE.Color('#050505') }
  }), []);

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
      // Smoothly lerp pointer for organic fluid reaction
      materialRef.current.uniforms.uPointer.value.lerp(pointer, 0.05);
    }
  });

  return (
    <mesh position={[0, 0, -3]}>
      <planeGeometry args={[40, 40, 128, 128]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        wireframe={false}
        extensions={{ derivatives: true }}
      />
    </mesh>
  );
}
