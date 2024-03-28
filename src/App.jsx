import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/section/Navbar";
import Footer from "./components/section/Footer";
import { Home } from "./components/Home/Home";
import { Course } from "./components/Course/Course";
import { CoursePage } from "./components/Course/CoursePage";
import { About } from "./components/AboutUs/About";

function App() {
  return (
    <div className="flex h-screen justify-center bg-PrimeTwo ">
      <div className="flex max-w-screen-2xl flex-col bg-PrimeTwo">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Course />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/aboutus" element={<About />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
