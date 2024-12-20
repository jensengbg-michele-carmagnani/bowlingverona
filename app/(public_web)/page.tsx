import AboutSection from "@/app/(public_web)/components/home/about-section/AboutSection";
import Hero from "@/app/(public_web)/components/home/hero-section/HeroSection";
import InfoSection from "@/app/(public_web)/components/home/info-section/Info";
import InfoParty from "@/app/(public_web)/components/home/infoparty-section/InfoPartySection";
import { getSEOTags, renderSchemaTags } from "@/lib/seo";
import ReactCookieBot from "react-cookiebot";
import MenuSection from "./components/home/menu-section/MenuSection";
type HomeProps = {
  breadcrumb: React.ReactNode;
};
const domainGroupId = "47dbaf39-577a-45e6-9ea1-d36a3746754b";
export const metadata = getSEOTags()
const Home: React.FC<HomeProps> = async ({}: Readonly<HomeProps>) => {
  return (
    <main className=" mx-auto">
      <div className="mx-auto ">
        <ReactCookieBot domainGroupId={domainGroupId} />
        <Hero />
        <AboutSection />
        <InfoSection />
        <InfoParty />
        <MenuSection />
        {renderSchemaTags()}
      </div>
    </main>
  );
};

export default Home;
