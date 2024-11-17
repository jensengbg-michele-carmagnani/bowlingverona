// mobileStatic.ts

export interface MenuItem {
  name: string;
  href: string;
}

export const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutus" },
  { name: "Menu", href: "/menu" },
  { name: "Birthday", href: "/birthday" },
  { name: "Corporate", href: "/corporate" },
  { name: "Reservation", href: "/reservation" },
];
