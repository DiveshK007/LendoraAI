import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [connected, setConnected] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            <header className="p-4 border-b flex justify-between items-center bg-white dark:bg-gray-900 sticky top-0 z-10">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Lendora AI
                </h1>
                <div className="flex items-center gap-6">
                    <nav className="flex gap-4 text-sm font-medium">
                        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
                        <Link href="/borrow" className="hover:text-blue-600 transition">Borrow</Link>
                        <Link href="/dashboard" className="hover:text-blue-600 transition">Dashboard</Link>
                        <Link href="/system" className="hover:text-blue-600 transition">System</Link>
                    </nav>
                    <button
                        onClick={() => setConnected(!connected)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition ${connected
                            ? "bg-green-100 text-green-700 border border-green-200"
                            : "bg-gray-900 text-white hover:bg-gray-800"
                            }`}
                    >
                        {connected ? "Wallet Connected" : "Connect Wallet"}
                    </button>
                </div>
            </header>
            <main className="flex-1 p-8 bg-gray-50 dark:bg-gray-950">
                {children}
            </main>
        </div>
    );
}
