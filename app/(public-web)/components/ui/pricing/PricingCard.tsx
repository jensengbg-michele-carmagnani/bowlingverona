
import Image from "next/image";
import { FC } from "react";
import { PriceHeader } from "./PriceHeader";
import { PriceItem } from "./PriceItem";
import { PricingCardProps } from "./types";

const PricingCard: FC<PricingCardProps> = ({
  title,
  subtitle,
  label,
  headerImage,
  footerImage,
  price,
  menuItems,
  className,
}) => {
  return (
    <article
      className={`pb-3.5 text-white rounded-3xl border border-solid bg-neutral-900 md:max-w-[415px] font-[DomCasualD] ${className} `}
    >
      <header className="flex flex-col px-16 py-8 w-full text-3xl text-center min-h-[133px]">
        <Image
          src={headerImage}
          alt=""
          width={450}
          height={133} // or any default height value
          className="object-contain absolute top-2 left-1/2 -translate-x-1/2 bg-no-repeat z-10 max-w-[350px] md:max-w-[450px] h-[133px]"
          priority
          style={{ width: "auto", height: "auto" }}
        />
        <h1 className="relative z-10 ">
          <span className="text-white uppercase">{title[0]}</span>
          <span className="text-white">{title.slice(1)}</span>
          {subtitle && <span className="text-white"> {subtitle}</span>}
        </h1>
      </header>
      <section className="flex flex-col items-start px-10 mt-6 w-full text-xl relative">
        <PriceItem label={label ?? ""} price={price ?? ""} />

        <div className="shrink-0 mt-4 max-w-full border border-solid border-white border-opacity-30 w-[296px]" />

        <h2 className="mt-3.5 text-2xl uppercase">This offer includes</h2>

        <div className="flex flex-col gap-2.5 ">
          {menuItems.map((item, index) => (
            <PriceHeader key={index} {...item} />
          ))}
        </div>

        <Image
          src={footerImage}
          alt="bowling img"
          width={140}
          height={94}
          className="object-fit mt-2.5 ml-auto"
          style={{ width: "auto", height: "auto" }}
        />
      </section>
    </article>
  );
};
export default PricingCard;
