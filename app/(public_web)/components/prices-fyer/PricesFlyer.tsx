"use client";

import useScreenSize from "@/hooks/useScreenWidth";
import { useAnimationInView } from "@/lib/animation";
import headerMenuImg from "@/public/assets/shape_image/header-menu.png";
import menuListImage from "@/public/assets/shape_image/menu-bg-image.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { bowlingPrices, columnsBowling } from "../ui/tables/ColumnBowling";
import { columnsPools, poolsPrices } from "../ui/tables/ColumnPools";
import { TablePrices } from "../ui/tables/Table";

const PricesFlyer = () => {
  const screenSize = useScreenSize();
  const isXs = screenSize === "xs";
  const { itemRef, isInView, itemAnimation } = useAnimationInView();
  const heightImg = isXs ? menuListImage?.height / 1.4 : menuListImage?.height;

  return (
    <motion.div
      className="md:mx-8"
      ref={itemRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemAnimation}
      custom={0}
    >
      <div
        className="relative bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${menuListImage?.src})`,
          height: `${heightImg}px`,
        }}
      >
        <Image src={headerMenuImg} alt="menu" className="w-full" />
        <div className="md:w-5/6 mx-auto space-y-3">
          <div>
            <h2 className="text-center text-5xl w-full font-[DomCasualD] py-10 text-black text-shadow-outline uppercase">
              Hourly rate lanes
            </h2>
          </div>
          <TablePrices data={bowlingPrices} columns={columnsBowling} />
        </div>
        <div className="w-[95%] md:w-5/6 mx-auto space-y-3">
          <div>
            <h2 className="text-center text-5xl w-full font-[DomCasualD] py-10 text-black text-shadow-outline uppercase">
              Pools
            </h2>
          </div>
          <TablePrices data={poolsPrices} columns={columnsPools} />
        </div>
      </div>
    </motion.div>
  );
};

export default PricesFlyer;
