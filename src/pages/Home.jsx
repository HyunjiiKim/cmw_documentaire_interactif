import { useTranslation } from "react-i18next";

import Button from "../components/Button";
import LanguageSwitch from "../components/Switch";

import "./style.css";

const Home = () => {

    const { t, i18n } = useTranslation();

    const RedirectMap = () => {
        window.location.href = "/map";
    };

    const WatchLink = () => {
        window.location.href = "https://drive.google.com/file/d/1XguOEkB4gP1sOMVU4b8Ja0XG_YwALjZt/view?usp=sharing";
    };

    return (
        <div id="home" className="page bg-black text-white">
            <LanguageSwitch />
            <div id="btn-group" className="">
                <Button children={t("home.btn_watch")} onClick={WatchLink} />
                <Button children={t("home.btn_discover")} onClick={RedirectMap}/>
            </div>
           
        </div>
    );
};

export default Home;