const HeroSection: React.FC<{
  backgroundImage: string;
  height?: number;
  title: string;
  subtitle: string;
}> = ({ backgroundImage, height, title, subtitle }) => (
  <section>
    <div
      className="bg-no-repeat bg-center bg-cover h-full flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: height,
      }}
    >
      <div className="text-center">
        <h1 className="text-2xl capitalize">{title}</h1>
        <p className="text-2xl capitalize">{subtitle}</p>
      </div>
    </div>
  </section>
);

export default HeroSection;
