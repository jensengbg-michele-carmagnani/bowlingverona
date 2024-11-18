import Hero from "./components/home/hero-section/HeroSection";
import About from "./components/home/about-section/AboutSection";
import InfoSection from "./components/home/info-section/Info";
import InfoParty from "./components/home/infoparty-section/InfoPartySection";
import Menu from "./components/home/menu-section/MenuSection";
import MenuFlyer from "./components/pricesFlyer/PricesFlyer";

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
