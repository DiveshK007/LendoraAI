"use client";

import Link from "next/link";
import { WalletProvider, useWallet } from "../context/WalletContext";

function Navbar() {
    const { isConnected, connectWallet, disconnectWallet } = useWallet();

    return (
        <header className="fixed top-0 w-full z-50 glass border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                <Link href="/" className="group">
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent group-hover:opacity-80 transition-opacity">
                        Lendora AI
                    </h1>
                </Link>

                <div className="flex items-center gap-8">
                    <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <Link href="/borrow" className="hover:text-white transition-colors">Borrow</Link>
                        <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
                        <Link href="/system" className="hover:text-white transition-colors">System</Link>
                    </nav>

                    <button
                        onClick={isConnected ? disconnectWallet : connectWallet}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${isConnected
                                ? "bg-surface border border-success/50 text-success shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                                : "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105"
                            }`}
                    >
                        {isConnected ? (
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                                Connected
                            </span>
                        ) : (
                            "Connect Wallet"
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <WalletProvider>
            <div className="min-h-screen flex flex-col bg-background text-white selection:bg-primary/30">
                <Navbar />
                <main className="flex-1 pt-24 px-6 relative overflow-hidden">
                    {/* Background Ambient Glow */}
                    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-20 pointer-events-none"></div>
                    <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-secondary/10 rounded-full blur-[100px] -z-10 opacity-20 pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </WalletProvider>
    );
}
