"use client";

import buttonIcon from "@/public/assets/ICON/Eclips_button_icon.svg";
import vectorDesk from "@/public/assets/shape_image/About-desk-vector.png";
import birthdayImage from "@/public/assets/shape_image/birthday-image.png";
import corporateImage from "@/public/assets/shape_image/corporate-image.png";

import { Button } from "@/components/ui/button";
import { useAnimationInView } from "@/lib/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const InfoParty = () => {
  const { itemRef, isInView, itemAnimation } = useAnimationInView();
  return (
    <div
      className="relative bg-no-repeat bg-center bg-cover  uppercase flex justify-center items-center mx-auto"
      style={{
        backgroundImage: `url(${vectorDesk?.src})`,
        height: `${vectorDesk?.height}px`,
      }}
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2  gap-5 px-2 md:px-4"
        ref={itemRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={itemAnimation}
        custom={0}
      >
        <div className="hover:scale-[99%] transition-all duration-500 relative">
          <Link href={"/birthday"}>
            <Image
              src={birthdayImage}
              alt="Birthday"
              className="shadow-xl rounded-md"
            />
            <div className="absolute flex justify-around w-full items-center inset-x-0 bottom-9">
              <h2 className="text-2xl md:text-4xl">birthday party</h2>
              <Button
                className="text-black hover:text-white mt-5 hover:transform hover:scale-105 transition-all duration-500 font-[Rajdhani] upperca"
                imgUrl={buttonIcon}
              >
                reservation
              </Button>
            </div>
          </Link>
        </div>
        <div className="hover:scale-[99%] transition-all duration-500 relative ">
          <Link href={"/corporate"}>
            <Image
              src={corporateImage}
              alt="Corporate"
              className="shadow-xl rounded-md"
            />
            <div className="absolute flex justify-around w-full items-center inset-x-0 bottom-9">
              <h2 className="text-2xl md:text-4xl">birthday party</h2>
              <Button
                className="text-black hover:text-white mt-5 hover:transform hover:scale-105 transition-all duration-500 min-w-10  font-[Rajdhani] upperca"
                imgUrl={buttonIcon}
              >
                reservation
              </Button>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default InfoParty;
