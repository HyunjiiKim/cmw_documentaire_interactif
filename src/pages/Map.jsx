import { useState } from "react";
import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import Button, { ArrowBtn } from "../components/Button";

import Intro from "./contents/intro";

const Map = () => {
  const { t } = useTranslation("general");
  const { t: t2 } = useTranslation("map");
  const { t: t3 } = useTranslation("contents");

  const [showMap, setShowMap] = useState(false);
  const closeMap = () => {
    setShowMap(false);
  };

  return (
    <div id="pageMap">
      {!showMap ? (
        <div id="showMap" className="flex flex-col mr-auto ml-auto px-[140px]">
          <Header withText />
          <main>
            <div className="mt-[200px] size-full">
              <h1 className="font-sans text-8xl uppercase leading-none text-white">
                {t2("map")}
              </h1>
              <p className="font-body font-light text-xl text-white mt-[1.5em]">
                {t("notAvailable")}
              </p>
              <div className="flex gap-3">
                <Button
                  onClick={() => setShowMap(true)}
                  label={t3("intro.title")}
                />
                <Button
                  onClick={() => (window.location.href = "/view/ch1")}
                  label={t3("ch1.title")}
                />
              </div>
            </div>
            <ArrowBtn
              isLeft={true}
              color="text-primary-2"
              custom="absolute bottom-20"
            />
          </main>
        </div>
      ) : (
        <Intro onClick={closeMap} />
      )}
    </div>
  );
};

export default Map;
