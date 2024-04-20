import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { data } from '@/data/Data';
import { CourseCard } from './CourseCard';

export default function CardCarousel() {
  return (
    <div className="flex justify-center">
      <Carousel className="flex w-full max-w-sm justify-center sm:w-4/5 sm:max-w-full">
        <CarouselContent>
          {data.map((card, index) => (
            <CarouselItem className="text-center text-white md:basis-1/2 lg:basis-1/4" key={index}>
              <CourseCard
                image={card.image}
                CourseName={card.courseName}
                enrollNo={card.enrollNo}
                click={card.LinkPage}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex bg-white" />
        <CarouselNext className="hidden md:flex bg-white" />
      </Carousel>
    </div>
  );
}
