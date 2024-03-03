
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { HighLight } from "./components/HighLight";
import { Explore } from "./components/Explore";
import Footer from "./components/Footer";
import Getstarted from "./components/Getstarted";

import "./App.css";
import CardCarousel from "./components/CardCarousel";

function App() {
  return (
    <div className="flex flex-col items-center bg-PrimeTwo">
      <div className="flex max-w-screen-sm flex-col items-center bg-PrimeTwo md:max-w-screen-2xl">
        <Navbar />
        <HeroSection />
        <HighLight />
        <Explore />
        <CardCarousel />a
        <Getstarted />
        <Footer />
      </div>
    </div>
  );
}

export default App;
