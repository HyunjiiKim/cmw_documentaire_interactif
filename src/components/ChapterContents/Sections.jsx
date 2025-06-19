import { useState } from "react";

import { VimeoPlayer } from "../VideoPlayer";
import Button from "../Button";
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
                <Button label="Next Chapter" />

            </div>
        </div>
    )
}