import * as React from "react";
import { DividerProps } from "./types";

export const Divider: React.FC<DividerProps> = ({ width = "w-[660px]" }) => {
  return (
    <div
      className={`shrink-0 mt-11 max-w-full h-px border border-solid border-white border-opacity-30 ${width} max-md:mt-10`}
      role="separator"
    />
  );
};
