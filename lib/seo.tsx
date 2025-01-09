import type { Metadata } from "next";
import Script from "next/script";

const config = {
  domainName: "www.bowlingverona.com",
};

export default config;

// These are all the SEO tags you can add to your pages.
// It prefills data with default title/description/OG, etc.. and you can customize it for each page.
// It's already added in the root layout.js so you don't have to add it to every page.
// But I recommend setting the canonical URL for each page (export const metadata = getSEOTags({canonicalUrlRelative: "/"});)
// See https://shipfa.st/docs/features/seo
export const getSEOTags = ({
  title,
  description,
  openGraph,
  canonicalUrlRelative,
  extraTags,
}: Metadata & {
  canonicalUrlRelative?: string;
  extraTags?: Record<string, string>;
} = {}) => {
  return {
    // up to 50 characters (what does your app do for the user?) > your main should be here
    title: title || "Bowling Verona",
    // up to 160 characters (how does your app help the user?)
    description:
      description ||
      "Bowling Verona è il punto di riferimento per il divertimento a Verona, con 14 piste da bowling professionali e 13 biliardi, area giochi, biliardo, e spazi dedicati a feste private ed eventi aziendali. Ideale per famiglie, gruppi di amici e team building. Offriamo un'atmosfera accogliente, giochi moderni e tanto divertimento. Prenota ora per vivere un'esperienza indimenticabile!",
    // some keywords separated by commas. By default, it will be your app name
    keywords: [
      "bowling Verona",
      "laser game verona",
      "bowling vicono a me",
      "sala giochi",
      "biliardo verona",
      "biliardi verona",
      "bowling verona fiera",
      "bowling borgo roma",
      "bowling santa lucia",
      "bowling zai",
      "bowling zai verona",
      "bar con biliardo",
      "bar con biliardo vicino a me",
      "verona divertimento",
      "divertimento in famiglia",
      "Eventi",
      "bowling",
    ],
    applicationName: "Bowling Verona",
    // set a base URL prefix for other fields that require a fully qualified URL (e.g., og:image: 'https://yourdomain.com/share.png' => '/share.png')
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : `https://${config.domainName}/`
    ),

    openGraph: {
      title: openGraph?.title || "Bowling Verona",
      description:
        openGraph?.description ||
        "Bowling Verona è il punto di riferimento per il divertimento a Verona, con 14 piste da bowling professionali, area giochi, biliardo, e spazi dedicati a feste private ed eventi aziendali. Ideale per famiglie, gruppi di amici e team building. Offriamo un'atmosfera accogliente, giochi moderni e tanto divertimento. Prenota ora per vivere un'esperienza indimenticabile!",
      url: openGraph?.url || `https://${config.domainName}/`,
      siteName: openGraph?.title || "Bowling Verona",
      // If you add an opengraph-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
      images: [
        {
          url: `https://${config.domainName}/og-image.png`,
          width: 1200,
          height: 660,
        },
      ],
      locale: "it_IT",
      type: "website",
    },
    icons: [
      {
        rel: "icon",
        url: "/favicon/favicon.ico",
        sizes: "any",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon/favicon-16x16.png",
      },
    ],

    instagram: {
      title: openGraph?.title || "Bowling Verona",
      description:
        openGraph?.description ||
        "Bowling Verona è il punto di riferimento per il divertimento a Verona, con 14 piste da bowling professionali, area giochi, biliardo, e spazi dedicati a feste private ed eventi aziendali. Ideale per famiglie, gruppi di amici e team building. Offriamo un'atmosfera accogliente, giochi moderni e tanto divertimento. Prenota ora per vivere un'esperienza indimenticabile!",
      profile: `https://www.instagram.com/bowlingverona/`,
    },

    facebook: {
      title: openGraph?.title || "Bowling Verona",
      description:
        openGraph?.description ||
        "Unisciti al divertimento con 14 piste da bowling ed eventi a Verona. Prenota ora!",
      page: `https://www.facebook.com/bowlingveronafiera`,
    },

    // If a canonical URL is given, we add it. The metadataBase will turn the relative URL into a fully qualified URL
    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    // If you want to add extra tags, you can pass them here
    ...extraTags,
  };
};

// Structured Data for Rich Results on Google. Learn more: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
// Find your type here (LocalBusiness, Event, etc.): https://developers.google.com/search/docs/appearance/structured-data/search-gallery
// Use this tool to check data is well structured: https://search.google.com/test/rich-results
export const renderSchemaTags = () => {
  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          name: "Bowling Verona",
          description:
            "Bowling Verona offre 14 piste, un'area giochi e un punto ristoro. Perfetto per eventi, famiglie e amici.",
          image: `https://${config.domainName}/`,
          url: `https://${config.domainName}/`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Viale della fiera 10/A",
            addressLocality: "Verona",
            postalCode: "37100",
            addressCountry: "IT",
          },
          telephone: "+39 045 581724",
          openingHours: ["Mo-Su 20:30-1:00", "Sa-Su 16:30-1:00"],
          sameAs: [
            "https://www.instagram.com/bowlingverona/",
            "https://www.facebook.com/bowlingveronafiera/",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.5",
            ratingCount: "120",
          },
        }),
      }}
    />
  );
};
