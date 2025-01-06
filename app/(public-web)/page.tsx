import AboutSection from "@/app/(public-web)/components/home/about-section/AboutSection";
import Hero from "@/app/(public-web)/components/home/hero-section/HeroSection";
import InfoSection from "@/app/(public-web)/components/home/info-section/Info";
import InfoParty from "@/app/(public-web)/components/home/infoparty-section/InfoPartySection";
import { getSEOTags, renderSchemaTags } from "@/lib/seo";
import MenuSection from "./components/home/menu-section/MenuSection";
import CookieBot from "./components/ui/cookie-bot/CookieBot";
type HomeProps = {
  breadcrumb: React.ReactNode;
};

export const metadata = getSEOTags();

const Home: React.FC<HomeProps> = async ({}: Readonly<HomeProps>) => {
  return (
    <main className=" mx-auto">
      <CookieBot />
      <Hero />
      <AboutSection />
      <InfoSection />
      <InfoParty />
      <MenuSection />
      {renderSchemaTags()}
    </main>
  );
};

export default Home;
