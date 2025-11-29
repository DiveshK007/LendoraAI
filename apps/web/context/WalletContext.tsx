"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WalletContextType {
    isConnected: boolean;
    connectWallet: () => void;
    disconnectWallet: () => void;
    walletAddress: string | null;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState<string | null>(null);

    const connectWallet = () => {
        // Mock connection logic
        setIsConnected(true);
        setWalletAddress("addr1_mock_wallet_address_" + Math.random().toString(36).substring(7));
    };

    const disconnectWallet = () => {
        setIsConnected(false);
        setWalletAddress(null);
    };

    return (
        <WalletContext.Provider value={{ isConnected, connectWallet, disconnectWallet, walletAddress }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWallet = () => {
    const context = useContext(WalletContext);
    if (context === undefined) {
        throw new Error('useWallet must be used within a WalletProvider');
    }
    return context;
};
