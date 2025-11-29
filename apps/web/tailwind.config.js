/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#000000',
          light: '#ffffff',
        },
        surface: {
          DEFAULT: '#0a0a0a',
          light: '#f8f9fa',
        },
        'obsidian-dark': '#000000',
        'obsidian-mid': '#0a0a0a',
        'obsidian-light': '#1a1a1a',
        primary: '#3B82F6', // Electric Blue
        secondary: '#8B5CF6', // Vivid Purple
        accent: '#06B6D4', // Cyan Neon
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        neon: {
          blue: '#3B82F6',
          purple: '#8B5CF6',
          cyan: '#06B6D4',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #3B82F6 0deg, #8B5CF6 180deg, #06B6D4 360deg)',
        'obsidian-matrix': 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
        'neon-gradient': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #06B6D4 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'quantum-spin': 'quantumSpin 20s linear infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
        'hologram-sweep': 'hologramSweep 3s linear infinite',
        'zero-gravity': 'zeroGravity 6s ease-in-out infinite',
        'cosmic-shift': 'cosmicShift 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        quantumSpin: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        neonPulse: {
          '0%, 100%': { 
            opacity: 1,
            filter: 'brightness(1) drop-shadow(0 0 10px currentColor)',
          },
          '50%': { 
            opacity: 0.8,
            filter: 'brightness(1.2) drop-shadow(0 0 20px currentColor)',
          },
        },
        hologramSweep: {
          '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
          '100%': { transform: 'translateX(100%) translateY(100%) rotate(45deg)' },
        },
        zeroGravity: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(1deg)' },
          '50%': { transform: 'translateY(-5px) rotate(0deg)' },
          '75%': { transform: 'translateY(-15px) rotate(-1deg)' },
        },
        cosmicShift: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(10px) translateY(-10px)' },
          '50%': { transform: 'translateX(0) translateY(-20px)' },
          '75%': { transform: 'translateX(-10px) translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
        'neon-purple': '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.3)',
        'neon-multi': '0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.3), 0 0 60px rgba(6, 182, 212, 0.2)',
      },
    },
  },
  plugins: [],
}

