import { useTranslation } from "react-i18next";

import Button, { ArrowBtn } from "../components/Button";
import { VimeoPlayer } from "../components/VideoPlayer";

const Documentary = () => {
  const { t } = useTranslation("general");
  const { t: t2 } = useTranslation("documentary");

  return (
    <div id="documentary" className="flex justify-center">
      <main className="size-fit">
        <VimeoPlayer videoId="1082043684" />
        <div className="flex w-full justify-between">
          <Button
            onClick={() => (window.location.href = "/")}
            label={t2("back")}
          />
          <Button
            onClick={() => (window.location.href = "/map")}
            label={t2("map")}
          />
        </div>
      </main>
    </div>
  );
};

export default Documentary;
