import Hero from "./components/desktop/hero/Hero";
import About from "./components/desktop/about/About";
import InfoSection from "./components/desktop/info/Info";
import InfoParty from "./components/desktop/infoParty/InfoParty";
import Menu from "./components/desktop/menu/Menu";
import MenuFlyer from "./components/desktop/menuflyer/MenuFlyer"

const Home: React.FC = () => {
  return (
    <main className="font-[DomCasualD] mx-auto">
      <div className="mx-auto">
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
