"use client";

// import { Bars3Icon } from "@heroicons/react/20/solid";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "@/public/assets/ICON/logo_mini.png";
import Link from "next/link";
import { menuItems } from "./mobileStatic"; // Adjust the import path as needed
import menu_mobile_icon from "@/public/assets/ICON/menu_mobile_bars.svg";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the dropdown menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    // Check if the clicked target is outside the menu and button
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for pointer events (covers both mouse and touch)
    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      // Clean up the event listener on unmount
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sm:visible md:hidden  absolute inset-6 z-50" ref={menuRef}>
      {/* Menu button */}
      <nav className="flex justify-between items-center ">
        {/* Icon */}

        <Link className="block" href="/">
          <Image src={Logo} alt="logo" width={50} height={50} />
        </Link>

        {/* Button */}
        <button
          onClick={toggleMenu}
          className="focus:outline-none flex items-center px-3 py-2 text-white hover:text-orange-500 hover:border-orange-500"
        >
          {/* Menu icon */}
          <Image
            src={menu_mobile_icon}
            alt="menu"
            width={25}
            height={25}
            className="text-white"
          />
        </button>
      </nav>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="w-[80%] absolute top-25 right-3 bg-[#2C2C2C] text-white py-2 rounded shadow-lg z-50">
          <ul className=" space-y-10 ">
            {menuItems.map((item, index) => (
              <a
                href={item.href}
                key={index}
                className="block px-4 py-2 hover:bg-gray-700 text-3xl"
              >
                {item.name}
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
