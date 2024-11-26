import "@/app/globals.css";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="rajdhani dom-casual" lang="en">
      <body>
        <div className="max-w-2xl mx-auto text-black h-screen  ">
          <div className=" flex justify-center items-center h-3/4 w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
