import React from 'react';
import HeroSection from '@/components/HeroSection';
import { HighLight } from '@/components/HighLight';
import { Explore } from '@/components/Explore';
import Getstarted from '@/components/Getstarted';
import CardCarousel from '@/components/CardCarousel';

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
