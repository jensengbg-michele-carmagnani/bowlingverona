"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/ICON/bowlingIcon.png";
import buttonIcon from "@/public/assets/ICON/Eclips_button_icon.svg";

import { Button } from "@/components/ui/button";

const DesktopMenu: React.FC = () => {
  return (
    <div className="hidden md:flex py-10 px-6">
      {/* Left Navigation */}
      <nav className="flex justify-center items-center gap-5">
        <Link href="/about">
          <Button>HOME</Button>
        </Link>
        <Link href="/about">
          <Button>ABOUT US</Button>
        </Link>
        <Link href="/menu">
          <Button>MENU</Button>
        </Link>

        {/* Logo */}
        <Link href="/" className=" min-w-28 flex justify-center items-center ">
          <Image src={Logo} alt="Bowling Logo" width={100} height={100} />
        </Link>

        {/* Right Navigation */}

        <Link href="/birthday">
          <Button>BIRTHDAY</Button>
        </Link>
        <Link href="/corporate">
          <Button>CORPORATE</Button>
        </Link>
        <Link href="/reservation">
          <Button className="text-black" imgUrl={buttonIcon}>
            reservation
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default DesktopMenu;
