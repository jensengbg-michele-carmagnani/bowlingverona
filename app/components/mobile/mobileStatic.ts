// mobileStatic.ts

export interface MenuItem {
  name: string;
  href: string;
}

export const menuItems: MenuItem[] = [
  { name: "Home", href: "/home" },
  { name: "About Us", href: "/aboutus" },
  { name: "Menu", href: "/about" },
  { name: "Birthday", href: "/birthday" },
  { name: "Corporate", href: "/corporate" },
  { name: "Reservation", href: "/reservation" },
];
