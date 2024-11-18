import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/app/components/ui/navbar/Navbar";
import Footer from "./components/home/footer/Footer";
import "./globals.css";
const DomCasualD = localFont({
  src: [
    {
      path: "./fonts/DomCasual/DomCasualD.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/DomCasual/DomCasualD-Bold.woff2",
      weight: "100 900",
      style: "bold",
    },
    {
      path: "./fonts/DomCasual/DomCasualD-BoldItalic.woff2",
      weight: "100 900",
      style: "italic",
    },
    {
      path: "./fonts/DomCasual/DomCasualD-Italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
});

const Rajdhani = localFont({
  src: [
    {
      path: "./fonts/rajdhani_wolff2/Rajdhani-Bold.woff2",
      weight: "100 900",
      style: "bold",
    },
    {
      path: "./fonts//rajdhani_wolff2/Rajdhani-Light.woff2",
      weight: "100 900",
      style: "light",
    },
    {
      path: "./fonts/rajdhani_wolff2/Rajdhani-Regular.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/rajdhani_wolff2/Rajdhani-SemiBold.woff2",
      weight: "100 900",
      style: "semibold",
    },
  ],
});

export const metadata: Metadata = {
  title: "Bowling Verona - Esperienza di Bowling Premium a Verona",
  description:
    "Scopri il divertimento definitivo al Bowling Verona! Perfetto per famiglie, amici ed eventi. Unisciti alle nostre leghe o organizza la tua prossima festa con noi. Prenota il tuo lane oggi!",
  keywords:
    "Bowling Verona, piste da bowling, divertimento in famiglia, leghe di bowling, feste di bowling, intrattenimento a Verona",
};

export default function RootLayout({
  children,
}: Readonly<{
  breadcrumb: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html className={(Rajdhani.className, DomCasualD.className)} lang="en">
      <body className="w-2xl h-screen">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
