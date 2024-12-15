import Hero from "@/app/(public)/components/home/hero-section/HeroSection";
import AboutSection from "@/app/(public)/components/home/about-section/AboutSection";
import InfoSection from "@/app/(public)/components/home/info-section/Info";
import InfoParty from "@/app/(public)/components/home/infoparty-section/InfoPartySection";
import Menu from "@/app/(public)/components/home/menu-section/MenuSection";
import MenuFlyer from "@/app/(public)/components/home/menu-section/MenuSection";

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
        <MenuFlyer />
      </div>
    </main>
  );
};

export default Home;
