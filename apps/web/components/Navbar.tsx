"use client";

import Link from 'next/link';
import { Wallet } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isConnected, setIsConnected] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-midnight-bg/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cardano-blue to-midnight-accent">
                            Lendora AI
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Dashboard
                            </Link>
                            <Link href="/request" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Request Loan
                            </Link>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={() => setIsConnected(!isConnected)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${isConnected
                                    ? 'bg-cardano-blue/20 text-cardano-light border border-cardano-blue/50'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                        >
                            <Wallet size={18} />
                            {isConnected ? 'Connected: addr1...xyz' : 'Connect Wallet'}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
