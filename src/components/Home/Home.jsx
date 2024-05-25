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
  var deviceInfo = detectMobileOrTablet();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 30000,

    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };

  const slideStyle = {
    position: "relative",

    width: "100%",
  };

  const contentStyle1 = {
    position: "relative",
    top: -500,
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    padding: "0 20px",
    color: "#fff",
    zIndex: 1,
  };
  const contentStyle2 = {
    position: "relative",
    top: -500,
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    padding: "0 20px",
    color: "#fff",
    zIndex: 1,
  };
  const stylehidden = {
    display: "none",
  };
  const slides = [
    {
      image: image1,
      title: (
        <Typewriter
          options={{
            strings: [
              "Solutions innovantes pour votre entreprise.Vous ne travaillerez JAMAIS SEUL.",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 1,
            skipAddStyles: true,
          }}
        />
      ),
      //description: "Vous ne travaillerez JAMAIS SEUL.",
      buttonText: "Parlons de votre projet",
      style: contentStyle1,
    },
    {
      image: image2,
      title: "Une forte culture développe l’innovation  ",
      description: "Vision, technologie, innovation, succès...",
      description2:
        "Grâce à son expérience de plus de 20 ans dans le Web, le mobile et le marketing digital, CapitalData est un accompagnateur dans la transformation digitale 360°",
      buttonText: "Découvrez nos services",
      style: contentStyle2,
      stylehidden: stylehidden,
    },
  ];

  return (
    <section id="home">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} style={slideStyle}>
            <img
              class="banner_image"
              src={slide.image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "210vh",
              }}
            />
            <div style={slide.style}>
              <h1
                className="title"
                style={{ color: "#fff", fontWeight: "500" }}
              >
                {slide.title}
              </h1>
              <p style={{ fontSize: 25 }}>{slide.description}</p>
              <p
                style={{
                  fontSize: 20,
                  padding: 15,
                }}
              >
                {slide.description2}
              </p>
              <div style={slide.stylehidden} className="btn_wrapper">
                <a className="btn" href="/">
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
