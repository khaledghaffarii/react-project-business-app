import React from "react";
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
export default function About() {
  var deviceInfo = detectMobileOrTablet();
  console.log("🚀 ~ About ~ deviceInfo:", deviceInfo);

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
    // vertical: deviceInfo.isMobile ? true : false,
    // verticalSwiping: deviceInfo.isMobile ? true : false,
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section id="about">
        <div class="container ">
          <div className="title_headling">
            <h1 style={{ fontSize: "5rem", margin: 20 }}>Expertise</h1>
            <p style={{ textAlign: "center", margin: 20 }}>
              Assurer la satisfaction de nos clients est au centre de notre
              expertise
            </p>
          </div>
          <div style={{ marginTop: 85 }} class="  px-5">
            <Slider {...settings} style={{}}>
              <div class="col-md-3  text-center  item p-3">
                <span class="picto_expertise">
                  <img
                    class="myclass"
                    src="https://www.medianet.com.tn/assets/public/picto_digital_consulting.png"
                    border="0"
                    alt=""
                  />
                </span>
                <h3 class="title_bloc_expertise">Digital consulting</h3>
                <p class="desc_bloc_expertise" style={{}}>
                  {" "}
                  Les nouvelles technologies révolutionnent les expériences de
                  marque, d’achat et de service tout en apportant une nouvelle
                  valeur ajoutée.{" "}
                </p>
              </div>
              <div class="col-md-3  text-center  item p-3">
                <span class="picto_expertise">
                  <img
                    class="myclass"
                    src="https://www.medianet.com.tn/assets/public/application_web_picto.png"
                    border="0"
                    alt=""
                  />
                </span>
                <h3 class="title_bloc_expertise">UX/UI design</h3>
                <p class="desc_bloc_expertise" style={{}}>
                  {" "}
                  L’innovation permanente qui tend à placer l’utilisateur au
                  cœur du processus de conception{" "}
                </p>
              </div>
              <div class="col-md-3  text-center  item p-3">
                <span class="picto_expertise">
                  <img
                    class="myclass"
                    src="https://www.medianet.com.tn/assets/public/picto_growth_marketing.png"
                    border="0"
                    alt=""
                  />
                </span>
                <h3 class="title_bloc_expertise">Growth Marketing</h3>
                <p class="desc_bloc_expertise" style={{}}>
                  {" "}
                  Nous vous aidons à gagner en trafic et en notoriété grâce à
                  des moyens d’acquisition rapide qui ne demandent pas de temps
                  d’attente de résultats.
                </p>
              </div>
              <div class="col-md-3  text-center  item p-3">
                <span class="picto_expertise">
                  <img
                    class="myclass"
                    src="https://www.medianet.com.tn/assets/public/picto_e_reputation.png"
                    border="0"
                    alt=""
                  />
                </span>
                <h3 class="title_bloc_expertise">E-réputation</h3>
                <p class="desc_bloc_expertise" style={{}}>
                  {" "}
                  Concrètement, l’amélioration de l’expérience digitale permet
                  de développer les revenus, de réduire les coûts et d’améliorer
                  la satisfaction des utilisateurs : clients, employés,
                  fournisseurs, ou partenaires.{" "}
                </p>
              </div>
              <div class="col-md-3  text-center  item p-3">
                <span class="picto_expertise">
                  <img
                    class="myclass"
                    src="https://www.medianet.com.tn/assets/public/picto_cloud_computing.png"
                    border="0"
                    alt=""
                  />
                </span>
                <h3 class="title_bloc_expertise">Cloud computing</h3>
                <p class="desc_bloc_expertise" style={{}}>
                  {" "}
                  Parmi les avantages du cloud computing c'est
                  l’approvisionnement en libre-service, l’élasticité, et le
                  paiement à l’utilisation. L’approvisionnement en libre service
                  permet aux utilisateurs finaux d’accéder à n’importe quelle
                  ressource informatique à la demande.{" "}
                </p>
              </div>
              <div class="col-md-3  text-center  item p-3">
                <span class="picto_expertise">
                  <img
                    class="myclass"
                    src="https://www.medianet.com.tn/assets/public/picto_big_data.png"
                    border="0"
                    alt=""
                  />
                </span>
                <h3 class="title_bloc_expertise">Big Data</h3>
                <p class="desc_bloc_expertise" style={{}}>
                  {" "}
                  Cette immense quantité de donnés est capitale pour certains
                  types d’algorithme de transformation et de modélisation
                  prédictive qui ne fonctionnent que sur des données massives
                  étiquetées{" "}
                </p>
              </div>
              <div class="col-md-3  text-center  item p-3">
                <span class="picto_expertise">
                  <img
                    class="myclass"
                    src="https://www.medianet.com.tn/assets/public/picto_formation.png"
                    border="0"
                    alt=""
                  />
                </span>
                <h3 class="title_bloc_expertise">Formation</h3>
                <p class="desc_bloc_expertise" style={{}}>
                  {" "}
                  C’est le label que nous avons créé pour grouper nos actions en
                  formations internes, externes ainsi que les formations
                  académiques en partenariat avec les universités.{" "}
                </p>
              </div>
            </Slider>
          </div>

          <div className="">
            {/* <div className="about_col">
              <div className="about_image">
                <img
                  style={{
                    height: deviceInfo.isMobile ? 200 : 450,
                    width: !deviceInfo.isTablet ? 700 : 800,
                  }}
                  src={AboutImage}
                  alt="about"
                  className="about_main"
                />
              </div>
              <div class="img_info__box">
                <h6 class="img_info__title">GET A PRICE QUOTE TODAY!</h6>
                <p>
                  Nemo enim ipsam oluptatem quia oluptas <br />
                  sit aspernatur aut odit aut fugit.
                </p>
                <a href="/">
                  {faPhoneIcon} <span>1-800-654-3210</span>
                </a>
              </div>
            </div>
            <div className="about_col more_space">
              <h3>We have business skills that will increase your earnings</h3>
              <p>
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>

              <div className="grid_info">
                <div className="icon">{faUserClockIcon}</div>
                <div className="detail">
                  <h4>Start your own business in minutes</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit.
                  </p>
                </div>
              </div>
              <div className="grid_info">
                <div className="icon green_icon">{faHouseLaptopIcon}</div>
                <div className="detail">
                  <h4>Open a business account online</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit.
                  </p>
                </div>
              </div>
            </div> */}
            <Container className="py-5">
              <h2 className="text-center mb-5">
                Modèles de collaboration pour le développement de logiciels
              </h2>

              <Row>
                <Col md={4}>
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
                      <Card.Title>Augmentation du personnel</Card.Title>
                      <Card.Text>
                        CapitalData soumettra les CV les plus adaptés des
                        experts en technologie possédant les compétences et les
                        connaissances nécessaires pour réussir afin d'augmenter
                        votre équipe.
                        <Button
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
                  </Card>
                </Col>
                <Col md={4}>
                  <Card
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      borderRadius: "8px",
                      border: "none",
                      height: 160,
                    }}
                    border="light"
                    className="mb-4 hover-effect"
                  >
                    <Card.Body>
                      <Card.Title>Équipe dédiée</Card.Title>
                      <Card.Text>
                        En embauchant une équipe dédiée et en conservant un
                        contrôle total sur la prise de décision, vous pouvez
                        guider ses efforts et vous concentrer sur l'obtention
                        des meilleurs résultats.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      borderRadius: "8px",
                      border: "none",
                      height: 160,
                    }}
                    border="light"
                    className="mb-4 hover-effect"
                  >
                    <Card.Body>
                      <Card.Title>Livraison gérée</Card.Title>
                      <Card.Text>
                        Soulagez-vous du fardeau de la gestion quotidienne en
                        confiant vos projets à un fournisseur de confiance qui
                        mettra en œuvre vos plans clé en main.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
            <div className="bg-white text-dark   w-100 mb-5">
              <Container style={{}}>
                <Row>
                  <Col>
                    <p style={{ fontSize: 15 }}>
                      <span style={{ fontWeight: "bold" }}>CapitalData</span> a
                      réalisé de nombreux projets informatiques et propose une
                      estimation détaillée de votre initiative informatique dans
                      le cadre de nos services de développement de logiciels
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
                  className="hover-effect  "
                  variant="warning"
                >
                  Calculez votre projet
                </Button>
              </Container>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
