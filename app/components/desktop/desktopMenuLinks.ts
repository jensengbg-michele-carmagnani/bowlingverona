// mobileStatic.ts

export interface MenuItem {
  label: string;
  href: string;
}

export const MENUITEMS: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/aboutus" },
  { label: "Menu", href: "/about" },
  { label: "Birthday", href: "/birthday" },
  { label: "Corporate", href: "/corporate" },
  { label: "Reservation", href: "/reservation" },
];
