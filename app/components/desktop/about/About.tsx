"use client";

import vectroMobile from "@/public/assets/shape_image/About-mobile-vector.png";
import vectroDesck from "@/public/assets/shape_image/About-desk-vector.png";
import Image from "next/image";
import aboutImg from "@/public/assets/shape_image/aboutUs.png";
import aboutMini from "@/public/assets/shape_image/about-mini.png";
import useScreenWidth from "@/lib/useScreenWidth";

const About: React.FC = () => {
  const screenSize = useScreenWidth();
  const isXs = screenSize === "xs";
  console.log(isXs);

  return (
    <div
      className="relative bg-no-repeat bg-center  bg-contain  md:p-0 md:w-screen"
      style={{
        backgroundImage: `url(${isXs ? vectroMobile.src : vectroDesck.src})`,
      }}
    >
      <div className="pt-24 grid grid-cols-1 md:grid-cols-2 gap-4 font-[Rajdhani] md:w-[80%] mx-auto px-7 ">
        <div className=" mx-auto relative">
          <Image
            src={aboutMini.src}
            alt="about us"
            width={200}
            height={100}
            className="absolute -inset-5 border border-orange-400 rounded-sm"
          />
          <Image
            src={aboutImg.src}
            alt="about us"
            width={400}
            height={500}
            className="border rounded-sm "
          />
        </div>
        <div className="relative flex flex-col items-center justify-center gap-5">
          <div className="flex gap-2 items-center uppercase absolute -top-1 md:-top-4 left-1/2 transform -translate-x-1/2 md:left-8 md:translate-x-8">
            <div className="h-[1px] w-[40px] bg-orange-400" />
            <div className="text-orange-400 text-base">about us</div>
          </div>
          <div className="mt-10">
            <h2 className="text-5xl text-center uppercase font-light md:text-left md:pl-16">
              Our History
            </h2>
            <p className="text-center text-xl md:text-left font-extralight md:font-light md:px-16 md:pb-8 ">
              Il Bowling Verona è stato fondato nel 1990 da Marco e da allora è
              rimasto un autentico business di famiglia, gestito con passione e
              dedizione. Fin dai suoi esordi, questo luogo si è affermato come
              un punto di riferimento per gli appassionati di bowling e per chi
              cerca un ambiente accogliente e divertente per trascorrere momenti
              piacevoli. Con 14 piste da bowling, il Bowling Verona offre ampie
              possibilità di gioco per gruppi di amici, famiglie e anche per
              tornei più competitivi. Oltre al bowling, la struttura dispone di
              13 tavoli da biliardo, ideali per chi desidera sfidarsi in una
              partita di precisione e abilità. Per completare l&apos;offerta di
              intrattenimento, il Bowling Verona mette a disposizione anche un
              angolo dedicato ai videogames, pensato per tutte le età e per chi
              vuole fare una pausa diversa tra una partita e l&apos;altra. Anno
              dopo anno, il Bowling Verona ha continuato a crescere e ad
              evolversi, mantenendo sempre viva la sua atmosfera familiare e
              accogliente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
