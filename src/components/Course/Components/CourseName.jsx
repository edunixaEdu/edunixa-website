import React from "react";

function CourseName() {
  return (
    <div className="w-full">
      <div className="mx-20 flex h-80 flex-col justify-center rounded bg-blue-600 px-16">
        <div className="w-1/2 text-4xl font-bold text-white">
          Data Structure and Algorithms - A DSA training program by Skolar
        </div>
        <div className="my-8 text-xl text-white">
          Enrolling yourself in one of our programs is the easiest thing ever.
        </div>
        <div className="flex w-1/3 justify-between">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="mx-2 text-white">498 Enrolled</div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="mx-2 text-white">4.9/5</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseName;
