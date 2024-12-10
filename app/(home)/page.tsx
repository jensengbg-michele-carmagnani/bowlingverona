import Hero from "./components/home/hero-section/HeroSection";
import About from "./components/home/about-section/AboutSection";
import InfoSection from "./components/home/info-section/Info";
import InfoParty from "./components/home/infoparty-section/InfoPartySection";
import Menu from "./components/home/menu-section/MenuSection";
import MenuFlyer from "./components/prices-fyer/PricesFlyer";

import { encrypt } from "@vercel/flags";
import { FlagValues } from "@vercel/flags/react";
import { showReservationForm } from "@/flag/showReservationForm";

type HomeProps = {
  breadcrumb: React.ReactNode;
};

const Home: React.FC<HomeProps> = async ({}: Readonly<HomeProps>) => {
  return (
    <main className=" mx-auto">
      <div className="mx-auto ">
        <Hero />
        <About />
        <InfoSection />
        <InfoParty />
        <Menu />
        <MenuFlyer />
      </div>
    </main>
  );
};

export default Home;
