import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { data } from "../data/courseData";
import { CourseCard } from "./CourseCard";

export default function CardCarousel() {
  return (
    <div className=" flex justify-center">
      <Carousel className="w-4/5">
        <CarouselContent>
          {data.map((card, index) => (
            <CarouselItem
              className="basis-1/4 text-center text-white"
              key={index}
            >
              <CourseCard
                image={card.image}
                CourseName={card.courseName}
                enrollNo={card.enrollNo}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
