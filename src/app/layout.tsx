import type { Metadata } from "next";
import { Inter } from "next/font/google";

import localFont from "next/font/local";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const rosalia = localFont({
  src: "./fonts/rosalia.otf",
  variable: "--font-rosalia"
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${rosalia.variable}`}>{children}</body>
    </html>
  );
}
