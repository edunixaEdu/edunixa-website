import React from "react";
import "./App.css";
import { Home } from "./components/Home/Home";
function App() {
  return (
    <div className="flex flex-col items-center bg-PrimeTwo">
      <div className="flex max-w-screen-sm flex-col items-center bg-PrimeTwo md:max-w-screen-2xl">
        <Home />
      </div>
    </div>
  );
}

export default App;
