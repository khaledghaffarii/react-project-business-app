import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import flagFrance from "../../assets/flags/fr.png";
import flagUK from "../../assets/flags/usa.png";
import Select from "react-select";
import "./LanguageSelector.css";
import { detectMobileOrTablet } from "../../utils";
const LanguageSelector = () => {
  const { t } = useTranslation();
  var deviceInfo = detectMobileOrTablet();
  const handleChangeLanguage = (selectedOption) => {
    if (selectedOption) {
      const newLang = selectedOption.value;
      console.log("🚀 ~ handleChangeLanguage ~ newLang:", newLang);
      i18n.changeLanguage(newLang);
    }
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      backgroundColor:
        deviceInfo.isTablet || deviceInfo.isMobile ? "#eee" : "#fff",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#e0e0e0" : "white", // Change la couleur de fond de l'option sélectionnée
    }),
  };

  const options = [
    {
      value: "fr",
      label: (
        <div>
          <img src={flagFrance} alt="Drapeau français" className="flag-icon" />
        </div>
      ),
    },
    {
      value: "en",
      label: (
        <div>
          <img src={flagUK} alt="Drapeau britannique" className="flag-icon" />
        </div>
      ),
    },
  ];

  return (
    <div>
      <Select
        options={options}
        onChange={handleChangeLanguage}
        value={options.find((option) => option.value === i18n.language)}
        styles={customStyles}
      />
    </div>
  );
};

export default LanguageSelector;
