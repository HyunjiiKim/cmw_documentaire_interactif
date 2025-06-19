import { useTranslation } from "react-i18next";

import BlockerImage from "/assets/icons/rotatePhone.png";

export const Blocker = () => {
    const { t } = useTranslation("general")
    return(
        <div className="hidden max-sm:flex max-sm:z-50 fixed top-0 left-0 h-screen w-screen bg-black">
            <div className="flex flex-col items-center gap-10 justify-center mx-auto">
                <img src={BlockerImage} alt={t("Rotate")} />
                <h2 className="text-primary-1">{t("Rotate")}</h2>
            </div>
        </div>
    )
}