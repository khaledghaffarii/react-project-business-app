import React from "react";
import "./Home.css";
import BannerImage from "../../assets/banner/banner2.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faShieldHalved,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";
import { detectMobileOrTablet } from "../../utils";
import { useTranslation } from "react-i18next"; // Importez useTranslation
export default function Home() {
  const { t } = useTranslation();
  // Icons
  const faChartIcon = <FontAwesomeIcon icon={faChartLine} />;
  const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />;
  const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />;
  var deviceInfo = detectMobileOrTablet();

  return (
    <>
      <section id="home">
        <div className="banner_image"></div>
        <div className="container">
          <div
            className="banner_outer"
            style={{
              display: "flex",
              flexDirection:
                deviceInfo.isTablet || deviceInfo.isMobile ? "column" : "row",
            }}
          >
            <div className="col">
              <h3 className="title">{t("home.promotedContent")}</h3>
              <p>{t("home.promotedContentDescription")}</p>
              <div className="btn_wrapper">
                <a className="btn" href="/">
                  {t("home.getStarted")}
                </a>
              </div>
            </div>
            <div className="col">
              <div className="sub_banner_image">
                <img
                  style={{
                    height: deviceInfo.isMobile ? 500 : 650,
                  }}
                  src={BannerImage}
                  alt="Banner_image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
