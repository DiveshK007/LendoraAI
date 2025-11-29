"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ParallaxSection from "../../components/ParallaxSection";
import LoanForm from "../../components/LoanForm";
import LoanSummaryCard from "../../components/LoanSummaryCard";
import { useWallet } from "../../context/WalletContext";
import { Bot, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";

const API_URL = "http://localhost:3001";

export default function BorrowPage() {
    const { isConnected } = useWallet();
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [agentStep, setAgentStep] = useState<"IDLE" | "RISK_ANALYSIS" | "NEGOTIATION" | "COMPLETE">("IDLE");

    const handleSimulate = async (formData: any) => {
        if (!isConnected) {
            setError("Please connect your wallet first to simulate a loan.");
            return;
        }

        setLoading(true);
        setError("");
        setResult(null);
        setAgentStep("RISK_ANALYSIS");

        try {
            // Simulate agent delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            setAgentStep("NEGOTIATION");

            const res = await fetch(`${API_URL}/loans/simulate`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: Number(formData.amount),
                    collateral: Number(formData.collateral),
                    tenure: Number(formData.tenure),
                }),
            });

            if (!res.ok) throw new Error("Simulation failed");
            const data = await res.json();

            await new Promise(resolve => setTimeout(resolve, 1000));
            setAgentStep("COMPLETE");
            setResult(data);
        } catch (err: any) {
            setError(err.message || "Something went wrong");
            setAgentStep("IDLE");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center cosmic-parallax w-full">
            <ParallaxSection speed={0.2}>
                <div className="max-w-7xl mx-auto w-full px-4 py-20">
                    {/* Hero Section */}
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
                                AI-Powered Loan Negotiation
                            </span>
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6">
                            <span className="text-gradient">Request a Loan</span>
                        </h1>
                        <p className="text-xl dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
                            Let our autonomous agents find the best rates for your collateral in real-time.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Left Column: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="glass-card p-10 relative overflow-hidden hologram"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                            <motion.h2
                                className="text-2xl font-bold mb-8 flex items-center gap-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <span className="w-1.5 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                                <span className="text-primary dark:text-primary">Loan Request</span>
                            </motion.h2>
                            <LoanForm onSubmit={handleSimulate} loading={loading} />

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-6 p-4 bg-error/10 border border-error/30 text-error rounded-xl flex items-center gap-3"
                                >
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    <span className="text-sm font-medium">{error}</span>
                                </motion.div>
                            )}
                        </motion.div>

                        {/* Right Column: Agent Visualization */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <div className="glass-card p-10 min-h-[400px] relative hologram">
                                <motion.h2
                                    className="text-2xl font-bold mb-8 flex items-center gap-3"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <span className="w-1.5 h-8 bg-gradient-to-b from-secondary to-accent rounded-full"></span>
                                    <span className="text-secondary dark:text-secondary">Agent Activity</span>
                                </motion.h2>

                        {agentStep === "IDLE" && !result && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col items-center justify-center h-64 text-center dark:text-gray-400 text-gray-500"
                            >
                                <motion.div
                                    className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Bot className="w-10 h-10 text-primary opacity-60" />
                                </motion.div>
                                <p className="text-lg font-medium mb-2">Waiting for request...</p>
                                <p className="text-sm dark:text-gray-500 text-gray-600">Connect wallet and submit to start AI agents.</p>
                            </motion.div>
                        )}

                        <div className="space-y-4">
                            {/* Risk Advisor Agent */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: agentStep === "RISK_ANALYSIS" || agentStep === "NEGOTIATION" || agentStep === "COMPLETE" ? 1 : 0,
                                    x: 0,
                                    scale: agentStep === "RISK_ANALYSIS" ? 1.02 : 1
                                }}
                                transition={{ duration: 0.5 }}
                                className={`p-6 rounded-xl border transition-all duration-500 hologram ${
                                    agentStep === "RISK_ANALYSIS"
                                        ? "bg-primary/10 border-primary/50 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                                        : agentStep === "NEGOTIATION" || agentStep === "COMPLETE"
                                        ? "bg-white/5 dark:bg-white/5 border-white/10 dark:border-white/10 opacity-60"
                                        : "hidden"
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <motion.div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                            agentStep === "RISK_ANALYSIS"
                                                ? "bg-primary text-white"
                                                : "bg-gray-700 dark:bg-gray-700 text-gray-400"
                                        }`}
                                        animate={agentStep === "RISK_ANALYSIS" ? { rotate: 360 } : {}}
                                        transition={{ duration: 2, repeat: agentStep === "RISK_ANALYSIS" ? Infinity : 0, ease: "linear" }}
                                    >
                                        <CheckCircle className="w-6 h-6" />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-bold text-lg dark:text-white text-gray-900">Risk Advisor Agent</h3>
                                        <p className="text-sm dark:text-gray-400 text-gray-600 mt-1">Analyzing collateral ratio and market volatility...</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Negotiator Agent */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: agentStep === "NEGOTIATION" || agentStep === "COMPLETE" ? 1 : 0,
                                    x: 0,
                                    scale: agentStep === "NEGOTIATION" ? 1.02 : 1
                                }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className={`p-6 rounded-xl border transition-all duration-500 hologram ${
                                    agentStep === "NEGOTIATION"
                                        ? "bg-secondary/10 border-secondary/50 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                                        : agentStep === "COMPLETE"
                                        ? "bg-white/5 dark:bg-white/5 border-white/10 dark:border-white/10 opacity-60"
                                        : "hidden"
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <motion.div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                            agentStep === "NEGOTIATION"
                                                ? "bg-secondary text-white"
                                                : "bg-gray-700 dark:bg-gray-700 text-gray-400"
                                        }`}
                                        animate={agentStep === "NEGOTIATION" ? { rotate: 360 } : {}}
                                        transition={{ duration: 2, repeat: agentStep === "NEGOTIATION" ? Infinity : 0, ease: "linear" }}
                                    >
                                        <MessageSquare className="w-6 h-6" />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-bold text-lg dark:text-white text-gray-900">Negotiator Agent</h3>
                                        <p className="text-sm dark:text-gray-400 text-gray-600 mt-1">Optimizing loan terms based on risk profile...</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {result && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="mt-8"
                            >
                                <LoanSummaryCard result={result} />
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
        </ParallaxSection>
    </div>
    );
}
