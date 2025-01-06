"use cliente";
<<<<<<< HEAD
import DesktopMenu from "@/app/(public-web)/components/ui/navbar/DesktopMenu";
import MobileMenu from "@/app/(public-web)/components/ui/navbar/MobileMenu";

const Navbar = () => {
  return (
    <header className="flex justify-center items-center sticky top-0 left-0 w-screen z-50 ">
=======
import React from "react";
import MobileMenu from "@/app/(public-web)/components/mobile/MobileMenu";
import DesktopMenu from "@/app/(public-web)/components/DesktopMenu";

const Navbar = () => {
  return (
    <header className="max-w-7xl flex justify-center items-center absolute top-0 left-0 w-screen">
>>>>>>> develop
      <MobileMenu />
      <DesktopMenu />
    </header>
  );
};

export default Navbar;
