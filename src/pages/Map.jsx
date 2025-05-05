import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import Button, { ArrowBtn } from "../components/Button";

const Map = () => {
  const { t } = useTranslation("general");
  const { t: t2 } = useTranslation("map");
  const { t: t3 } = useTranslation("contents");

  return (
    <div id="map" className="flex flex-col mr-auto ml-auto max-w-[1200px]">
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
            onClick={() => (window.location.href = "/map/intro")}
            label={t3("intro.title")}
          />
        </div>
        <ArrowBtn
          isLeft={true}
          color="text-primary-2"
          onClick={() => (window.location.href = "/")}
          custom="absolute bottom-25"
        />
      </main>
    </div>
  );
};

export default Map;
