import { unstable_flag as flag } from "@vercel/flags/next";

export const showReservationForm = flag({
  key: "show-reservation-form",
  decide: () => process.env.NEXT_PUBLIC_SHOW_RESERVATION_FORM === "1",
});
