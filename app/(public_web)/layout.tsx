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
  title: "Bowling Verona - Divertimento a Verona - Bowling Verona",
  description:
    "Bowling Verona è la destinazione ideale per famiglie e amici. Gioca a bowling, organizza feste, o partecipa a eventi esclusivi. Prenota subito!",
  keywords:
    "Bowling Verona, intrattenimento Verona, feste di bowling, eventi aziendali, piste di bowling",
  openGraph: {
    title: "Bowling Verona",
    description:
      "La migliore esperienza di bowling a Verona. Ideale per famiglie, amici e team building.",
    url: "https://www.bowlingveron.com",
    images: [
      {
        url: "/og-image.png", // Add an Open Graph image in the `public` folder
        width: 1200,
        height: 630,
        alt: "Bowling Verona - Esperienza unica",
      },
    ],
    siteName: "Bowling Verona",
    type: "website",
  },
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
            image: "https://www.bowlingveron.com/og-image.jpg", // Replace with your Open Graph image
            telephone: "+39 045 581724",
            openingHours: [
              "Mo-Su 10:00-23:00", // Adjust your actual opening hours
            ],
            url: "https://www.bowlingveron.com",
            sameAs: [
              "https://www.instagram.com/bowlingverona",
              "https://www.facebook.com/BowlingFieraVerona",
            ],
            priceRange: "$$", // Adjust the price range to reflect your services
          }),
        }}
      />

      <body className="w-2xl overflow-x-hidden relative">
        <Suspense fallback={<div>...loading</div>}>
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
