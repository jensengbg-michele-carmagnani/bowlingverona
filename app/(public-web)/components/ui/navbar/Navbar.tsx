"use client";
import DesktopMenu from "@/app/(public-web)/components/ui/navbar/DesktopMenu";
import MobileMenu from "@/app/(public-web)/components/ui/navbar/MobileMenu";

const Navbar = () => {
  return (
    <header 
      className="flex justify-center items-center sticky top-0 left-0 w-screen z-50" 
      suppressHydrationWarning={true}
    >
      <MobileMenu />
      <DesktopMenu />
    </header>
  );
};

export default Navbar;
