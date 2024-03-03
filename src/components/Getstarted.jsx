import React from "react";

function Getstarted() {
  return (
    <div className=" flex w-full justify-center md:p-16 p-5">
      <div className="flex md:w-11/12 flex-col items-center justify-evenly gap-x-8 rounded-xl bg-PrimeOne md:flex-row">
        <div className="h-50 flex justify-around p-3 md:my-8 md:ml-8 md:w-1/2">
          <div className="flex flex-col justify-around text-black">
            <div className="flex flex-col gap-y-4">
              <p className="text-2xl font-extrabold md:text-4xl text-center">
                Read to start learning with Skolar?
              </p>
              <p className="font-light text-center">
                Our wide database of learners include candidates that have
                settled into major companies like Amazon.
              </p>
            </div>
          </div>
        </div>
        <div className="my-4 h-80 md:my-8 md:mr-8 md:h-72 md:w-1/2 w-10/12">
          <div className="flex h-full w-full flex-col justify-between">
            <div className="flex h-36 flex-col justify-evenly md:h-16 md:flex-row md:justify-center">
              <div className="relative md:w-1/2 ">
                <input
                  type="text"
                  className="h-12 rounded-xl md:h-16 md:w-11/12 p-2 w-full"
                  placeholder="Name"
                />
              </div>
              <div className="relative text-end md:w-1/2 ">
                <input
                  type="text"
                  className="h-12 rounded-xl md:h-16 md:w-11/12 p-2 w-full"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="relative ">
              <input
                type="text"
                className="h-24 w-full rounded-xl md:h-28 p-2"
                placeholder="Message"
              />
            </div>
            <button className="h-16 rounded-xl bg-black text-white">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getstarted;
