import { useState } from "react";
import { useTranslation } from "react-i18next";

import Button, { ArrowBtn } from "../components/Button";
import { Trigger } from "../components/Trigger";
import { Logo } from "../components/Logo";

import "./style.css";

const Home = () => {
  const { t } = useTranslation("contents");
  const { t: t2 } = useTranslation("general");
  const [showChoice, setShowChoice] = useState(false);

  function openShowChoices() {
    setShowChoice(true);
  }

  return (
    <div
      id="home"
      className="flex flex-col bg-[url(src/assets/img/background.png)] bg-cover"
    >
      <main>
        {!showChoice ? (
          <div className="flex px-[140px] py-[60px]">
            <div className="relative col w-[537px] flex-none mr-[35px] mt-[50px]">
              <Logo />
              <img
                src="src\assets\img\presentation.jpg"
                className="border-2 border-white"
              ></img>
            </div>
            <div className="col content-center">
              <h1 className="font-sans uppercase text-[95px] text-white leading-none">
                {t2("title")}
              </h1>
              <h2 className="font-body text-[21px] text-white">
                {t2("subtitle")}
              </h2>
              <p className="font-body font-light text-[20px] text-white mt-[30px]">
                {t2("presentation")}
              </p>
              <Button onClick={openShowChoices} label={t2("start")} />
            </div>
          </div>
        ) : (
          <div className="flex gap-10 items-center m-auto">
            <Trigger
              btnLabel={t2("watch")}
              btnOnClick={() => confirm("Need a Documentary")}
            />
            <Trigger
              btnLabel={t2("map")}
              btnOnClick={() => (window.location.href = "/map")}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
