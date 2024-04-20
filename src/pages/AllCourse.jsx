import React from 'react';
import { Explore } from '@/components/Explore';
import { CourseCard } from '@/components/CourseCard';
import { data } from '@/data/Data';
import { useNavigate } from 'react-router-dom';
import Getstarted from '@/components/Getstarted';

export const AllCourse = () => {
  const navigate = useNavigate();

  const handleClick = (linkPage) => {
    navigate(`${linkPage}`);
  };

  return (
    <div className="mb-5 flex w-full justify-center">
      <div className="flex flex-col items-center justify-center md:w-10/12">
        <Explore />
        <div className="flex flex-wrap">
          {data.map((card, index) => (
            <div
              key={index}
              className="mb-5 h-auto w-full md:w-1/3"
              onClick={() => handleClick(card.LinkPage)}>
              <CourseCard
                image={card.image}
                CourseName={card.courseName}
                enrollNo={card.enrollNo}
              />
            </div>
          ))}
        </div>
        <Getstarted />
      </div>
    </div>
  );
};
