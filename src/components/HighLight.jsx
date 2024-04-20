import React from "react";
import medal from "@/assets/medal.svg";
export const HighLight = () => {
  return (
    <div className="flex flex-col items-center md:w-full ">
      <div className="flex w-10/12 flex-col items-center md:w-3/5">
        <div className="mb-5 rounded-full bg-PrimeOne p-1.5 text-xs font-extrabold">
          Lets get introduced
        </div>
        <div className="mb-8 text-center text-3xl font-bold text-white md:text-5xl">
          An unmatched skill development program, meant for all
        </div>
        <div className="mb-5 text-center text-base text-gray-400">
          Skolar, unlike regular skill development, also introduces you to
          relevant opportunities in your career. This means extensive training
          programs, comprehensive skill development programs, regular placement
          training, and of course, resources to help you prepare.{" "}
        </div>
        <div className="mb-5 flex items-center justify-center text-center  text-base text-white">
          <img src={medal} alt="something" className="m-1 h-7 text-white" />
          <span>15+ comprehensive courses</span>
        </div>
        <div className="mb-5 flex items-center justify-center text-center  text-base text-gray-100">
          <img src={medal} alt="something" className="m-1 h-7 text-white" />
          <span>Skill development programs for all domains</span>
        </div>
      </div>
    </div>
  );
};
