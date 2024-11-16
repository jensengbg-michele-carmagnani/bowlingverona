"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/ICON/bowlingIcon.png";
import buttonIcon from "@/public/assets/ICON/Eclips_button_icon.svg";

import { MENUITEMS } from "./desktopMenuLinks";
import { Button } from "@/components/ui/button";

const DesktopMenu: React.FC = () => {
  console.log(buttonIcon.src);
  return (
    <div className="hidden md:flex justify-center items-center py-10 px-6 absolute top-0 left-0 z-40 w-screen">
      <nav className="flex justify-center items-center 2xl:gap-5">
        {/* left side */}
        {MENUITEMS.slice(0, 3).map((item, index) => (
          <Link key={index} href={item.href} className="cursor-pointer">
            <Button>{item.label}</Button>
          </Link>
        ))}
        <Link href="/" className="min-w-28 flex justify-center items-center">
          <Image src={Logo} alt="Bowling Logo" width={100} height={100} />
        </Link>
        {/* right side */}
        {MENUITEMS.slice(3).map((item, index) => (
          <Link key={index + 3} href={item.href} className="cursor-pointer">
            <Button
              className={
                item.href === "/reservation"
                  ? "text-black hover:text-white hover:transform hover:scale-105 transition-all duration-500"
                  : ""
              }
              imgUrl={
                index === MENUITEMS.slice(3).length - 1
                  ? buttonIcon?.src
                  : undefined
              }
            >
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default DesktopMenu;
