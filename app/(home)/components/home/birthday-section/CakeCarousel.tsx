"use client";

import React from "react";
import { listBucketObjects, S3Object } from "@/app/(home)/home_actions";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { findAndCreateLink } from "@/utils/imageFinder";

const CakeCarousel = () => {
  const [CarouselPics, setCarouselPics] = React.useState<string[]>([]);

  React.useEffect(() => {
    const fetchBthPics = async () => {
      // Fetch pictures from the S3 bucket
      const pics = await listBucketObjects("picture_website", "Birthday/");

      if (pics) {
        // Filter pictures whose keys contain "_cake" and create links for them
        const filteredPics = pics
          .filter((pic) => pic.Key.includes("_cake"))
          .map((pic) => findAndCreateLink([pic], "_cake"))
          .filter((link): link is string => link !== undefined);

        // Update state with the filtered pictures
        if (filteredPics) {
          setCarouselPics(filteredPics);
        }
      }
    };
    fetchBthPics();
  }, []);

  return (
    <div className="carousel-container">
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="horizontal"
        className="mx-auto w-[80%] md:w-[90%] bg-[#2C2C2C] rounded-md snap-x"
      >
        <CarouselContent className=" p-10  w-full">
          {CarouselPics.map((url, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/5"
            >
              <Card
                image={url}
                className="border borde focus:border focus:border-orange-500 cursor-pointer "
              >
                <CardContent className="flex aspect-video items-center justify-center p-10">
                  <div className="">

                  </div>
                </CardContent>
                <CardFooter className=" justify-center">
                  <span className="text-lg font-semibold">€ 25</span>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CakeCarousel;
