import React from "react";
import InfoCard from "../../ui/InfoCard";
import Image from "next/image";
import menuSandwich from "@/public/assets/shape_image/menu-sandwichjpg.jpg";
import { menuStatic } from "./menu-static";
import buttonIcon from "@/public/assets/ICON/Eclips_button_icon.svg";

const Menu = () => {
  return (
    <div className=" mx-auto my-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
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
            className="object-cover h-full w-full rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
