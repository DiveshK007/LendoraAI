import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowRight, Shield, Zap, Brain } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight-bg text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              <span className="block">Decentralized Lending</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cardano-blue to-midnight-accent">
                Powered by AI & Hydra
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">
              Instant, gasless negotiations. Private credit scoring.
              The future of RealFi on Cardano is here.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/request" className="px-8 py-3 rounded-full bg-cardano-blue hover:bg-blue-700 text-white font-bold transition-all flex items-center gap-2">
                Get a Loan <ArrowRight size={20} />
              </Link>
              <Link href="/dashboard" className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition-all border border-white/10">
                Lend Assets
              </Link>
            </div>
          </div>
        </div>

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cardano-blue/20 rounded-full blur-[100px] -z-10" />
      </div>

      {/* Features */}
      <div className="py-24 bg-midnight-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-midnight-accent/50 transition-all">
              <Zap className="w-12 h-12 text-midnight-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Instant Settlement</h3>
              <p className="text-gray-400">Powered by Hydra Heads for sub-second, gasless loan negotiations.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-midnight-accent/50 transition-all">
              <Brain className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Agents</h3>
              <p className="text-gray-400">Masumi agents negotiate the best rates for you automatically.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-midnight-accent/50 transition-all">
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Private Identity</h3>
              <p className="text-gray-400">Prove creditworthiness without revealing data via Midnight & Prism.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
