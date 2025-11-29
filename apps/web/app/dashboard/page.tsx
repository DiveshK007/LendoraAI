import Navbar from '@/components/Navbar';
import { CreditCard, TrendingUp, Clock } from 'lucide-react';

export default function Dashboard() {
    return (
        <main className="min-h-screen bg-midnight-bg text-white">
            <Navbar />

            <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-midnight-card border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                <CreditCard />
                            </div>
                            <div>
                                <div className="text-sm text-gray-400">Total Borrowed</div>
                                <div className="text-2xl font-bold">1,000 USDM</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-midnight-card border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                <TrendingUp />
                            </div>
                            <div>
                                <div className="text-sm text-gray-400">Credit Score</div>
                                <div className="text-2xl font-bold">750 (A)</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-midnight-card border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                <Clock />
                            </div>
                            <div>
                                <div className="text-sm text-gray-400">Next Payment</div>
                                <div className="text-2xl font-bold">12 Days</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Active Loans */}
                <h2 className="text-xl font-bold mb-4">Active Loans</h2>
                <div className="bg-midnight-card border border-white/10 rounded-2xl overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-white/5 text-gray-400 text-sm">
                            <tr>
                                <th className="p-4">Loan ID</th>
                                <th className="p-4">Amount</th>
                                <th className="p-4">Interest Rate</th>
                                <th className="p-4">Lender</th>
                                <th className="p-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="p-4 font-mono text-sm text-gray-400">#8291...ac2</td>
                                <td className="p-4 font-bold">1,000 USDM</td>
                                <td className="p-4 text-green-400">7.20%</td>
                                <td className="p-4">Bob (did:prism:...)</td>
                                <td className="p-4">
                                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-bold">Active</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
