"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, ShaderMaterial } from "three";
import * as THREE from "three";

export default function QuantumCubeSpin() {
  const meshRef = useRef<Mesh>(null);
  const timeRef = useRef(0);

  const shaderMaterial = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color1: { value: new THREE.Color(0x3b82f6) }, // Electric Blue
          color2: { value: new THREE.Color(0x8b5cf6) }, // Vivid Purple
          color3: { value: new THREE.Color(0x06b6d4) }, // Cyan Neon
        },
        vertexShader: `
          varying vec3 vPosition;
          varying vec3 vNormal;
          void main() {
            vPosition = position;
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 color1;
          uniform vec3 color2;
          uniform vec3 color3;
          varying vec3 vPosition;
          varying vec3 vNormal;
          
          void main() {
            vec3 pos = vPosition * 0.5;
            float pattern = sin(pos.x * 3.0 + time) * sin(pos.y * 3.0 + time) * sin(pos.z * 3.0 + time);
            vec3 color = mix(color1, color2, pattern * 0.5 + 0.5);
            color = mix(color, color3, sin(time * 0.5) * 0.5 + 0.5);
            
            float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            color += fresnel * 0.5;
            
            float edge = smoothstep(0.95, 1.0, abs(vPosition.x)) +
                         smoothstep(0.95, 1.0, abs(vPosition.y)) +
                         smoothstep(0.95, 1.0, abs(vPosition.z));
            color += edge * 2.0;
            
            gl_FragColor = vec4(color, 0.8);
          }
        `,
        transparent: true,
        side: THREE.DoubleSide,
      }),
    []
  );

  useFrame((state, delta) => {
    if (meshRef.current) {
      timeRef.current += delta;
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.z += delta * 0.2;
      
      const scale = 1 + Math.sin(timeRef.current * 2) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
      
      if (shaderMaterial.uniforms) {
        shaderMaterial.uniforms.time.value = timeRef.current;
      }
    }
  });

  return (
    <mesh ref={meshRef} material={shaderMaterial}>
      <boxGeometry args={[2, 2, 2, 32, 32, 32]} />
    </mesh>
  );
}

