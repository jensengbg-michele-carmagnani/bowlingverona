import shape from "@/public/assets/shape_image/Parallelepipedo.png";
import Image from "next/image";
import aboutImg from "@/public/assets/shape_image/aboutUs.png";
const About: React.FC = () => {
  return (
    <div
      className="relative "
      style={{
        backgroundImage: `url(${shape.src})`,
      }}
    >
      {/* <Image src={aboutImg} alt="img"></Image> */}
      <div className="pt-24 grid grid-cols-1 md:grid-cols-2 gap-4 h-full font-[DomCasualD]">
        <div className=" w-[80%] h-[50%] mx-auto">
          <Image
            src={aboutImg.src}
            alt="about us"
            width={400}
            height={200}
            className="border rounded-sm mx-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-center p-4 gap-5">
          <div className="flex gap-2 items-center uppercase ">
            <div className="h-[1px] w-[40px] bg-orange-400" />
            <div className="text-orange-400 text-base">about us</div>
          </div>
          <div>
            <h2 className="text-5xl text-center uppercase  font-light">
              Our History
            </h2>
            <p className="p-4 text-center">
              Il Bowling Verona è stato fondato nel 1990 da Marco e da allora è
              rimasto un autentico business di famiglia, gestito con passione e
              dedizione. Fin dai suoi esordi, questo luogo si è affermato come
              un punto di riferimento per gli appassionati di bowling e per chi
              cerca un ambiente accogliente e divertente per trascorrere momenti
              piacevoli. Con 14 piste da bowling, il Bowling Verona offre ampie
              possibilità di gioco per gruppi di amici, famiglie e anche per
              tornei più competitivi. Oltre al bowling, la struttura dispone di
              13 tavoli da biliardo, ideali per chi desidera sfidarsi in una
              partita di precisione e abilità. Per completare l’offerta di
              intrattenimento, il Bowling Verona mette a disposizione anche un
              angolo dedicato ai videogames, pensato per tutte le età e per chi
              vuole fare una pausa diversa tra una partita e l'altra. Anno dopo
              anno, il Bowling Verona ha continuato a crescere e ad evolversi,
              mantenendo sempre viva la sua atmosfera familiare e accogliente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
