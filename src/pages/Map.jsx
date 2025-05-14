import { useState } from "react";

import { ArrowBtn } from "../components/Button";

import Intro from "./contents/intro";
import GraphicMap from "../Map/GraphicMap";

const Map = () => {
  const [showMap, setShowMap] = useState(false);
  const closeMap = () => {
    setShowMap(false);
  };

  return (
    <div id="pageMap">
      {!showMap ? (
        <div id="showMap" className="flex flex-col mr-auto ml-auto px-[140px]">
          <main className="mt-50">
            <GraphicMap />
            <ArrowBtn
              isLeft={true}
              color="text-primary-2"
              custom="absolute bottom-20"
            />
          </main>
        </div>
      ) : (
        <Intro onClick={closeMap} />
      )}
    </div>
  );
};

export default Map;
