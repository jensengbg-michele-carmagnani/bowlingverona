import { useInView } from "framer-motion";
import { useRef } from "react";

export const useAnimationInView = () => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: false, amount: 0.3 });

  const itemAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: i * 0.8,
      },
    }),
  };
  return { itemRef, isInView, itemAnimation };
};
