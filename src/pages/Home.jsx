import { useTranslation } from "react-i18next";

import Button from "../components/Button";
import LanguageSwitch from "../components/Switch";

const Home = () => {

    const { t, i18n } = useTranslation();

    const RedirectMap = () => {
        window.location.href = "/map";
    };

    return (
        <div className="page bg-black text-white">
            <LanguageSwitch />
            <div className="btn-group">
                <Button children={t("home.btn_watch")} />
                <Button children={t("home.btn_discover")} onClick={RedirectMap}/>
            </div>
           
        </div>
    );
};

export default Home;