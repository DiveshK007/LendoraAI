"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  depth?: number;
}

export default function ParallaxSection({ 
  children, 
  speed = 0.5, 
  className = "", 
  depth = 0.5 
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Cosmic Parallax Shift - Multi-layer parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100 * depth, -speed * 100 * depth]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        y, 
        opacity,
        scale,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`cosmic-parallax ${className}`}
    >
      {children}
    </motion.div>
  );
}

