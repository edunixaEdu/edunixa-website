import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from '@/components/navBar/NavBar';
import Footer from '@/components/footer/Footer';
import { Home } from '@/pages/Home';
import Course from '@/pages/Course';
import { AllCourse } from '@/pages/AllCourse';
import  About  from '@/pages/Aboutus';

function App() {
  return (
    <>
      <div className="flex h-full justify-center bg-PrimeTwo ">
        <div className="flex w-full flex-col bg-PrimeTwo">
          <Navbar />
          <Routes>
          <Route index element={<Home /> } />
            <Route path="/course/:id" element={<Course />} />  
            <Route path="/course" element={<AllCourse />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/course/undefined" element={<Navigate to="/course" replace={true} />} /> 
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
