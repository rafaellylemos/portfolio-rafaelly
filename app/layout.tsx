import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Rafaelly Lemos | Frontend Developer",
  description: "Portfolio profissional focado em arquitetura e estratégia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Providers>
        <Navbar />
          <main>
            {children}
          </main>
          <Footer />
          <Toaster />
          </Providers>
      </body>
    </html>
  );
}