import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MapPinIcon, PhoneCallIcon } from "lucide-react";

const MobileFooter = () => {
  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    exit: {
      y: 50, // Move items further down on exit
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.32, 0, 0.67, 0], // Custom easing for smoother exit
      },
    },
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-16 space-x-5">
        <Link href="https://www.instagram.com/bowlingverona/">
          <motion.span
            variants={itemAnimation}
            className="block px-4 py-2 hover:bg-gray-700 text-3xl"
          >
            <FaInstagram size={50} />
          </motion.span>
        </Link>
        <Link href="https://www.facebook.com/BowlingFieraVerona">
          <motion.span
            variants={itemAnimation}
            className="block px-4 py-2 hover:bg-gray-700 text-3xl"
          >
            <FaFacebook size={50} />
          </motion.span>
        </Link>
      </div>
      <div>
        <div className="uppercase py-7 text-xs space-y-3">
          <div className=" flex justify-center items-center">
            <Link href={"tel:045581724"}>
              <p className="w-full text-center flex justify-center items-center hover:text-orange-500 transition duration-75">
                <PhoneCallIcon size={20} className=" inline-block mr-2" />
                <span className=" capitalize">045-581724</span>
              </p>
            </Link>
            <span className="mx-2 text-orange-500 translate-y-[-2px] text-xl">
              |
            </span>
            <Link href={"https://bit.ly/3Atlssu"} target="_blank">
              <p className="w-full text-center flex justify-center items-center hover:text-orange-500 transition duration-75">
                <MapPinIcon size={20} className=" inline-block mr-2" />
                <span className="capitalize ">
                  Viale della fiera 10/a Verona (Italy)
                </span>
              </p>
            </Link>
          </div>
          <p className="text-center text-pretty">Active Since 1990</p>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
