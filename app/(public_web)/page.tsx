import AboutSection from "@/app/(public_web)/components/home/about-section/AboutSection";
import Hero from "@/app/(public_web)/components/home/hero-section/HeroSection";
import InfoSection from "@/app/(public_web)/components/home/info-section/Info";
import InfoParty from "@/app/(public_web)/components/home/infoparty-section/InfoPartySection";
import { Metadata } from "next";
import Script from "next/script";
import ReactCookieBot from "react-cookiebot";
import MenuSection from "./components/home/menu-section/MenuSection";
type HomeProps = {
  breadcrumb: React.ReactNode;
};
const domainGroupId = "47dbaf39-577a-45e6-9ea1-d36a3746754b";
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
const Home: React.FC<HomeProps> = async ({}: Readonly<HomeProps>) => {
  return (
    <main className=" mx-auto">
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
      <div className="mx-auto ">
        <ReactCookieBot domainGroupId={domainGroupId} />
        <Hero />
        <AboutSection />
        <InfoSection />
        <InfoParty />
        <MenuSection />
      </div>
    </main>
  );
};

export default Home;
