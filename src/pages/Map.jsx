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

  return (
    <div id="pageMap">
      { !showMap ? 
      ( <div id="showMap" className="flex flex-col mr-auto ml-auto max-w-[1200px]">
          <Header withText={true} />
          <main>
            <div className="mt-[200px] size-full">
              <h1 className="font-sans text-8xl uppercase leading-none text-white">
                {t2("map")}
              </h1>
              <p className="font-body font-light text-xl text-white mt-[1.5em]">
                {t("notAvailable")}
              </p>
              <Button
                onClick={() => setShowMap(true)}
                label={t3("intro.title")}
              />
            </div>
            <ArrowBtn
              isLeft={true}
              onClick={() => setShowMap(false)}
              color="text-primary-2"
              custom="absolute bottom-25"
            />
          </main>
        </div>)
      :  <Intro /> }
    </div>
 
  );
};

export default Map;
