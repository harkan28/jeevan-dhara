import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Nagari Saath - Smart Water Health Monitor",
  description: "AI-Powered Early Warning System for Water-Borne Diseases in Rural Northeast India",
  keywords: "water health monitoring, AI prediction, IoT sensors, disease prevention, smart india hackathon",
  authors: [{ name: "Nagari Saath Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Nagari Saath - Smart Water Health Monitor",
    description: "AI-Powered Early Warning System for Water-Borne Diseases in Rural Northeast India",
    type: "website",
  },
};

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
