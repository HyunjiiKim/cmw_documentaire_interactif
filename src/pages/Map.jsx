import { useState } from "react";


import Intro from "./contents/intro";
import GraphicMap from "../Map/GraphicMap";
import { VimeoPlayer } from "../components/VideoPlayer";

const Map = () => {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <div id="pageMap">
      <div id="showMap" className="flex flex-col mr-auto ml-auto">
        <main className="w-full h-full">
          <GraphicMap />
          {showVideo && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-3/4 max-w-2xl">
              <div className="relative">
                <i className="bi bi-x-circle-fill text-white absolute top-0 right-0 cursor-pointer z-20" onClick={() => setShowVideo(false)} />
                <VimeoPlayer videoId={1082043684} onEnded={()=> setTimeout(() => setShowVideo(false), 2000)} />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Map;
