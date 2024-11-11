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
      className={`relative bg-no-repeat bg-center bg-cover `}
      style={{
        backgroundImage: `url(${menuListImage?.src})`,
        height: `${menuListImage?.height / 1.3}px`,
      }}
    >
      <Image src={headermenuimage} alt="menu" className="w-full" />
      <div className=" w-[95%] md:w-5/6 mx-auto space-y-3">
        <div>
          <h2 className="text-center text-5xl w-full font-[DomCasualD] py-10 text-black text-shadow-outline uppercase">
            Hourly rate lanes
          </h2>
        </div>

        <TablePrices data={bowlingPrices} columns={columnsBowling} />
      </div>
      <div className=" w-[95%] md:w-5/6 mx-auto space-y-3">
        <div>
          <h2 className="text-center text-5xl w-full font-[DomCasualD] py-10 text-black text-shadow-outline uppercase">
            Pools
          </h2>
        </div>

        <TablePrices data={poolsPrices} columns={columnsPools} />
      </div>
    </div>
  );
};

export default MenuFlyer;
