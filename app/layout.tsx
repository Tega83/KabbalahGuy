import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kabbalah Guy | Practical Kabbalah for Daily Life",
  description: "Learn timeless Kabbalah principles and apply them to your daily life.",
  openGraph: {
    title: "Kabbalah Guy | Practical Kabbalah for Daily Life",
    description: "Learn timeless Kabbalah principles and apply them to your daily life.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="font-bold text-xl text-gray-900">
                Kabbalah Guy
              </Link>
              <div className="flex gap-8">
                <Link href="/" className="text-gray-700 hover:text-gray-900 transition">
                  Home
                </Link>
                <Link href="/journey" className="text-gray-700 hover:text-gray-900 transition">
                  Journey
                </Link>
                <Link href="/subscribe" className="text-gray-700 hover:text-gray-900 transition">
                  Subscribe
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-gray-900 transition">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="min-h-screen">{children}</main>

        <footer className="bg-gray-50 border-t border-gray-200 mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Kabbalah Guy. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
