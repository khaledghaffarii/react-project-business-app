import React, { useEffect, useRef, useState } from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faChartBar,
  faCopy,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import videoSource from "../../assets/banner/video.mp4";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import imageKhaled from "../../assets/khaled2.jpg";
import imageHoussem from "../../assets/houssem.jpg";
import imageMahdi from "../../assets/mahdi.jpg";
import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { detectMobileOrTablet } from "../../utils";
var deviceInfo = detectMobileOrTablet();

const Services = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cards = entry.target.querySelectorAll(".card");
          if (entry.isIntersecting) {
            cards.forEach((card, index) => {
              card.classList.remove("card-reset");
              card.classList.add("card-animated", `delay-${index + 1}`);
            });
          } else {
            cards.forEach((card) => {
              card.classList.remove("card-animated");
              card.classList.add("card-reset");
            });
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  return (
    <div
      style={
        {
          // boxShadow:
          //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          // borderRadius: "8px",
          // border: "none",
        }
      }
    >
      <div className="bg-white text-dark w-100 mb-5">
        <Container>
          <Row>
            <Col>
              <p style={{ fontSize: 15 }}>
                <span style={{ fontWeight: "bold" }}>CapitalData</span> a
                réalisé de nombreux projets informatiques et propose une
                estimation détaillée de votre initiative informatique dans le
                cadre de nos services de développement de logiciels
                personnalisés.
              </p>
            </Col>
          </Row>
          <Button
            onClick={scrollToTop}
            style={{
              textAlign: "left",
              color: "black",
              textDecorationLine: "none",
              fontWeight: "bold",
            }}
            className="hover-effect"
            variant="warning"
          >
            Calculez votre projet
          </Button>
        </Container>
      </div>
      <Container>
        <div style={{ paddingBottom: 20 }}>
          <h2 className="" style={{ textAlign: "center", margin: 5 }}>
            Parlez à un de nos experts
          </h2>
          <p className="text-center ">
            Travaillez à distance avec une équipe où chacun, du développeur de
            logiciels personnalisés au spécialiste UX/UI, est exceptionnel, et
            intégrez-les dans vos processus pour gagner en efficacité.
          </p>
        </div>
        {deviceInfo.isMobile && (
          <Container className="py-5">
            <Row>
              {expertsData.map((expert) => (
                <React.Fragment key={expert.id}>
                  <Card
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      borderRadius: "8px",
                      border: "none",
                      height: 160,
                      paddingBottom: 50,
                    }}
                    border="light"
                    className="mb-4 hover-effect"
                  >
                    <Card.Body>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          src={expert.image}
                          style={{
                            borderRadius: "50%",
                            width: 50,
                            height: 50,
                          }}
                          className="m-2"
                        />
                        <div style={{ marginLeft: 10 }}>
                          <Card.Title style={{ width: 150 }}>
                            {expert.name}
                          </Card.Title>
                          <div className="d-block mb-2">
                            <Card.Text
                              style={{
                                fontWeight: "500",
                              }}
                            >
                              {expert.position}
                            </Card.Text>
                            <a
                              href={expert.linkedin}
                              target="_blank"
                              className="me-2"
                            >
                              <FontAwesomeIcon
                                icon={faLinkedinIn}
                                size="lg"
                                color="#0a66c2"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </React.Fragment>
              ))}
            </Row>
          </Container>
        )}
        <Row
          ref={containerRef}
          className="d-md-flex d-none"
          style={{ width: "250vh" }}
        >
          <Col md={8}>
            <Row className="flex-column w-100">
              <Col>
                <Row className="mb-5">
                  <Col xs={3}>
                    <strong>Emplacement du bureau</strong>
                  </Col>
                  <Col xs={3}>
                    <strong>Expert des ventes</strong>
                  </Col>
                  <Col xs={3}>
                    <strong>Position</strong>
                  </Col>
                  <Col xs={3} className="text-center">
                    <strong> </strong>
                  </Col>
                </Row>
              </Col>
              {expertsData.map((expert) => (
                <React.Fragment key={expert.id}>
                  <Col className="mb-4">
                    <Card
                      className="mb-4 hover-effect card-container card-reset"
                      border="light"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                    >
                      <Card.Body>
                        <Row>
                          <Col xs={3} className="align-self-center">
                            <Card.Text>
                              <FontAwesomeIcon
                                icon={faMapMarkerAlt}
                                className="me-2"
                              />
                              Tunisie
                            </Card.Text>
                          </Col>
                          <Col xs={3}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Image
                                src={expert.image}
                                style={{
                                  borderRadius: "50%",
                                  width: 50,
                                  height: 50,
                                }}
                                className="m-2"
                              />
                              <div style={{ marginLeft: 10 }}>
                                <Card.Title style={{ width: 150 }}>
                                  {expert.name}
                                </Card.Title>
                                <div className="d-flex mb-2">
                                  <a
                                    href={expert.linkedin}
                                    target="_blank"
                                    className="me-2"
                                  >
                                    <FontAwesomeIcon
                                      icon={faLinkedinIn}
                                      size="lg"
                                      color="#0a66c2"
                                    />
                                  </a>
                                  {/* <a href={expert.twitter} target="_blank">
                                    <FontAwesomeIcon
                                      icon={faTwitter}
                                      size="lg"
                                    />
                                  </a> */}
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col xs={3} className=" align-self-center">
                            <Card.Text
                              style={{
                                fontWeight: "500",
                              }}
                            >
                              {expert.position}
                            </Card.Text>
                          </Col>
                          <Col
                            style={{
                              textAlign: "center",
                            }}
                            xs={2}
                            className=" align-self-center"
                          >
                            <Button
                              variant="warning"
                              style={{
                                fontWeight: "bold",
                                textDecorationLine: "none",
                                //color: "#000",
                              }}
                            >
                              Demander une rencontre
                            </Button>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <hr style={{ margin: "0", borderTop: "1px solid #dee2e6" }} />
                </React.Fragment>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* <div className="container">
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
      </div> */}
    </div>
  );
};
const expertsData = [
  {
    id: 2,
    name: " Ksaïr Mahdi",
    image: imageMahdi,
    location: "Tunisie",
    position: "Directeur Général",
    linkedin: "https://www.linkedin.com/in/pascal-cochard/",
    twitter: "https://twitter.com/pascalcochard",
  },
  {
    id: 1,
    name: "Ghaffari Khaled",
    image: imageKhaled,
    location: "Tunisie",
    position: "Directeur Technique",
    linkedin: "https://www.linkedin.com/in/pascal-cochard/",
    twitter: "https://twitter.com/pascalcochard",
  },

  {
    id: 3,
    name: "Felly Houssem Eddine",
    image: imageHoussem,
    location: "Tunisie",
    position: "Directeur des opérations",
    linkedin: "https://www.linkedin.com/in/pascal-cochard/",
    twitter: "https://twitter.com/pascalcochard",
  },
];
export default Services;
