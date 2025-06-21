import { useState, useEffect, useMemo } from "react"; // Added useMemo
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom"; // Added useLocation

import { substringAfter } from "../utils/functions/extractCharacters";

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
            className={`uppercase font-body ${
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

  const navigation = useNavigate();
  const location = useLocation();

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
  ); // navElements will only be recomputed if navT changes

  // check current page path and return title, path State
  const [current, setCurrent] = useState({ title: "", chapter: "" });

  useEffect(() => {
    const currentPathname = location.pathname;
    const viewPathSegment = currentPathname.startsWith("/view/")
      ? substringAfter(currentPathname, "/view/")
      : null;

    let newTitle = "";
    let newChapter = "";

    // Find the corresponding element in navElements for chapter information if needed
    const mapElementForChapter = navElements.find((el) => el.path === "/map");
    const archivesElementForChapter = navElements.find(
      (el) => el.path === "/archives"
    );

    if (currentPathname === "/map") {
      newTitle = navT("intro");
      newChapter = mapElementForChapter?.chapter || "";
    } else if (currentPathname === "/archives") {
      newTitle = navT("TopNav.archive");
      newChapter = archivesElementForChapter?.chapter || "";
    } else if (viewPathSegment) {
      switch (viewPathSegment) {
        case "intro":
          newTitle = navT("intro");
          newChapter = "";
          break;
        case "ch1":
          newTitle = navT("TopNav.1");
          newChapter = navT("ch1");
          break;
        case "ch2":
          newTitle = navT("TopNav.2");
          newChapter = navT("ch2");
          break;
        case "ch3":
          newTitle = navT("TopNav.3");
          newChapter = navT("ch3");
          break;
        case "conclusion":
          newTitle = navT("conclu");
          newChapter = "";
          break;
        default:
          // if viewSegment is not matched, try to find in navElements
          const fallbackMatch = navElements.find(
            (el) => el.path === currentPathname
          );
          if (fallbackMatch) {
            newTitle = fallbackMatch.title;
            newChapter = fallbackMatch.chapter || "";
          }
          break;
      }
    }

    setCurrent({ title: newTitle, chapter: newChapter });
  }, [location.pathname, navT]);

  return (
    <div id="TopNav" className="w-[calc(100%-120px)] z-45 ml-[120px] bg-black fixed  border-b-1 border-white px-4">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center text-white gap-2 font-sans">
          <div id="menuBurger" className="cursor-pointer">
            <i
              className="bi bi-list text-[48px]"
              onClick={() => setShow(true)}
            />
          </div>
          <div className="flex items-center">
            <p className="text-xl uppercase">{current.title}</p>
            {current.chapter !== "" && (
              <div className="flex items-center">
                <p className="text-xl">-</p>
                <p className="text-xl text-gray-400 font-body">
                  {current.chapter}
                </p>
              </div>
            )}
          </div>
        </div>
        <div
          className="text-white border border-white w-fit uppercase p-2 cursor-pointer"
          onClick={() => navigation("/map")}
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
                    onClick={() => {
                      window.location.href = item.path;
                    }}
                    className="flex justify-between items-center cursor-pointer text-white/70 hover:text-white "
                  >
                    <div>
                      <h1 className="uppercase text-[30px]">{item.title}</h1>
                      {window.location.pathname === item.path && (
                        <>
                          <hr className="w-[80%] border-primary-1 border-2" />
                        </>
                      )}
                    </div>
                    <h1 className="font-body font-bold text-[25px] underline">
                      {item.chapter}
                    </h1>
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
