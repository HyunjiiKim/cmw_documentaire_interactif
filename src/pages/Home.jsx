import { useState } from "react";
import { useTranslation } from "react-i18next";

import Button, { ArrowBtn } from "../components/Button";
import { Trigger } from "../components/Trigger";
import { Logo } from "../components/Logo";
import Header from "../components/Header";
import { Blocker } from "../components/Blocker";

import mockImage from "/assets/img/presentation.jpg";
import mockMap from "/assets/img/mockImage.png";
import mockVideo from "/assets/videos/test.mp4";

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
    <div id="home" className="flex flex-col">
      <main className="max-sm:hidden">
        {!showChoice ? (
          <div className="flex items-center px-[140px] py-[60px] max-md:flex-col max-md:items-start">
            <div className="relative col w-[537px] flex-none mr-[35px] mt-[120px]">
              <Logo intent="primary" size="large" />
              <img src={mockImage} className="border-2 border-white"></img>
            </div>
            <div className="col content-center"> {/* pourquoi y a-t-il des classes qui servent à rien ? */}
              <h1 className="font-sans text-9xl uppercase leading-none text-white">
                {t2("title.part1")}
              </h1>
              <h1 className="font-sans text-9xl uppercase leading-none text-primary-2 ">
                {t2("title.part2")}
              </h1>
              <h2 className="font-body text-2xl text-white mt-[0.3em]">
                {t2("subtitle")}
              </h2>
              <p className="font-body font-light text-xl text-white mt-[1.5em]">
                {t2("presentation.part1")}
              </p>
              <p className="font-body font-light text-xl text-white mt-[0.5em]">
                {t2("presentation.part2")}
              </p>
              <Button onClick={openShowChoices} label={t3("start")} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-start max-w-[1200px] mr-auto ml-auto">
            <Header withText />
            <div
              id="contents"
              className="flex py-[60px] w-full justify-between"
            >
              <Trigger
                isImg={false}
                src={mockVideo}
                btnLabel={t3("watch")}
                btnOnClick={() => (window.location.href = "/documentary")}
              />
              <Trigger
                isImg={true}
                src={mockMap}
                btnLabel={t3("map")}
                btnOnClick={() => (window.location.href = "/map")}
              />
            </div>
            <ArrowBtn
              isLeft={true}
              color="text-primary-2"
              onClick={() => setShowChoice(false)}
              custom=""
            />
          </div>
        )}
      </main>
      <Blocker />
    </div>
  );
};

export default Home;
