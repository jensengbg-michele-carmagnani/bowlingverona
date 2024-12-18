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
        <div className="w-full max-w-5xl  text-sm py-2">
        </div>
        <div className="max-w-2xl h-screen mx-auto text-black ">
          <div className="bg-slate-400 p-10 rounded-md">{children}</div>
        </div>
      </body>
    </html>
  );
}

