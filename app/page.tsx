import Hero from "./components/desktop/hero/Hero";
import About from "./components/desktop/about/About";
import InfoSection from "./components/desktop/info/Info";
import InfoParty from "./components/desktop/infoParty/InfoParty";

const Home: React.FC = () => {
  return (
    <main className="font-[DomCasualD] mx-auto w-screen">
      <Hero />
      <About />
      <InfoSection />
      <InfoParty />
    </main>
  );
};

export default Home;
