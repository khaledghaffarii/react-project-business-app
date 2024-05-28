import React, { useState, useEffect } from "react";
import "./Footer.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  const faArrowUpIcon = <FontAwesomeIcon icon={faArrowUp} />;
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });

  return (
    <>
      <section className="container">
        <footer className="footer">
          <Container>
            <Row className="justify-content-between align-items-center">
              <Col
                xs={12}
                md={4}
                className="mb-3 mb-md-0 d-flex flex-md-column flex-row"
              >
                <p className="">
                  <strong>CONTACT US</strong>
                </p>

                <ul className="list-unstyled">
                  <li>
                    <a
                      style={{
                        textDecorationLine: "none",
                        color: "#000",
                        fontWeight: 500,
                      }}
                      href=""
                    >
                      +261 56 50 66 52
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        textDecorationLine: "none",
                        color: "#000",
                        fontWeight: 500,
                        marginLeft: 60,
                      }}
                      href=""
                    >
                      contact@capitaldata.com
                    </a>
                  </li>
                </ul>
              </Col>

              {/* <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                <a href="#top" className="text-light">
                  <FontAwesomeIcon
                    color="#0a66c2"
                    style={{ margin: 5, fontSize: 18 }}
                    icon={faChevronUp}
                  />
                </a>
              </Col> */}

              <Col xs={12} md={4} className="text-md-end text-center">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        color="#0a66c2"
                        style={{ margin: 5, fontSize: 18 }}
                        icon={faFacebookF}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        color="#0a66c2"
                        style={{ margin: 5, fontSize: 18 }}
                        icon={faLinkedinIn}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        color="#0a66c2"
                        style={{ margin: 5, fontSize: 18 }}
                        icon={faInstagram}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        color="#0a66c2"
                        style={{ margin: 5, fontSize: 18 }}
                        icon={faTwitter}
                      />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="mt-3 text-center ">
              <Col>
                <p className="text-center m-0">
                  © 2023 CapitalData . All Rights Reserved. |{" "}
                  <a href="#" className="text-light">
                    Privacy Policy
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </section>

      {/* Scroll To Top */}
      {isVisible && (
        <div className="scroll_top" onClick={scrollToTop}>
          {faArrowUpIcon}
        </div>
      )}
    </>
  );
}
