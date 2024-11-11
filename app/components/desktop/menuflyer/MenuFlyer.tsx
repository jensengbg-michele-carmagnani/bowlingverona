import React from "react";
import menuListImage from "@/public/assets/shape_image/menu-bg-image.png";
import Image from "next/image";
import { bowlingPrices } from "../../ui/tables/ColumnBowling";
import { TablePrices } from "../../ui/tables/Table";
import { columnsBowling } from "../../ui/tables/ColumnBowling";
import { columnsPools, poolsPrices } from "../../ui/tables/ColumnPools";
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

        <TablePrices data={bowlingPrices} columns={columnsBowling} />
      </div>
      <div className="w-5/6 mx-auto space-y-3">
        <div>
          <h2 className="text-center text-5xl w-full font-[DomCasualD] py-10 text-black text-shadow-outline uppercase">
            Pools
          </h2>
        </div>

        <TablePrices data={poolsPrices} columns={columnsBowling} />
      </div>
    </div>
  );
};

export default MenuFlyer;
