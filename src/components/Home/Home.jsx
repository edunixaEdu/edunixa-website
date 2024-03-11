import React from "react";

import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import { HighLight } from "./Components/HighLight";
import { Explore } from "./Components/Explore";
import Footer from "./Components/Footer";
import Getstarted from "./Components/Getstarted";
import CardCarousel from "./Components/CardCarousel";

export const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HighLight />
      <Explore />
      <CardCarousel />a
      <Getstarted />
      <Footer />
    </>
  );
};
