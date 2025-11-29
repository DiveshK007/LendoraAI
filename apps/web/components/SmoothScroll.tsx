"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Continuum Scroll Sequence - Enhanced smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Add smooth scroll polyfill for better browser support
    let lastScrollTop = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          lastScrollTop = scrollTop;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hydra Scrollflow - Animated flow effect based on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const flowElements = document.querySelectorAll(".hydra-scrollflow");
    flowElements.forEach((el) => {
      const element = el as HTMLElement;
      const progress = latest;
      element.style.setProperty("--scroll-progress", String(progress));
    });
  });

  return (
    <motion.div 
      ref={containerRef} 
      className="relative continuum-scroll"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      {children}
    </motion.div>
  );
}

