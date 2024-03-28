import React from "react";

function CourseImage() {
  return (
    <>
      <div className="lg:absolute flex flex-col right-40 top-28 rounded-2xl bg-gray-800 mx-5 my-2 lg:m-0 lg:bg-PrimeTwo p-8 lg:p-4">
        <img
          src="https://www.skolar.in/static/media/courses/dsa.png"
          alt="course-img"
          className="lg:h-60"
        />
        <div className="sticky top-10">
          <div className="my-4 text-4xl font-bold text-white">₹13,000</div>
          <div className="my-4 rounded-md  bg-PrimeOne p-3 lg:flex lg:flex-1 lg:justify-center">
            <a
              href="#"
              className="font-semibold leading-6 text-black text-gray-900"
            >
              Enroll now
            </a>
          </div>
          <div className="my-4 rounded-md bg-PrimeOne p-3  lg:flex lg:flex-1 lg:justify-center  ">
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
