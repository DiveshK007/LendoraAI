"use client";

import { useState } from "react";

export default function LoanForm({ onSubmit, loading }: { onSubmit: (data: any) => void, loading: boolean }) {
    const [formData, setFormData] = useState({
        amount: "",
        collateral: "",
        tenure: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow dark:bg-gray-800">
            <div>
                <label className="block text-sm font-medium mb-1">Loan Amount (ADA)</label>
                <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Collateral (ADA)</label>
                <input
                    type="number"
                    name="collateral"
                    value={formData.collateral}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Tenure (Months)</label>
                <input
                    type="number"
                    name="tenure"
                    value={formData.tenure}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center transition-all"
            >
                {loading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Simulating...
                    </>
                ) : (
                    "Simulate Loan"
                )}
            </button>
        </form>
    );
}
