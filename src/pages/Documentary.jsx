import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import { ArrowBtn } from "../components/Button";

const Documentary = () => {
  const { t } = useTranslation("general");
  const { t: t2 } = useTranslation("documentary");

  return (
    <div
      id="documentary"
      className="flex flex-col max-w-[1200px] mr-auto ml-auto"
    >
      <Header withText={true} />
      <main>
        <div className="mt-[200px] size-full">
          <h1 className="font-sans text-8xl uppercase leading-none text-white">
            {t2("documentary")}
          </h1>
          <p className="font-body font-light text-xl text-white mt-[1.5em]">
            {t("notAvailable")}
          </p>
        </div>

        <ArrowBtn
          isLeft={true}
          color="text-primary-2"
          custom="absolute bottom-25"
        />
      </main>
    </div>
  );
};

export default Documentary;
