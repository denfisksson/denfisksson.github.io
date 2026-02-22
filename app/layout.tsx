import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const anton = localFont({
  src: "../public/fonts/Anton-Regular.ttf",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Doe | Frontend Developer Portfolio",
  description: "Portfolio of John Doe - Frontend Developer specializing in React, Next.js, and TypeScript. Building modern, performant web applications with exceptional user experiences.",
  keywords: ["frontend", "developer", "react", "nextjs", "typescript", "portfolio", "web development"],
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe | Frontend Developer",
    description: "Portfolio showcasing modern web development projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
