import { useTranslation } from "react-i18next";

import Content from "../components/Content.jsx";
import HorizontalScroller from "../components/HorizontalScroller";
import { NavBar } from "../components/NavBar";

const View = () => {
  const { t } = useTranslation("general");
  const { t: t2 } = useTranslation("contents");

  // mock data
  const contents = {
    intro: {
      title: t2("intro.title"),
      para1: t2("intro.para1"),
      img: [
        {
          src: "https://picsum.photos/200/400",
          alt: "Image 1 of intro",
        },
      ],
    },
  };

  // contentHandler: Switch Contents

  return (
    <div id="view">
      <Content />
      <NavBar whichPage={contents.name} />
      <div className="flex justify-between items-center gap-20">
        <HorizontalScroller data={contents.img} />
        <div>
          <h1>{contents.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default View;
