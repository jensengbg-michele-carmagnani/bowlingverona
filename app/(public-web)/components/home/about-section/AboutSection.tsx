"use client";

import { Button } from "@/components/ui/button";
import { useAnimationInView } from "@/lib/animation";
import buttonIcon from "@/public/assets/ICON/Eclips_button_icon.svg";
import vectorDesk from "@/public/assets/shape_image/About-desk-vector.png";
import aboutMini from "@/public/assets/shape_image/about-mini.png";
import aboutImg from "@/public/assets/shape_image/aboutUs.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
  const { itemRef, isInView, itemAnimation } = useAnimationInView();
  return (
    <motion.div
      ref={itemRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemAnimation}
      custom={0}
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
          <div className="text-center md:text-left max-w-2xl">
            <div className="flex gap-2 items-center uppercase self-center md:self-start">
              <div className="h-[1px] w-[40px] bg-orange-400" />
              <h2 className="text-orange-400 text-base">about us</h2>
            </div>
            <h2 className="text-5xl uppercase font-light">
              Cosa fare al Bowling Verona!
            </h2>
            <article className="text-xl font-extralight md:font-light md:pr-10 md:px-2 md:max-h-80 max-h-64 overflow-y-auto">
              <p>
                <strong>Passa una Serata con gli Amici:</strong> Sfida i tuoi
                amici a una partita di bowling, gioca a biliardo o prova
                l&apos;area videogames per un&apos;esperienza unica.
              </p>
              <p>
                <strong>Prenota il Tuo Compleanno:</strong> Festeggia il tuo
                giorno speciale con giochi, risate e un’atmosfera accogliente
                pensata per grandi e piccini.
              </p>
              <p>
                <strong>Organizza la Tua Serata Aziendale:</strong> Un&apos;idea
                perfetta per team building e cene aziendali, con tante attività
                per divertirsi e rilassarsi insieme. Il Bowling Verona ti offre
                tutto il necessario per un&apos;esperienza di intrattenimento
                completa e indimenticabile. Prenota ora!
              </p>
            </article>

            <div className="flex justify-center md:justify-start w-full">
              <Link href={"/aboutus"}>
                <Button
                  className="text-black hover:text-white mt-5 hover:transform hover:scale-105 transition-all duration-500 capitalize"
                  imgUrl={buttonIcon}
                >
                  about
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
