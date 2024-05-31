import React, { useState } from "react";
import "./Contact.css";
import ContactImage from "../../assets/contact/contact2.gif";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from "react-bootstrap";
import Logo from "../../assets/logo/logo5.png";
import ImageCapital from "../../assets/about/capitaldata.png";
import image1 from "../../assets/contact/image1.jpg";
import image2 from "../../assets/contact/image2.jpg";
import image3 from "../../assets/contact/image3.jpg";
import image4 from "../../assets/contact/image4.jpg";
import image5 from "../../assets/contact/image5.jpg";
import image6 from "../../assets/contact/image6.webp";
import Slider from "react-slick";
import { detectMobileOrTablet } from "../../utils";
export default function Contact() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [outsourcingModal, setOutsourcingModal] = useState(false);
  const toggleOutsourcingModal = () => setOutsourcingModal(!outsourcingModal);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
  };
  var deviceInfo = detectMobileOrTablet();
  return (
    <>
      <Modal show={modal} onHide={toggle} size="xl" animation={true}>
        <ModalHeader closeButton></ModalHeader>
        <ModalBody>
          <h1 className="text-center" style={{ color: "#0473aa" }}>
            Démarche Qualité
          </h1>
          <p
            style={{
              padding: 20,
              fontFamily: "sans-serif",
              fontSize: "15px",
              fontWeight: "400",
              fontVariant: "normal",
              letterSpacing: "normal",
              lineHeight: "27px",
              textAlign: "justify",
              textIndent: "0px",
              textTransform: "none",
              verticalAlign: "baseline",
              whiteSpace: "normal",
              wordSpacing: "3px",
            }}
          >
            La qualité est au cœur nos préoccupations, c'est pour cela que nos
            équipes appliquent la bonne gestion des projets, selon les
            référentiels ISO. Cette sensibilisation touche entre autres les
            méthodes de programmation appliquées dans chaque équipe projet, pour
            assurer une qualité optimale. Le système de management de la qualité
            (SMQ) qui permet à CapitalData de bien maitriser l'industrialisation
            de ses processus, s'appuie sur les points forts suivants :
          </p>
          <ul>
            <li
              style={{
                fontFamily: "sans-serif",
                fontSize: "15px",
                fontWeight: "400",
                fontVariant: "normal",
                letterSpacing: "normal",
                lineHeight: "27px",
                textAlign: "justify",
                textIndent: "0px",
                textTransform: "none",
                verticalAlign: "baseline",
                whiteSpace: "normal",
                wordSpacing: "3px",
                // listStyle: "none",
              }}
            >
              Bonne conduite du modèle d'organisation (front office / back
              office)
            </li>
            <li
              style={{
                fontFamily: "sans-serif",
                fontSize: "15px",
                fontWeight: "400",
                fontVariant: "normal",
                letterSpacing: "normal",
                lineHeight: "27px",
                textAlign: "justify",
                textIndent: "0px",
                textTransform: "none",
                verticalAlign: "baseline",
                whiteSpace: "normal",
                wordSpacing: "3px",
                // listStyle: "none",
              }}
            >
              Gestion Pertinence des projets d'externalisation offshore
            </li>
            <li
              style={{
                fontFamily: "sans-serif",
                fontSize: "15px",
                fontWeight: "400",
                fontVariant: "normal",
                letterSpacing: "normal",
                lineHeight: "27px",
                textAlign: "justify",
                textIndent: "0px",
                textTransform: "none",
                verticalAlign: "baseline",
                whiteSpace: "normal",
                wordSpacing: "3px",
                // listStyle: "none",
              }}
            >
              Ingénierie reflétant une bonne méthodologie
            </li>
            <li
              style={{
                fontFamily: "sans-serif",
                fontSize: "15px",
                fontWeight: "400",
                fontVariant: "normal",
                letterSpacing: "normal",
                lineHeight: "27px",
                textAlign: "justify",
                textIndent: "0px",
                textTransform: "none",
                verticalAlign: "baseline",
                whiteSpace: "normal",
                wordSpacing: "3px",
                // listStyle: "none",
              }}
            >
              Engagement et gouvernance opérationnelle de la direction générale
              pour satisfaire les clients
            </li>
            <li
              style={{
                fontFamily: "sans-serif",
                fontSize: "15px",
                fontWeight: "400",
                fontVariant: "normal",
                letterSpacing: "normal",
                lineHeight: "27px",
                textAlign: "justify",
                textIndent: "0px",
                textTransform: "none",
                verticalAlign: "baseline",
                whiteSpace: "normal",
                wordSpacing: "3px",
                // listStyle: "none",
                marginTop: 15,
              }}
            >
              Le suivi qualité se base sur les six caractères de la norme
              ISO/IEC 9126 à savoir: la capacité fonctionnelle, la fiabilité,
              l'efficacité, la maintenabilité, la facilité d'usage, la
              portabilité. Chacune de ces caractéristiques est décomposée en
              sous caractéristiques appliqués rigoureusement comme l'aptitude,
              l'exactitude, l'interopérabilité et la sécurité. D'autres normes
              sont en application comme:
            </li>
          </ul>

          <ul>
            <li
              style={{
                fontFamily: "sans-serif",
                fontSize: "15px",
                fontWeight: "400",
                fontVariant: "normal",
                letterSpacing: "normal",
                lineHeight: "27px",
                textAlign: "justify",
                textIndent: "0px",
                textTransform: "none",
                verticalAlign: "baseline",
                whiteSpace: "normal",
                wordSpacing: "3px",
                // listStyle: "none",
              }}
            >
              ISO 14598 proposant un cadre plus précis pour l'évaluation de la
              qualité logicielle
            </li>
            <li
              style={{
                fontFamily: "sans-serif",
                fontSize: "15px",
                fontWeight: "400",
                fontVariant: "normal",
                letterSpacing: "normal",
                lineHeight: "27px",
                textAlign: "justify",
                textIndent: "0px",
                textTransform: "none",
                verticalAlign: "baseline",
                whiteSpace: "normal",
                wordSpacing: "3px",
                // listStyle: "none",
                marginBottom: 180,
              }}
            >
              ISO 25000 reprise de la norme ISO 9126 qui se base sur un modèle
              de qualité lié à l'utilisation du logiciel et un modèle de qualité
              propre à la production logicielle.
            </li>
          </ul>
        </ModalBody>
      </Modal>
      <Modal
        size="xl"
        animation={true}
        show={outsourcingModal}
        onHide={toggleOutsourcingModal}
        className="custom-modal"
      >
        <ModalHeader closeButton></ModalHeader>
        <h1 className="text-center" style={{ color: "#0473aa" }}>
          {" "}
          Outsourcing
        </h1>
        <ModalBody>
          <p
            style={{
              padding: 20,
              fontFamily: "sans-serif",
              fontSize: "15px",
              fontWeight: "400",
              fontVariant: "normal",
              letterSpacing: "normal",
              lineHeight: "27px",
              textAlign: "justify",
              textIndent: "0px",
              textTransform: "none",
              verticalAlign: "baseline",
              whiteSpace: "normal",
              wordSpacing: "3px",
            }}
          >
            CapitalData possède une réelle volonté axée sur la relation client,
            ce qui lui a permis de gagner rapidement la confiance de sa
            clientèle internationale et la fidéliser. Cette volonté se
            concrétise par la satisfaction de nos clients sur les projets
            d'externalisation.
          </p>
          <p
            style={{
              padding: 20,
              fontFamily: "sans-serif",
              fontSize: "15px",
              fontWeight: "400",
              fontVariant: "normal",
              letterSpacing: "normal",
              lineHeight: "27px",
              textAlign: "justify",
              textIndent: "0px",
              textTransform: "none",
              verticalAlign: "baseline",
              whiteSpace: "normal",
              wordSpacing: "3px",
            }}
          >
            En plus de la transparence et de la proximité avec nos clients
            offshore favorisant des rapports de confiance et une gouvernance
            partagée pour des projets de différentes envergures, voici d'autres
            facteurs internes :
          </p>
          <ul>
            <li>Un management agile;</li>
            <li>
              La volonté de nos collaborateurs de relever les défis techniques;
            </li>
            <li>La valorisation des efforts de nos collaborateurs.</li>
          </ul>
          <p>
            Nous veillons au développement des performances de nos ressources
            humaines en les dotant de :
          </p>
          <ul>
            <li>Moyens technologiques de pointe</li>
            <li>De processus organisationnels éprouvés</li>
            <li>Des formations continues</li>
            <li>
              Amélioration continue du Système de Management de la Qualité (SMQ)
            </li>
          </ul>
          <p style={{ marginBottom: 180 }}>
            Aujourd'hui, la part des services d'outsourcing offshore, représente
            39% de notre chiffre d'affaires.
          </p>
        </ModalBody>
      </Modal>
      <section id="contact">
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md={6}>
              <Image
                src={ImageCapital}
                width={deviceInfo.isMobile ? 350 : 550}
                height={deviceInfo.isMobile ? 440 : 640}
              />
              {/* <Slider {...settings} style={{}}>
                <Image src={ImageCapital} width={150} height={640} />
                <Image src={image6} width={150} height={640} />
                <Image src={image2} width={150} height={640} />
                <Image src={image3} width={150} height={640} />
                <Image src={image4} width={150} height={640} />
                <Image src={image5} width={150} height={640} />
              </Slider> */}
            </Col>
            <Col md={5}>
              <Image src={Logo} width={120} height={80} />
              <h2 style={{ color: "#0473aa" }} className="text-left mt-4 mb-5 ">
                Nous aimons ce que nous faisons
              </h2>
              <div style={{ marginLeft: 2 }}>
                <p
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "15px",
                    fontWeight: "400",
                    fontVariant: "normal",
                    letterSpacing: "normal",
                    lineHeight: "27px",
                    textAlign: "justify",
                    textIndent: "0px",
                    textTransform: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "normal",
                    wordSpacing: "3px",
                  }}
                >
                  Depuis son démarrage, CapitalData a su englober et développer
                  plusieurs métiers à savoir, le conseil, la conception et la
                  réalisation d'outils, le support et l'ITO, afin de vous
                  accompagner dans la réalisation de vos projets.
                </p>
                <p
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "15px",
                    fontWeight: "400",
                    fontVariant: "normal",
                    letterSpacing: "normal",
                    lineHeight: "27px",
                    textAlign: "justify",
                    textIndent: "0px",
                    textTransform: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "normal",
                    wordSpacing: "3px",
                    // listStyle: "none",
                  }}
                >
                  CapitalData est dotée d'une équipe pluridisciplinaire, experte
                  dans le domaine informatique et nouvelles technologies.
                </p>
                <p
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "15px",
                    fontWeight: "400",
                    fontVariant: "normal",
                    letterSpacing: "normal",
                    lineHeight: "27px",
                    textAlign: "justify",
                    textIndent: "0px",
                    textTransform: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "normal",
                    wordSpacing: "3px",
                    // listStyle: "none",
                  }}
                >
                  Ce choix est appuyé par une rigoureuse sélection de nos
                  collaborateurs, ce qui nous permet d'avoir une équipe
                  polyvalente.
                </p>
              </div>
              <div className="text-left mt-5 ">
                <Button onClick={toggle} variant="warning" size="lg">
                  QUALITÉ
                </Button>
                <Button
                  onClick={toggleOutsourcingModal}
                  variant="warning"
                  size="lg"
                  style={{ marginLeft: 15 }}
                >
                  OUTSOURCING
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
