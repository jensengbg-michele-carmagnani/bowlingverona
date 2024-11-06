import Hero from "./components/desktop/hero/Hero";
import About from "./components/desktop/about/About";
import InfoSection from "./components/desktop/info/Info";

const Home: React.FC = () => {
  return (
    <main className="font-[DomCasualD] mx-auto w-screen">
      <Hero />
      <About />
      <InfoSection />
    </main>
  );
};

export default Home;
