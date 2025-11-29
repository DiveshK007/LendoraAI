interface LoanSummaryCardProps {
    result: {
        authorized: boolean;
        riskScore: number;
        maxLoanAmount: number;
        interestRate: number;
        ltv: number;
    };
}

export default function LoanSummaryCard({ result }: LoanSummaryCardProps) {
    return (
        <div className="glass-card p-6 border-t-4 border-t-success relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-success/20 rounded-full blur-2xl -z-10"></div>

            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-xl font-bold text-white">Loan Offer Ready</h3>
                    <p className="text-sm text-gray-400">Optimized by Negotiator Agent</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-success/20 text-success text-xs font-bold border border-success/30">
                    APPROVED
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Interest Rate</p>
                    <p className="text-2xl font-bold text-primary">{result.interestRate}%</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Max Loan</p>
                    <p className="text-2xl font-bold text-white">{result.maxLoanAmount} <span className="text-sm text-gray-500">ADA</span></p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs text-gray-400 uppercase tracking-wider">LTV Ratio</p>
                    <p className="text-2xl font-bold text-secondary">{result.ltv}%</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Risk Score</p>
                    <p className="text-2xl font-bold text-accent">{result.riskScore}/100</p>
                </div>
            </div>

            <button className="w-full mt-6 py-3 rounded-lg bg-success hover:bg-green-500 text-black font-bold transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                Accept & Sign Contract
            </button>
        </div>
    );
}
