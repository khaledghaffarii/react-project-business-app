import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import LandingPage from "./landing/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLandingPage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      {showLandingPage && <LandingPage />}
      {!showLandingPage && (
        <>
          <Navbar />
          <Home />
          <About />
          <Services />
          <Blog />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
