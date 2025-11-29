"use client";

import { useState } from "react";
import LoanForm from "../../components/LoanForm";
import LoanSummaryCard from "../../components/LoanSummaryCard";
import { useWallet } from "../../context/WalletContext";

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
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-gradient">AI Loan Negotiation</span>
                </h1>
                <p className="text-gray-400">Let our autonomous agents find the best rates for your collateral.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left Column: Form */}
                <div className="glass-card p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full"></span>
                        Loan Request
                    </h2>
                    <LoanForm onSubmit={handleSimulate} loading={loading} />

                    {error && (
                        <div className="mt-6 p-4 bg-error/10 border border-error/20 text-error rounded-lg flex items-center gap-3 animate-shake">
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span className="text-sm font-medium">{error}</span>
                        </div>
                    )}
                </div>

                {/* Right Column: Agent Visualization */}
                <div className="space-y-6">
                    <div className="glass-card p-8 min-h-[400px] relative">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-secondary rounded-full"></span>
                            Agent Activity
                        </h2>

                        {agentStep === "IDLE" && !result && (
                            <div className="flex flex-col items-center justify-center h-64 text-center text-gray-500">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 animate-pulse">
                                    <svg className="w-8 h-8 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                </div>
                                <p>Waiting for request...</p>
                                <p className="text-sm mt-2 text-gray-600">Connect wallet and submit to start AI agents.</p>
                            </div>
                        )}

                        <div className="space-y-4">
                            {/* Risk Advisor Agent */}
                            <div className={`p-5 rounded-xl border transition-all duration-500 ${agentStep === "RISK_ANALYSIS"
                                    ? "bg-primary/10 border-primary/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] scale-105"
                                    : agentStep === "NEGOTIATION" || agentStep === "COMPLETE" ? "bg-white/5 border-white/10 opacity-50" : "hidden"
                                }`}>
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${agentStep === "RISK_ANALYSIS" ? "bg-primary text-white animate-bounce" : "bg-gray-700 text-gray-400"}`}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Risk Advisor Agent</h3>
                                        <p className="text-xs text-gray-400 mt-1">Analyzing collateral ratio and market volatility...</p>
                                    </div>
                                </div>
                            </div>

                            {/* Negotiator Agent */}
                            <div className={`p-5 rounded-xl border transition-all duration-500 ${agentStep === "NEGOTIATION"
                                    ? "bg-secondary/10 border-secondary/50 shadow-[0_0_20px_rgba(139,92,246,0.2)] scale-105"
                                    : agentStep === "COMPLETE" ? "bg-white/5 border-white/10 opacity-50" : "hidden"
                                }`}>
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${agentStep === "NEGOTIATION" ? "bg-secondary text-white animate-bounce" : "bg-gray-700 text-gray-400"}`}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Negotiator Agent</h3>
                                        <p className="text-xs text-gray-400 mt-1">Optimizing loan terms based on risk profile...</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {result && (
                            <div className="mt-8 animate-fade-in-up">
                                <LoanSummaryCard result={result} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
