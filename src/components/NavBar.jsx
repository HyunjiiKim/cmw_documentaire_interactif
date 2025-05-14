import { useState } from "react";
import { useTranslation } from "react-i18next";

export const NavBar = ({ whichPage }) => {
  const { t } = useTranslation("nav");
  const { t: t2 } = useTranslation("contents");

  const [current, setCurrent] = useState("");

  // nav element with naming
  const nav = {
    intro: t2("intro.title"),
    ch1: t2("ch1.title"),
    ch2: t2("ch2.title"),
    ch3: t2("ch3.title"),
  };

  var pathName = document.location.pathname;

  return (
    <div id="nav" className="w-200">
      <div id="collapsible" className="md:hidden">
        <i className="bi bi-list" />
        <div id="hiddenNav"></div>
      </div>
      <div
        id="static"
        className="flex ml-20 mr-20 justify-between max-md:hidden"
      >
        <div
          className={`uppercase ${
            pathName == "/view/intro" ? "text-primary-2" : "cursor-pointer"
          }`}
          onClick={() => (window.location.href = "/view/intro")}
        >
          {t(nav.intro)}
        </div>
        <div
          className={`uppercase ${
            pathName == "/view/ch1" ? "text-primary-2" : "cursor-pointer"
          }`}
          onClick={() => (window.location.href = "/view/ch1")}
        >
          {t(nav.ch1)}
        </div>
        <div
          className={`uppercase ${
            pathName == "/view/ch2" ? "text-primary-2" : "cursor-pointer"
          }`}
          onClick={() => (window.location.href = "/view/ch2")}
        >
          {t(nav.ch2)}
        </div>
        <div
          className={`uppercase ${
            pathName == "/view/ch3" ? "text-primary-2" : "cursor-pointer"
          }`}
          onClick={() => (window.location.href = "/view/ch3")}
        >
          {t(nav.ch3)}
        </div>
      </div>
    </div>
  );
};
