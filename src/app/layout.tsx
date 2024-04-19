import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Courier_Prime } from "next/font/google";
import { Montserrat } from "next/font/google";

import localFont from "next/font/local";

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

const companyName = "The House of Blues";
const shortDescription = "El sitio web de la empresa de baile contemporáneo";
const logoDescription = "Logo de The House of Blues";

export const metadata: Metadata = {
  title: companyName,
  keywords: "dance,music,contemporary,modern,elegant,school,classes,mexico,the,house,of,blues",
  description: "The House of Blues es una compañía de baile enfocada en la creación de bailarines multidisciplinarios dentro del ámbito del show business en México, que busca promover la buena salud mental y física, así como la filantropía a través del baile contemporáneo. Su contribución social se centra en fomentar la conciencia sobre la importancia del bienestar emocional y físico a través de la danza, al mismo tiempo que busca hacer visible el arte del baile contemporáneo a nivel estatal y próximamente nacional.",
  creator: "Spiders Dev Team",
  publisher: companyName,
  icons: [
    {
      url: "https://www.thehouseofblues.com.mx/thb-logo.png",
      type: "image/png",
      sizes: "500x500",
      media: "(prefers-color-scheme: dark)"
    },
    {
      url: "https://www.thehouseofblues.com.mx/thb-logo--light.png",
      type: "image/png",
      sizes: "500x500",
      media: "(prefers-color-scheme: light)"
    },
  ],
  
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
    title: companyName,
    description: shortDescription,
    emails: "thehouseofbluesmx@gmail.com",
    phoneNumbers: "+524271214020",
    type: "website",
    siteName: companyName,
    locale: "es_MX",
    images: {
      url: "https://www.thehouseofblues.com.mx/thb-logo.png",
      width: 500,
      height: 500,
      alt: logoDescription
    },
    url: "https://www.thehouseofblues.com.mx",
  },

  twitter: {
    card: "summary",
    title: companyName,
    description: shortDescription,
    images: {
      url: "https://www.thehouseofblues.com.mx/thb-logo.png",
      alt: logoDescription,
      width: 500,
      height: 500
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
