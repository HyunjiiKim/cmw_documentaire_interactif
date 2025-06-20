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
export const ClickImage = ({ content={} }) => {

    const [remover, setRemover] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div id="clickImage" className="relative w-full h-full">
            {!remover && (
                <div id="grayfilter" className="z-10 bg-black/70 w-full h-full absolute top-0 left-0" />
            )}
            <img src={content.img} alt={content.name} className="w-full h-full object-cover" />
            <ButtonWithIcon
                onClick={remover ? () => setShowDescription(!showDescription) : () => setRemover(true)}
                custom={`absolute z-20 ${!remover ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : `${content.position}`}`} />
                {showDescription && (
                    <div id="description" className="absolute bottom-10 left-10 z-30 border border-primary-1 bg-tertiary-1 text-white px-10 py-10">
                        <h4 className="text-lg uppercase">{content.name}</h4>
                        <hr className="w-10 border-primary-1 border-2 my-2" />
                        <p className="text-sm font-body">{content.description}</p>
                    </div>
                )}
        </div>
    )
}