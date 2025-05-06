import { useTranslation } from "react-i18next";

import Header from "../../components/Header";
import { ArrowBtn, WatchBtn } from "../../components/Button";
import { Trigger } from "../../components/Trigger";
import HorizontalScroller from "../../components/HorizontalScroller";

import mockMap from "/assets/img/mockImage.jpg";

const Intro = ({ onClick }) => {
  const { t } = useTranslation("general");
  const { t: t2 } = useTranslation("contents");

  const img = [
    {
      id: 1,
      src: "/assets/img/presentation.jpg",
      alt: "Mockup img 1",
      custom: "ml-30",
    },
    {
      id: 2,
      src: "/assets/img/presentation.jpg",
      alt: "Mockup img 2",
    },
    {
      id: 3,
      src: "/assets/img/presentation.jpg",
      alt: "Mockup img 3",
    },
    {
      id: 4,
      src: "/assets/img/presentation.jpg",
      alt: "Mockup img 4",
    },
    {
      id: 5,
      src: "/assets/img/presentation.jpg",
      alt: "Mockup img 5",
    },
    {
      id: 6,
      src: "/assets/img/presentation.jpg",
      alt: "Mockup img 6",
    },
    {
      id: 7,
      src: "/assets/img/presentation.jpg",
      alt: "Mockup img 7",
      custom: "mr-7",
    },
  ];

  return (
    <div id="intro" className="flex flex-col mr-auto ml-auto px-[140px]">
      <Header withText />
      <main>
        <div
          id="background"
          className="bg-white-1 h-screen w-1/2 absolute top-0 right-0"
        ></div>
        <WatchBtn href="/documentary" />
        <div className="flex mt-[200px]">
          <div className="w-1/2 items-center">
            <h2 className="font-sans text-5xl uppercase leading-none text-white">
              {t2("intro.title")}
            </h2>
            <h2 className="font-sans text-5xl uppercase text-primary-2 mt-[0.1em]">
              {t2("intro.subtitle")}
            </h2>
            <p className="font-body font-light text-xl text-white mt-[2em] w-130">
              {t2("intro.para1")}
            </p>
          </div>
          <div className="w-1/2 flex justify-end">
            <Trigger
              isImg={true}
              src={mockMap}
              btnLabel={t("map")}
              btnOnClick={() => (window.location.href = "/map")}
              size="md"
            />
            <HorizontalScroller data={img} />
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
