import Navbar from "@/app/(public-web)/components/ui/navbar/Navbar";
import "@/app/globals.css";
import { showReservationForm } from "@/flag/showReservationForm";
import { ConfidentialFlagValues } from "@/lib/confidetialFlagValues";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import { Suspense } from "react";

import { getSEOTags } from "@/lib/seo";
import Head from "next/head";
import Script from "next/script";
import Footer from "./components/home/footer/Footer";

export const metadata = getSEOTags();

const DomCasualD = localFont({
  display: "swap",
  src: [
    {
      path: "./fonts/DomCasual/DomCasualD.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/DomCasual/DomCasualD-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./fonts/DomCasual/DomCasualD-BoldItalic.woff2",
      weight: "bold",
      style: "italic",
    },
    {
      path: "./fonts/DomCasual/DomCasualD-Italic.woff2",
      weight: "normal",
      style: "italic",
    },
  ],
});

const Rajdhani = localFont({
  display: "swap",
  src: [
    {
      path: "./fonts/rajdhani_wolff2/Rajdhani-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
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
    <html lang="it" className={`${Rajdhani.className} ${DomCasualD.className}`}>
      <Head>
        <link rel="canonical" href="https://www.bowlingverona.com" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="android-chrome"
          sizes="192x192"
          href="/favicon/android-chrome-192-192.png"
        />
        <link
          rel="android-chrome"
          sizes="192x192"
          href="/favicon/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NTTK3WRR1S');
        `}
      </Script>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Bowling Verona",
            description:
              "Bowling Verona è il punto di riferimento per il divertimento a Verona, con 14 piste da bowling professionali, area giochi, biliardo, e spazi dedicati a feste private ed eventi aziendali. Ideale per famiglie, gruppi di amici e team building. Offriamo un'atmosfera accogliente, giochi moderni e tanto divertimento. Prenota ora per vivere un'esperienza indimenticabile!",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Viale della Fiera 10/A",
              addressLocality: "Verona",
              addressRegion: "VR",
              postalCode: "37135",
              addressCountry: "IT",
            },
            image: "https://www.bowlingveron.com/og-image.png", // Replace with your Open Graph image
            telephone: "+39 045 581724",
            openingHours: [
              "Monday-Thursday 20:30-1:00",
              "Saturday-Sunday 16:30-1:00",
            ],
            url: "https://www.bowlingveron.com",
            sameAs: [
              "https://www.instagram.com/bowlingverona/",
              "https://www.facebook.com/bowlingveronafiera/",
            ],
            priceRange: "$$", // Adjust the price range to reflect your services
          }),
        }}
      />
      <GoogleTagManager gtmId="G-NTTK3WRR1S" />
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
  );
}
