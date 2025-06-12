import { useState } from "react";
import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import LanguageSwitch from "../components/Switch";
import Button, { ArrowBtn, InfoBtn } from "../components/Button";
import { Trigger } from "../components/Trigger";
import { Logo } from "../components/Logo";
import { Blocker } from "../components/Blocker";

import defaultImage from "/assets/img/presentation.jpg";
import mockMap from "/assets/img/mockImage.jpg";
import teaserIntro from "/assets/videos/Introduction.mp4";
import gifHome from "/assets/videos/pageaccueil.mov";

import "./style.css";

const Home = () => {
  const { t } = useTranslation("contents");
  const { t: t2 } = useTranslation("home");
  const { t: t3 } = useTranslation("general");
  const [showChoice, setShowChoice] = useState(false);

  function openShowChoices() {
    setShowChoice(true);
  }

  return (
    <div id="home" className="z-10 flex flex-col h-full">
      <main className="max-sm:hidden h-full">
        {!showChoice ? (
          <div className="max-md:flex-col max-md:items-start h-full flex flex-col">
            <div className="absolute size-full opacity-50">
              <img src="../assets/img/homeBackground.jpg" />
            </div>
            <div className="z-50 absolute top-18 right-18">
              <InfoBtn />
            </div>
            <div
              id="homeTitle"
              className="z-30 h-full text-center content-center text-shadow-md mr-auto ml-auto"
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
              className="z-30 size-full flex flex-col gap-15 text-shadow-md"
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
              <div id="homeContent2" className="text-right w-2xl justify-end">
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
        ) : (
          <div className="flex flex-col h-full">
            <Header withText />
            <div
              id="contents"
              className="flex absolute top-0 left-0 size-full object-cover"
            >
              <Trigger
                isImg={false}
                isMultiple={true}
                src={teaserIntro}
                btnLabel={t3("watch")}
                btnOnClick={() => (window.location.href = "/documentary")}
              />
              <Trigger
                isImg={true}
                isMultiple={true}
                src={mockMap}
                btnLabel={t3("map")}
                btnOnClick={() => (window.location.href = "/map")}
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
