import * as React from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { DatePickerProps } from "./types";

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  name,
  required,
}) => {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="flex gap-10 text-2xl tracking-wide leading-none text-stone-300">
            <CalendarIcon className="h-6 w-6" />
            <span className="grow shrink w-[221px]">
              <span className="font-medium">{label}</span>
              {required && (
                <span className="text-sm text-red-600 pl-5">(required)</span>
              )}
            </span>
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal bg-transparent border-none text-lg focus:border-orange-500",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "MM/dd/yyyy")
                  ) : (
                    <span className="flex gap-1.5 text-base  hover:text-gray-900">
                      <span className="grow">mm</span>
                      <span className="font-bold">/</span>
                      <span>dd</span>
                      <span className="font-bold">/</span>
                      <span>yyyy</span>
                    </span>
                  )}
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date < new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
