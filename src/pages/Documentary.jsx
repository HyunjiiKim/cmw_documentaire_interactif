import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Button, { ArrowBtn } from "../components/Button";
import { VimeoPlayer } from "../components/VideoPlayer";

const Documentary = () => {
  const { t } = useTranslation("general");
  const { t: t2 } = useTranslation("documentary");
  const navigate = useNavigate()

  return (
    <div
      id="documentary"
      className="flex h-screen justify-center content-center ml-[120px]"
    >
      <div className="m-auto w-250">
        <VimeoPlayer videoId="1095021776" />
        <div className="flex w-full justify-between px-5">
          <Button
            onClick={() => navigate("/")}
            label={t2("back")}
          />
          <Button
            onClick={() => navigate("/map")}
            label={t2("map")}
          />
        </div>
      </div>
    </div>
  );
};

export default Documentary;
