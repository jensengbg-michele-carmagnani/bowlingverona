"use client";

import React from "react";
import { listBucketObjects, S3Object } from "@/app/(public-web)/home_actions";
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
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const fetchBthPics = async () => {
      // Fetch pictures from the S3 bucket
      const BthPics = (await listBucketObjects(
        "picture_website",
        "birthday/"
      )) as S3Object[];
      if (BthPics) {
        // Filter pictures whose keys contain "_cake" and create links for them
        const filteredPics = BthPics.filter((pic) => pic.Key.includes("_cake"))
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

  const handleCardClick = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      console.log("Card clicked:", card);
    }
  };

  return (
    <div className="carousel-container">
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="horizontal"
        className="mx-auto w-[80%] md:w-[90%] bg-[#2C2C2C] rounded-md snap-x"
      >
        <CarouselContent className=" p-5 md:p-10  w-full">
          {CarouselPics.map((url, index) => (
            <CarouselItem
              key={index}
              className="basis-72 md:basis-1/3 lg:basis-1/5 "
            >
              <Card
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                image={url}
                className="border borde focus:border focus:border-orange-500 cursor-pointer aspect-video  p-10 bg-white"
                onClick={() => handleCardClick(index)}
              >
                <CardContent className="flex  items-start justify-between ">
                  <div className="">torta</div>
                  <span className="text-lg font-semibold">€ 25</span>
                </CardContent>
                <CardFooter className="justify-center"></CardFooter>
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
