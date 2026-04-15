import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DROP — UNICEF Hackathon",
  description:
    "La plataforma donde los jóvenes españoles compiten para cambiar el mundo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${orbitron.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-dark font-body text-white antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
