import { useTranslation } from "react-i18next";

import "./components.css";
import "./Container.jsx";
import { FlagContainer } from "./Container.jsx";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const languageCode = i18n.language.split("-")[0];
  const currentLang = languageCode.toLowerCase();

  const languages = [
    {
      code: "en",
      label: "English",
      img: "src/assets/img/Flag_of_the_United_Kingdom_(3-5).svg.png",
    },
    {
      code: "ko",
      label: "한국어",
      img: "src/assets/img/Flag_of_South_Korea.svg.png",
    },
    {
      code: "fr",
      label: "Français",
      img: "src/assets/img/Flag_of_France.svg.png",
    },
  ];

  // Sort them so the user’s current language is first
  const sortedLanguages = [...languages].sort((a, b) => {
    if (a.code === currentLang) return -1;
    if (b.code === currentLang) return 1;
    return 0;
  });

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div id="language-switch">
      <div id="mobile">
        <select onChange={changeLanguage} value={currentLang}>
          {sortedLanguages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.img}
              {lang.label}
            </option>
          ))}
        </select>
      </div>

      <div id="desktop" class="flex flex-row gap-3">
        <img
          key="fr"
          src="src\assets\img\Flag_of_France.svg.png"
          alt="French flag"
        ></img>
        <img
          key="en"
          src="src\assets\img\Flag_of_the_United_Kingdom_(3-5).svg.png"
          alt="English flag"
        ></img>
        <img
          key="ko"
          src="src\assets\img\Flag_of_South_Korea.svg.png"
          alt="Korean flag"
        ></img>
      </div>
    </div>
  );
};

export default LanguageSwitch;
