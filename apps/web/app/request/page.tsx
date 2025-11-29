"use client";

import Navbar from '@/components/Navbar';
import NegotiationChat from '@/components/NegotiationChat';
import { useState } from 'react';
import { ArrowRight, Settings } from 'lucide-react';

export default function RequestLoan() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ amount: 1000, duration: 6 });

    return (
        <main className="min-h-screen bg-midnight-bg text-white">
            <Navbar />

            <div className="pt-32 pb-20 max-w-3xl mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8">Request a Loan</h1>

                {step === 1 ? (
                    <div className="bg-midnight-card border border-white/10 rounded-2xl p-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Loan Amount (USDM)</label>
                                <input
                                    type="number"
                                    value={formData.amount}
                                    onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cardano-blue outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Duration (Months)</label>
                                <select
                                    value={formData.duration}
                                    onChange={(e) => setFormData({ ...formData, duration: Number(e.target.value) })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cardano-blue outline-none"
                                >
                                    <option value={3}>3 Months</option>
                                    <option value={6}>6 Months</option>
                                    <option value={12}>12 Months</option>
                                </select>
                            </div>

                            <div className="bg-cardano-blue/10 border border-cardano-blue/30 rounded-lg p-4 flex items-start gap-3">
                                <Settings className="text-cardano-light mt-1" size={20} />
                                <div>
                                    <h4 className="font-bold text-cardano-light">AI Auto-Negotiation</h4>
                                    <p className="text-sm text-gray-400">
                                        Your Masumi agent will automatically negotiate the best rate based on your Prism DID credit score.
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => setStep(2)}
                                className="w-full py-4 bg-cardano-blue hover:bg-blue-700 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
                            >
                                Start Negotiation <ArrowRight />
                            </button>
                        </div>
                    </div>
                ) : (
                    <NegotiationChat amount={formData.amount} duration={formData.duration} />
                )}
            </div>
        </main>
    );
}
