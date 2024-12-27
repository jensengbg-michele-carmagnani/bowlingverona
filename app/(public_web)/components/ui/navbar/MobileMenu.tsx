"use client";

import { isActiveLink } from "@/lib/isActiveLink";
import Logo from "@/public/assets/ICON/logo_mini.png";
import menu_mobile_icon from "@/public/assets/ICON/menu_mobile_bars.svg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MENUITEMS } from "./menuStatic";
import MobileFooter from "./MobileFooter";

const MobileMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [isClient, setIsClient] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the dropdown menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setCurrentPath(pathname); // Update state after mounting
  }, [pathname]);

  useEffect(() => {
    setIsClient(true); // Trigger animations after hydration
  }, []);

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

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu when a link is clicked
  };

  const menuAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        duration: 0.5, // Longer exit duration
        ease: "easeInOut",
        when: "afterChildren", // Wait for children to animate before fading container
      },
    },
  };

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    exit: {
      y: 50, // Move items further down on exit
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.32, 0, 0.67, 0], // Custom easing for smoother exit
      },
    },
  };

  return (
    <div
      className="sm:visible md:hidden fixed w-full top-0 z-40 p-8 "
      ref={menuRef}
    >
      {/* Menu button */}
      <nav className="flex justify-between items-center ">
        {/* Icon */}

        <Link className="block" href="/">
          <Image src={Logo} alt="logo" width={50} height={50} />
        </Link>

        {/* Button */}
        <button
          onClick={toggleMenu}
          className="focus:outline-none flex items-center px-3 py-2  text-white hover:text-orange-500 hover:border-orange-500"
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
      <AnimatePresence>
        {isOpen && isClient && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuAnimation}
          >
            <div className="fixed top-0 left-0 w-full h-screen bg-[#2C2C2C] text-white py-2 shadow-lg z-auto">
              <div className="p-10">
                <motion.h1
                  variants={itemAnimation}
                  className="text-4xl text-center uppercase font-[DomCasualD] font-light"
                >
                  <span className="text-orange-400">bowling verona</span>
                </motion.h1>
              </div>
              <div className="flex flex-col items-center justify-center mt-10 font-[Rajdhani]">
                <ul className="space-y-4">
                  {MENUITEMS.map((item, index) => {
                    const activeItems = isActiveLink(currentPath, item.href);
                    return (
                      <motion.li key={index} variants={itemAnimation}>
                        <Link
                          href={item.disabled ? "#" : item.href}
                          onClick={(e) => {
                            if (item.disabled) {
                              e.preventDefault();
                              return;
                            }
                            handleLinkClick();
                          }}
                          className={`block px-4 py-2 hover:bg-gray-700 text-3xl 
                            ${activeItems ? "text-orange-500" : ""}
                            ${item.disabled ? "opacity-50 cursor-not-allowed hover:bg-transparent" : ""}`}
                        >
                          <span>{item.label}</span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
                <MobileFooter />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
