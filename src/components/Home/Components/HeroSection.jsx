import React from "react";
import photo from "../../../assets/demo.svg";
const HeroSection = () => {
  return (
    <div className="flex h-full w-full justify-center py-5 lg:p-20">
      <div className="flex h-full w-11/12 flex-col items-center justify-evenly  rounded-lg  border bg-PrimeOne shadow md:flex-row">
        <img
          className=" h-auto  rounded-t-lg p-4 md:h-auto md:w-1/3 md:rounded-none md:rounded-s-lg"
          src={photo}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal md:w-2/4">
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
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
