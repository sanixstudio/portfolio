"use client";
import { Navbar } from "@/components";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen bg-fixed">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
