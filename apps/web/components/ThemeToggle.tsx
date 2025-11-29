"use client";

import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder to prevent hydration mismatch
    return (
      <div className="relative w-14 h-8 rounded-full dark:bg-surface bg-gray-200 border dark:border-white/10 border-gray-300 flex items-center">
        <div className="relative z-10 w-6 h-6 rounded-full bg-white dark:bg-gray-800 shadow-lg"></div>
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-14 h-8 rounded-full dark:bg-surface bg-gray-200 border dark:border-white/10 border-gray-300 flex items-center transition-all duration-300 hover:border-primary/50"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 dark:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={{ opacity: theme === "dark" ? 1 : 0 }}
      />
      <motion.div
        className="relative z-10 w-6 h-6 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center transition-all duration-300"
        initial={false}
        animate={{
          x: theme === "dark" ? 28 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {theme === "dark" ? (
          <Moon className="w-4 h-4 text-primary" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
}

