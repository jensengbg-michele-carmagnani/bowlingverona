"use client";

import { getSEOTags } from "@/lib/seo";
import useScreenSize from "@/lib/useScreenWidth";
import headerMenuImg from "@/public/assets/shape_image/header-menu.png";
import menuListHeader from "@/public/assets/shape_image/menu-list-header.png";
import menuListImg from "@/public/assets/shape_image/menu-list-img.png";
import Image from "next/image";
import React from "react";
import MenuItem from "./MenuItem";
import {
  alcoliciECocktailItems,
  caffetteriaItems,
  cibiVariItems,
  softDrinkItems,
} from "./menuStatic";

export const metadata = getSEOTags({
  title: "Menu - Bowling Verona",
  canonicalUrlRelative: "/menu",
});

const HeroSection: React.FC<{
  backgroundImage: string;
  height?: string;
  title: string;
  subtitle: string;
}> = ({ backgroundImage, height, title, subtitle }) => (
  <section>
    <div
      className="bg-no-repeat bg-center bg-cover h-full flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: height,
      }}
    >
      <div className="text-center">
        <h1 className="text-2xl capitalize">{title}</h1>
        <p className="text-2xl capitalize">{subtitle}</p>
      </div>
    </div>
  </section>
);

const Menu: React.FC = () => {
  const screenSize = useScreenSize();
  const isXs = screenSize === "xs";

  return (
    <div className="">
      <HeroSection
        backgroundImage={menuListHeader?.src}
        height={`${menuListHeader?.height}px`}
        title="Meenu"
        subtitle="Home / Menu"
      />

      <div
        className="relative bg-no-repeat bg-center bg-cover h-full pb-10 w-screen"
        style={{
          backgroundImage: `url(${menuListImg?.src})`,
        }}
      >
        <Image
          src={headerMenuImg.src}
          alt="menu"
          className="w-full"
          width={headerMenuImg.width}
          height={0}
        />

        <div className="md:w-5/6 md:mx-auto space-y-3 grid grid-cols-1 md:grid-cols-2 text-black mt-20 md:mt-40 mx-5">
          <div className="space-y-3 md:pr-10 relative">
            {!isXs && (
              <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-300" />
            )}
            <MenuItem
              title={caffetteriaItems.title}
              items={caffetteriaItems.items}
            />
            <MenuItem
              title={softDrinkItems.title}
              items={softDrinkItems.items}
            />
            <MenuItem title={cibiVariItems.title} items={cibiVariItems.items} />
          </div>

          <div className="space-y-4 md:pl-10">
            <MenuItem
              title={alcoliciECocktailItems.title}
              items={alcoliciECocktailItems.items}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
