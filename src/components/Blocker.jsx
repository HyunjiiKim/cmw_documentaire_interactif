import { useTranslation } from "react-i18next";

import BlockerImage from "/assets/icons/rotatePhone.png";

export const Blocker = () => {
    const { t } = useTranslation("general")
    return(
        <div className="hidden max-sm:flex h-screen m-auto">
            <div className="flex flex-col items-center gap-10 justify-center">
                <img src={BlockerImage} alt={t("Rotate")} />
                <h2 className="text-primary-1">{t("Rotate")}</h2>
            </div>
        </div>
    )
}