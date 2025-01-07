import "@/app/globals.css";
import HeaderAuth from "@/components/header-auth";
import logo from "@/public/assets/ICON/logo_mini.png";
import Image from "next/image";
import Link from "next/link";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="rajdhani dom-casual" lang="en">
      <body>
        <div>
          <div className="w-full mx-auto max-w-5xl text-sm py-2 flex justify-between items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="home"
                aria-label="logo"
                className="h-14 w-14"
              />
            </Link>
            <HeaderAuth />
          </div>
        </div>
        <hr className=" mt-1 border-t-[#2A2A2A]" />
        <div className="max-w-2xl mx-auto text-black h-screen  ">
          <div className=" flex justify-center items-center h-3/4 w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
