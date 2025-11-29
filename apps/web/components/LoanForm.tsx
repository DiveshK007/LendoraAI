"use client";

import { useState } from "react";

interface LoanFormProps {
    onSubmit: (data: any) => void;
    loading: boolean;
}

export default function LoanForm({ onSubmit, loading }: LoanFormProps) {
    const [formData, setFormData] = useState({
        amount: "",
        collateral: "",
        tenure: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-400">Loan Amount (ADA)</label>
                <div className="relative">
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="e.g. 1000"
                        required
                    />
                    <div className="absolute right-4 top-3 text-gray-500 text-sm font-bold">ADA</div>
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-400">Collateral Amount (ADA)</label>
                <div className="relative">
                    <input
                        type="number"
                        name="collateral"
                        value={formData.collateral}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                        placeholder="e.g. 1500"
                        required
                    />
                    <div className="absolute right-4 top-3 text-gray-500 text-sm font-bold">ADA</div>
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-400">Duration (Months)</label>
                <select
                    name="tenure"
                    value={formData.tenure}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none"
                    required
                >
                    <option value="" className="bg-surface text-gray-400">Select duration</option>
                    <option value="3" className="bg-surface">3 Months</option>
                    <option value="6" className="bg-surface">6 Months</option>
                    <option value="12" className="bg-surface">12 Months</option>
                </select>
            </div>

            <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${loading
                        ? "bg-white/10 text-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-primary via-secondary to-accent text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.02]"
                    }`}
            >
                {loading ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Negotiating...
                    </span>
                ) : (
                    "Simulate Loan"
                )}
            </button>
        </form>
    );
}
