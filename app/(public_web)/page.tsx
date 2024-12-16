import AboutSection from "@/app/(public_web)/components/home/about-section/AboutSection";
import Hero from "@/app/(public_web)/components/home/hero-section/HeroSection";
import InfoSection from "@/app/(public_web)/components/home/info-section/Info";
import InfoParty from "@/app/(public_web)/components/home/infoparty-section/InfoPartySection";
import {
  default as Menu,
  default as MenuFlyer,
} from "@/app/(public_web)/components/home/menu-section/MenuSection";

type HomeProps = {
  breadcrumb: React.ReactNode;
};

const Home: React.FC<HomeProps> = async ({}: Readonly<HomeProps>) => {
  return (
    <main className=" mx-auto">
      <div className="mx-auto ">
        <Hero />
        <AboutSection />
        <InfoSection />
        <InfoParty />
        <Menu />

      </div>
    </main>
  );
};

export default Home;
