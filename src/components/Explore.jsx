import React from "react";

export const Explore = () => {
  return (
    <div className="flex flex-col items-center md:w-full">
      <div className="flex md:w-3/5 w-10/12 flex-col items-center md:pt-16 pt-10">
        <div className="mb-5 rounded-full bg-PrimeOne p-1.5 text-xs font-extrabold">
          Explore us
        </div>
        <div className="md:mb-8 mb-5 text-center md:text-5xl text-3xl font-bold text-white">
          Our wide variety of courses
        </div>
        <div className="mb-5 text-center text-base text-gray-400">
          Explore our different courses designed to help you pick a skill and
          master it
        </div>
      </div>
    </div>
  );
};
