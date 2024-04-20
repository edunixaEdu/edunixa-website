import React from 'react';
import CourseName from '@/components/CourseName';
import CourseDetails from '@/components/CourseDetails';
import CourseImage from '@/components/CourseImage';
import { useParams } from 'react-router-dom';
import { data } from '@/data/Data';

const Course = () => {
  const { id } = useParams();
  console.log(data);
  const course = data.find((course) => course.id == id); // Find the course with the matching id
  console.log(course);
  return (
    <div className="w-full lg:px-20">
      {/* Pass the course details to the child components */}
      <CourseName data={course.name} />
      <CourseImage data={course.imageData} />
      <CourseDetails data={course.details} />
    </div>
  );
};

export default Course;
