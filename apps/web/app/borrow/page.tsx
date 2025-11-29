```
"use client";

import { useState } from "react";
import LoanForm from "../../components/LoanForm";
import LoanSummaryCard from "../../components/LoanSummaryCard";

const API_URL = "http://localhost:3001";

export default function BorrowPage() {
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSimulate = async (formData: any) => {
        setLoading(true);
        setError("");
        setResult(null);

        try {
            const res = await fetch(`${ API_URL } /loans/simulate`, {
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
            setResult(data);
        } catch (err: any) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Request a Loan</h1>
            
            <LoanForm onSubmit={handleSimulate} loading={loading} />

            {error && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
                    {error}
                </div>
            )}

            <LoanSummaryCard result={result} />
        </div>
    );
}
```
