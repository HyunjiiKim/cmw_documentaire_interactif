import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import { ArrowBtn } from "../components/Button";

const Map = () => {
  const { t } = useTranslation("general");
  const { t: t2 } = useTranslation("map");

  return (
    <div id="map" className="flex flex-col mr-auto ml-auto max-w-[1200px]">
      <Header withText={true} />
      <main>
        <div className="py-[60px] h-screen w-full">
          <h1 className="font-sans text-[95px] uppercase leading-none text-white">
            {t2("map")}
          </h1>
          <p className="font-body font-light text-[20px] text-white mt-[30px]">
            {t("notAvailable")}
          </p>
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
