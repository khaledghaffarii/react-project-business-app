import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faChartBar,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import videoSource from "../../assets/banner/video.mp4";

const servicesData = [
  {
    icon: faLaptopCode,
    title: "Cloud Computing",
    description: "Lorem ipsum dolor sit amet sed consectetur adipisicing elit.",
    number: "01",
    color: "pramary",
  },
  {
    icon: faChartBar,
    title: "Business Strategy",
    description: "Lorem ipsum dolor sit amet sed consectetur adipisicing elit.",
    number: "02",
    color: "pramary",
  },
  {
    icon: faCopy,
    title: "Reports Analysis",
    description: "Lorem ipsum dolor sit amet sed consectetur adipisicing elit.",
    number: "03",
    color: "pramary",
  },
];

const Services = () => {
  return (
    <div id="services">
      <video
        autoPlay
        muted
        loop
        preload="auto"
        id="video-background"
        playsInline
        src={videoSource}
      >
        Your browser does not support the video tag.
      </video>

      <div className="container">
        <div className="title_headling">
          <h3 style={{ color: "#fff" }}>
            What's Services We Are Offering to Our Customers
          </h3>
          <p style={{ color: "#fff" }}>
            Ut aut reiciendis voluptatibus maiores alias consequatur aut
            perferendis doloribus asperiores repellat.
          </p>
        </div>
        <div className="service_wrapper">
          {servicesData.map((service, index) => (
            <div key={index} className="service_box">
              <div
                className={`service_icon ${service.color}`}
                style={{ backgroundColor: service.color }}
              >
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h4 className="number">{service.number}</h4>
              <div className="service_content">
                <h5 style={{ color: "#fff" }}>{service.title}</h5>
                <p style={{ color: "#fff", fontSize: 13 }}>
                  {service.description}
                </p>
                <a style={{ color: "#fff" }} href="/" className="read">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
