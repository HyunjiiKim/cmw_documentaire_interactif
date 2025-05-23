import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ArrowBtn } from "../components/Button";
import Content from "../components/Content.jsx";
import { NavBar } from "../components/NavBar";

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

  return (
    <div id="view" className="flex flex-col mt-20 mr-auto ml-auto">
      <NavBar whichPage={title} />
      <div className="my-8">
        <Content>
          <h1 className="text-4xl font-bold mb-6 text-center">{title}</h1>
          <p className="text-lg mb-4 leading-relaxed">{para1}</p>
        </Content>
      </div>
      <div className="flex">
        <ArrowBtn
          isLeft={true}
          color="text-primary-2"
          custom="absolute bottom-35"
        />
        <ArrowBtn
          isLeft={false}
          color="text-primary-2"
          custom="absolute bottom-20"
        />
      </div>
    </div>
  );
};

export default View;
