import React from "react";

function Getstarted() {
  return (
    <div className=" mt-5  flex w-full justify-center p-4">
      <div className="flex w-full flex-col items-center justify-evenly gap-x-8 rounded-xl bg-PrimeOne md:w-10/12 md:flex-row">
        <div className="h-50 flex justify-around p-3 md:my-8 md:ml-8 md:w-1/2">
          <div className="flex flex-col justify-around text-black">
            <div className="flex flex-col gap-y-4">
              <p className="text-center text-2xl font-extrabold md:text-4xl">
                Read to start learning with Skolar?
              </p>
              <p className="text-center font-light">
                Our wide database of learners include candidates that have
                settled into major companies like Amazon.
              </p>
            </div>
          </div>
        </div>
        <div className="my-4 h-80 w-10/12 md:my-8 md:mr-8 md:h-72 md:w-1/2">
          <div className="flex h-full w-full flex-col justify-between">
            <div className="flex h-36 flex-col justify-evenly md:h-16 md:flex-row md:justify-center">
              <div className="relative md:w-1/2 ">
                <input
                  type="text"
                  className="h-12 w-full rounded-xl p-2 md:h-16 md:w-11/12"
                  placeholder="Name"
                />
              </div>
              <div className="relative text-end md:w-1/2 ">
                <input
                  type="text"
                  className="h-12 w-full rounded-xl p-2 md:h-16 md:w-11/12"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="relative ">
              <input
                type="text"
                className="h-24 w-full rounded-xl p-2 md:h-28"
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
