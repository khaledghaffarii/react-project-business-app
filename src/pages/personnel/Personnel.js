import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
} from "react-bootstrap";
import "./Personnel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { detectMobileOrTablet } from "../../utils";
function Personnel() {
  var deviceInfo = detectMobileOrTablet();
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
  return (
    <section>
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
      <header
        className="header-container"
        style={{
          backgroundImage: `url(https://img.freepik.com/vecteurs-libre/fond-decoratif-scene-artistique-beau-coucher-soleil_1055-17709.jpg)`,
        }}
      >
        <div className="overlay">
          <Container>
            <Row
              className=" "
              style={{ justifyContent: "center", alignItems: "end" }}
            >
              <Col
                md={8}
                className="text-left text-white "
                style={{ marginTop: 100 }}
              >
                <h1 className="main-title">
                  Services d'augmentation du personnel
                </h1>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <div className="background-overlay">
        <div className="background-container">
          <div className="fixed-width-container">
            <Container
              className="my-5 content-container"
              style={{ maxWidth: "195%" }}
            >
              {/* <h1 style={{ color: "#ffff", textAlign: "center", margin: 50 }}>
                Services d'augmentation du personnel
              </h1> */}

              <Row className="justify-content-center">
                <Col md={8} className="p-4 bg-white shadow">
                  <Row className="align-items-center">
                    <Col md={6} className="left-section">
                      <h2>
                        CapitalData Group a fourni des services d'augmentation
                        du personnel informatique, fournissant à ses clients du
                        monde entier des professionnels informatiques hautement
                        qualifiés.
                      </h2>
                      <Button
                        onClick={toggle}
                        style={{
                          color: "black",
                          textDecorationLine: "none",
                          fontWeight: "bold",
                          backgroundColor: "#FFC107",
                          borderColor: "#FFC107",
                          width: "fit-content",
                          padding: "10px 20px",
                          marginTop: "20px",
                        }}
                        variant="warning"
                        href="#"
                      >
                        Demander une consultation
                      </Button>
                    </Col>
                    <Col md={6} style={{ background: "#fafafa" }}>
                      <div className="info-section">
                        <h5>Correspondance précise</h5>
                        <p>
                          Nous utilisons{" "}
                          <a
                            href="https://napta.io"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Napta
                          </a>
                          , un outil interne pour adapter parfaitement nos
                          ressources à vos besoins exacts avec les bonnes
                          compétences dans un délai rapide.
                        </p>
                      </div>
                      <div className="info-section">
                        <h5>Qui sommes nous?</h5>
                        <p>
                          Le groupe CapitalData est une société mondiale de
                          conseil en informatique et de développement de
                          logiciels personnalisés qui emploie de nombreux
                          professionnels de l'informatique toujours prêts à vous
                          aider dans votre transformation numérique.
                        </p>
                      </div>
                      <div className="info-section">
                        <h5>Ressources certifiées</h5>
                        <p>
                          75% de nos ressources sont certifiées dans différents
                          domaines pour accueillir et couvrir vos besoins
                          technologiques.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="fixed-width-container">
            <Container className="additional-info-container">
              <h2
                className="annimation"
                style={{ textAlign: "center", margin: 30 }}
              >
                Pourquoi CapitalData
              </h2>
              <p style={{ textAlign: "center", margin: 30, color: "#000" }}>
                Développement professionnel : CapitalData consacre des
                ressources importantes pour soutenir la croissance
                professionnelle continue de tous les employés et les inciter à
                rester informés des technologies et des solutions de pointe.
                Nous organisons des programmes de développement managérial, des
                formations en entreprise et des rencontres technologiques.
              </p>
              <Row>
                <Col md={4} className="info-section">
                  <h5>Processus internes établis</h5>
                  <p>
                    Avec près d'une décennie d'expertise dans le développement
                    de logiciels informatiques de rendu, CapitalData a organisé
                    et rationalisé les flux de travail internes et les processus
                    commerciaux. Cela nous permet d'être extrêmement compétitifs
                    sur le marché de l'externalisation informatique, d'accélérer
                    la croissance de l'entreprise et de remplir nos obligations
                    envers nos clients de manière rapide et efficace.
                  </p>
                </Col>
                <Col md={4} className="info-section">
                  <h5>Assemblage d'équipe rapide</h5>
                  <p>
                    Nous pouvons recruter les professionnels informatiques
                    nécessaires en une semaine seulement. Nos consultants
                    analysent rapidement les spécificités de votre projet pour
                    sélectionner les informaticiens les plus adaptés. En
                    fonction de votre demande, nous pouvons couvrir vos besoins
                    avec une équipe de développement dédiée au complet ou 1 à 3
                    employés requis.
                  </p>
                </Col>
                <Col md={4} className="info-section">
                  <h5>Haute qualité</h5>
                  <p>
                    Notre entreprise a fixé des normes de qualité internes
                    élevées et les respecte strictement. L'équipe du CapitalData
                    se concentre sur les valeurs et les normes des clients pour
                    fournir des solutions impeccables et maintenir la haute
                    qualité des services fournis. Nous accordons une attention
                    particulière à l'excellence, à une livraison rapide, à une
                    communication simple et à un code propre.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={4} className="info-section">
                  <h5>Faible taux d'attrition du personnel</h5>
                  <p>
                    Afin de maintenir un faible taux de roulement de personnel,
                    nous garantissons une rémunération équitable et des
                    conditions de travail adaptées, tout en respectant les
                    besoins des employés aux différentes étapes de leur vie
                    professionnelle.
                  </p>
                </Col>
                <Col md={4} className="info-section">
                  <h5>Avantages de travailler avec le groupe CapitalData</h5>
                  <p>
                    Les services d'augmentation du personnel du groupe
                    CapitalData offrent à nos clients un accès rapide à une
                    expertise technique certifiée, à des professionnels
                    hautement qualifiés et à une gestion de projet efficace.
                  </p>
                </Col>
                <Col md={4} className="info-section">
                  <h5>Accès à l'expertise</h5>
                  <p>
                    L'augmentation d'équipe est la meilleure option pour
                    enrichir votre service de développement interne avec la
                    technologie et l'expertise de domaine requises.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="fixed-width-container">
            <Container className="additional-info-container">
              <Col md={10}>
                <h1 style={{ textAlign: "left", margin: 30, fontSize: 25 }}>
                  Quels que soient vos défis technologiques, nos experts sont
                  prêts à répondre à toutes vos questions. Planifiez une
                  consultation gratuite.
                </h1>
                <Button
                  onClick={toggle}
                  style={{
                    color: "black",
                    textDecorationLine: "none",
                    fontWeight: "bold",
                    backgroundColor: "#FFC107",
                    borderColor: "#FFC107",
                    width: "fit-content",
                    padding: "10px 20px",
                    margin: "35px",
                  }}
                  variant="warning"
                  href="#"
                >
                  Demander une consultation
                </Button>
              </Col>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Personnel;
