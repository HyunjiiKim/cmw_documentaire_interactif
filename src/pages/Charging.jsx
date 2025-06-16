import { useTranslation } from "react-i18next";

import Button, { InfoBtn, ButtonWithIcon } from "../components/Button";
import LanguageSwitch from "../components/Switch";
import { Indicator } from "../components/Indicator";

import "./style.css";

const Charging = () => {
  const { t } = useTranslation("contents");
  const { t: t2 } = useTranslation("charging");
  const { t: t3 } = useTranslation("general");

  return (
    <div id="charging" className="z-10 flex flex-col h-full">
      <main className="max-sm:hidden h-full">
        <div className="max-md:flex-col max-md:items-start h-full flex flex-col">
          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="../assets/videos/page_chargement.gif"
              className="opacity-70 size-full object-cover"
            />
          </div>
          <div id="header" className="flex justify-end pr-18 pt-18">
            <LanguageSwitch position />
          </div>
          <div className="z-50 flex h-full justify-center">
            <div id="quote" className="w-200 content-center">
              <h4 className="font-sans text-white uppercase text-5xl text-center leading-15">
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
          <div className="z-50 flex justify-between pb-18 pr-18 pl-10">
            <Indicator label={t2("loading")} />
            <InfoBtn />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Charging;
