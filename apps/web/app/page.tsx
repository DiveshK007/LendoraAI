import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-6 text-center">
      <h1 className="text-4xl font-bold">Welcome to Lendora AI</h1>
      <p className="text-lg text-gray-600 max-w-md">
        The future of decentralized lending. Secure, AI-optimized, and built on Cardano.
      </p>
      <Link
        href="/borrow"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Get a Loan
      </Link>
    </div>
  );
}
