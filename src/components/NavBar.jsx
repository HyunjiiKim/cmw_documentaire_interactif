import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./Switch";
import { useNavigate } from "react-router-dom";

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
    <div id="horizontalNav" className="absolute z-10 w-[120px]  h-full border-r border-white py-10 px-4">
      <div className="flex flex-col justify-between items-center h-full">
        <div className="rotate-270 text-white">{t("name.pre")} <strong className="text-primary-1">{t("name.post")}</strong></div>
        <div className="rotate-90 text-white p-2 border-white border-1 w-fit">기억</div>
        <LanguageSwitch
          vertical={true}
          withSound={true}
        />
      </div>
    </div>
  )
}


export const TopNav = () => {

  const { t } = useTranslation("general");
  const [show, setShow] = useState(false);

  const navigation = useNavigate();

  return (
    <div id="TopNav" className="w-full flex justify-between items-center border-b-1 border-white px-4">
      <div className="flex items-center text-white gap-2 font-sans">
        <div id="menuBurger" className="cursor-pointer">
          <i className="bi bi-list text-[48px]" onClick={() => setShow(true)} />
        </div>
        <p className="text-xl uppercase">lorem ipsum</p>
        <p className="text-xl">-</p>
        <p className="text-xl text-gray-400 font-body">Lorem ipsum</p>
      </div>
      <div 
      className="text-white border border-white w-fit uppercase p-2 cursor-pointer"
      onClick={()=>navigation("/map")}
      >
        {t("returnToMap")}
      </div>
      {show && (
        <div id="showMenu" className="absolute top-0 left-[120px] text-white bg-black z-20 w-160 h-full">
          <div className="relative">
            <i className="bi bi-x-lg text-[32px] absolute top-10 right-5 cursor-pointer" onClick={() => setShow(false)} />
            <nav className="flex flex-col">
              <li>Test</li>
              <li>Test</li>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}