import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Logo from "../../assets/logo/logo5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  // Mobile Menu State
  const [sidenav, setSidenav] = useState(false);
  const { t } = useTranslation();
  // Desktop Fixed Menu
  const [sticky, setSticky] = useState(false);

  // Mobile Icon
  const menuIcon = <FontAwesomeIcon icon={faBars} />;

  // SideNav
  const sidenavShow = () => {
    setSidenav(!sidenav);
  };

  // Scroll Fixed Navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <header id="site_header" className={`${sticky ? "sticky" : ""}`}>
        <div className="container ">
          <nav className="navbar" id="Navbar">
            <div className="navbar_brand">
              <a href="/">
                <img style={{ width: 200 }} src={Logo} alt="Logo" />
              </a>
            </div>
            <div className="navbar_toggler" onClick={sidenavShow}>
              {menuIcon}
            </div>
            <div
              style={{ display: "flex", flexDirection: "row" }}
              className={`menu_items ${sidenav === true ? "active" : ""}`}
            >
              <ul style={{ marginTop: 7 }}>
                <li>
                  <Link activeClass="active" to="home" spy={true} smooth={true}>
                    {t("navbar.home")}
                  </Link>
                </li>
                <li>
                  <Link to="about" spy={true} smooth={true}>
                    {t("navbar.about")}
                  </Link>
                </li>
                <li>
                  <Link to="services" spy={true} smooth={true}>
                    {t("navbar.service")}
                  </Link>
                </li>
                <li>
                  <Link to="blog" spy={true} smooth={true}>
                    {t("navbar.blog")}
                  </Link>
                </li>
                <li>
                  <Link to="contact" spy={true} smooth={true}>
                    {t("navbar.contact")}
                  </Link>
                </li>
              </ul>
              <LanguageSelector />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
