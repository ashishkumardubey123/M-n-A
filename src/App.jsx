import React from "react";
import Navbar from "./Component/Navbar";
// import About from "./Component/About";
import Hero from "./Component/Hero";
import Herrofuttor from "./Component/Herrofuttor";
import {Cards} from "./Component/Cards";
import ShortFormVideoExamples from "./Component/Videos";
import Videofoot from "./Component/Videofoot";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Herrofuttor />
      <Cards />
      <ShortFormVideoExamples/>
      <Videofoot/>
    </>
  );
}

export default App;
