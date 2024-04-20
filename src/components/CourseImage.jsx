import React from 'react';

function CourseImage({ data }) {
  return (
    <>
      <div className="lg:absolute flex flex-col right-40 top-28 rounded-2xl mx-5 my-2 lg:m-0 bg-card p-4 lg:p-4">
        <img src={data.image} alt="course-img" className="lg:h-60" />
        <div className="sticky top-10">
          <div className="my-4 text-4xl font-bold text-white">₹{data.price}</div>
          <div className="my-4 rounded-md  bg-PrimeOne p-3 lg:flex lg:flex-1 lg:justify-center">
            <a href={data.formLink} className="font-semibold leading-6 text-black text-gray-900">
              Enroll now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseImage;
