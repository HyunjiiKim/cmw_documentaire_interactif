import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { HorizontalNav } from "../components/NavBar";
import LanguageSwitch from "../components/Switch";
import Button, {
  ArrowBtn,
  InfoBtn,
  ButtonWithIcon,
} from "../components/Button";
import { Trigger } from "../components/Trigger";
import { Blocker } from "../components/Blocker";
import { Indicator } from "../components/Indicator";
import { VimeoPlayer } from "../components/VideoPlayer";

import mockMap from "/assets/img/mockImage.jpg";
import teaserIntro from "/assets/videos/Introduction.mp4";

import "./style.css";

const Home = () => {
  const { t } = useTranslation("contents");
  const { t: t2 } = useTranslation("home");
  const { t: t3 } = useTranslation("general");
  // const [showChoice, setShowChoice] = useState(false);
  const [showHome, setShowHome] = useState(0);
  const [showVideo, setShowVideo] = useState(true);

  const navigation = useNavigate();

  // pass to setShowHome(1) after 2 sec
  useEffect(() => {
    if (showHome === 0) {
      const timer = setTimeout(() => {
        setShowHome(1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showHome])

  function openShowChoices() {
    setShowHome(2);
  }
  function openShowHome() {
    setShowHome(1);
  }

  function openShowBtn() {
    var btn = document.getElementById("btnFinishedIntro");

    if (btn.style.display == "none") {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  }

  return (
    <div className="z-10 flex flex-col h-full">
      <main id="home" className="max-sm:hidden h-full">
        {showHome === 0 && (
          <div className="max-md:flex-col max-md:items-start h-full flex flex-col">
            <div className="absolute top-0 left-0 w-full h-full">
              <img
                src="https://storage.googleapis.com/cmw-geoje-src/videos/page_chargement.gif"
                className="opacity-70 size-full object-cover"
              />
            </div>
            <div id="header" className="flex justify-end pr-18 pt-18">
              <LanguageSwitch position />
            </div>
            <div className="z-10 flex h-full justify-center">
              <div id="quote" className="w-200 content-center">
                <h4 className="font-sans text-white uppercase text-5xl text-center leading-15">
                  &#8220;{t2("quote")}&#8221;
                </h4>
                <hr className="text-white text-center w-sm my-5 m-auto" />
                <p className="font-body text-white text-center">
                  {t2("author")}
                </p>
                <div className="flex gap-5">
                  <ButtonWithIcon
                    onClick={openShowHome}
                    label={t2("enter")}
                    custom="ml-auto flex gap-3"
                    size="small"
                  />
                  <Button
                    onClick={openShowChoices}
                    label={t2("skip")}
                    custom="mr-auto"
                    intent="ghost"
                    size="small"
                  />
                </div>
              </div>
            </div>
            <div className="z-50 flex justify-between pb-18 pr-18 pl-10">
              <Indicator label={t2("loading")} />
              <InfoBtn position="top" />
            </div>
          </div>
        )}

        {showHome === 1 && (
          <div className="max-md:flex-col max-md:items-start h-full flex flex-col">
            <HorizontalNav />
            <div className="z-50 fixed top-18 right-18">
              <InfoBtn />
            </div>
            {showVideo && (
              <div className="absolute top-0 left-0 z-50 bg-black/50 w-screen h-screen flex justify-center items-center" onClick={(event) => { event.stopPropagation(); event.preventDefault(); }}>
                <div className="relative">
                  <div className="border-1 border-white aspect-square  text-white text-lg flex items-center justify-center absolute w-5 h-5 top-2 right-2 cursor-pointer z-20">
                    <i className="bi bi-x" onClick={() => setShowVideo(false)} />
                  </div>
                  <VimeoPlayer videoId={1095026519} onEnded={() => setTimeout(() => setShowVideo(false), 2000)} width="w-[600px]" />
                </div>
              </div>
            )}
            <div
              id="introContent"
              className="flex flex-col justify-between bg-[url(https://storage.googleapis.com/cmw-geoje-src/img/intro_waitingmedics.jpg)] bg-no-repeat bg-cover bg-black/50 bg-blend-multiply"
            >
              <div
                id="homeTitle"
                className="z-30 h-screen text-center content-center text-shadow-md m-auto pl-30"
              >
                <h1 className="flex justify-center font-sans text-8xl uppercase leading-none gap-4">
                  <span className="text-white">{t2("title.part1")}</span>
                  <span className="text-primary-2">{t2("title.part2")}</span>
                </h1>
                <h2 className="font-body text-2xl uppercase text-white mt-[0.3em]">
                  {t2("subtitle")}
                </h2>
              </div>
              <div
                id="homeContent"
                className="z-30 h-screen ml-50 mr-20 justify-center flex flex-col gap-30 text-shadow-md"
              >
                <div id="homeContent1" className="w-xl">
                  <h3 className="text-4xl">
                    <span className="text-white">{t2("content.part1")}</span>
                    <span className="text-primary-2">
                      {t2("content.part1-bis")}
                    </span>
                  </h3>
                  <p className="text-white font-body text-2xl">
                    {t2("content.subpart1")}
                  </p>
                </div>
                <div
                  id="homeContent2"
                  className="text-right w-2xl justify-end self-end"
                >
                  <h3 className="text-4xl">
                    <span className="text-white">{t2("content.part2")}</span>
                    <span className="text-primary-2">
                      {t2("content.part2-bis")}
                    </span>
                  </h3>
                  <p className="text-white font-body text-2xl">
                    {t2("content.subpart2")}
                  </p>
                </div>
              </div>
            </div>

            <div
              id="continueDocumentary"
              className="flex flex-col bg-[url(https://storage.googleapis.com/cmw-geoje-src/videos/page_introduction.gif)] bg-no-repeat bg-cover bg-black/50 bg-blend-multiply"
            >
              <div
                id="continueContent"
                className="h-screen content-center text-center"
              >
                <p className="font-body uppercase text-4xl text-white">
                  {t2("continue.date")}
                </p>
                <h3 className="font-sans uppercase text-7xl leading-25">
                  <span className="text-white">
                    {t2("continue.title.part1")}
                  </span>
                  <br />
                  <span className="text-primary-1">
                    {t2("continue.title.part2")}
                  </span>
                </h3>
                <Button
                  onClick={openShowChoices}
                  label={t3("start")}
                  custom="mr-auto ml-auto"
                  size="large"
                />
              </div>
            </div>
          </div>
        )}

        {showHome === 2 && (
          <div className="flex flex-col h-full">
            <HorizontalNav />
            <div className="z-50 fixed top-18 right-18">
              <InfoBtn />
            </div>
            <div
              id="contents"
              className="flex absolute top-0 left-0 size-full object-cover"
            >
              <Trigger
                isImg={false}
                isMultiple={true}
                src={teaserIntro}
                btnLabel={t3("watch")}
                btnOnClick={() => navigation("/documentary")}
              />
              <Trigger
                isImg={true}
                isMultiple={true}
                src={mockMap}
                btnLabel={t3("map")}
                btnOnClick={() => navigation("/map")}
              />
            </div>
          </div>
        )}
      </main>
      <Blocker />
    </div>
  );
};

export default Home;
