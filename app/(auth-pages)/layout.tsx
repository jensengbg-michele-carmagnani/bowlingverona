import "@/app/globals.css";
import HeaderAuth from "@/components/header-auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="rajdhani dom-casual" lang="en">
      <body>
        <div className="w-full mx-auto max-w-5xl  text-sm py-2">
          <HeaderAuth />
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
