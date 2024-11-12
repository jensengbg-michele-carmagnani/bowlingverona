import logo from "@/public/assets/ICON/logo_mini.png";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "./staticFooter";
import FacebookIcon from "@/app/icons/FacebookIcon";
import InstaIcon from "@/app/icons/InstagramIcon";
import footerImage from "@/public/assets/shape_image/footer-image.png";
import { MapPinIcon } from "lucide-react";
const Footer = () => {
  console.log(footerImage);
  return (
    <div className="space-y-10 ">
      <div className="h-20 bg-[#2C2C2C] flex justify-center items-center gap-5 mt-12 ">
        <FacebookIcon
          size={40}
          className="hover:text-orange-400 transition hover:duration-75 hover:scale-105 cursor-pointer"
        />{" "}
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
        style={{
          backgroundImage: `url(${footerImage.src})`,
        }}
      >
        <div
          className={` text-slate-300 grid grid-cols-${
            footerLinks && footerLinks?.length
          } font-[Rajdhani] font-extralight text-xl uppercase h-${
            footerImage?.height
          }`}
        >
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="text-xs md:text-xl text-center hover:text-orange-500 transition-colors hover:font-thin"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="uppercase space-y-7 py-7 text-xs">
          <p className="text-center">Active Since 1990</p>
          <p className="text-center font-thin capitalize">
            <Link href={"https://bit.ly/3Atlssu"} target="_blank">
              <MapPinIcon size={20} className="inline-block" /> viale della
              fiera 10/a Verona (Italy)
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
