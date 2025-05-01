import { useTranslation } from "react-i18next";

import { FlagContainer } from "./Container.jsx";
import { InfoBtn } from "./Button.jsx";
import { SoundBtn } from "./Button.jsx";

import FlagUS from "../assets/img/flag_US.png";
import FlagKR from "../assets/img/flag_KR.png";
import FlagFR from "../assets/img/flag_FR.png";

import "./components.css";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const languageCode = i18n.language.split("-")[0];
  const currentLang = languageCode.toLowerCase();

  const languages = [
    {
      code: "en",
      label: "English",
      img: FlagUS,
    },
    {
      code: "ko",
      label: "한국어",
      img: FlagKR,
    },
    {
      code: "fr",
      label: "Français",
      img: FlagFR,
    },
  ];

  // Sort them so the user’s current language is first
  const sortedLanguages = [...languages].sort((a, b) => {
    if (a.code === currentLang) return -1;
    if (b.code === currentLang) return 1;
    return 0;
  });

  // language change handler (mobile)
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  // language change handler (desktop)
  const changeLanguageDesktop = (code) => () => i18n.changeLanguage(code);

  return (
    <div
      id="language-switch"
      className="absolute top-10 right-10 mr-[100px] mt-[30px]"
    >
      <div id="mobile" className="max-sm:hidden md:hidden text-white">
        <select onChange={changeLanguage} value={currentLang}>
          {sortedLanguages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
      <div id="desktop" className="max-md:hidden flex flex-row gap-3">
        <SoundBtn />
        {languages.map(({ code, img, label }) => (
          <FlagContainer
            key={code}
            src={img}
            alt={label}
            onClick={changeLanguageDesktop(code)}
            isActive={currentLang === code}
          />
        ))}
        <InfoBtn />
      </div>
    </div>
  );
};

export default LanguageSwitch;
