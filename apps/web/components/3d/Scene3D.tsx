"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import QuantumCubeSpin from "./QuantumCubeSpin";
import NeonNodeOrbit from "./NeonNodeOrbit";
import PrismMeshPulse from "./PrismMeshPulse";
import BackgroundCube from "./BackgroundCube";

interface Scene3DProps {
  intensity?: number;
  position?: [number, number, number];
}

export default function Scene3D({ intensity = 0.3, position = [0, 0, 0] }: Scene3DProps) {
  const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1;
  
  return (
    <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
      <Canvas
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        dpr={[1, dpr]}
        style={{ background: "transparent" }}
        camera={{ position: [0, 0, 8], fov: 75 }}
      >
        <ambientLight intensity={intensity} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[0, 10, 0]} intensity={0.3} color="#06b6d4" />
        
        <group position={position}>
          <BackgroundCube />
          <QuantumCubeSpin />
          <NeonNodeOrbit />
          <PrismMeshPulse />
        </group>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}

