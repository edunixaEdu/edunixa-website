import React from "react";
import photo from "../assets/demo.svg";
const HeroSection = () => {
  return (
    <div className="flex justify-center w-full py-5 lg:p-20">
      <div className="flex h-2/3 w-11/12 flex-col items-center justify-evenly  rounded-lg  border bg-PrimeOne shadow md:flex-row">
        <img
          className=" h-auto  p-4 md:h-auto md:w-1/3 md:rounded-none md:rounded-s-lg rounded-t-lg"
          src={photo}
          alt=""
        />
        <div className="flex md:w-2/4 flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 md:text-5xl text-3xl font-bold tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-larger mb-3 text-gray-700 ">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
