import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Courier_Prime } from "next/font/google";

import localFont from "next/font/local";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const courier = Courier_Prime({
  weight: [ "400", "700" ],
  display: "swap",
  variable: "--font-courier",
  subsets: [ "latin-ext" ]
});

export const metadata: Metadata = {
  title: "The House of Blues",
  description: "El sitio web de la empresa de baile contemporáneo",
  authors: [
    {
      name: "Edgar Trejo Avila",
      url: "https://github.com/edgar-ta"
    },
    {
      name: "Carlos Enrique Villarreal Barrón",
      url: "https://www.instagram.com/enriquevilla_18?igsh=MXI1ZmU4eXlweXNoOQ=="
    },
    {
      name: "Leonel Soto Alegría",
    },
    {
      name: "Ulises Eduardo López Acosta",
    },
  ],
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
      <body className={`${inter.className} ${rosalia.variable} ${courier.variable}`}>{children}</body>
    </html>
  );
}
