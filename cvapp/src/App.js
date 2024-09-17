import React from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomePage from "./scenes/HomePage";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <HomePage />
    </>
  );
}

export default App;
