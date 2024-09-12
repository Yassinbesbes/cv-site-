import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomePage from "./scenes/HomePage";
import Topbar from "./scenes/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <HomePage />
    </>
  );
}

export default App;
