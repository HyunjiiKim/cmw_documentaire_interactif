import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ArrowBtn } from "../components/Button";
import Content from "../components/Content.jsx";
import { NavBar, TopNav } from "../components/NavBar";

const allViewContents = {
  intro: {
    titleKey: "intro.title",
    para1Key: "intro.para1",
    images: [],
  },
  ch1: {
    titleKey: "ch1.title",
    para1Key: "ch1.para1",
    images: [],
  },
  ch2: {
    titleKey: "ch2.title",
    para1Key: "ch2.para1",
    images: [],
  },
  ch3: {
    titleKey: "ch3.title",
    para1Key: "ch3.para1",
    images: [],
  },
};

const View = () => {
  const { t: tContent } = useTranslation("contents");

  const { id } = useParams();

  const currentItemData = allViewContents[id];

  // children for Content
  const title = tContent(currentItemData.titleKey);
  const para1 = tContent(currentItemData.para1Key);

  // extract the end of path (3 characters from the end)
  function extractLastThreeChars(path){
    if(typeof path === 'string'){
      let pathLength=path.length;
      let extractedChars = path.slice(pathLength-3,pathLength);
      return extractedChars
    }
  }

  return (
    <div id="view" className="flex flex-col mt-10 ml-[120px]">
      {/* <NavBar whichPage={title} /> */}
      <TopNav />
      <div className="my-8 px-4">
        <Content
          chapter={extractLastThreeChars(location.pathname)}
        />
      </div>
    </div>
  );
};

export default View;
