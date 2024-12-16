import * as React from "react";
import { Input } from "@/components/ui/input";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputFieldProps } from "./types";
import { Divider } from "./Divider";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  required,
  type = "text",
  devider = true,
}) => {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col flex-1 grow shrink-0 basis-0 w-full">
          <FormLabel className="self-start text-2xl tracking-wide leading-none text-stone-300">
            <span className="font-medium">{label}</span>
            {required && (
              <span className="pl-5 text-sm text-red-600">(required)</span>
            )}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              type={type}
              className={`bg-transparent border-none focus:border-amber-500 w-full ${
                !field.value && "text-muted-foreground"
              }`}
              onChange={(e) => {
                const value = e.target.value;
                field.onChange(type === "number" ? Number(value) : value);
              }}
            />
          </FormControl>
          <FormMessage />
          {devider && <Divider width="w-full" />}
        </FormItem>
      )}
    />
  );
};
