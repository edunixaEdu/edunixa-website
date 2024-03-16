import React from "react";
import "./App.css";
import Navbar from "./components/section/Navbar";
import Footer from "./components/section/Footer";
import { Home } from "./components/Home/Home";
import { Course } from "./components/Course/Course";
function App() {
  return (
    <div className="flex h-screen flex-col items-center bg-PrimeTwo">
      <div className="flex w-full flex-col bg-PrimeTwo">
        <Navbar />
        <Home />
        {/* <Course /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
