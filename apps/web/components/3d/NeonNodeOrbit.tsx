"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Points, BufferGeometry, Float32BufferAttribute } from "three";
import * as THREE from "three";

const NODE_COUNT = 50;

export default function NeonNodeOrbit() {
  const groupRef = useRef<Group>(null);
  const timeRef = useRef(0);

  const { positions, colors, linePositions, lineColors } = useMemo(() => {
    const posArray = new Float32Array(NODE_COUNT * 3);
    const colorArray = new Float32Array(NODE_COUNT * 3);
    const linePosArray: number[] = [];
    const lineColorArray: number[] = [];
    
    for (let i = 0; i < NODE_COUNT; i++) {
      const angle = (i / NODE_COUNT) * Math.PI * 2;
      const radius = 3 + Math.random() * 2;
      const height = (Math.random() - 0.5) * 4;
      
      posArray[i * 3] = Math.cos(angle) * radius;
      posArray[i * 3 + 1] = height;
      posArray[i * 3 + 2] = Math.sin(angle) * radius;
      
      const colorChoice = Math.random();
      let r, g, b;
      if (colorChoice < 0.33) {
        r = 0.23; g = 0.51; b = 0.96; // Electric Blue
      } else if (colorChoice < 0.66) {
        r = 0.55; g = 0.36; b = 0.96; // Vivid Purple
      } else {
        r = 0.02; g = 0.71; b = 0.83; // Cyan Neon
      }
      
      colorArray[i * 3] = r;
      colorArray[i * 3 + 1] = g;
      colorArray[i * 3 + 2] = b;
      
      // Create lines
      const nextIndex = (i + 1) % NODE_COUNT;
      linePosArray.push(
        posArray[i * 3], posArray[i * 3 + 1], posArray[i * 3 + 2],
        posArray[nextIndex * 3], posArray[nextIndex * 3 + 1], posArray[nextIndex * 3 + 2]
      );
      lineColorArray.push(r, g, b, r, g, b);
    }
    
    return {
      positions: posArray,
      colors: colorArray,
      linePositions: new Float32Array(linePosArray),
      lineColors: new Float32Array(lineColorArray),
    };
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      timeRef.current += delta;
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x = Math.sin(timeRef.current * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={NODE_COUNT}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={NODE_COUNT}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          vertexColors={true}
          transparent
          opacity={0.9}
          sizeAttenuation={true}
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      {/* Connecting lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={lineColors.length / 3}
            array={lineColors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors={true}
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

