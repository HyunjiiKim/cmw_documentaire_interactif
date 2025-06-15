import { useState } from "react";

import { VimeoPlayer } from "../VideoPlayer";
import Button from "../Button";

export const Section1 = ({ vimeoId }) => {
    // check if VimeoPlayer finished or not
    const [isVimeoFinished, setIsVimeoFinished] = useState(false);

    const handleVimeoEnded = () => {
        setIsVimeoFinished(true);
    };

    return (
        <div id="section1" className="relative">
            {/* videoId further update required */}
            <VimeoPlayer videoId={vimeoId} onEnded={handleVimeoEnded} />
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