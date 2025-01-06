"use client";

import Logo from "@/public/assets/ICON/bowlingIcon.png";
import buttonIcon from "@/public/assets/ICON/Eclips_button_icon.svg";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { isActiveLink } from "@/lib/isActiveLink";
import { User } from "@/typing";
import { createClient } from "@/utils/supabase/client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { MENUITEMS } from "./staticLinks";

const DesktopMenu: React.FC = () => {
  const [user, setUser] = React.useState<User | null>(null);
  const [isNavBg, setIsNavBg] = React.useState<boolean>(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Current pathname
  const pathname = usePathname();
  const supabase = createClient();

  /* Scroll direction hook */
  const scrollDirection = useScrollDirection();

  // Nav background transparency handler
  const bgNavTransparencyHandler = () => {
    if (scrollDirection === "down") {
      setIsNavBg(true);
    } else {
      setIsNavBg(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", bgNavTransparencyHandler);
    return () => {
      document.removeEventListener("scroll", bgNavTransparencyHandler);
    };
  });
  // Nav background transparency state
  const state = isNavBg ? "true" : "false";

  /**
   * Fetches the authenticated user from Supabase and sets the user state.
   * This effect runs once when the component mounts.
   */
  React.useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user && (data.user as unknown as User);
      setUser(user);
    };
    fetchUser();
  }, [supabase]);

  /**
   * Signs out the current user using Supabase authentication.
   * Sets the user state to null upon successful sign out.
   * Logs an error message if sign out fails.
   */
  const signOut = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    setUser(null);

    if (error) {
      console.error(error.message);
    }
  };

  // Nav Animation Variants
  const navVariants = {
    true: {
      x: "0vw",
      opacity: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    false: {
      x: "0vw",
      backgroundColor: "rgba(128, 128, 128, 0.1)", // Slight gray background
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <div className="hidden md:flex justify-center items-center py-10 px-6 absolute top-0 left-0 z-40 w-screen">
      <motion.nav
        ref={scrollRef}
        initial={{ x: "100vw" }}
        animate={state}
        variants={navVariants}
        className="flex justify-center items-center 2xl:gap-5 relative"
      >
        {/* left side */}
        {MENUITEMS.slice(0, 3).map((item) => {
          const activeLink = isActiveLink(pathname, item.href);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`${
                activeLink ? "text-orange-400" : ""
              } cursor-pointer`}
            >
              <Button>{item.label}</Button>
            </Link>
          );
        })}
        <Link href="/" className="min-w-28 flex justify-center items-center">
          <Image src={Logo} alt="Bowling Logo" width={100} height={100} />
        </Link>
        {/* right side */}
        {MENUITEMS.slice(3).map((item, index) => {
          const activeLink = isActiveLink(pathname, item.href);
          const disabled = item.href === "/#" || item.href === "/#";

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`${
                activeLink ? "text-orange-400" : ""
              } ${disabled && "cursor-not-allowed"}`}
            >
              <Button
                className={
                  item.href === "/reservation" && !disabled
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
          );
        })}
        <div className="absolute top-[30%] -right-[10%]">
          {user && (
            <Popover>
              <PopoverTrigger>
                <Avatar className="border border-collapse hover:scale-95 cursor-pointer ">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent>
                <Button size={"sm"} onClick={signOut}>
                  Sign Out
                </Button>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </motion.nav>
    </div>
  );
};

export default DesktopMenu;
