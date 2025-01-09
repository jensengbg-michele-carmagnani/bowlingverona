import NextBreadcrumb from "@/app/(public-web)/components/ui/breadcrumb/BreadCrumb";
import React from "react";

const HeroSection: React.FC<{
  backgroundImage: string;
  height?: string;
  title: string;
  subtitle: string;
}> = ({ backgroundImage, height }) => (
  <section>
    <div
      className="bg-no-repeat bg-center bg-cover flex justify-center h-full items-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: height ?? "500px",
      }}
    >
      <NextBreadcrumb
        homeElement={"Home"}
        separator={<span> / </span>}
        containerClasses="capitalize absolute bottom-50 left-1/2 transform -translate-x-1/2 w-full font-[Rajdhani] font-light text-4xl w-full flex justify-center items-center"
        listClasses="text-center transform hover:animate-pulse"
        activeClasses="text-orange-400 cursor-none"
      />
    </div>
  </section>
);

export default HeroSection;
