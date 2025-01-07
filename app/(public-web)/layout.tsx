import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/app/(public-web)/components/ui/navbar/Navbar";
import Footer from "./components/landing/footer/Footer";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/app/globals.css";

const DomCasualD = localFont({
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

export const metadata: Metadata = {
  title: "Bowling Verona - Esperienza di Bowling Premium a Verona",
  description:
    "Scopri il divertimento definitivo al Bowling Verona! Perfetto per famiglie, amici ed eventi. Unisciti alle nostre leghe o organizza la tua prossima festa con noi. Prenota il tuo lane oggi!",
  keywords:
    "Bowling Verona, piste da bowling, divertimento in famiglia, leghe di bowling, feste di bowling, intrattenimento a Verona",
  icons: {
    icon: [
      {
        url: "favicon/favicon.ico",
        sizes: "any",
        type: "image/ico",
      },
      {
        url: "favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  breadcrumb: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html className={`${Rajdhani.className} ${DomCasualD.className}`} lang="en">
      <body className="w-2xl overflow-x-hidden overflow-y-auto">
        <Head>
          <title>Bowling Verona</title>
          <link
            rel="icon"
            href="/public/favicon/favicon.ico"
            sizes="any"
            type="image/ico"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/public/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/public/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <Navbar />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
