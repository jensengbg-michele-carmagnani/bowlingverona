import { unstable_flag as flag } from "@vercel/flags/next";

export const showReservationForm = flag({
  key: "show-reservation-form",
  description: "Show reservation form",
  decide: () => {
    return process.env.FLAGS_SECRET === "1" || false; // Fallback to false if undefined
  },
});
