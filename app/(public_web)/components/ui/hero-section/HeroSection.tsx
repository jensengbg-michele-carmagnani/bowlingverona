const HeroSection: React.FC<{
  backgroundImage: string;
  height?: string;
  title: string;
  subtitle: string;
}> = ({ backgroundImage, height, title, subtitle }) => (
  <section>
    <div
      className="bg-no-repeat bg-center bg-cover flex justify-center h-full items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: height ?? "500px",
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
