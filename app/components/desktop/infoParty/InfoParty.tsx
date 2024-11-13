"use client";

import vectorDesk from "@/public/assets/shape_image/About-desk-vector.png";
import birthdayImage from "@/public/assets/shape_image/birthday-image.png";
import corporateImage from "@/public/assets/shape_image/corporate-image.png";
import buttonIcon from "@/public/assets/ICON/Eclips_button_icon.svg";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const InfoParty = () => {
  return (
    <div
      className="relative bg-no-repeat bg-center bg-cover  uppercase flex justify-center items-center mx-auto"
      style={{
        backgroundImage: `url(${vectorDesk?.src})`,
        height: `${vectorDesk?.height}px`,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2  gap-3 px-2 md:px-4">
        <div className="relative">
          <Image src={birthdayImage} alt="Birthday" />
          <div className="absolute flex justify-around w-full items-center inset-x-0 bottom-9">
            <h2 className="text-2xl md:text-4xl">birthday party</h2>
            <Link href={"/birthday"}>
              <Button
                className="text-black hover:text-white mt-5 hover:transform hover:scale-105 transition-all duration-500 font-[Rajdhani] upperca"
                imgUrl={buttonIcon}
              >
                reservation
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image src={corporateImage} alt="Corporate" />
          <div className="absolute flex justify-around w-full items-center inset-x-0 bottom-9">
            <h2 className="text-2xl md:text-4xl">birthday party</h2>
            <Link href={"/corporate"}>
              <Button
                className="text-black hover:text-white mt-5 hover:transform hover:scale-105 transition-all duration-500 min-w-10  font-[Rajdhani] upperca"
                imgUrl={buttonIcon}
              >
                reservation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoParty;
