import Hero from "./components/desktop/hero/Hero";
import About from "./components/desktop/about/About";
import InfoSection from "./components/desktop/info/Info";
import InfoParty from "./components/desktop/infoParty/InfoParty";
import Menu from "./components/desktop/menu/Menu";
import MenuFlyer from "./components/desktop/pricesFlyer/PricesFlyer";

const Home: React.FC = () => {
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
