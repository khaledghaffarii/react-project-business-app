import React, { useEffect } from "react";
import "./LandingPage.css";
import Logo from "../assets/logo/logo5.png";
function LandingPage({}) {
  useEffect(() => {
    const timer = setTimeout(() => {}, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <img src={Logo} alt="Company Logo" width={250} />
    </div>
  );
}

export default LandingPage;
