import Navbar from "@/app/(public_web)/components/ui/navbar/Navbar";
import "@/app/globals.css";
import { showReservationForm } from "@/flag/showReservationForm";
import { ConfidentialFlagValues } from "@/lib/confidetialFlagValues";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Suspense } from "react";
import Footer from "./components/home/footer/Footer";

const DomCasualD = localFont({
  src: [
    {
      path: "./fonts/DomCasual/DomCasualD.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/DomCasual/DomCasualD-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/DomCasual/DomCasualD-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/DomCasual/DomCasualD-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

const Rajdhani = localFont({
  src: [
    {
      path: "./fonts/rajdhani_wolff2/Rajdhani-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/rajdhani_wolff2/Rajdhani-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/rajdhani_wolff2/Rajdhani-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/rajdhani_wolff2/Rajdhani-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Bowling Verona - Esperienza di Bowling Premium a Verona",
  description:
    "Scopri il divertimento definitivo al Bowling Verona! Perfetto per famiglie, amici ed eventi. Unisciti alle nostre leghe o organizza la tua prossima festa con noi. Prenota il tuo lane oggi!",
  keywords:
    "Bowling Verona, piste da bowling, divertimento in famiglia, leghe di bowling, feste di bowling, intrattenimento a Verona",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  breadcrumb?: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const values = {
    "show-reservation-form": showReservationForm(),
  };

  return (
    <html lang="it" className={`${Rajdhani.className} ${DomCasualD.className}`}>
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="47dbaf39-577a-45e6-9ea1-d36a3746754b"
        type="text/javascript"
      />
      <body className="w-2xl overflow-x-hidden relative">
        <Suspense fallback={null}>
          <ConfidentialFlagValues values={values} />
        </Suspense>
        <Navbar />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
