"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ParallaxSection from "../components/ParallaxSection";
import { 
  Bot, 
  Zap, 
  Shield, 
  TrendingUp, 
  MessageSquare, 
  Coins, 
  Network, 
  AlertTriangle, 
  CheckCircle, 
  Sparkles,
  RefreshCw,
  LayoutDashboard
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center cosmic-parallax">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden dark:bg-transparent bg-white">
        {/* 3D Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial dark:from-primary/30 dark:via-secondary/20 from-primary/10 via-secondary/8 to-transparent blur-[150px] -z-10 dark:opacity-100 opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial dark:from-accent/20 from-accent/8 to-transparent blur-[120px] -z-10 dark:opacity-100 opacity-20 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8 max-w-5xl z-10"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-6 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md text-sm font-bold text-accent mb-4 hologram zero-gravity"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Powered by Cardano Hydra & AI Agents
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-7xl md:text-9xl font-black tracking-tight leading-tight"
          >
            The Future of <br />
            <span className="text-gradient neon-glow">Agentic Lending</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl dark:text-gray-300 text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Lendora AI deploys autonomous agents to negotiate the best loan terms for you, settled instantly on Layer 2.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/borrow"
                className="group relative px-10 py-5 bg-gradient-to-r from-primary to-secondary rounded-full font-black text-lg transition-all overflow-hidden block"
              >
                <span className="relative z-10 flex items-center gap-3 text-white font-black opacity-100">
                  Launch App
                  <motion.svg 
                    className="w-5 h-5 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </motion.svg>
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-accent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/system"
                className="px-10 py-5 glass-card hover:border-primary/50 rounded-full font-bold text-lg transition-all block hologram"
              >
                How it Works
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <ParallaxSection speed={0.3} depth={0.8}>
        <section className="w-full max-w-7xl px-4 py-32 grid grid-cols-1 md:grid-cols-3 gap-8 hydra-scrollflow">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 hover:border-primary/50 transition-all group hologram zero-gravity"
            style={{ animationDelay: "0s" }}
          >
            <motion.div 
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </motion.div>
            <h3 className="text-3xl font-bold mb-4 text-primary dark:text-primary">Risk Advisor</h3>
            <p className="dark:text-gray-200 text-gray-700 leading-relaxed text-lg">
              Real-time risk assessment using on-chain data and volatility models to ensure loan safety.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-10 hover:border-secondary/50 transition-all group hologram zero-gravity"
            style={{ animationDelay: "0.2s" }}
          >
            <motion.div 
              className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 002-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
              </svg>
            </motion.div>
            <h3 className="text-3xl font-bold mb-4 text-secondary dark:text-secondary">Negotiator Agent</h3>
            <p className="dark:text-gray-200 text-gray-700 leading-relaxed text-lg">
              Autonomous agents that negotiate interest rates and collateral ratios on your behalf.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-10 hover:border-accent/50 transition-all group hologram zero-gravity"
            style={{ animationDelay: "0.4s" }}
          >
            <motion.div 
              className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </motion.div>
            <h3 className="text-3xl font-bold mb-4 text-accent dark:text-accent">Hydra Settlement</h3>
            <p className="dark:text-gray-200 text-gray-700 leading-relaxed text-lg">
              Lightning-fast, low-cost transaction settlement on Cardano's Layer 2 Hydra Head protocol.
            </p>
          </motion.div>
        </section>
      </ParallaxSection>

      {/* Comprehensive Features Section */}
      <ParallaxSection speed={0.2} depth={0.6}>
        <section className="w-full max-w-7xl px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient">Revolutionary Features</span>
            </h2>
            <p className="text-xl dark:text-gray-300 text-gray-600 max-w-3xl mx-auto">
              Experience the future of decentralized lending with cutting-edge AI and blockchain technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1: AI-Agent Lending Engine */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8 hover:border-primary/50 transition-all group hologram"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Bot className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-primary dark:text-primary">AI-Agent Lending Engine</h3>
              <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                Autonomous AI agents negotiate loan terms in real time, optimizing interest rates, collateral ratios, and risk profiles without human intervention. Each agent acts like a personal financial assistant 24/7.
              </p>
            </motion.div>

            {/* Feature 2: Hydra-Powered High-Speed Loan Matching */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 hover:border-secondary/50 transition-all group hologram"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Zap className="w-8 h-8 text-secondary" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-secondary dark:text-secondary">Hydra-Powered High-Speed Matching</h3>
              <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                Loan negotiations and bidding happen inside Hydra Heads, enabling millisecond-speed matching with zero gas fees. Users and lenders get instant, scalable execution regardless of network load.
              </p>
            </motion.div>

            {/* Feature 3: Midnight Privacy Layer */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8 hover:border-accent/50 transition-all group hologram"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="w-8 h-8 text-accent" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-accent dark:text-accent">Midnight Privacy Layer</h3>
              <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                Borrowers can prove creditworthiness privately using ZK Proofs without revealing balances, history, identity, or wallet details. Enables compliant under-collateralized lending.
              </p>
            </motion.div>

            {/* Feature 4: Reputation-Based Borrowing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-8 hover:border-primary/50 transition-all group hologram"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <TrendingUp className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-primary dark:text-primary">Reputation-Based Borrowing</h3>
              <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                Uses a combined privacy-preserved "Reputation Score" to unlock better interest rates, lower collateral requirements, and higher borrowing limits. Unlike traditional DeFi, borrowing power grows over time.
              </p>
            </motion.div>

            {/* Feature 5: Intent-Based Lending UI */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card p-8 hover:border-secondary/50 transition-all group hologram"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MessageSquare className="w-8 h-8 text-secondary" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-secondary dark:text-secondary">Intent-Based Lending UI</h3>
              <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                Users don't pick lenders—they simply say "I need X amount at max 5% interest." AI agents execute the strategy, negotiate, and return the best possible loan instantly.
              </p>
            </motion.div>

            {/* Feature 6: Gasless Liquidity Trading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card p-8 hover:border-accent/50 transition-all group hologram"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Coins className="w-8 h-8 text-accent" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-accent dark:text-accent">Gasless Liquidity Trading</h3>
              <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                Lenders can place hundreds of interest-rate bids with no gas fees using Hydra's off-chain negotiation environment. Perfect for high-frequency DeFi traders.
              </p>
            </motion.div>

            {/* Feature 7: Multi-Chain Liquidity Routing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="glass-card p-8 hover:border-primary/50 transition-all group hologram"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Network className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-primary dark:text-primary">Multi-Chain Liquidity Routing</h3>
              <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                A unified interface that aggregates lending liquidity from Cardano, Midnight (private layer), and cross-chain bridges. Agents constantly scan networks for optimal yield flows.
              </p>
            </motion.div>

            {/* Feature 8: Fraud & Risk Detection AI */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-card p-8 hover:border-secondary/50 transition-all group hologram"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <AlertTriangle className="w-8 h-8 text-secondary" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-secondary dark:text-secondary">Fraud & Risk Detection AI</h3>
              <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                Masumi risk models detect wallet anomalies, suspicious patterns, loan manipulation strategies, and flash-loan exploits. Agents automatically block unsafe matches.
              </p>
            </motion.div>

            {/* Feature 9: Transparent Settlement on Cardano Layer 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="glass-card p-8 hover:border-accent/50 transition-all group hologram"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <CheckCircle className="w-8 h-8 text-accent" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-accent dark:text-accent">Transparent Settlement</h3>
              <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                After private negotiation and proof validation, the final loan state settles securely on Cardano, ensuring full auditability, immutability, and trustless settlement.
              </p>
            </motion.div>

            {/* Feature 10: Personalized Financial Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="glass-card p-8 hover:border-primary/50 transition-all group hologram"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-primary dark:text-primary">Personalized Financial Optimization</h3>
              <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                Every borrower gets customized collateral suggestions, risk-adjusted rates, repayment insights, and liquidation protection alerts. Powered by on-chain + off-chain AI intelligence.
              </p>
            </motion.div>

            {/* Feature 11: One-Click Smart Loan Refinancing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="glass-card p-8 hover:border-secondary/50 transition-all group hologram"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <RefreshCw className="w-8 h-8 text-secondary" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-secondary dark:text-secondary">One-Click Smart Loan Refinancing</h3>
              <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                Users can instantly switch to a better interest rate if market conditions change. Lendora's AI agents automatically refinance the loan without manual steps.
              </p>
            </motion.div>

            {/* Feature 12: Real-Time Portfolio Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="glass-card p-8 hover:border-accent/50 transition-all group hologram"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <LayoutDashboard className="w-8 h-8 text-accent" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-accent dark:text-accent">Real-Time Portfolio Dashboard</h3>
              <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                A clean, modern dashboard that shows loan status, collateral health, repayment timeline, and alerts — updated in real time with AI insights.
              </p>
            </motion.div>
          </div>
        </section>
      </ParallaxSection>
    </div>
  );
}
