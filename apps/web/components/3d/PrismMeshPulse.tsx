"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, ShaderMaterial } from "three";
import * as THREE from "three";

export default function PrismMeshPulse() {
  const meshRef = useRef<Mesh>(null);
  const timeRef = useRef(0);

  const shaderMaterial = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          pulseSpeed: { value: 2.0 },
        },
        vertexShader: `
          uniform float time;
          varying vec3 vPosition;
          varying vec3 vNormal;
          varying float vPulse;
          
          void main() {
            vPosition = position;
            vNormal = normalize(normalMatrix * normal);
            vPulse = sin(time * 2.0) * 0.5 + 0.5;
            
            vec3 pos = position;
            pos += normal * vPulse * 0.2;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          varying vec3 vPosition;
          varying vec3 vNormal;
          varying float vPulse;
          
          void main() {
            vec3 color1 = vec3(0.23, 0.51, 0.96); // Electric Blue
            vec3 color2 = vec3(0.55, 0.36, 0.96); // Vivid Purple
            vec3 color3 = vec3(0.02, 0.71, 0.83); // Cyan Neon
            
            float pattern = sin(vPosition.x * 2.0 + time) * 
                           sin(vPosition.y * 2.0 + time * 1.2) * 
                           sin(vPosition.z * 2.0 + time * 0.8);
            
            vec3 color = mix(color1, color2, pattern * 0.5 + 0.5);
            color = mix(color, color3, sin(time + vPosition.y) * 0.5 + 0.5);
            
            float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
            color += fresnel * vPulse * 0.8;
            
            float edge = smoothstep(0.9, 1.0, abs(vPosition.x)) +
                         smoothstep(0.9, 1.0, abs(vPosition.y)) +
                         smoothstep(0.9, 1.0, abs(vPosition.z));
            color += edge * vPulse * 1.5;
            
            gl_FragColor = vec4(color, 0.6 + vPulse * 0.3);
          }
        `,
        transparent: true,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      }),
    []
  );

  useFrame((state, delta) => {
    if (meshRef.current) {
      timeRef.current += delta;
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.4;
      
      const pulse = Math.sin(timeRef.current * 2) * 0.1 + 1;
      meshRef.current.scale.set(pulse, pulse, pulse);
      
      if (shaderMaterial.uniforms) {
        shaderMaterial.uniforms.time.value = timeRef.current;
      }
    }
  });

  return (
    <mesh ref={meshRef} material={shaderMaterial}>
      <octahedronGeometry args={[1.5, 0]} />
    </mesh>
  );
}

