"use client";
import { useAnimationInView } from "@/lib/animation";
import heroImage from "@/public/assets/shape_image/Rectangle1.png";
import { motion } from "framer-motion";
import NextBreadcrumb from "../../ui/breadcrumb/BreadCrumb";

type heroProps = {
  backgroundImage?: string;
  backgroundVideo?: string;
};

const Hero: React.FC<heroProps> = ({ backgroundVideo }) => {
  const { itemRef, isInView, itemAnimation } = useAnimationInView();
  return (
    <>
      <motion.div
        className="relative h-[874px] w-full "
        ref={itemRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={itemAnimation}
        custom={0}
      >
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
            className="w-screen h-full relative "
            style={{
              backgroundImage: `url(${heroImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <NextBreadcrumb
              homeElement={"Home"}
              separator={<span> / </span>}
              containerClasses="capitalize absolute bottom-32 left-1/2 transform -translate-x-1/2 w-full font-[Rajdhani] font-light text-4xl w-full flex justify-center items-center"
              listClasses="text-center transform hover:animate-pulse"
              activeClasses="text-orange-400 cursor-none"
            />
            <div className="flex flex-col justify-center items-center  space-y-7 px-2 md:px-0 h-full">
              <h1 className="text-5xl text-center uppercase font-[DomCasualD] font-light">
                <span className="text-orange-400">bowling verona:</span> where
                every roll strike fun!
              </h1>
              <p className="font-[Rajdhani] font-light text-2xl text-center max-w-2xl ">
                Benvenuti a Bowling Verona – la vostra destinazione ideale per
                divertimento ed emozioni! Che siate professionisti o
                semplicemente alla ricerca di un buon momento con amici e
                famiglia, offriamo piste di alta qualità, eventi e
                un&#39;atmosfera vivace. Unitevi a noi per esperienze di bowling
                indimenticabili nel cuore di Verona!
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Hero;
