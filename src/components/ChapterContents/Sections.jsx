import { useState } from "react";

import { VimeoPlayer } from "../VideoPlayer";
import Button, { ButtonWithIcon } from "../Button";
import { DotsContainer } from "../Container";

export const Section1 = ({ vimeoId }) => {
    // check if VimeoPlayer finished or not
    const [isVimeoFinished, setIsVimeoFinished] = useState(false);

    const handleVimeoEnded = () => {
        setIsVimeoFinished(true);
        console.log("video finished")
    };

    return (
        <div id="section1" className="relative">
            {/* videoId further update required */}
            <VimeoPlayer videoId={vimeoId} onEnded={handleVimeoEnded} width="w-full" height="h-full" />
            {
                // if video is finished, these triggers are appeared.
                isVimeoFinished && (
                    <div className="absolute z-10 w-full h-full top-0 bg-black/80">
                        <div id="btn-group" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-5">
                            <Button label="Test" />
                            <Button label="Test" />
                        </div>
                        <div
                            id="scrollTrigger"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center animate-[scroll-down_2s_linear_infinite]">
                            <i className="bi bi-arrow-down text-[50px]" />
                            <p className="font-body uppercase">scroll</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export const Section4 = ({ content }) => {
    return (
        <div id="section4">
            <div id="contentContainer" className="bg-white-1 px-10 py-10 m-0 text-black ">
                <h2 className="text-[50px] text-shadow-lg/20 text-shadow-black uppercase">{content.title}</h2>
                <div id="description" className="columns-2 font-body text-lg">
                    {content.description.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            </div>
            {/* <DotsContainer sections={content.pages} activeSection={content.pages[0].id} /> */}
            <div id="buttonGroup">
                <Button label="Next Chapter" custom="bg-black" />

            </div>
        </div>
    )
}

/**
 * This allows to render image with description when clicking
 */
export const ClickImage = ({ content = { img: "", isVideo: false } }) => {
    const [remover, setRemover] = useState(false);
    const [showText, setShowText] = useState(false);

    return (
        <div className="w-full h-full object-cover">
            {!remover && (
                <div id="grayfilter" className="z-10 bg-black/70 w-full h-full absolute top-0 left-0" />
            )}
            <img src={content.img} alt={content.name} className="w-full h-full" />
            <div className={`absolute z-15  ${remover ? `top-${content.top} left-${content.left}` : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}`}>
                <ButtonWithIcon
                    onClick={remover ? () => setShowText(true) : () => setRemover(true)}
                />
                {showText && (
                    <div id="descriptionImage" className={`text-white bg-tertiary-1 border-1 border-primary-1 p-4 bg-primary-2`}>
                        <h1 className="uppercase text-lg ">{content.name}</h1>
                        <p>{content.description}</p>
                    </div>
                )}
            </div>

        </div>
    );
};