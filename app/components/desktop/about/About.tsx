"use client";

import vectorDesk from "@/public/assets/shape_image/About-desk-vector.png";
import buttonIcon from "@/public/assets/ICON/Eclips_button_icon.svg";
import Image from "next/image";
import aboutImg from "@/public/assets/shape_image/aboutUs.png";
import aboutMini from "@/public/assets/shape_image/about-mini.png";

import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  return (
    <div
      className="relative bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${vectorDesk?.src})`,
        height: `${vectorDesk?.height}px`,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 font-[Rajdhani] px-7 md:px-0 pt-5 md:pt-0  gap-5">
        <div className="mx-auto relative">
          <Image
            src={aboutMini.src}
            alt="about us"
            width={200}
            height={100}
            className="absolute z-10 transform -translate-x-5 -translate-y-5 md:-translate-x-10 md:translate-y-64 border border-orange-400 rounded-sm"
          />
          <Image
            src={aboutImg.src}
            alt="about us"
            width={400}
            height={500}
            className="border rounded-sm md:transform md:translate-y-1/3"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center   gap-5 transform translate-y-20 md:mt-16 ">
          <div className="flex gap-2 items-center uppercase self-center md:self-start">
            <div className="h-[1px] w-[40px] bg-orange-400" />
            <div className="text-orange-400 text-base">about us</div>
          </div>
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-5xl uppercase font-light">Our History</h2>
            <p className="text-xl font-extralight md:font-light md:pr-10 md:px-2 md:max-h-80 max-h-64 overflow-y-auto">
              Il Bowling Verona è stato fondato nel 1990 da Marco e da allora è
              rimasto un autentico business di famiglia, gestito con passione e
              dedizione. Fin dai suoi esordi, questo luogo si è affermato come
              un punto di riferimento per gli appassionati di bowling e per chi
              cerca un ambiente accogliente e divertente per trascorrere momenti
              piacevoli. Con 14 piste da bowling, il Bowling Verona offre ampie
              possibilità di gioco per gruppi di amici, famiglie e anche per
              tornei più competitivi. Oltre al bowling, la struttura dispone di
              13 tavoli da biliardo. Per completare l&apos;offerta di
              intrattenimento, il Bowling Verona mette a disposizione anche un
              angolo dedicato ai videogames, pensato per tutte le età e per chi
              vuole fare una pausa diversa tra una partita e l&apos;altra. Anno
              dopo anno, il Bowling Verona ha continuato a crescere e ad
              evolversi, mantenendo sempre viva la sua atmosfera familiare e
              accogliente.
            </p>

            <div className="flex justify-center md:justify-start w-full">
              <Button
                className="text-black hover:text-white mt-5 hover:transform hover:scale-105 transition-all duration-500"
                imgUrl={buttonIcon}
              >
                reservation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
