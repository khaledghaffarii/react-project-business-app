import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Company.css";

const Company = () => {
  return (
    <div style={{ background: "#000" }}>
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
                style={{ margin: 60 }}
              >
                <h1 className="main-title">
                  Naviguer avec <span className="highlight">innovation</span> à
                  travers des océans plus vastes
                </h1>
                <p className="subtitle">
                  2023 sera l'année où nous serons officiellement présents sur
                  quatre continents pour servir nos clients internationaux avec
                  nos talents informatiques !
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={10}>
            <Card className="info-card">
              <Card.Body>
                <Card.Title>Nous sommes CapitalData</Card.Title>
                <Card.Text>
                  CapitalData est une société de développement de logiciels et
                  de conseil en informatique fondée en 2014. Notre société est
                  au service des organisations informatiques et non
                  informatiques, les aidant à atteindre une variété de buts et
                  objectifs avec des solutions numériques et des technologies de
                  tendance récente.
                </Card.Text>
                <Button variant="warning">Demander une consultation</Button>
                <hr />
                <Row className="info-row">
                  <Col md={4} className="info-section">
                    <h5>Notre histoire</h5>
                    <p>
                      Commerçant il y a près de dix ans avec le rêve d'étendre
                      nos services à travers le monde, nous avons réalisé plus
                      de 400 projets, en constante croissance et amélioration
                      avec nos clients et nos experts.
                    </p>
                    <p>
                      <strong>8+</strong> ans d'activité
                    </p>
                  </Col>
                  <Col md={4} className="info-section">
                    <h5>Notre équipe</h5>
                    <p>
                      CapitalData est une société de développement de logiciels
                      et de conseil en informatique fondée en 2014. Notre
                      société est au service des organisations informatiques et
                      non informatiques, les aidant à atteindre une variété de
                      buts et objectifs avec des solutions numériques et des
                      technologies de tendance récente.
                    </p>
                    <p>
                      <strong>250+</strong> talents dans le monde
                    </p>
                  </Col>
                  <Col md={4} className="info-section">
                    <h5>Nos bureaux</h5>
                    <p>
                      Nous sommes une société de conseil en informatique avec
                      une présence mondiale sur quatre continents différents et
                      compétente pour mettre en œuvre des projets.
                    </p>
                    <p>
                      <strong>dix</strong> bureaux mondiaux
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Company;
