import React from "react";
import Navbar from "./Component/Navbar";
// import About from "./Component/About";
import Hero from "./Component/Hero";
import Herrofuttor from "./Component/Herrofuttor";
import {Cards} from "./Component/Cards";
import ShortFormVideoExamples from "./Component/Videos";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Herrofuttor />
      <Cards />
      <ShortFormVideoExamples/>
    </>
  );
}

export default App;
