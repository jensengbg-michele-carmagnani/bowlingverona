"use cliente";
import React from "react";
import MobileMenu from "@/app/(public-web)/components/mobile/MobileMenu";
import DesktopMenu from "@/app/(public-web)/components/DesktopMenu";

const Navbar = () => {
  return (
    <header className="max-w-7xl flex justify-center items-center absolute top-0 left-0 w-screen">
      <MobileMenu />
      <DesktopMenu />
    </header>
  );
};

export default Navbar;