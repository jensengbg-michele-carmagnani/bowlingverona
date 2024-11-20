import { StaticImageData } from "next/image";

/**
 * This code was generated by Builder.io
 */
export interface MenuItemProps {
  icon: string;
  text: string;
  alt?: string;
}

export interface PriceItemProps {
  label: string;
  price: string;
}

export interface PricingCardProps {
  title: string;
  subtitle?: string;
  label?: string;
  headerImage: StaticImageData;
  footerImage: StaticImageData;
  price: string;
  className?: string;
  menuItems: Array<{
    icon: string;
    text: string;
    alt?: string;
  }>;
}