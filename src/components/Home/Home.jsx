import React from "react";
import HeroSection from "./Components/HeroSection";
import { HighLight } from "./Components/HighLight";
import { Explore } from "./Components/Explore";
import Getstarted from "./Components/Getstarted";
import CardCarousel from "./Components/CardCarousel";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <HighLight />
      <Explore />
      <CardCarousel />
      <Getstarted />
    </>
  );
};
