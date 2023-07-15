import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adi's Portfolio",
  description:
    "Personally customized Portfolio website created with Next and TailwindCSS. Created by Purrgramer 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen bg-fixed">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
