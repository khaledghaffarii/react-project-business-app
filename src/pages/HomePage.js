import React, { useState, useEffect } from "react";
import "./HomePage.css";

import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function HomePage() {
  return (
    <div className="App">
      <>
        <Home />
        <About />
        <Services />
        <Blog />
        <Contact />
      </>
    </div>
  );
}

export default HomePage;
