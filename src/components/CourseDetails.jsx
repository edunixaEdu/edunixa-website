import React from 'react';
import Accordicon from './Accordicon';
import Feedback from './Feedback';

function CourseDetails({ data }) {
  return (
    <div className="mx-6 lg:mx-20 my-10 lg:w-1/2 text-left text-white">
      <div className="my-4 text-3xl">Overview</div>
      <hr />
      <div className="pt-4 lg:my-4 font-extralight">
        {data.overview.map((item, index) => (
          <React.Fragment key={index}>
            {item}
            <br />
            <br />
          </React.Fragment>
        ))}
      </div>
      <div className="my-10 text-2xl text-center lg:text-left font-bold">What you'll learn</div>
      <div className="flex flex-col items-start gap-5 lg:grid grid-cols-2 grid-rows-2 lg:gap-14 font-extralight">
        {data.whatULearn.map((item, index) => (
          <React.Fragment key={index}>
            <div className="grid grid-flow-col items-center justify-center">
              <div className="mx-4 h-4 w-4 rounded-full bg-green-300"></div>
              {item}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="my-10 text-2xl font-bold">FAQ</div>
      <div className="my-10">
        {data.FAQ.map((item, index) => (
          <React.Fragment key={index}>
            <Accordicon data={item} />
          </React.Fragment>
        ))}
      </div>
      <div className="my-10 text-2xl font-bold">Student Testimonials</div>
      <div className="flex flex-col md:flex-row gap-5 ">
        {data.feedBack.map((item, index) => (
          <React.Fragment key={index}>
            <Feedback data={item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default CourseDetails;
