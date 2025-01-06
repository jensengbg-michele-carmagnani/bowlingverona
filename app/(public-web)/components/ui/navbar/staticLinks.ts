export interface MenuItem {
  label: string;
  href: string;
  disabled: boolean;
}

export const MENUITEMS: MenuItem[] = [
  { label: "Home", href: "/", disabled: false },
  { label: "About Us", href: "/aboutus", disabled: false },
  { label: "Menu", href: "/menu", disabled: false },
  { label: "Birthday", href: "/birthday", disabled: false },
  { label: "Corporate", href: "/corporate", disabled: false },
  { label: "Reservation", href: "/reservation", disabled: false },
];
