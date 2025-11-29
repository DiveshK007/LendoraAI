export default function SystemPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">System Architecture</h1>

            <div className="grid gap-8">
                <section className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
                    <h2 className="text-xl font-semibold mb-4 text-blue-600">Frontend (Next.js)</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A responsive web application built with Next.js 14 (App Router) and Tailwind CSS.
                        Handles user interaction, wallet connection (mock), and displays real-time loan simulations.
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                        <li>Pages: Home, Borrow, Dashboard, System</li>
                        <li>Components: LoanForm, LoanSummaryCard, Layout</li>
                    </ul>
                </section>

                <section className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
                    <h2 className="text-xl font-semibold mb-4 text-green-600">Backend (Express + Agents)</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        An Express.js server acting as the orchestrator. It exposes REST APIs for the frontend
                        and communicates with the AI Agents and Smart Contracts.
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                        <li>Endpoints: /loans/simulate, /loans/create, /agent/risk, /agent/negotiate</li>
                        <li>Middleware: Error Handling, Validation</li>
                    </ul>
                </section>

                <section className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
                    <h2 className="text-xl font-semibold mb-4 text-purple-600">AI Agents</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Intelligent modules that analyze risk and optimize loan terms.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 bg-gray-50 rounded dark:bg-gray-700">
                            <h3 className="font-medium mb-2">Risk Advisor</h3>
                            <p className="text-sm text-gray-500">Calculates risk scores based on collateral ratio and market conditions.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded dark:bg-gray-700">
                            <h3 className="font-medium mb-2">Negotiator</h3>
                            <p className="text-sm text-gray-500">Proposes optimized loan amounts to ensure safety and fairness.</p>
                        </div>
                    </div>
                </section>

                <section className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
                    <h2 className="text-xl font-semibold mb-4 text-orange-600">Smart Contracts (Aiken)</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Cardano smart contracts written in Aiken. Currently mocked for development speed.
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                        <li>Loan Contract: Manages loan creation and repayment.</li>
                        <li>Collateral Contract: Locks and unlocks collateral.</li>
                        <li>Liquidation Contract: Handles under-collateralized loans.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
