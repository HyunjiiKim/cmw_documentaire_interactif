import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import { ArrowBtn } from "../components/Button";

const Documentary = () => {
  const { t } = useTranslation("general");
  const { t: t2 } = useTranslation("documentary");

  return (
    <div id="documentary" className="flex flex-col">
      <Header withText={true} />

      <main>
        <div className="px-[120px] py-[60px] h-screen w-full">
          <h1 className="font-sans text-[95px] uppercase leading-none text-white">
            {t2("documentary")}
          </h1>
          <p className="font-body font-light text-[20px] text-white mt-[30px]">
            {t("notAvailable")}
          </p>
        </div>

        <ArrowBtn
          isLeft={true}
          color="text-primary-2"
          onClick={() => (window.location.href = "/")}
          custom="absolute bottom-25 px-[120px]"
        />
      </main>
    </div>
  );
};

export default Documentary;
