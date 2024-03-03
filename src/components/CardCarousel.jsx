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
  console.log(data);
  return (
    <Carousel className="">
      <CarouselContent>
        {data.map((card, index) => (
          <div className="pl-40" key={index}>
            <CourseCard
              image={card.image}
              CourseName={card.courseName}
              enrollNo={card.enrollNo}
            />
          </div>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
