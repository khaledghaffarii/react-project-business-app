import React from "react";
import "./Home.css";
import { detectMobileOrTablet } from "../../utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/banner/image0.jpg";
import image2 from "../../assets/banner/image9.avif";

import Typewriter from "typewriter-effect";

export default function Home() {
  const slideStyle = {
    position: "relative",
    width: "100%",
    height: "70vh",
    overflow: "hidden",
  };

  const contentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff",
    zIndex: 1,
    padding: "0 20px",
  };

  const slides = {
    image: image1,
    title: (
      <Typewriter
        options={{
          strings: [
            "Solutions innovantes pour votre entreprise. ",
            " CapitalData est un accompagnateur dans la transformation digitale 360",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 1,
          skipAddStyles: true,
        }}
      />
    ),
    description: "Vous ne travaillerez JAMAIS SEUL.",
    buttonText: "Parlons de votre projet",
  };

  return (
    <section id="home">
      <div style={slideStyle}>
        <img
          className="banner_image"
          src={image2}
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div style={contentStyle}>
          <h1
            className="title"
            style={{ color: "#fff", fontWeight: "500", width: "50vh" }}
          >
            {slides.title}
          </h1>

          <p
            style={{
              fontSize: 20,
              padding: 15,
            }}
            className="description"
          >
            {slides.description}
          </p>
          <div className="btn_wrapper">
            <a className="btn" href="/">
              {slides.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
