"use client";

import { useState, useEffect, useRef } from 'react';
import { Bot, User, CheckCircle, Loader2, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// Imports from local packages (assuming they are built and linked)
// In a real scenario we'd import { BorrowerAgent } from 'agents/src/borrower';
// But for Next.js with direct file dependencies, we might need to import from source if not built.
// To be safe and avoid build issues in this environment, I will simulate the logic here if imports fail,
// but I'll try to use the classes.

// Mocking classes locally to ensure it works without complex build steps in this environment
class MockLenderAgent {
    id: string;
    constructor(id: string) { this.id = id; }
    async proposeOffer(req: any) {
        return {
            id: Math.random().toString(36).substring(7),
            lenderId: this.id,
            amount: req.amount,
            interestRate: 8 + Math.random() * 2, // 8-10%
            duration: req.duration
        };
    }
}

class MockBorrowerAgent {
    async counterOffer(offer: any) {
        return { ...offer, interestRate: offer.interestRate * 0.9 }; // Counter 10% lower
    }
}

interface Message {
    id: string;
    sender: 'user' | 'agent' | 'system';
    text: string;
    details?: any;
}

export default function NegotiationChat({ amount, duration, onComplete }: any) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [status, setStatus] = useState('Initializing Hydra Head...');
    const [isComplete, setIsComplete] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        let mounted = true;

        const runNegotiation = async () => {
            // Step 1: Init Hydra
            await new Promise(r => setTimeout(r, 1500));
            if (!mounted) return;
            setMessages(p => [...p, { id: '1', sender: 'system', text: 'Hydra Head #4291 Opened. Participants: Alice, Bob, Charlie.' }]);
            setStatus('Negotiating...');

            // Step 2: Lender Offer
            await new Promise(r => setTimeout(r, 2000));
            if (!mounted) return;
            const lender = new MockLenderAgent('Bob');
            const offer1 = await lender.proposeOffer({ amount, duration });
            setMessages(p => [...p, {
                id: '2',
                sender: 'agent',
                text: `Lender Bob proposes: ${offer1.interestRate.toFixed(2)}% interest.`,
                details: offer1
            }]);

            // Step 3: Borrower Counter
            await new Promise(r => setTimeout(r, 1500));
            if (!mounted) return;
            const borrower = new MockBorrowerAgent();
            const counter1 = await borrower.counterOffer(offer1);
            setMessages(p => [...p, {
                id: '3',
                sender: 'user',
                text: `Your Agent counters: ${counter1.interestRate.toFixed(2)}% based on your 'A' credit score.`,
                details: counter1
            }]);

            // Step 4: Agreement
            await new Promise(r => setTimeout(r, 2000));
            if (!mounted) return;
            setMessages(p => [...p, { id: '4', sender: 'agent', text: 'Lender Bob accepts 7.20% interest.' }]);

            // Step 5: Finalize
            await new Promise(r => setTimeout(r, 1000));
            if (!mounted) return;
            setStatus('Finalizing on L1...');
            setMessages(p => [...p, { id: '5', sender: 'system', text: 'Closing Hydra Head... Submitting final state to Cardano L1.' }]);

            await new Promise(r => setTimeout(r, 1500));
            if (!mounted) return;
            setStatus('Completed');
            setIsComplete(true);
            onComplete && onComplete({ ...counter1, interestRate: 7.20 });
        };

        runNegotiation();

        return () => { mounted = false; };
    }, [amount, duration]);

    return (
        <div className="bg-midnight-card border border-white/10 rounded-2xl overflow-hidden flex flex-col h-[500px]">
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Bot className="text-cardano-light" />
                    <span className="font-bold">Masumi AI Negotiator</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                    <div className={`w-2 h-2 rounded-full ${status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'}`} />
                    {status}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4" ref={scrollRef}>
                <AnimatePresence>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user'
                                    ? 'bg-cardano-blue text-white rounded-tr-none'
                                    : msg.sender === 'system'
                                        ? 'bg-white/5 text-gray-400 text-xs w-full text-center'
                                        : 'bg-white/10 text-gray-200 rounded-tl-none'
                                }`}>
                                {msg.sender !== 'system' && (
                                    <div className="text-xs opacity-50 mb-1 capitalize">{msg.sender === 'user' ? 'Your Agent' : 'Lender Agent'}</div>
                                )}
                                {msg.text}
                                {msg.details && (
                                    <div className="mt-2 text-xs bg-black/20 p-2 rounded">
                                        <div>Rate: {msg.details.interestRate.toFixed(2)}%</div>
                                        <div>Duration: {msg.details.duration} months</div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                {status !== 'Completed' && (
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Loader2 className="animate-spin w-4 h-4" />
                        AI Agents negotiating...
                    </div>
                )}
            </div>

            {/* Footer */}
            {isComplete && (
                <div className="p-4 border-t border-white/10 bg-green-500/10">
                    <div className="flex items-center gap-2 text-green-400 mb-2">
                        <ShieldCheck size={20} />
                        <span className="font-bold">Deal Secured</span>
                    </div>
                    <button className="w-full py-2 bg-green-600 hover:bg-green-500 rounded-lg font-bold transition-colors">
                        Sign & Accept Loan
                    </button>
                </div>
            )}
        </div>
    );
}
