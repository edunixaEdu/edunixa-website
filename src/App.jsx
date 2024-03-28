import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/section/Navbar";
import Footer from "./components/section/Footer";
import { Home } from "./components/Home/Home";
import { Course } from "./components/Course/Course";
import { CoursePage } from "./components/Course/CoursePage";

function App() {
  return (
    <div className="flex h-screen flex-col items-center bg-PrimeTwo">
      <div className="flex w-full flex-col bg-PrimeTwo">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Course />} />
          <Route path="/course" element={<CoursePage />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
