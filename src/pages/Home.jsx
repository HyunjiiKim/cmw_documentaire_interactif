import { useState } from "react";
import { useTranslation } from "react-i18next";

import Button, { ArrowBtn } from "../components/Button";
import { Trigger } from "../components/Trigger";

import "./style.css";

const Home = () => {

    const { t } = useTranslation("contents");
    const { t: t2 } = useTranslation("general");
    const [showChoice, setShowChoice] = useState(false);

    function openShowChoices(){
        setShowChoice(true);
    };

    return (
        <div id='home' className="flex flex-col">
            <main>
                {!showChoice 
                ?
                <div className="flex flex-col font-sans ">
                    <h1>Mémoire Captive</h1>
                    <Button
                        textColor="text-white"
                        backgroundColor="bg-orange-200"
                        onClick={openShowChoices}
                        label={t2("start")}
                    />
                </div>
                : 
                <div className="flex gap-10 items-center m-auto">
                    <Trigger
                        btnLabel={t2("watch")}
                        btnOnClick={()=>confirm("Need a Documentary")}
                    />
                    <Trigger
                        btnLabel={t2("map")}
                        btnOnClick={()=>window.location.href="/map"}

                    />
                </div>
                }
            </main>
        </div>
    );
};

export default Home;
