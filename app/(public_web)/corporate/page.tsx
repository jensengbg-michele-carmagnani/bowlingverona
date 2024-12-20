"use client";
import comingSoon from "@/public/assets/shape_image/cominc-soon.png";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Corporate = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const itemAnimation = {
    hidden: { x: 450, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: i * 0.5,
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemAnimation}
      custom={0}
      className=" flex justify-center items-center mt-44"
    >
      <div className="w-full h-[650px]   relative">
        <Image
          src={comingSoon}
          alt="Corporate"
          layout="fill"
          className="object-scale-down  "
        />
      </div>
    </motion.div>
  );
};

export default Corporate;
