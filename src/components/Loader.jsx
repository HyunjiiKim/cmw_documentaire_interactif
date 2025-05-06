import { useTranslation } from "react-i18next";

export const Loader = () => {
    const { t } = useTranslation("general");
    return (
      <div className="text-white p-10 text-center">
        {t("loading", "Loading...")}
      </div>
    );
  };
  