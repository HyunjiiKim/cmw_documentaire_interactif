import { useState } from "react";


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
        <div id="showMap" className="flex flex-col mr-auto ml-auto">
          <main>
            <GraphicMap />
          </main>
        </div>
      ) : (
        <Intro onClick={closeMap} />
      )}
    </div>
  );
};

export default Map;
