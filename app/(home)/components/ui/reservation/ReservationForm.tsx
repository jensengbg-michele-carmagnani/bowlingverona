"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { InputField } from "./InputField";
import { DatePicker } from "./DatePicker";
import { reservationSchema, ReservationFormData } from "./types";
import { Button } from "@/components/ui/button";
import buttonIcon from "@/public/assets/ICON/Eclips_button_icon.svg";
import CakeCarousel from "../../home/birthday-section/CakeCarousel";

const ReservationForm: React.FC = () => {
  console;
  const form = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      time: "",
      guests: 8,
      cake: "",
    },
  });

  const onSubmit = (data: ReservationFormData) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-6xl mx-auto "
      >
        <section className="flex flex-col px-11 py-12 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full rounded-lg">
          <header className="flex flex-wrap gap-5 justify-between max-w-full mx-auto">
            <div className="flex flex-col gap-7 items-center  text-lg text-center text-amber-500 uppercase whitespace-nowrap tracking-[2px]">
              <div className="flex justify-center items-center gap-3 w-full">
                <div className="shrink-0 self-stretch my-auto h-px border border-amber-500 border-solid w-[58px]" />
                <div className="self-stretch basis-auto">reservation</div>
                <div className="shrink-0 self-stretch my-auto h-px border border-amber-500 border-solid w-[58px]" />
                <div className="flex flex-col pl-8 mt-3 max-md:pl-5"></div>
              </div>
              <h1 className="self-start text-4xl text-white uppercase tracking-[2px]">
                reservation
              </h1>
            </div>
          </header>

          <div className="flex flex-wrap md:flex-nowrap gap-5 mt-10 text-2xl tracking-wide leading-none text-stone-300  w-full">
            <div className="space-y-4 w-full">
              <InputField label="First Name" name="firstName" required />
              <InputField label="Last Name" name="lastName" required />
            </div>
            <div className="space-y-4 w-full">
              <InputField label="Address" name="address" required />
              <InputField label="Phone" name="phone" required />
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-5 mt-10 w-full space-y-4 ">
            <div className="md:w-1/2 w-full">
              <InputField label="Time" name="time" required type="time" />
            </div>
            <div className="md:w-1/2 w-full">
              <DatePicker label="Requested Date" name="date" required />
            </div>
          </div>
          <div className="md:w-1/2 w-full pt-10">
            <InputField
              label="Number of Guests"
              name="guests"
              type="number"
              required
            />
          </div>
          <div className="mt-10 w-full ">
            <InputField label="Cake" name="cake" required devider={false} />
            <CakeCarousel />
          </div>

          <Button
            className="text-black hover:text-white mt-5 hover:transform hover:scale-105 transition-all duration-500 capitalize"
            imgUrl={buttonIcon}
          >
            next
          </Button>
        </section>
      </form>
    </Form>
  );
};
export default ReservationForm;
