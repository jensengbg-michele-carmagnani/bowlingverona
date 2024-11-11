import React from "react";
import menuListImage from "@/public/assets/shape_image/menu-bg-image.png";
import Image from "next/image";
import { bowlingPrices } from "../../ui/tables/Column";
import { BowlingTable } from "../../ui/tables/BowlingTable";
import { columns } from "../../ui/tables/Column";
import headermenuimage from "@/public/assets/shape_image/header-menu.png";

const MenuFlyer = async () => {
  return (
    <div
      className={`relative bg-no-repeat bg-center bg-cover max-w-5/6 mx-auto`}
      style={{
        backgroundImage: `url(${menuListImage?.src})`,
        height: "100vh",
        width: "90%",
      }}
    >
      <Image
        src={headermenuimage}
        alt="menu"
        style={{
          width: "90%",
          height: "auto",
        }}
      />
      <div className="w-5/6 mx-auto space-y-3">
        <div>
          <h2 className="text-center text-5xl w-full font-[DomCasualD] py-10 text-black text-shadow-outline uppercase">
            Hourly rate lanes
          </h2>
        </div>

        <BowlingTable data={bowlingPrices} columns={columns} />
      </div>
    </div>
  );
};

export default MenuFlyer;
