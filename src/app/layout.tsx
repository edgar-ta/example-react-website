import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Courier_Prime } from "next/font/google";
import { Montserrat } from "next/font/google";

import localFont from "next/font/local";

import theHouseOfBluesLogo from "@/app/components/utils/thb-logo/thb-logo.png";

import { OpenGraphType } from "next/dist/lib/metadata/types/opengraph-types";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const courier = Courier_Prime({
  weight: [ "400", "700" ],
  display: "swap",
  variable: "--font-courier",
  subsets: [ "latin-ext" ]
});
const montserrat = Montserrat({
  weight: [ "400", "700" ],
  display: "swap",
  variable: "--font-montserrat",
  subsets: [ "latin-ext" ]
});

export const metadata: Metadata = {
  title: "The House of Blues",
  keywords: "dance,music,contemporary,modern,elegant,school,classes",
  description: "El sitio web de la empresa de baile contemporáneo",
  creator: "Spiders Dev Team",
  publisher: "The House of Blues",
  
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
  openGraph: {
    determiner: "the",
    title: "The House of Blues",
    description: "El sitio web de empresa de baile contemporáneo",
    emails: "thehouseofbluesmx@gmail.com",
    phoneNumbers: "+524271214020",
    type: "website",
    siteName: "The House of Blues",
    locale: "es_MX",
    images: {
      url: "https://www.thehouseofblues.com.mx/thb-logo.png",
      width: theHouseOfBluesLogo.width,
      height: theHouseOfBluesLogo.height,
      alt: "Logo de The House of Blues"
    },
    url: "https://www.thehouseofblues.com.mx",
  },
  twitter: {
    card: "summary",
    title: "The House of Blues",
    description: "El sitio web de la empresa de baile contemporáneo",
    images: {
      url: "https://www.thehouseofblues.com.mx/thb-logo.png",
      alt: "Logo de The House of Blues"
    }
  }
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
      <body className={`
      ${inter.className} 
      ${rosalia.variable} 
      ${courier.variable}
      ${montserrat.variable}
      w-full
      overflow-x-clip
      `}>
        {children}
      </body>
    </html>
  );
}
