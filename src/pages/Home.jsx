import { useTranslation } from "react-i18next";

import Button from "../components/Button";
import LanguageSwitch from "../components/Switch";

import "./style.css";

const Home = () => {

    const { t, i18n } = useTranslation();

    const RedirectMap = () => {
        window.location.href = "/map";
    };

    return (
        <div id="home" className="page bg-black text-white">
            <LanguageSwitch />
            <div id="btn-group" className="">
                <Button children={t("home.btn_watch")} />
                <Button children={t("home.btn_discover")} onClick={RedirectMap}/>
            </div>
           
        </div>
    );
};

export default Home;