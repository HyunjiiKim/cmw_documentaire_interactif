import { useState, useEffect, useMemo } from "react"; 
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

import LanguageSwitch from "./Switch";

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
            className={`uppercase font-body ${pathName == `/view/${item.pathname}`
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

export const HorizontalNav = () => {
  const { t } = useTranslation("general");
  return (
    <div
      id="horizontalNav"
      className="fixed z-40 w-[120px] h-full border-r border-white py-10 px-4"
    >
      <div className="flex flex-col justify-between items-center h-full">
        <div className="rotate-270 text-white flex gap-2 mt-8 text-nowrap">
          <p>{t("name.pre")}</p>
          <strong className="text-primary-1">{t("name.post")}</strong>
        </div>
        <div
          className="rotate-90 text-white p-2 border-white border-1 w-fit cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          기억
        </div>
        <LanguageSwitch vertical={true} withSound={true} />
      </div>
    </div>
  );
};

export const TopNav = () => {
  const { t } = useTranslation("general");
  const { t: navT } = useTranslation("nav");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // useMemo will recompute navElements only if navT (the translation function) changes.
  const navElements = useMemo(
    () => [
      {
        id: 0,
        title: navT("intro"),
        path: "/map",
      },
      {
        id: 1,
        chapter: navT("ch1"),
        title: navT("TopNav.1"),
        path: "/view/ch1",
      },
      {
        id: 2,
        chapter: navT("ch2"),
        title: navT("TopNav.2"),
        path: "/view/ch2",
      },
      {
        id: 3,
        chapter: navT("ch3"),
        title: navT("TopNav.3"),
        path: "/view/ch3",
      },
      {
        id: 4,
        title: navT("conclu"),
        path: "/view/conclusion",
      },
      {
        id: 5,
        title: navT("TopNav.archive"),
        path: "/archives",
      },
    ],
    [navT]
  );

  const [current, setCurrent] = useState({ title: "", chapter: "" });

  useEffect(() => {
    // Find the current navigation element by matching the browser's current path.
    const currentNav = navElements.find(
      (el) => el.path === location.pathname
    );

    if (currentNav) {
      setCurrent({
        title: currentNav.title,
        chapter: currentNav.chapter || "", // Use the chapter from the found element, or default to empty.
      });
    } else {
      // Optional: Handle cases where the path doesn't match any navElement.
      // You could set a default title or leave it blank.
      setCurrent({ title: "Page Not Found", chapter: "" });
    }
  }, [location.pathname, navElements]);

  // Use react-router's navigate function for client-side routing.
  // This avoids a full page reload, which is what window.location.href does.
  const handleNavigation = (path) => {
    navigate(path);
    setShow(false); // Close the menu after navigation.
  };

  return (
    <div
      id="TopNav"
      className="w-[calc(100%-120px)] z-45 ml-[120px] bg-black fixed border-b-1 border-white px-4"
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center text-white gap-2 font-sans">
          <div id="menuBurger" className="cursor-pointer">
            <i
              className="bi bi-list text-[48px]"
              onClick={() => setShow(true)}
            />
          </div>
          <div className="flex items-center">
            {/* Display the current chapter and title */}
            <p className="text-xl uppercase">
              {current.chapter && `${current.chapter}: `}{current.title}
            </p>
          </div>
        </div>
        <div
          className="text-white border border-white w-fit uppercase p-2 cursor-pointer"
          onClick={() => navigate("/map")}
        >
          {t("returnToMap")}
        </div>
        {show && (
          <div
            id="showMenu"
            className="absolute top-0 left-0 text-white bg-black z-15 w-160 h-screen"
          >
            <div className="relative">
              <i
                className="bi bi-x-lg text-[32px] absolute top-10 right-5 cursor-pointer"
                onClick={() => setShow(false)}
              />
              <nav className="flex flex-col gap-10 py-20 px-10">
                {navElements.map((item) => (
                  <div
                    key={item.id} // Add a unique key for list items.
                    onClick={() => handleNavigation(item.path)}
                    className="flex justify-between items-center cursor-pointer text-white/70 hover:text-white"
                  >
                    <div>
                      <h1 className="uppercase text-[30px]">{item.title}</h1>
                      {location.pathname === item.path && (
                        <hr className="w-[80%] border-primary-1 border-2" />
                      )}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};