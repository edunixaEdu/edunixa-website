import React from "react";
import CourseName from "./Components/CourseName";
import CourseDetails from "./Components/CourseDetails";
import CourseImage from "./Components/CourseImage";

export const Course = () => {
  return (
    <>
      <CourseImage />
      <CourseName />
      <CourseDetails />
    </>
  );
};
