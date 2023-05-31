import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adi's Portfolio",
  description: "My 3d portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="snap-y scroll-smooth snap-mandatory h-screen overflow-scroll scroll-bar-hide bg-fixed">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
