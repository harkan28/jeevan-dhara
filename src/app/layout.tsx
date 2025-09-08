import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Jeevan Dhara - Smart Water Health Monitor",
  description: "Smart Early Warning System for Water-Borne Diseases in Rural Northeast India",
  keywords: ["water health", "disease prevention", "rural healthcare", "AI surveillance", "IoT monitoring"],
  authors: [{ name: "Jeevan Dhara Team" }],
  creator: "Smart India Hackathon 2025 Team",
  openGraph: {
    title: "Jeevan Dhara - Smart Water Health Monitor",

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#007AFF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
