export default function LoanSummaryCard({ result }: { result: any }) {
    if (!result) return null;

    return (
        <div className="mt-8 p-6 bg-white border border-gray-100 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Simulation Results</h2>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${result.riskCategory === 'LOW' ? 'bg-green-100 text-green-700' :
                        result.riskCategory === 'MEDIUM' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                    }`}>
                    {result.riskCategory} Risk
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-700/50">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Risk Score</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{result.riskScore}</p>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 dark:bg-gray-600">
                        <div
                            className={`h-1.5 rounded-full ${result.riskScore < 33 ? 'bg-red-500' :
                                    result.riskScore < 66 ? 'bg-yellow-500' : 'bg-green-500'
                                }`}
                            style={{ width: `${result.riskScore}%` }}
                        ></div>
                    </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-700/50">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Optimized Amount</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.optimizedAmount} <span className="text-sm text-gray-500 font-normal">ADA</span></p>
                    <p className="text-xs text-gray-400 mt-1">Recommended loan size</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-700/50">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Health Factor</p>
                    <p className={`text-2xl font-bold ${result.healthFactor > 1.5 ? 'text-green-600' :
                            result.healthFactor > 1.1 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                        {result.healthFactor.toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Liquidation threshold: 1.0</p>
                </div>
            </div>
        </div>
    );
}
