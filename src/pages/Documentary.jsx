import { useTranslation } from "react-i18next";

import { ArrowBtn } from "../components/Button";
import { VimeoPlayer } from "../components/VideoPlayer";

const Documentary = () => {
  const { t } = useTranslation("general");
  const { t: t2 } = useTranslation("documentary");

  return (
    <div id="documentary" className="flex flex-col mr-auto ml-auto">
      <main>
        <div className="mt-20 size-full flex justify-center">
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
