import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const lang = localStorage.getItem("myLang");

i18n
  .use(LanguageDetector)
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: lang || "en",
    supportedLngs: ["en", "ko", "fr"],
    nonExplicitSupportedLngs: true,
    debug: false, //Set to true for dev debug (process.env.NODE_ENV === 'development')
    backend: {
      loadPath: "/locals/{{lng}}/{{ns}}.json",
    },
    ns: ["general", "nav", "contents", "home", "map", "documentary"],
    detection: {
      order: [
        "localStorage",
        "cookie",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
