"use client";

import { motion } from "framer-motion";
import ParallaxSection from "../../components/ParallaxSection";
import { Code, Server, Bot, FileCode, Database, Network, Shield, Zap } from "lucide-react";

export default function SystemPage() {
    return (
        <div className="flex flex-col items-center cosmic-parallax w-full">
            <ParallaxSection speed={0.2}>
                <div className="max-w-7xl mx-auto w-full px-4 py-20">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-block px-6 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md text-sm font-bold text-accent mb-6 hologram"
                        >
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                Technical Architecture
                            </span>
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6">
                            <span className="text-gradient">System Architecture</span>
                        </h1>
                        <p className="text-xl dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
                            Explore the cutting-edge technology powering Lendora AI's decentralized lending platform
                        </p>
                    </motion.div>

                    <div className="grid gap-8">
                        {/* Frontend Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-card p-10 hover:border-primary/50 transition-all group hologram"
                        >
                            <div className="flex items-start gap-6">
                                <motion.div
                                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Code className="w-8 h-8 text-primary" />
                                </motion.div>
                                <div className="flex-1">
                                    <h2 className="text-3xl font-bold mb-4 text-primary dark:text-primary">Frontend (Next.js)</h2>
                                    <p className="dark:text-gray-300 text-gray-700 mb-6 text-lg leading-relaxed">
                                        A responsive web application built with Next.js 14 (App Router) and Tailwind CSS.
                                        Handles user interaction, wallet connection (mock), and displays real-time loan simulations.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-4 py-2 bg-primary/10 dark:bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">Pages: Home, Borrow, Dashboard, System</span>
                                        <span className="px-4 py-2 bg-primary/10 dark:bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">Components: LoanForm, LoanSummaryCard, Layout</span>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Backend Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="glass-card p-10 hover:border-secondary/50 transition-all group hologram"
                        >
                            <div className="flex items-start gap-6">
                                <motion.div
                                    className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Server className="w-8 h-8 text-secondary" />
                                </motion.div>
                                <div className="flex-1">
                                    <h2 className="text-3xl font-bold mb-4 text-secondary dark:text-secondary">Backend (Express + Agents)</h2>
                                    <p className="dark:text-gray-300 text-gray-700 mb-6 text-lg leading-relaxed">
                                        An Express.js server acting as the orchestrator. It exposes REST APIs for the frontend
                                        and communicates with the AI Agents and Smart Contracts.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-4 py-2 bg-secondary/10 dark:bg-secondary/10 border border-secondary/30 rounded-full text-sm font-medium text-secondary">Endpoints: /loans/simulate, /loans/create</span>
                                        <span className="px-4 py-2 bg-secondary/10 dark:bg-secondary/10 border border-secondary/30 rounded-full text-sm font-medium text-secondary">Middleware: Error Handling, Validation</span>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* AI Agents Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass-card p-10 hover:border-accent/50 transition-all group hologram"
                        >
                            <div className="flex items-start gap-6 mb-6">
                                <motion.div
                                    className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Bot className="w-8 h-8 text-accent" />
                                </motion.div>
                                <div className="flex-1">
                                    <h2 className="text-3xl font-bold mb-4 text-accent dark:text-accent">AI Agents</h2>
                                    <p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed">
                                        Intelligent modules that analyze risk and optimize loan terms in real-time.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="p-6 bg-primary/5 dark:bg-primary/5 border border-primary/20 rounded-xl"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <Shield className="w-6 h-6 text-primary" />
                                        <h3 className="font-bold text-lg dark:text-white text-gray-900">Risk Advisor</h3>
                                    </div>
                                    <p className="text-sm dark:text-gray-400 text-gray-600">Calculates risk scores based on collateral ratio and market conditions.</p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="p-6 bg-secondary/5 dark:bg-secondary/5 border border-secondary/20 rounded-xl"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <Zap className="w-6 h-6 text-secondary" />
                                        <h3 className="font-bold text-lg dark:text-white text-gray-900">Negotiator</h3>
                                    </div>
                                    <p className="text-sm dark:text-gray-400 text-gray-600">Proposes optimized loan amounts to ensure safety and fairness.</p>
                                </motion.div>
                            </div>
                        </motion.section>

                        {/* Smart Contracts Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="glass-card p-10 hover:border-primary/50 transition-all group hologram"
                        >
                            <div className="flex items-start gap-6">
                                <motion.div
                                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <FileCode className="w-8 h-8 text-primary" />
                                </motion.div>
                                <div className="flex-1">
                                    <h2 className="text-3xl font-bold mb-4 text-primary dark:text-primary">Smart Contracts (Aiken)</h2>
                                    <p className="dark:text-gray-300 text-gray-700 mb-6 text-lg leading-relaxed">
                                        Cardano smart contracts written in Aiken. Currently mocked for development speed.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="p-4 bg-primary/5 dark:bg-primary/5 border border-primary/20 rounded-xl">
                                            <Database className="w-6 h-6 text-primary mb-2" />
                                            <h3 className="font-bold text-sm mb-1 dark:text-white text-gray-900">Loan Contract</h3>
                                            <p className="text-xs dark:text-gray-400 text-gray-600">Manages loan creation and repayment</p>
                                        </div>
                                        <div className="p-4 bg-secondary/5 dark:bg-secondary/5 border border-secondary/20 rounded-xl">
                                            <Shield className="w-6 h-6 text-secondary mb-2" />
                                            <h3 className="font-bold text-sm mb-1 dark:text-white text-gray-900">Collateral Contract</h3>
                                            <p className="text-xs dark:text-gray-400 text-gray-600">Locks and unlocks collateral</p>
                                        </div>
                                        <div className="p-4 bg-accent/5 dark:bg-accent/5 border border-accent/20 rounded-xl">
                                            <Network className="w-6 h-6 text-accent mb-2" />
                                            <h3 className="font-bold text-sm mb-1 dark:text-white text-gray-900">Liquidation Contract</h3>
                                            <p className="text-xs dark:text-gray-400 text-gray-600">Handles under-collateralized loans</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    </div>
                </div>
            </ParallaxSection>
        </div>
    );
}
