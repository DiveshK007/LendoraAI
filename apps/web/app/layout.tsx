import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";
import ThemeProviderWrapper from "../components/ThemeProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lendora AI",
  description: "Decentralized Lending with AI Agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={inter.className}>
        <ThemeProviderWrapper>
          <Layout>
            {children}
          </Layout>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
