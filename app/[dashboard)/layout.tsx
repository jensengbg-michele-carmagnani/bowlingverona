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
        <HeaderAuth />
        <div className="max-w-2xl h-screen mx-auto text-black ">
          <div className="bg-slate-400 p-10 rounded-md">{children}</div>
        </div>
      </body>
    </html>
  );
}
