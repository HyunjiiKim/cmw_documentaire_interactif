import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { useTranslation } from "react-i18next";

import App from "./App.jsx";

import "./i18n.js";
import "./index.css";
import "./css/designSystem.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Loader = () => {
  const { t } = useTranslation("general");
  return (
    <div className="text-white p-10 text-center">
      {t("loading", "Loading...")}
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </StrictMode>
);
