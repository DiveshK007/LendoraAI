import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/20 to-transparent blur-[100px] -z-10 animate-pulse-slow"></div>

        <div className="space-y-6 max-w-4xl z-10">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-accent mb-4 animate-fade-in-up">
            🚀 Powered by Cardano Hydra & AI Agents
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-tight">
            The Future of <br />
            <span className="text-gradient">Agentic Lending</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Lendora AI deploys autonomous agents to negotiate the best loan terms for you, settled instantly on Layer 2.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mt-10">
            <Link
              href="/borrow"
              className="group relative px-8 py-4 bg-primary hover:bg-blue-600 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Launch App
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              </span>
            </Link>

            <Link
              href="/system"
              className="px-8 py-4 glass hover:bg-white/10 rounded-full font-bold text-lg transition-all hover:scale-105"
            >
              How it Works
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full max-w-7xl px-4 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-8 hover:border-primary/50 transition-colors group">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white">Risk Advisor</h3>
          <p className="text-gray-400 leading-relaxed">
            Real-time risk assessment using on-chain data and volatility models to ensure loan safety.
          </p>
        </div>

        <div className="glass-card p-8 hover:border-secondary/50 transition-colors group">
          <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 002-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white">Negotiator Agent</h3>
          <p className="text-gray-400 leading-relaxed">
            Autonomous agents that negotiate interest rates and collateral ratios on your behalf.
          </p>
        </div>

        <div className="glass-card p-8 hover:border-accent/50 transition-colors group">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white">Hydra Settlement</h3>
          <p className="text-gray-400 leading-relaxed">
            Lightning-fast, low-cost transaction settlement on Cardano's Layer 2 Hydra Head protocol.
          </p>
        </div>
      </section>
    </div>
  );
}
