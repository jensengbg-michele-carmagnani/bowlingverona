"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/ICON/bowlingIcon.png";
import buttonIcon from "@/public/assets/ICON/Eclips_button_icon.svg";

import { MENUITEMS } from "./desktopMenuLinks";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { isActiveLink } from "@/lib/isActiveLink";
import { createClient } from "@/utils/supabase/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "@/typing";

const DesktopMenu: React.FC = () => {
  const [user, setUser] = React.useState<User | null>(null);

  const pathname = usePathname();
  const supabase = createClient();

  React.useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user && (data.user as unknown as User);
      setUser(user);
    };
    fetchUser();
  }, [supabase]);

  const signOut = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    setUser(null);

    if (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="hidden md:flex justify-center items-center py-10 px-6 absolute top-0 left-0 z-40 w-screen">
      <nav className="flex justify-center items-center 2xl:gap-5 relative">
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
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`${
                activeLink ? "text-orange-400" : ""
              } cursor-pointer`}
            >
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
      </nav>
    </div>
  );
};

export default DesktopMenu;
