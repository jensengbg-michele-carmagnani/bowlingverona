"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PoolsPrices = {
  weekly: number[];
  weekend: number[];
};

export const poolsPrices: PoolsPrices[] = [
  {
    weekly: [13],
    weekend: [13],
  },
];

export const columnsPools: ColumnDef<PoolsPrices>[] = [
  {
    accessorKey: "weekly",
    header: "Lunedi-Giovedí",
    cell: ({ row }) =>
      row.original.weekly.map((price, index) => (
        <div className="" key={index}>
          {
            <div className="text-center flex items-baseline justify-center">
              <span className="pr-2 items-end">1 H</span>
              <div className="flex-1 border-b border-dotted border-black mx-2"></div>
              <span className="pl-2">€{price.toFixed(2)}</span>
            </div>
          }
        </div>
      )),
  },
  {
    accessorKey: "weekend",
    header: "Venerdi-Domenica",
    cell: ({ row }) =>
      row.original.weekly.map((price, index) => (
        <div className="" key={index}>
          {
            <div className="text-center flex items-baseline justify-center">
              <span className="pr-2 items-end">1 H</span>
              <div className="flex-1 border-b border-dotted border-black mx-2"></div>
              <span className="pl-2">€{price.toFixed(2)}</span>
            </div>
          }
        </div>
      )),
  },
];
