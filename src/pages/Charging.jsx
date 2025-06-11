import { useTranslation } from "react-i18next";

import Button, { InfoBtn, ButtonWithIcon } from "../components/Button";
import LanguageSwitch from "../components/Switch";

import "./style.css";
import { Indicator } from "../components/Indicator";

const Charging = () => {
  const { t } = useTranslation("contents");
  const { t: t2 } = useTranslation("charging");
  const { t: t3 } = useTranslation("general");

  return (
    <div id="charging" className="z-10 flex flex-col h-full">
      <main className="max-sm:hidden h-full">
        <div className="max-md:flex-col max-md:items-start h-full flex flex-col">
          <div id="header" className="flex justify-end">
            <LanguageSwitch />
          </div>
          <div className="flex h-full justify-center">
            <div id="quote" className="w-3xl content-center">
              <h4 className="font-sans text-white uppercase text-5xl text-center">
                &#8220;{t2("quote")}&#8221;
              </h4>
              <hr className="text-white text-center w-sm my-5 m-auto" />
              <p className="font-body text-white text-center">{t2("author")}</p>
              <div className="flex gap-5">
                <ButtonWithIcon
                  onClick={() => (window.location.href = "/home")}
                  label={t2("enter")}
                  custom="ml-auto flex gap-3"
                  size="small"
                />
                <Button
                  onClick={() => (window.location.href = "/home")}
                  label={t2("skip")}
                  custom="mr-auto"
                  intent="ghost"
                  size="small"
                />
              </div>
            </div>
          </div>
          <Indicator label={t2("loading")} />
        </div>
      </main>
    </div>
  );
};

export default Charging;
