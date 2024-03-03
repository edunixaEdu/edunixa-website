import React from "react";
export const CourseCard = ({ image, CourseName, enrollNo }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex h-96 w-80 flex-col justify-start rounded-xl bg-card p-5 text-white md:h-80 md:w-8/12">
        <img src={image} alt="" className="mb-10 h-auto w-72 md:mb-5" />
        <p className="mb-2 text-xl font-semibold">{CourseName}</p>
        <p className="mb-3 text-gray-400">{enrollNo}</p>
      </div>
    </div>
  );
};
