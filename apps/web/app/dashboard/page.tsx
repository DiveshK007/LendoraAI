import Link from "next/link";

const MOCK_LOANS = [
    { id: 1, amount: 1000, collateral: 1500, healthFactor: 1.5, riskCategory: "LOW" },
    { id: 2, amount: 5000, collateral: 6000, healthFactor: 1.2, riskCategory: "MEDIUM" },
    { id: 3, amount: 10000, collateral: 11000, healthFactor: 1.1, riskCategory: "HIGH" },
];

export default function DashboardPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Your Dashboard</h1>
                <Link
                    href="/borrow"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Simulate New Loan
                </Link>
            </div>

            <div className="grid gap-4">
                {MOCK_LOANS.map((loan) => (
                    <div key={loan.id} className="p-6 bg-white rounded-lg shadow dark:bg-gray-800 flex justify-between items-center">
                        <div>
                            <p className="text-sm text-gray-500">Loan Amount</p>
                            <p className="font-semibold text-lg">{loan.amount} ADA</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Collateral</p>
                            <p className="font-medium">{loan.collateral} ADA</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Health Factor</p>
                            <p className="font-medium">{loan.healthFactor}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Risk</p>
                            <span className={`px-2 py-1 rounded text-xs font-bold ${loan.riskCategory === 'LOW' ? 'bg-green-100 text-green-800' :
                                    loan.riskCategory === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-red-100 text-red-800'
                                }`}>
                                {loan.riskCategory}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
