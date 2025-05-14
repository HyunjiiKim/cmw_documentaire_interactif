import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import { NavBar } from "../components/NavBar";
import { ArrowBtn } from "../components/Button";

const View = () => {
  const { t } = useTranslation("general");
  const { t: t2 } = useTranslation("contents");

  const contents = {
    intro: {
      title: t2("intro.title"),
      para1: t2("intro.para1"),
    },
    ch1: {
      title: t2("ch1.title"),
    },
  };

  // contentHandler: Switch Contents

  return (
    <div id="view" className="flex flex-col mr-auto ml-auto px-[140px]">
      <Header withText={true} />
      <main>
        <div className="flex mt-[200px]">
          <h1>{contents.title}</h1>
          <NavBar whichPage={contents.id} />
        </div>
      </main>
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
  );
};

export default View;
