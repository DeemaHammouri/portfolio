import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Deema Hammouri | UI/UX Designer",
  description:
    "Portfolio of Deema Hammouri, UI/UX Designer based in Amman, Jordan",
  keywords: [
    "UI UX Designer",
    "Deema Hammouri",
    "Portfolio",
    "Figma Designer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fff8fa]">
        {children}
      </body>
    </html>
  );
}