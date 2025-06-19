import { StrictMode, Suspense } from "react";
// import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
/*
const App = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./App.jsx")), 10000); // Wait for 10 mins
  });
});
*/

import { Loader } from "./components/Loader.jsx";

import "./i18n.js";
import "./index.css";
import "./css/designSystem.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </StrictMode>
);
