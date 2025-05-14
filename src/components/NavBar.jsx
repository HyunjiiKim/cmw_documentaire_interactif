import { useState } from "react";
import { useTranslation } from "react-i18next";

export const NavBar = ({ whichPage }) => {
  const { t } = useTranslation("nav");
  const { t: t2 } = useTranslation("contents");

  const [current, setCurrent] = useState("");

  // nav element with naming
  const nav = [
    {
      id: 0,
      pathname: "intro",
      name: t2("intro.title"),
    },
    {
      id: 1,
      pathname: "ch1",
      name: t2("ch1.title"),
    },
    {
      id: 3,
      pathname: "ch2",
      name: t2("ch2.title"),
    },
    {
      id: 4,
      pathname: "ch3",
      name: t2("ch3.title"),
    },
  ];

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
        {nav.map((item) => (
          <div
            className={`uppercase ${
              pathName == `/view/${item.pathname}`
                ? "text-primary-2"
                : "cursor-pointer"
            }`}
            onClick={() => (window.location.href = `/view/${item.pathname}`)}
          >
            {t(item.name)}
          </div>
        ))}
      </div>
    </div>
  );
};
