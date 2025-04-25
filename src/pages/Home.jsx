import { useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "../components/Button";

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
                <div className="flex flex-col">
                    <h1>Mémoire Captive</h1>
                    <Button
                        textColor="text-white"
                        backgroundColor="bg-black"
                        onClick={openShowChoices}
                        label={t2("start")}
                    />
                </div>
                : 
                <div className="flex gap-20">
                    <Button
                       textColor="text-white"
                       backgroundColor="bg-black"
                       onClick={()=>console.log("click left")}
                       label={t2("watch")}
                    />
                    <Button
                      textColor="text-white"
                      backgroundColor="bg-black"
                      onClick={()=>console.log("click right")}
                      label='test'
                    />
                </div>
                }
            </main>
        </div>
    );
};

export default Home;
