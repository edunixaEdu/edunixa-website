import React from 'react';
import { useNavigate } from 'react-router-dom';
export const CourseCard = ({ image, CourseName, enrollNo, click }) => {
  const navigate = useNavigate();

  const handleClick = (linkPage) => {
    navigate(`${linkPage.click}`);
  };
  console.log(click);

  return (
    <div
      className="flex w-full justify-center p-4 md:w-auto items-center"
      onClick={() => handleClick({ click })}>
      <div className="flex w-full flex-col justify-start rounded-xl bg-card p-2  text-white ">
        <img src={image} alt="" className="mb-10 h-auto w-full md:mb-5" />
        <p className="mb-2 text-xl font-semibold">{CourseName}</p>
        <p className="mb-3 text-gray-400">{enrollNo}</p>
      </div>
    </div>
  );
};
