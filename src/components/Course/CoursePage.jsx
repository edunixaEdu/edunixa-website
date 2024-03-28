import React from "react";
import { Explore } from "../Home/Components/Explore";
import { CourseCard } from "../Home/Components/CourseCard";

export const CoursePage = () => {
  return (
    <div className="w-full px-20">
      <Explore />
      <div className=""></div>
      <CourseCard CourseName="Sabari" enrollNo="500" />
    </div>
  );
};
