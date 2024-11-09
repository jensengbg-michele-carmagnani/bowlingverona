import React from "react";
import menuListImage from "@/public/assets/shape_image/menu-bg-image.png";
type Props = {};

const MenuFlyer = (props: Props) => {
  return (
    <div>
      <div
        className=""
        style={{ backgroundImage: `url(${menuListImage}})` }}
      ></div>
      <div></div>
    </div>
  );
};

export default MenuFlyer;
