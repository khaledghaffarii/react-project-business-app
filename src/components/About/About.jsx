import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faChartPie,
  faTruckFast,
  faUserClock,
  faHouseLaptop,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import AboutImage from "../../assets/about/webprofesional.webp";
import { detectMobileOrTablet } from "../../utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Lottie from "lottie-react";
import website from "../../animation/websit.json";
import mobile from "../../animation/mobile.json";
import bigdata from "../../animation/bigdata.json";
import cloud from "../../animation/cloud.json";
import uidesign from "../../animation/uidesign.json";
import strategy from "../../animation/strategy.json";
import security from "../../animation/security.json";
import marketing from "../../animation/marketing.json";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const handlePersonnelClick = () => {
    navigate("/personnel");
  };
  var deviceInfo = detectMobileOrTablet();
  const [animatingSlide, setAnimatingSlide] = useState(0);
  // Icons
  const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />;
  const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />;
  const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />;
  const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />;
  const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />;
  const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: deviceInfo.isMobile ? 1 : 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    swipeToSlide: true,
  };
  const settingsAnnimation = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setAnimatingSlide(current),
    autoplaySpeed: 3000,
  };

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
    <>
      <section id="about2">
        <div className="container ">
          <div className="title_headling">
            {/* <h1 style={{ fontSize: "5rem", margin: 20 }}>Expertise</h1> */}
            <h4 style={{ textAlign: "center", margin: 20 }}>
              Assurer la satisfaction de nos clients est au centre de notre
              expertise
            </h4>
          </div>

          <div style={{ marginTop: 85 }} className="px-5">
            {/* <Slider {...settings} style={{}}>
              <div className="col-md-3 text-center item p-3">
                <span className="picto_expertise">
                  <img
                    className="myclass"
                    src="https://www.medianet.com.tn/assets/public/picto_digital_consulting.png"
                    border="0"
                    alt=""
                  />
                </span>
                <h3 className="title_bloc_expertise">Digital consulting</h3>
                <p className="desc_bloc_expertise">
                  Les nouvelles technologies révolutionnent les expériences de
                  marque, d’achat et de service tout en apportant une nouvelle
                  valeur ajoutée.
                </p>
              </div>
              <div className="col-md-3 text-center item p-3">
                <span className="picto_expertise">
                  <img
                    className="myclass"
                    src="https://www.medianet.com.tn/assets/public/application_web_picto.png"
                    border="0"
                    alt=""
                  />
                </span>
                <h3 className="title_bloc_expertise">UX/UI design</h3>
                <p className="desc_bloc_expertise">
                  L’innovation permanente qui tend à placer l’utilisateur au
                  cœur du processus de conception
                </p>
              </div>
              <div className="col-md-3 text-center item p-3">
                <span className="picto_expertise">
                  <img
                    className="myclass"
                    src="https://www.medianet.com.tn/assets/public/picto_growth_marketing.png"
                    border="0"
                    alt=""
                  />
                </span>
                <h3 className="title_bloc_expertise">Growth Marketing</h3>
                <p className="desc_bloc_expertise">
                  Nous vous aidons à gagner en trafic et en notoriété grâce à
                  des moyens d’acquisition rapide qui ne demandent pas de temps
                  d’attente de résultats.
                </p>
              </div>
              <div className="col-md-3 text-center item p-3">
                <span className="picto_expertise">
                  <img
                    className="myclass"
                    src="https://www.medianet.com.tn/assets/public/picto_e_reputation.png"
                    border="0"
                    alt=""
                  />
                </span>
                <h3 className="title_bloc_expertise">E-réputation</h3>
                <p className="desc_bloc_expertise">
                  Concrètement, l’amélioration de l’expérience digitale permet
                  de développer les revenus, de réduire les coûts et d’améliorer
                  la satisfaction des utilisateurs : clients, employés,
                  fournisseurs, ou partenaires.
                </p>
              </div>
              <div className="col-md-3 text-center item p-3">
                <span className="picto_expertise">
                  <img
                    className="myclass"
                    src="https://www.medianet.com.tn/assets/public/picto_cloud_computing.png"
                    border="0"
                    alt=""
                  />
                </span>
                <h3 className="title_bloc_expertise">Cloud computing</h3>
                <p className="desc_bloc_expertise">
                  Parmi les avantages du cloud computing c'est
                  l’approvisionnement en libre-service, l’élasticité, et le
                  paiement à l’utilisation. L’approvisionnement en libre service
                  permet aux utilisateurs finaux d’accéder à n’importe quelle
                  ressource informatique à la demande.
                </p>
              </div>
              <div className="col-md-3 text-center item p-3">
                <span className="picto_expertise">
                  <img
                    className="myclass"
                    src="https://www.medianet.com.tn/assets/public/picto_big_data.png"
                    border="0"
                    alt=""
                  />
                </span>
                <h3 className="title_bloc_expertise">Big Data</h3>
                <p className="desc_bloc_expertise">
                  Cette immense quantité de donnés est capitale pour certains
                  types d’algorithme de transformation et de modélisation
                  prédictive qui ne fonctionnent que sur des données massives
                  étiquetées
                </p>
              </div>
              <div className="col-md-3 text-center item p-3">
                <span className="picto_expertise">
                  <img
                    className="myclass"
                    src="https://www.medianet.com.tn/assets/public/picto_formation.png"
                    border="0"
                    alt=""
                  />
                </span>
                <h3 className="title_bloc_expertise">Formation</h3>
                <p className="desc_bloc_expertise">
                  En identifiant et en analysant les forces et les faiblesses
                  des collaborateurs et en utilisant la bonne pédagogie, nous
                  pouvons accompagner vos équipes à mieux développer leur
                  performance et leur savoir-faire.
                </p>
              </div>
            </Slider> */}
            <Slider
              {...settingsAnnimation}
              beforeChange={(current, next) => setAnimatingSlide(next)}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    flexDirection: "column", // ou la hauteur que vous souhaitez
                  }}
                >
                  <h1
                    className={animatingSlide === 0 ? "slide-in-left " : ""}
                    style={{ marginBottom: 25, color: "#0a66c2" }}
                  >
                    Développement Mobile
                  </h1>
                  <Lottie
                    animationData={mobile}
                    style={{ maxWidth: "40%", maxHeight: "40%" }}
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    flexDirection: "column", // ou la hauteur que vous souhaitez
                  }}
                >
                  <h1
                    className={animatingSlide === 1 ? "slide-in-left " : ""}
                    style={{ marginBottom: 25, color: "#0a66c2" }}
                  >
                    Location des site web
                  </h1>
                  <Lottie
                    animationData={website}
                    style={{ maxWidth: "40%", maxHeight: "40%" }}
                  />
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    flexDirection: "column", // ou la hauteur que vous souhaitez
                  }}
                >
                  <h1
                    className={animatingSlide === 2 ? "slide-in-left " : ""}
                    style={{ marginBottom: 25, color: "#0a66c2" }}
                  >
                    BigData
                  </h1>
                  <Lottie
                    animationData={bigdata}
                    style={{ maxWidth: "40%", maxHeight: "40%" }}
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    flexDirection: "column", // ou la hauteur que vous souhaitez
                  }}
                >
                  <h1
                    className={animatingSlide === 3 ? "slide-in-left " : ""}
                    style={{ marginBottom: 25, color: "#0a66c2" }}
                  >
                    Cyber Security
                  </h1>
                  <Lottie
                    animationData={security}
                    style={{ maxWidth: "40%", maxHeight: "40%" }}
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    flexDirection: "column", // ou la hauteur que vous souhaitez
                  }}
                >
                  <h1
                    className={animatingSlide === 4 ? "slide-in-left " : ""}
                    style={{ marginBottom: 25, color: "#0a66c2" }}
                  >
                    Design Ui/Ux
                  </h1>
                  <Lottie
                    animationData={uidesign}
                    style={{ maxWidth: "40%", maxHeight: "40%" }}
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    flexDirection: "column", // ou la hauteur que vous souhaitez
                  }}
                >
                  <h1
                    className={animatingSlide === 5 ? "slide-in-left " : ""}
                    style={{ marginBottom: 25, color: "#0a66c2" }}
                  >
                    Degital Marketing
                  </h1>
                  <Lottie
                    animationData={marketing}
                    style={{ maxWidth: "40%", maxHeight: "40%" }}
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    flexDirection: "column", // ou la hauteur que vous souhaitez
                  }}
                >
                  <h1
                    className={animatingSlide === 6 ? "slide-in-left " : ""}
                    style={{ marginBottom: 25, color: "#0a66c2" }}
                  >
                    Cloud computing
                  </h1>
                  <Lottie
                    animationData={cloud}
                    style={{ maxWidth: "40%", maxHeight: "40%" }}
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    flexDirection: "column", // ou la hauteur que vous souhaitez
                  }}
                >
                  <h1
                    className={animatingSlide === 7 ? "slide-in-left " : ""}
                    style={{ marginBottom: 45, color: "#0a66c2" }}
                  >
                    Strategie
                  </h1>
                  <Lottie
                    animationData={strategy}
                    style={{ maxWidth: "40%", maxHeight: "40%" }}
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <h2
          className="text-center mb-5 "
          style={{ color: "#0a0a0a", fontWeight: "bold" }}
        >
          Modèles de collaboration pour le développement de logiciels
        </h2>
      </section>
      <div id="about">
        <Container style={{ opacity: 0.9 }} ref={containerRef} className="py-5">
          <Row>
            <Col md={4}>
              <Card
                className="mb-4 hover-effect card-container card-reset"
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  borderRadius: "8px",
                  border: "none",
                  height: 160,
                  paddingBottom: 50,
                }}
                border="light"
              >
                <Card.Body>
                  <Card.Title>Augmentation du personnel</Card.Title>
                  <Card.Text>
                    CapitalData soumettra les CV les plus adaptés des experts en
                    technologie possédant les compétences et les connaissances
                    nécessaires pour réussir afin d'augmenter votre équipe.
                    <Button
                      onClick={handlePersonnelClick}
                      style={{
                        textAlign: "left",
                        color: "black",
                        textDecorationLine: "none",
                        fontWeight: "bold",
                      }}
                      variant="link"
                      href="#"
                    >
                      Voir plus →
                    </Button>
                  </Card.Text>
                </Card.Body>
                <div className="progress-line"></div>
              </Card>
            </Col>
            <Col md={4}>
              <Card
                className="mb-4 hover-effect card-container card-reset"
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  borderRadius: "8px",
                  border: "none",
                  height: 160,
                }}
                border="light"
              >
                <Card.Body>
                  <Card.Title>Équipe dédiée</Card.Title>
                  <Card.Text>
                    En embauchant une équipe dédiée et en conservant un contrôle
                    total sur la prise de décision, vous pouvez guider ses
                    efforts et vous concentrer sur l'obtention des meilleurs
                    résultats.
                  </Card.Text>
                </Card.Body>
                <div className="progress-line"></div>
              </Card>
            </Col>
            <Col md={4}>
              <Card
                className="mb-4 hover-effect card-container card-reset"
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  borderRadius: "8px",
                  border: "none",
                  height: 160,
                }}
                border="light"
              >
                <Card.Body>
                  <Card.Title>Livraison gérée</Card.Title>
                  <Card.Text>
                    Soulagez-vous du fardeau de la gestion quotidienne en
                    confiant vos projets à un fournisseur de confiance qui
                    mettra en œuvre vos plans clé en main.
                  </Card.Text>
                </Card.Body>
                <div className="progress-line"></div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
