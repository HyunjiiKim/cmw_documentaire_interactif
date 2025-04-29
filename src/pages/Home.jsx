import { useState } from "react";
import { useTranslation } from "react-i18next";

import Button, { ArrowBtn } from "../components/Button";
import { Trigger } from "../components/Trigger";

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
          <div className="flex px-[100px] py-[50px]">
            <div className="col w-[537px] flex-none">
              <img src="src\assets\img\presentation.jpg" className=""></img>
            </div>
            <div className="col">
              <h1 className="font-sans uppercase text-[95px] text-white">
                {t2("title")}
              </h1>
              <h2 className="font-body text-[21px] text-white">
                {t2("subtitle")}
              </h2>
              <p className="font-body font-light text-[20px] text-white">
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
