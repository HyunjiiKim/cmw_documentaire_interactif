import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const languageCode = i18n.language.split('-')[0]; 
  const currentLang = languageCode.toLowerCase();

  const languages = [
    { code: "en", label: "English" },
    { code: "ko", label: "한국어" },
    { code: "fr", label: "Français" }
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
    <div>
        <select onChange={changeLanguage} value={currentLang}>
        {sortedLanguages.map((lang) => (
            <option key={lang.code} value={lang.code}>
            {lang.label}
            </option>
        ))}
        </select>
    </div>
  );
};

export default LanguageSwitch;