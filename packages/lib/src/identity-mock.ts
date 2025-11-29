export interface UserProfile {
    did: string;
    name: string;
    creditScore: number;
    isVerified: boolean;
}

export const MOCK_USERS: Record<string, UserProfile> = {
    'alice': {
        did: 'did:prism:alice123',
        name: 'Alice',
        creditScore: 750,
        isVerified: true
    },
    'bob': {
        did: 'did:prism:bob456',
        name: 'Bob',
        creditScore: 0, // Lender doesn't need score usually
        isVerified: true
    }
};

export async function verifyCreditScore(did: string, threshold: number): Promise<boolean> {
    console.log(`Verifying credit score for ${did} > ${threshold} via Midnight ZK Proof...`);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate ZK proof generation/verification
    const user = Object.values(MOCK_USERS).find(u => u.did === did);
    return user ? user.creditScore >= threshold : false;
}
