import { useTranslation } from "react-i18next";

import Button, { ArrowBtn } from "../components/Button";
import { VimeoPlayer } from "../components/VideoPlayer";

const Documentary = () => {
  const { t } = useTranslation("general");
  const { t: t2 } = useTranslation("documentary");

  return (
    <div
      id="documentary"
      className="flex h-screen justify-center content-center ml-[120px]"
    >
      <main className="m-auto w-250">
        <VimeoPlayer videoId="1095021776" />
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
