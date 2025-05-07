import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import { ArrowBtn } from "../components/Button";
import { VimeoPlayer } from "../components/VideoPlayer";

const Documentary = () => {
  const { t } = useTranslation("general");
  const { t: t2 } = useTranslation("documentary");

  return (
    <div id="documentary" className="flex flex-col px-[140px] mr-auto ml-auto">
      <Header withText />
      <main>
        <div className="mt-[150px] size-full flex justify-center">
          <VimeoPlayer videoId="1082043684" />
        </div>

        <ArrowBtn
          isLeft={true}
          color="text-primary-2"
          custom="absolute bottom-20"
        />
      </main>
    </div>
  );
};

export default Documentary;
