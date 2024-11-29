"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CakeCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="horizontal"
      className="mx-auto w-[80%] md:w-[90%] "
    >
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 md:basis-1/3 lg:basis-1/5"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-10">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CakeCarousel;
