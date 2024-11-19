import { FC } from "react";
import Image from "next/image";
import { MenuItemProps } from "./types";

export const PriceHeader: FC<MenuItemProps> = ({ icon, text, alt }) => {
  console.log(icon);
  return (
    <div>
      <div className="flex gap-2 mt-2.5 uppercase">
        <Image
          src={icon}
          alt={alt || ""}
          width={17}
          height={17}
          className="object-contain shrink-0 "
        />
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
};
