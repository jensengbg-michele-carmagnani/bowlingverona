"use cliente";
import React from "react";
import MobileMenu from "@/app/(public)/components/ui/navbar/MobileMenu";
import DesktopMenu from "@/app/(public)/components/ui/navbar/DesktopMenu";

const Navbar = () => {
  return (
    <header className="flex justify-center items-center sticky top-0 left-0 w-screen z-50 ">
      <MobileMenu />
      <DesktopMenu />
    </header>
  );
};

export default Navbar;
