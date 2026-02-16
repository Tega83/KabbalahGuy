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
<body>
  <header className="border-b">
    <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="/" className="font-semibold">
        Kabbalah Guy
      </a>

      <nav className="flex gap-4 text-sm">
        <a href="/journey" className="hover:underline">
          Journey
        </a>
        <a href="/subscribe" className="hover:underline">
          Daily Tip
        </a>
      </nav>
    </div>
  </header>

  <div className="max-w-4xl mx-auto px-6 py-10">
    {children}
  </div>
</body>
    </html>
  );
}
