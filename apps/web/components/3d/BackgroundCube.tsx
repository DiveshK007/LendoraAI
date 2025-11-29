"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, ShaderMaterial } from "three";
import * as THREE from "three";

export default function BackgroundCube() {
  const meshRef = useRef<Mesh>(null);
  const timeRef = useRef(0);

  const shaderMaterial = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          time: { value: 0 },
        },
        vertexShader: `
          uniform float time;
          varying vec3 vPosition;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          
          void main() {
            vPosition = position;
            vNormal = normalize(normalMatrix * normal);
            vViewPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          varying vec3 vPosition;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          
          void main() {
            // Soft neon colors
            vec3 color1 = vec3(0.23, 0.51, 0.96); // Electric Blue
            vec3 color2 = vec3(0.55, 0.36, 0.96); // Vivid Purple
            vec3 color3 = vec3(0.02, 0.71, 0.83); // Cyan Neon
            
            // Holographic wave effect
            float wave = sin(vPosition.x * 2.0 + time * 0.5) * 
                        sin(vPosition.y * 2.0 + time * 0.7) * 
                        sin(vPosition.z * 2.0 + time * 0.6);
            wave = wave * 0.5 + 0.5;
            
            // Color mixing
            vec3 baseColor = mix(color1, color2, wave);
            baseColor = mix(baseColor, color3, sin(time * 0.3) * 0.5 + 0.5);
            
            // Fresnel effect for edge glow
            vec3 viewDirection = normalize(-vViewPosition);
            float fresnel = pow(1.0 - max(dot(vNormal, viewDirection), 0.0), 2.5);
            
            // Edge detection for neon highlights
            float edgeX = smoothstep(0.90, 1.0, abs(vPosition.x));
            float edgeY = smoothstep(0.90, 1.0, abs(vPosition.y));
            float edgeZ = smoothstep(0.90, 1.0, abs(vPosition.z));
            float edge = max(max(edgeX, edgeY), edgeZ);
            
            // Combine effects
            vec3 finalColor = baseColor;
            
            // Add edge neon highlights
            finalColor += edge * 2.0 * baseColor;
            
            // Add fresnel glow
            finalColor += fresnel * 1.2 * baseColor;
            
            // Soft bloom effect
            float bloom = fresnel * 0.8 + edge * 0.5;
            finalColor += bloom * baseColor;
            
            // Depth shadow
            float depth = 1.0 - (vPosition.z + 1.0) * 0.25;
            depth = clamp(depth, 0.4, 1.0);
            finalColor *= depth;
            
            // Transparent faces with soft edges
            float alpha = 0.12 + fresnel * 0.3 + edge * 0.4;
            alpha = clamp(alpha, 0.08, 0.5);
            
            gl_FragColor = vec4(finalColor, alpha);
          }
        `,
        transparent: true,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  useFrame((state, delta) => {
    if (meshRef.current) {
      timeRef.current += delta;
      
      // Slow, smooth rotation on X and Y axes
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
      
      // Subtle floating motion
      const floatAmount = Math.sin(timeRef.current * 0.4) * 0.15;
      meshRef.current.position.y = floatAmount;
      
      // Update shader time
      if (shaderMaterial.uniforms) {
        shaderMaterial.uniforms.time.value = timeRef.current;
      }
    }
  });

  return (
    <mesh ref={meshRef} material={shaderMaterial} position={[0, 0, -8]}>
      <boxGeometry args={[4, 4, 4, 32, 32, 32]} />
    </mesh>
  );
}

