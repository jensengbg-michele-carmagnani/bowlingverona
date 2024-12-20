import Navbar from "@/app/(public_web)/components/ui/navbar/Navbar";
import "@/app/globals.css";
import { showReservationForm } from "@/flag/showReservationForm";
import { ConfidentialFlagValues } from "@/lib/confidetialFlagValues";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import { Suspense } from "react";

import Head from "next/head";
import Footer from "./components/home/footer/Footer";

const DomCasualD = localFont({
  display: "swap",
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
  display: "swap",
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

interface RootLayoutProps {
  children: React.ReactNode;
  breadcrumb?: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const values = {
    "show-reservation-form": showReservationForm(),
  };

  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.bowlingverona.com" />
      </Head>
      <html
        lang="it"
        className={`${Rajdhani.className} ${DomCasualD.className}`}
      >
        <body className="w-2xl overflow-x-hidden relative">
          <Suspense fallback={<div>loading...</div>}>
            <ConfidentialFlagValues values={values} />
            <Navbar />
            {children}
            <SpeedInsights />
            <Footer />
          </Suspense>
        </body>
      </html>
    </>
  );
}
