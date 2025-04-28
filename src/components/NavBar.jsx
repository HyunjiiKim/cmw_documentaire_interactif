import { useState } from "react";
import { useTranslation } from "react-i18next" 

export const NavBar = ({ whichPage }) => {

    const { t } = useTranslation("nav");
    const [ current, setCurrent ] = useState("");


    // nav element with naming 
    const nav = {
        intro: 'intro',
        ch1: 'ch1',
        ch2: 'ch2',
        ch3: 'ch3'
    }

    return(
        <div id="nav" className="w-200">
            <div id="collapsible" className="md:hidden">
                <i className="bi bi-list" />
                <div id="hiddenNav"></div>
            </div>
            <div id="static" className="flex ml-20 mr-20 justify-between max-md:hidden">
                <div className="cursor-pointer">{t(nav.intro)}</div>
                <div className="cursor-pointer">{t(nav.ch1)}</div>
                <div className="cursor-pointer">{t(nav.ch2)}</div>
                <div className="cursor-pointer">{t(nav.ch3)}</div>
            </div>
        </div>
    )
}


