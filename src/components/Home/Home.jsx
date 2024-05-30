import React, { useState } from "react";
import "./Home.css";
import { detectMobileOrTablet } from "../../utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/banner/image0.jpg";
import image2 from "../../assets/banner/image9.avif";

import Typewriter from "typewriter-effect";
import {
  Container,
  Row,
  Col,
  Form,
  Image,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
var deviceInfo = detectMobileOrTablet();

export default function Home() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [sector, setSector] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [nda, setNda] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to your backend here
    console.log("Form submitted:", {
      sector,
      firstName,
      lastName,
      email,
      phone,
      comments,
      nda,
    });
  };
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
          delay: 1,
          loop: true,
          skipAddStyles: true,
        }}
      />
    ),
    description: "Vous ne travaillerez JAMAIS SEUL.",
    buttonText: "Parlons de votre projet",
  };

  return (
    <section id="home">
      <Modal show={modal} onHide={toggle} size="xl" animation={true}>
        <ModalHeader closeButton></ModalHeader>
        <ModalBody>
          <Container>
            <Row className="justify-content-center">
              <Col
                style={
                  {
                    // boxShadow:
                    //   "0 4px 8px 0 rgba(0, 0, 0, 0), 0 1px 5px 0 rgba(0, 0, 0, 0.19)",
                    // borderRadius: "8px",
                    // border: "none",
                  }
                }
                md={6}
              >
                <Row className="justify-content-center m-1 w-md-75 w-100">
                  <Col>
                    <h1 className="w-100  fs-2 mb-5">
                      Demander une consultation
                    </h1>
                  </Col>
                </Row>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="p-2" controlId="sector">
                    <Form.Label></Form.Label>
                    <Form.Control
                      as="select"
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      style={{
                        border: "none",
                        borderBottom: "1px solid #ced4da",
                        borderRadius: 0,
                        boxShadow: "none",
                      }}
                    >
                      <option value="">
                        Sélectionnez votre secteur d'activité
                      </option>
                      <option value="IT">IT</option>
                      <option value="Marketing">Marketing</option>
                      {/* ... */}
                    </Form.Control>
                  </Form.Group>

                  <Row className="p-2">
                    <Col md={6}>
                      <Form.Group controlId="firstName">
                        <Form.Label></Form.Label>
                        <Form.Control
                          placeholder="Nom "
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          style={{
                            border: "none",
                            borderBottom: "1px solid #ced4da",
                            borderRadius: 0,
                            boxShadow: "none",
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="lastName">
                        <Form.Label></Form.Label>
                        <Form.Control
                          placeholder="Nom de famille"
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          style={{
                            border: "none",
                            borderBottom: "1px solid #ced4da",
                            borderRadius: 0,
                            boxShadow: "none",
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="p-2" controlId="email">
                    <Form.Label></Form.Label>
                    <Form.Control
                      placeholder="Courriel professionnel"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        border: "none",
                        borderBottom: "1px solid #ced4da",
                        borderRadius: 0,
                        boxShadow: "none",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="p-2" controlId="phone">
                    <Form.Label></Form.Label>
                    <Form.Control
                      placeholder="Téléphone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        border: "none",
                        borderBottom: "1px solid #ced4da",
                        borderRadius: 0,
                        boxShadow: "none",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="p-2" controlId="comments">
                    <Form.Label></Form.Label>
                    <Form.Control
                      placeholder="Commentaires"
                      as="textarea"
                      rows={3}
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      style={{
                        border: "none",
                        borderBottom: "1px solid #ced4da",
                        borderRadius: 0,
                        boxShadow: "none",
                      }}
                    />
                  </Form.Group>
                  <Row className="align-items-center">
                    <Col xs={12} md="auto">
                      <Form.Group className="p-2" controlId="nda">
                        <Form.Check
                          // isValid
                          type="checkbox"
                          label="Je souhaite protéger mes données en signant un NDA."
                          checked={nda}
                          onChange={(e) => setNda(e.target.checked)}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md="auto">
                      <Button
                        className="m-4"
                        style={{
                          textAlign: "left",
                          color: "black",
                          textDecorationLine: "none",
                          fontWeight: "bold",
                        }}
                        variant="warning"
                        type="submit"
                      >
                        Envoyer une demande
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col md={6}>
                <Container
                  style={{ backgroundColor: "#fafafa", height: "60vh" }}
                >
                  <h4
                    className=""
                    style={{
                      borderBottom: "1px solid #ced4da",
                      paddingBottom: 20,
                    }}
                  >
                    Contactez CapitalData pour recevoir une consultation
                    gratuite et confiez vos projets informatiques à nos experts
                    en logiciels.
                  </h4>
                  <Row className="mt-5 w-100">
                    <Col md={12}>
                      <div className=" justify-content-center">
                        <div className="col-md-6">
                          <h6 className=" p-2 fw-bold">Contactez-nous :</h6>
                          <div className=" p-1">
                            <div className="d-flex align-items-center mb-3">
                              <FontAwesomeIcon icon={faPhone} className="m-2" />
                              <span>01 84 20 14 79</span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                              <FontAwesomeIcon
                                icon={faEnvelope}
                                className="m-2"
                              />
                              <span>contact@capitalData.com</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <p className="mb-5">
                      Ce site est protégé par CAPTCHA et Google
                      <hr />
                      <a style={{ color: "#000" }} href="#">
                        Politique de confidentialité et conditions d'utilisation
                        Apple.
                      </a>
                    </p>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
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
            style={{
              color: "#fff",
              fontWeight: "500",
              width: deviceInfo.isMobile ? "50vh" : "150vh",
            }}
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
            <Button variant="warning" onClick={toggle} className="btn">
              {slides.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
