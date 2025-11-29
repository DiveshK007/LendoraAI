"use client";

import Link from "next/link";
import { WalletProvider, useWallet } from "../context/WalletContext";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import SmoothScroll from "./SmoothScroll";
import ThemeToggle from "./ThemeToggle";

const Scene3D = dynamic(() => import("./3d/Scene3D"), {
  ssr: false,
  loading: () => null,
});

function Navbar() {
    const { isConnected, connectWallet, disconnectWallet } = useWallet();

    return (
        <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 w-full z-50 glass dark:border-b-white/10 border-b-gray-200/50 hologram"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                <Link href="/" className="group">
                    <motion.h1 
                        className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent neon-glow"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        Lendora AI
                    </motion.h1>
                </Link>

                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex gap-8 text-sm font-medium">
                        <Link 
                            href="/" 
                            className="text-gray-400 dark:hover:text-white hover:text-gray-900 transition-all relative group"
                        >
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link 
                            href="/borrow" 
                            className="text-gray-400 dark:hover:text-white hover:text-gray-900 transition-all relative group"
                        >
                            Borrow
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link 
                            href="/dashboard" 
                            className="text-gray-400 dark:hover:text-white hover:text-gray-900 transition-all relative group"
                        >
                            Dashboard
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link 
                            href="/system" 
                            className="text-gray-400 dark:hover:text-white hover:text-gray-900 transition-all relative group"
                        >
                            System
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </nav>

                    <ThemeToggle />

                    <motion.button
                        onClick={isConnected ? disconnectWallet : connectWallet}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-2.5 rounded-full text-sm font-black transition-all duration-300 relative overflow-hidden ${isConnected
                                ? "bg-surface border border-success/50 text-success"
                                : "bg-gradient-to-r from-primary to-secondary text-white"
                            }`}
                    >
                        <span className="relative z-10 flex items-center gap-2 text-white font-black opacity-100">
                            {isConnected ? (
                                <>
                                    <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                                    <span className="text-success font-black">Connected</span>
                                </>
                            ) : (
                                "Connect Wallet"
                            )}
                        </span>
                        {!isConnected && (
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-secondary to-accent"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.5 }}
                            />
                        )}
                    </motion.button>
                </div>
            </div>
        </motion.header>
    );
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <WalletProvider>
            <SmoothScroll>
                <div className="min-h-screen flex flex-col dark:bg-background bg-white dark:text-white text-gray-900 selection:bg-primary/30 relative overflow-hidden transition-colors duration-300">
                {/* 3D Background Scene */}
                <div className="fixed inset-0 w-full h-full -z-10 dark:opacity-50 opacity-25">
                    <Scene3D intensity={0.2} position={[0, 0, 0]} />
                </div>
                
                {/* Additional Ambient Glows */}
                <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] dark:bg-primary/10 bg-primary/5 rounded-full blur-[150px] -z-10 dark:opacity-30 opacity-10 pointer-events-none animate-pulse-slow"></div>
                <div className="fixed bottom-0 right-0 w-[1000px] h-[700px] dark:bg-secondary/8 bg-secondary/4 rounded-full blur-[130px] -z-10 dark:opacity-30 opacity-10 pointer-events-none animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
                <div className="fixed top-1/2 left-0 w-[900px] h-[600px] dark:bg-accent/8 bg-accent/4 rounded-full blur-[120px] -z-10 dark:opacity-25 opacity-8 pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }}></div>

                <Navbar />
                <main className="flex-1 pt-24 px-6 relative">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </SmoothScroll>
        </WalletProvider>
    );
}
