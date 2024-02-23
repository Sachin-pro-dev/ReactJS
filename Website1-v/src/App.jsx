import React from "react";
import Data from "./component/data/Data";
import Hero from "./component/hero/Hero";
import NavBar from "./component/navbar/Navbar";
import Cloud from "./component/cloud/Cloud";
import Footer from "./component/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Data />
      <Cloud />
      <Footer />
    </>
  );
}

export default App;
