"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ParallaxSection from "../../components/ParallaxSection";
import { TrendingUp, Shield, AlertTriangle, CheckCircle, Plus } from "lucide-react";

const MOCK_LOANS = [
    { id: 1, amount: 1000, collateral: 1500, healthFactor: 1.5, riskCategory: "LOW" },
    { id: 2, amount: 5000, collateral: 6000, healthFactor: 1.2, riskCategory: "MEDIUM" },
    { id: 3, amount: 10000, collateral: 11000, healthFactor: 1.1, riskCategory: "HIGH" },
];

export default function DashboardPage() {
    return (
        <div className="flex flex-col items-center cosmic-parallax w-full">
            <ParallaxSection speed={0.2}>
                <div className="max-w-7xl mx-auto w-full px-4 py-20">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row justify-between items-center mb-12"
                    >
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl md:text-6xl font-black mb-4"
                            >
                                <span className="text-gradient">Your Dashboard</span>
                            </motion.h1>
                            <p className="text-lg dark:text-gray-300 text-gray-600">Monitor your active loans and portfolio health</p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link
                                href="/borrow"
                                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-lg transition-all overflow-hidden block"
                            >
                                <span className="relative z-10 flex items-center gap-2 text-white">
                                    <Plus className="w-5 h-5" />
                                    New Loan
                                </span>
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-secondary to-accent"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "0%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Loan Cards */}
                    <div className="grid gap-6">
                        {MOCK_LOANS.map((loan, index) => (
                            <motion.div
                                key={loan.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="glass-card p-8 hover:border-primary/50 transition-all group hologram"
                            >
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                                    <div>
                                        <p className="text-sm dark:text-gray-400 text-gray-600 mb-2">Loan Amount</p>
                                        <p className="text-2xl font-bold dark:text-white text-gray-900">{loan.amount.toLocaleString()} ADA</p>
                                    </div>
                                    <div>
                                        <p className="text-sm dark:text-gray-400 text-gray-600 mb-2">Collateral</p>
                                        <p className="text-xl font-bold dark:text-white text-gray-900">{loan.collateral.toLocaleString()} ADA</p>
                                    </div>
                                    <div>
                                        <p className="text-sm dark:text-gray-400 text-gray-600 mb-2">Health Factor</p>
                                        <div className="flex items-center gap-2">
                                            <TrendingUp className={`w-5 h-5 ${
                                                loan.healthFactor >= 1.4 ? 'text-success' :
                                                loan.healthFactor >= 1.2 ? 'text-warning' : 'text-error'
                                            }`} />
                                            <p className="text-xl font-bold dark:text-white text-gray-900">{loan.healthFactor}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm dark:text-gray-400 text-gray-600 mb-2">Risk Level</p>
                                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
                                            loan.riskCategory === 'LOW'
                                                ? 'bg-success/20 text-success border border-success/30'
                                                : loan.riskCategory === 'MEDIUM'
                                                ? 'bg-warning/20 text-warning border border-warning/30'
                                                : 'bg-error/20 text-error border border-error/30'
                                        }`}>
                                            {loan.riskCategory === 'LOW' && <CheckCircle className="w-4 h-4" />}
                                            {loan.riskCategory === 'MEDIUM' && <AlertTriangle className="w-4 h-4" />}
                                            {loan.riskCategory === 'HIGH' && <Shield className="w-4 h-4" />}
                                            {loan.riskCategory}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {MOCK_LOANS.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                <TrendingUp className="w-12 h-12 text-primary opacity-50" />
                            </div>
                            <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-2">No Active Loans</h3>
                            <p className="dark:text-gray-400 text-gray-600 mb-6">Start by requesting your first loan</p>
                            <Link
                                href="/borrow"
                                className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-white hover:scale-105 transition-transform"
                            >
                                Request Loan
                            </Link>
                        </motion.div>
                    )}
                </div>
            </ParallaxSection>
        </div>
    );
}
