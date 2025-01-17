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
  headerImage: string;
  footerImage: string;
  price: string;
  className?: string;
  menuItems: Array<{
    icon: string;
    text: string;
    alt?: string;
  }>;
}
