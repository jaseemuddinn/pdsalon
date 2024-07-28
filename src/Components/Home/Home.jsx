import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Stat from "./Stat/Stat";
import Values from "./Values/Values";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Stat />
      <Values />
    </div>
  );
}

export default Home;
