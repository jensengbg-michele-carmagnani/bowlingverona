import { z } from "zod";

export const reservationSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  phone: z.string().optional(),
  time: z.string().min(1, { message: "Time is required" }),
  date: z.date({ required_error: "Date is required" }),
  guests: z.number().min(8, { message: "Number of guests is required" }),
  cake: z.string().min(1, { message: "Cake is required" }),
});

export type ReservationFormData = z.infer<typeof reservationSchema>;

export interface InputFieldProps {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  type?: string;
  devider?: boolean;
}

export interface DatePickerProps {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
}

export interface DividerProps {
  width?: string;
}
