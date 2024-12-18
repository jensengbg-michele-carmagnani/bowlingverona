"use client";
import logo from "@/public/assets/ICON/logo_mini.png";
import footerImage from "@/public/assets/shape_image/footer-image.png";
import { motion, useInView } from "framer-motion";
import { MapPinIcon, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { footerLinks } from "./staticFooter";

const Footer = () => {
  const footerLinksData = footerLinks || []; // Ensure footerLinks is defined
  const imageSrc = footerImage?.src || ""; // Default to empty string if undefined

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const itemAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
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
      className="space-y-10"
    >
      <div className="flex justify-center items-center mt-16  bg-[#2c2c2c] py-5 space-x-10">
        <Link href="https://www.instagram.com/bowlingverona/">
          <span className="hover:text-orange-400 transition hover:duration-75 hover:scale-105 cursor-pointer">
            <FaInstagram size={50} />
          </span>
        </Link>
        <Link href="https://www.facebook.com/BowlingFieraVerona">
          <span className="hover:text-orange-400 transition hover:duration-75 hover:scale-105 cursor-pointer">
            <FaFacebook size={50} />
          </span>
        </Link>
      </div>
      <div className="">
        <Image src={logo} alt="logo" className="mx-auto" />
      </div>
      <div
        className="bg-no-repeat bg-center bg-contain py-10"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div
          className={`text-slate-300 flex justify-between font-[Rajdhani] font-extralight text-xl uppercase px-5`}
        >
          {footerLinksData.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="text-base md:text-2xl text-center hover:text-orange-500 transition-colors hover:font-thin"
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </div>

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
    </motion.div>
  );
};

export default Footer;
