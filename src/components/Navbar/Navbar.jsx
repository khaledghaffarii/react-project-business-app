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
                      <ul>
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
                  <div class="row w-100 m-1">
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
                          <strong>Services de Maintenance</strong>
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
                            Maintenance Préventive
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
                            Maintenance Évolutive
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
                            Gestion de Contenu Web
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
                            Hébergement
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
                            Conception UI/UX
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
                <a class="nav-link  fs-4 p-md-5 m-1" href="#">
                  {t("navbar.sector")}
                </a>
                <ul
                  class="dropdown-menu custom-dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li class="dropdown-header d-none d-md-flex">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 100,
                      }}
                      class="d-flex"
                    >
                      <h5
                        class="mb-0"
                        style={{ alignItems: "left", margin: 15, fontSize: 25 }}
                      >
                        Secteur :
                      </h5>
                      <p
                        class="fs-6"
                        style={{
                          whiteSpace: "normal",
                          maxWidth: 750,
                          color: "black",
                          fontWeight: "400",
                          margin: 16,
                        }}
                      >
                        Chez CapitalData, nous nous engageons à fournir des
                        logiciels de gestion sur mesure et des services de
                        qualité supérieure pour soutenir et améliorer votre
                        activité.
                      </p>
                    </div>
                  </li>
                  <div class="row m-1 w-100">
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Technologies de l'Information
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
                            Soins de Santé
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
                            Services financiérs
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
                            Éducation
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
                            Industrie
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Commerce de Détail
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
                            Transport et Logistique
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
                            Énergie et Environnement
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
                            Services Publics
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
                            Télécommunications
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>

              <li class="nav-item dropdown ">
                <a class="nav-link  fs-4 p-md-5 m-1" href="#">
                  {t("navbar.contact")}
                </a>
                <ul
                  class="dropdown-menu custom-dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li class="dropdown-header d-none d-md-flex">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 100,
                      }}
                      class="d-flex"
                    >
                      <h5
                        class="mb-0"
                        style={{ alignItems: "left", margin: 15, fontSize: 25 }}
                      >
                        Contactez-nous :
                      </h5>
                      <p
                        class="fs-6"
                        style={{
                          whiteSpace: "normal",
                          maxWidth: 750,
                          color: "black",
                          fontWeight: "400",
                          margin: 16,
                        }}
                      >
                        Chez CapitalData, nous sommes là pour répondre à toutes
                        vos questions et vous assister dans vos projets. Que
                        vous ayez besoin d'un devis, de support client,
                        d'assistance technique, ou que vous souhaitiez prendre
                        rendez-vous, discuter avec notre service commercial.
                      </p>
                    </div>
                  </li>
                  <div class="row m-1 w-100">
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Demande de Devis
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
                            Support Client
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
                            Assistance Technique
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
                            Rendez-vous
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
                            Service Commercial
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li style={{ marginTop: 10 }}>
                          <a
                            href="#"
                            style={{
                              color: "#000",
                              fontWeight: "400",
                              fontSize: 15,
                            }}
                          >
                            Localisation et Accès
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
                            Foire aux Questions (FAQ)
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
