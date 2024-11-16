import Hero from "./components/desktop/hero-section/HeroSection";
import About from "./components/desktop/about-section/AboutSection";
import InfoSection from "./components/desktop/info-section/Info";
import InfoParty from "./components/desktop/infoparty-section/InfoPartySection";
import Menu from "./components/desktop/menus-section/MenuSection";
import MenuFlyer from "./components/desktop/pricesFlyer/PricesFlyer";

type HomeProps = {
  breadcrumb: React.ReactNode;
};

const Home: React.FC<HomeProps> = ({}: Readonly<HomeProps>) => {
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
