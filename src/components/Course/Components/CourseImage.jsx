import React from "react";

function CourseImage() {
  return (
    <>
      <div className="absolute right-40 top-28 h-full rounded-2xl bg-PrimeTwo p-4">
        <img
          src="https://www.skolar.in/static/media/courses/dsa.png"
          alt="course-img"
          className="h-60"
        />
        <div className="sticky top-10">
          <div className="my-4 text-4xl font-bold text-white">₹13,000</div>
          <div className="my-4 hidden rounded-md  bg-PrimeOne p-3 lg:flex lg:flex-1 lg:justify-center">
            <a
              href="#"
              className="font-semibold leading-6 text-black text-gray-900"
            >
              Enroll now
            </a>
          </div>
          <div className="my-4 hidden rounded-md bg-PrimeOne p-3  lg:flex lg:flex-1 lg:justify-center  ">
            <a
              href="#"
              className="font-semibold leading-6 text-black text-gray-900"
            >
              Pre Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseImage;
