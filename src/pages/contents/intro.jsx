import { useTranslation } from "react-i18next";

import { ArrowBtn } from "../../components/Button";
import { Trigger } from "../../components/Trigger";
import HorizontalScroller from "../../components/HorizontalScroller";

import mockMap from "/assets/img/mockImage.png";

const Intro = ({ onClick }) => {
  const { t } = useTranslation("general");
  const { t: t2 } = useTranslation("contents");

  return (
    <div id="intro" className="flex flex-col mr-auto ml-auto px-[140px]">
      <main>
        <div className="bg-white-1 h-screen w-1/2 absolute top-0 right-0"></div>
        <div className="flex items-center mt-[200px]">
          <div className="w-1/2">
            <h2 className="font-sans text-5xl uppercase leading-none text-white">
              {t2("intro.title")}
            </h2>
            <h2 className="font-sans text-5xl uppercase text-primary-2 mt-[0.1em]">
              {t2("intro.subtitle")}
            </h2>
            <p className="font-body font-light text-xl text-white mt-[2em] w-145">
              {t2("intro.para1")}
            </p>
          </div>
          <div className="w-1/2 grid justify-end">
            <Trigger
              isImg={true}
              src={mockMap}
              btnLabel={t("map")}
              btnOnClick={() => (window.location.href = "/map")}
              size="md"
            />
          </div>
        </div>
        <ArrowBtn
          isLeft={true}
          color="text-primary-2"
          onClick={onClick}
          custom="absolute bottom-20"
        />
      </main>
    </div>
  );
};

export default Intro;
