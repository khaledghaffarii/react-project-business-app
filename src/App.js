import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import LandingPage from "./landing/LandingPage";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Personnel from "./pages/personnel/Personnel";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Company from "./pages/company/Company";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLandingPage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {showLandingPage ? (
          <LandingPage />
        ) : (
          <>
            <Navbar />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/personnel" element={<Personnel />} />
              <Route path="/company" element={<Company />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
