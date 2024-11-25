import Image from "next/image";
import logo from "@/public/assets/ICON/logo_mini.png";
import Link from "next/link";
import { footerLinks } from "./staticFooter";
import FacebookIcon from "@/app/(home)/icons/FacebookIcon";
import InstaIcon from "@/app/(home)/icons/InstagramIcon";
import footerImage from "@/public/assets/shape_image/footer-image.png";
import { MapPinIcon } from "lucide-react";

const Footer = () => {
  const footerLinksData = footerLinks || []; // Ensure footerLinks is defined
  const imageSrc = footerImage?.src || ""; // Default to empty string if undefined
  const imageHeight = footerImage?.height || 0; // Default to 0 if undefined

  return (
    <div className="space-y-10 ">
      <div className="h-20 bg-[#2C2C2C] flex justify-center items-center gap-5 mt-12 ">
        <FacebookIcon
          size={40}
          className="hover:text-orange-400 transition hover:duration-75 hover:scale-105 cursor-pointer"
        />
        <InstaIcon
          size={40}
          className="hover:text-orange-400 transition hover:duration-75 hover:scale-105 cursor-pointer"
        />
      </div>
      <div className="">
        <Image src={logo} alt="logo" className="mx-auto" />
      </div>
      <div
        className="bg-no-repeat bg-center bg-contain py-10"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div
          className={`text-slate-300 grid grid-cols-5 font-[Rajdhani] font-extralight text-xl uppercase h-${imageHeight}`}
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
          <p className="text-center">Active Since 1990</p>
          <span className="text-center font-thin capitalize hover:text-orange-500 transition duration-75 flex justify-center">
            <Link href={"https://bit.ly/3Atlssu"} target="_blank">
              <MapPinIcon size={20} className="inline-block" /> viale della
              fiera 10/a Verona (Italy)
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
