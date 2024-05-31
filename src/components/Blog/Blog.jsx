import React, { useState, useEffect } from "react";
import "./Blog.css";
import BlogImage from "../../assets/blog/TextToImage_14_20240508.jpeg";
import { detectMobileOrTablet } from "../../utils";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormControl,
  InputGroup,
} from "react-bootstrap";
export default function Blog() {
  const circleStyle = {
    backgroundColor: "lightgray",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    margin: "0 30px 0 0",
    fontSize: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  var deviceInfo = detectMobileOrTablet();
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

  const [currentStep, setCurrentStep] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const stepsCount = 4; // Nombre total d'étapes

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep === stepsCount && !isFadingOut) {
        setIsFadingOut(true);
        setTimeout(() => {
          setCurrentStep(0);
          setIsFadingOut(false);
        }, 1000); // Durée de l'animation de fade out
      } else if (!isFadingOut) {
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }, 3000); // Changez l'étape toutes les 3 secondes

    return () => clearInterval(interval);
  }, [currentStep, isFadingOut]);

  const getClassName = (step) => {
    if (isFadingOut) return "fade-out";
    if (currentStep === step) return "step";
    if (currentStep < step) return "hidden";
    return "";
  };
  console.log("🚀 ~ currentStep ~ currentStep:", currentStep);
  return (
    <>
      <section id="blog">
        {/* <div className="container">
          <div className="blog_wrapper">
            <div className="blog_col">
              <h3>WE HELP BUSINESSES LAUNCH, GROW AND SUCCEED</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
                corrupti odit? At iure facere, porro repellat officia quas,
                dolores magnam assumenda soluta odit harum voluptate inventore
                ipsa maiores fugiat accusamus eos nulla. Iure voluptatibus
                explicabo officia.
              </p>
              <div className="btn_wrapper">
                <a className="btn" href="/">
                  Get Started
                </a>
              </div>
            </div>
            <div className="blog_col">
              <div className="blog_image">
                <img
                  style={{ height: 400, width: 600 }}
                  src={BlogImage}
                  alt="Blog"
                />
              </div>
            </div>
          </div>
        </div> */}

        <Container>
          <Row className="justify-content-center">
            <Col
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0), 0 1px 5px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: "8px",
                border: "none",
              }}
              md={6}
            >
              <Row className="justify-content-center m-1 w-md-75 ">
                <Col>
                  <h1 className=" mb-5">
                    Réservez une consultation informatique gratuite
                  </h1>
                  <p style={{ fontSize: 20, lineHeight: 1.7 }}>
                    Remplissez le formulaire ci-dessous pour recevoir une
                    consultation gratuite et découvrir comment CapitalData peut
                    aider votre entreprise à se développer.
                  </p>
                </Col>
              </Row>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="p-2" controlId="sector">
                  <Form.Label></Form.Label>
                  <Form.Control
                    as="select"
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="custom-input"
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
                        className="custom-input"
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
                        className="custom-input"
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
                    className="custom-input"
                  />
                </Form.Group>

                <Form.Group className="p-2" controlId="phone">
                  <Form.Label></Form.Label>
                  <Form.Control
                    placeholder="Téléphone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="custom-input"
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
                    className="custom-input"
                  />
                </Form.Group>
                <Row className="align-items-center">
                  <Col xs={12} md="auto">
                    <Form.Group className="p-2" controlId="nda">
                      <Form.Check
                        isValid
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
              <Container style={{ backgroundColor: "#ffff", height: 300 }}>
                <h2
                  className={
                    currentStep === 0
                      ? "hidden"
                      : `list-group-item d-flex align-items-center pb-5 ${getClassName(
                          1
                        )}`
                  }
                >
                  Que se passe-t-il ensuite ?
                </h2>
                <Row className="mt-5 w-100">
                  <Col md={7}>
                    <ol className={""}>
                      <li
                        className={
                          currentStep === 0
                            ? "hidden"
                            : `list-group-item d-flex align-items-center pb-5 ${getClassName(
                                1
                              )}`
                        }
                      >
                        <Row className="justify-content-center">
                          <Col md={12} className="text-center">
                            <div className="circle" style={circleStyle}>
                              1
                            </div>
                          </Col>
                        </Row>
                        Un professionnel vous contactera une fois les besoins de
                        votre entreprise analysés.
                      </li>
                      <li
                        className={
                          currentStep === 0 || currentStep === 1
                            ? "hidden"
                            : `list-group-item d-flex align-items-center pb-5 ${getClassName(
                                2
                              )}`
                        }
                      >
                        <Row className="justify-content-center">
                          <Col md={12} className="text-center">
                            <div className="circle" style={circleStyle}>
                              2
                            </div>
                          </Col>
                        </Row>
                        Au besoin, nous signons une NDA pour garantir le respect
                        de votre vie privée.
                      </li>
                      <li
                        className={
                          currentStep === 0 ||
                          currentStep === 1 ||
                          currentStep === 2
                            ? "hidden"
                            : `list-group-item d-flex align-items-center pb-5 ${getClassName(
                                3
                              )}`
                        }
                      >
                        <Row className="justify-content-center">
                          <Col md={12} className="text-center">
                            <div className="circle" style={circleStyle}>
                              3
                            </div>
                          </Col>
                        </Row>
                        Un agent avant-vente fournit une proposition de projet.
                      </li>
                      <li
                        className={
                          currentStep === 0 ||
                          currentStep === 1 ||
                          currentStep === 2 ||
                          currentStep === 3
                            ? "hidden"
                            : `list-group-item d-flex align-items-center pb-5 ${getClassName(
                                4
                              )}`
                        }
                      >
                        <Row className="justify-content-center">
                          <Col md={12} className="text-center">
                            <div className="circle" style={circleStyle}>
                              4
                            </div>
                          </Col>
                        </Row>
                        L'équipe créée spécialement pour votre projet
                        informatique peut commencer à livrer dans un délai de
                        dix jours ouvrés.
                      </li>
                    </ol>
                  </Col>
                </Row>
                {/* <p className="mb-5">
                  Ce site est protégé par reCAPTCHA et Google
                  <a href="#">
                    Politique de confidentialité et conditions d'utilisation
                    Apple.
                  </a>
                </p> */}
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
