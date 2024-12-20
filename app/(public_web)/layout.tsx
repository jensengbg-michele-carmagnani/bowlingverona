import Navbar from "@/app/(public_web)/components/ui/navbar/Navbar";
import "@/app/globals.css";
import { showReservationForm } from "@/flag/showReservationForm";
import { ConfidentialFlagValues } from "@/lib/confidetialFlagValues";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import { Suspense } from "react";

import Head from "next/head";
import Script from "next/script";
import Footer from "./components/home/footer/Footer";
import { getSEOTags } from "@/lib/seo"

export const metadata = getSEOTags()

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
