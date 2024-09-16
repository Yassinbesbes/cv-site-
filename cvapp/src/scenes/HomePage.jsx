import React from "react";
import Description from "../components/Description/Description.js";
import About from "../components/About/index.tsx";
import MyWork from "../components/MyWork/index.tsx";

function HomePage() {
  return (
    <>
      <Description />
      <About />
      <MyWork />
    </>
  );
}

export default HomePage;
