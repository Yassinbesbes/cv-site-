import React from "react";
import Description from "../components/Description/Description.js";
import About from "../components/About/index.tsx";
import MyWork from "../components/MyWork/index.tsx";
import MyTestimonials from '../components/MyTestimonials/index.tsx'
function HomePage() {
  return (
    <>
      <Description />
      <About />
      <MyWork />
      <MyTestimonials />
    </>
  );
}

export default HomePage;
