"use client";
import { useAnimationInView } from "@/lib/animation";
import buttonIcon from "@/public/assets/ICON/Eclips_button_icon.svg";
import menuSandwich from "@/public/assets/shape_image/menu-sandwichjpg.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import InfoCard from "../../ui/InfoCard";
import { menuStatic } from "./menu-static";

const Menu = () => {
  const { itemRef, isInView, itemAnimation } = useAnimationInView();
  return (
    <motion.div
      className=" mx-auto my-16"
      ref={itemRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemAnimation}
      custom={0}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  px-2 md:px-4 ">
        <InfoCard
          className="flex flex-col justify-center items-center px-3 text-center text-white md:px-0 "
          title="Il nostro menu"
          descriptions={menuStatic}
          classDescription="text-xl font-[Rajdhani]"
          classTitle="text-4xl"
          actionButton={{
            text: "Scopri di più",
            imgUrl: buttonIcon,
            className: "",
          }}
        />
        <div className="h-[600px] ">
          <Image
            src={menuSandwich}
            alt="Sample Image"
            className="object-cover h-full w-full rounded-md border-slate-600 shadow-[4px_0_10px_rgba(100,100,100,0.3)]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
