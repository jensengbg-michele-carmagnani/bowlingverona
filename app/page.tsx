import Hero from "./components/desktop/hero/Hero";
import About from "./components/desktop/about/About";

const Home: React.FC = () => {
  return (
    <main className="font-[DomCasualD] mx-auto w-screen">
      <Hero />
      <About />
    </main>
  );
};

export default Home;
