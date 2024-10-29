import heroImage from "@/public/assets/shape_image/Rectangle1.png";

type heroProps = {
  backgroundImage?: string;
  backgroundVideo?: string;
};

const Hero: React.FC<heroProps> = ({ backgroundVideo }) => {
  return (
    <div className="relative h-[874px]">
      {backgroundVideo ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
        />
      ) : (
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${heroImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col justify-center items-center  space-y-7 px-10  h-full">
            <h1 className="text-5xl text-center uppercase font-[DomCasualD] font-light">
              <span className="text-orange-400">bowling verona:</span> where
              every roll strike fun!
            </h1>
            <p className="font-[Rajdhani] tracking-wider text-center">
              Benvenuti a Bowling Verona – la vostra destinazione ideale per
              divertimento ed emozioni! Che siate professionisti o semplicemente
              alla ricerca di un buon momento con amici e famiglia, offriamo
              piste di alta qualità, eventi e un&#39;atmosfera vivace. Unitevi a
              noi per esperienze di bowling indimenticabili nel cuore di Verona!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
