import { useState } from "react";
import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import Button, { ArrowBtn, InfoBtn } from "../components/Button";
import { Trigger } from "../components/Trigger";
import { Logo } from "../components/Logo";
import { Blocker } from "../components/Blocker";
import Universities from "../components/Universities";

import defaultImage from "/assets/img/presentation.jpg";
import mockMap from "/assets/img/mockImage.jpg";
import teaserIntro from "/assets/videos/Introduction.mp4";
import gifHome from "/assets/videos/pageaccueil.mov";

import "./style.css";
import LanguageSwitch from "../components/Switch";

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
          <div className="max-md:flex-col max-md:items-start h-full flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-full">
              <video
                autoPlay
                loop
                src={gifHome}
                className="opacity-30 size-full object-cover"
              />
            </div>
            <div id="homeHeader" className="z-50 flex justify-between">
              <Logo intent="primary" size="large" />
              <LanguageSwitch />
            </div>
            <div
              id="homeContent"
              className="z-30 flex flex-col text-center text-shadow-md mr-auto ml-auto"
            >
              <h1 className="flex justify-center font-sans text-7xl uppercase leading-none gap-4">
                <span className="text-white">{t2("title.part1")}</span>
                <span className="text-primary-2">{t2("title.part2")}</span>
              </h1>
              <h2 className="font-sans text-2xl uppercase text-white mt-[0.3em]">
                {t2("subtitle")}
              </h2>
              <p className="font-body font-light text-xl text-white mt-[1.5em] w-200">
                {t2("presentation.part1")}
                <br />
                {t2("presentation.part2")}
              </p>
              <Button
                onClick={openShowChoices}
                label={t3("start")}
                custom="mr-auto ml-auto"
              />
            </div>
            <div
              id="homeFooter"
              className="z-50 flex justify-between items-center"
            >
              <Universities />
              <InfoBtn />
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
