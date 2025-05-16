import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Orbitron } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const dmSans = DM_Sans({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Peter Cao - Software Engineer",
  description:
    "Peter Cao - An upcoming software engineer passionate about building scalable software, solving complex problems, and creating innovative solutions. Available for hire May 2025.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="max-w-screen bg-[#524D47]">
      <head>
        <link rel="icon" type="image/png" href="/assets/logo/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable}  antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
