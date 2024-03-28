import React from "react";
import { Explore } from "../Home/Components/Explore";
import { CourseCard } from "../Home/Components/CourseCard";
import { data } from "../../data/courseData";
import { useNavigate } from "react-router-dom";
import Getstarted from "../Home/Components/Getstarted";

export const CoursePage = () => {
  const navigate = useNavigate();

  const handleClick = (linkPage) => {
    navigate(`${linkPage}`);
  };

  return (
    <div className="mb-5 flex w-full justify-center">
      <div className="flex w-10/12 flex-col items-center justify-center md:px-20">
        <Explore />
        <div className="flex flex-wrap">
          {data.map((card, index) => (
            <div
              key={index}
              className="mb-5 h-auto w-full md:w-1/3"
              onClick={() => handleClick(card.LinkPage)}
            >
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
