import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Keep custom CSS for specific styles
import { Link } from "react-scroll";
import Logo from "../../assets/logo/logo5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import { detectMobileOrTablet } from "../../utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Use a descriptive state name
  const { t } = useTranslation();
  const menuIcon = <FontAwesomeIcon icon={faBars} />;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Consider using a dedicated scroll event library for a more robust solution
  useEffect(() => {
    const handleScroll = () => {
      const isSticky = window.scrollY > 20;
      // Potentially use a state variable for stickiness to avoid redundant calculations
      document.body.classList.toggle("sticky", isSticky);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const deviceInfo = detectMobileOrTablet();
  return (
    <>
      <nav
        id="site_header"
        className={`${isMenuOpen ? "show-menu" : ""}`}
        class="navbar navbar-expand-lg bg-light "
      >
        <div
          id="navbarNav"
          className="container navbar navbar-expand-lg navbar-light"
          class="container-fluid"
        >
          <a className="navbar-brand" href="/">
            <img width="120" height="70" style={{}} src={Logo} alt="Logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              isMenuOpen ? "show" : ""
            }`}
            class="collapse navbar-collapse d-md-flex flex-row justify-content-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav  mb-2 mb-lg-0  ">
              <li class="nav-item dropdown">
                <a class="nav-link fs-4 p-md-5 m-1" href="#">
                  {t("navbar.company")}
                </a>
                <ul
                  style={{ width: "80vh" }}
                  class="dropdown-menu custom-dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li class="dropdown-header d-none d-md-flex ">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 100,
                      }}
                      class="d-flex "
                    >
                      <h5
                        class="mb-0"
                        style={{
                          alignItems: "left",
                          margin: 15,
                          fontSize: 25,
                        }}
                      >
                        Entreprise:
                      </h5>
                      <p
                        class="fs-6 "
                        // style="max-width: 250px; white-space: normal;"
                        style={{
                          whiteSpace: "normal",
                          maxWidth: 450,
                          color: "black",
                          fontWeight: "400",
                          margin: 20,
                        }}
                      >
                        CapitalData est une société de développement de
                        logiciels proposant un cycle complet de services
                      </p>
                    </div>
                  </li>
                  <div class="row" style={{ marginTop: 25 }}>
                    <div class="col-md-12 mx-5">
                      <ul class="list-unstyled">
                        <li>
                          <strong>À propos de nous</strong>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Notre Vision
                          </a>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Leadership Visionnaire
                          </a>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Culture & Valeurs
                          </a>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Engagement Sociétal
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link fs-4 p-md-5 m-1" href="#">
                  {t("navbar.service")}
                </a>
                <ul
                  class="dropdown-menu custom-dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ margint: 10 }}
                >
                  <li class="dropdown-header d-none d-md-flex ">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 100,
                      }}
                      class="d-flex "
                    >
                      <h5
                        class="mb-0"
                        style={{
                          alignItems: "left",
                          margin: 15,
                          fontSize: 25,
                        }}
                      >
                        Boostez votre business:
                      </h5>
                      <p
                        class="fs-6 "
                        // style="max-width: 250px; white-space: normal;"
                        style={{
                          whiteSpace: "normal",
                          maxWidth: 300,

                          color: "black",
                          fontWeight: "400",
                          margin: 16,
                        }}
                      >
                        Profitez de nos services informatiques d'excellence pour
                        concevoir un logiciel sur mesure performant,
                        garantissant un retour sur investissement optimal.
                      </p>
                    </div>
                  </li>
                  <div class="row">
                    <div class="col-md-4">
                      <ul class="list-unstyled ">
                        <li>
                          <strong>Offres technologiques</strong>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Web, Intranet et Extranet
                          </a>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Développement Mobile
                          </a>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Solution e-commerce
                          </a>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            location solutions web et mobile
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-4">
                      <ul class="list-unstyled">
                        <li>
                          <strong>RUN SERVICES</strong>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Maintenance préventive
                          </a>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Maintenance Corrective
                          </a>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Maintenance évolutive
                          </a>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Webmastering
                          </a>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Infogérance et Hosting
                          </a>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            UI/UX Design
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-4">
                      <ul class="list-unstyled">
                        <li>
                          <strong>CapitalDtata Digital</strong>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Stratégie digitale
                          </a>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Community Management
                          </a>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Référencement
                          </a>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Achat media
                          </a>
                        </li>
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Brand Content
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>

              <li class="nav-item dropdown ">
                <a
                  class="nav-link  fs-4 p-md-5 m-1"
                  href="#"
                  // role="button"
                  // data-bs-toggle="dropdown"
                  // aria-expanded="false"
                >
                  {t("navbar.sector")}
                </a>
                <ul
                  class="dropdown-menu custom-dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a class="dropdown-item fs-5" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider fs-5"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown ">
                <a
                  class="nav-link  fs-4 p-md-5 m-1"
                  href="#"
                  // role="button"
                  // data-bs-toggle="dropdown"
                  // aria-expanded="false"
                >
                  {t("navbar.contact")}
                </a>
                <ul
                  class="dropdown-menu custom-dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a class="dropdown-item fs-5" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider fs-5"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item fs-5" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    // <>
    //   <header id="site_header" className={`${isMenuOpen ? "show-menu" : ""}`}>
    //     <div className="container navbar navbar-expand-lg navbar-light">
    //       <a className="navbar-brand" href="/">
    //         <img style={{ width: 200 }} src={Logo} alt="Logo" />
    //       </a>

    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded={isMenuOpen}
    //         aria-label="Toggle navigation"
    //         onClick={toggleMenu} // Toggle menu on button click
    //       >
    //         {menuIcon}
    //       </button>

    //       <div
    //         className={`collapse navbar-collapse justify-content-end ${
    //           isMenuOpen ? "show" : ""
    //         }`}
    //         id="navbarNav"
    //       >
    //         <ul className="navbar-nav">
    //           <li className="nav-item dropdown"> {/* Add dropdown class */}
    //             <Link
    //               activeClass="active"
    //               to="home"
    //               spy={true}
    //               smooth={true}
    //               className="nav-link dropdown-toggle" // Use dropdown-toggle for hover
    //               data-bs-toggle="dropdown" // Add data-bs-toggle attribute
    //               aria-expanded="false" // Set initial expanded state (optional)
    //             >
    //               {t("navbar.company")}
    //             </Link>
    //             <ul className="dropdown-menu">
    //               <li>
    //                 <a href="#">Sous-menu 1</a>
    //               </li>
    //               <li>
    //                 <a href="#">Sous-menu 2</a>
    //               </li>
    //               <li>
    //                 <a href="#">Sous-menu 3</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li className="nav-item">
    //             <Link to="about" spy={true} smooth={true} className="nav-link">
    //               {t("navbar.service")}
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to="services" spy={true} smooth={true} className="nav-link">
    //               {t("navbar.sector")}
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to="contact" spy={true} smooth={true} className="nav-link">
    //               {t("navbar.contact")}
    //             </Link>
    //           </li>
    //         </ul>
    //         {/* Include LanguageSelector component here */}
    //       </div>
    //     </div>
    //   </header>
    // </>
  );
}
