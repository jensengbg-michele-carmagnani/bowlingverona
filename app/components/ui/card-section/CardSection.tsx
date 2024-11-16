import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CardSectionProps {
  title: string;
  subtitle: string;
  content: string;
  linkHref?: string;
  linkText?: string;
  mainImageSrc: string;
  miniImageSrc?: string;
  mainImageWidth?: number;
  mainImageHeight?: number;
  miniImageWidth?: number;
  miniImageHeight?: number;
  highlightColor?: string;
  buttonIcon?: string;
}

const CardSection: React.FC<CardSectionProps> = ({
  title,
  subtitle,
  content,
  linkHref,
  linkText,
  mainImageSrc,
  miniImageSrc,
  mainImageHeight,
  mainImageWidth,
  miniImageHeight,
  miniImageWidth,

  highlightColor = "orange-400",
  buttonIcon,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 font-[Rajdhani] px-7 md:px-0 pt-5 md:pt-0 gap-5">
      {/* Image Section */}
      <div className="mx-auto relative">
        {/* Mini Image */}
        {miniImageSrc && (
          <Image
            src={miniImageSrc}
            alt={`${subtitle} mini image`}
            width={miniImageWidth}
            height={miniImageHeight}
            className={`absolute z-10 transform -translate-x-5 -translate-y-5 md:-translate-x-10 md:translate-y-64 border border-${highlightColor} rounded-sm`}
          />
        )}
        {/* Main Image */}
        <Image
          src={mainImageSrc}
          alt={`${subtitle} main image`}
          width={mainImageWidth}
          height={mainImageHeight}
          className="border rounded-sm md:transform md:translate-y-1/3"
        />
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col items-center justify-center gap-5 transform translate-y-20 md:mt-16">
        {/* Subtitle and Highlight Line */}
        <div className="flex gap-2 items-center uppercase self-center md:self-start">
          <div className={`h-[1px] w-[40px] bg-${highlightColor}`} />
          <div className={`text-${highlightColor} text-base`}>{subtitle}</div>
        </div>

        {/* Title and Description */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-5xl uppercase font-light">{title}</h2>
          <p className="text-xl font-extralight md:font-light md:pr-10 md:px-2 md:max-h-80 max-h-64 overflow-y-auto font-[Rajdhani]">
            {content}
          </p>

          {/* Link Button */}
          {linkText && (
            <div className="flex justify-center md:justify-start w-full">
              <Link href={linkHref || "#"}>
                <Button
                  className="text-black hover:text-white mt-5 hover:transform hover:scale-105 transition-all duration-500 capitalize"
                  imgUrl={buttonIcon}
                >
                  {linkText}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
