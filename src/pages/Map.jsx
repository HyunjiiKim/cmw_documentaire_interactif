// import GraphicMap from "../Map/GraphicMap";
import { useState } from "react";
import Button, { MapIcon, ReplayIntro } from "../components/Button";

const Map = () => {
  const [showMap, setShowMap] = useState(0);

  function openShowMap() {
    if (showMap === 0) {
      setShowMap(1);
    } else {
      setShowMap(0);
    }
  }

  return (
    <div id="pageMap" className="w-full h-screen pl-30 pt-18 flex">
      <div className="absolute top-28 right-15 flex flex-col gap-3">
        <Button
          label="1950"
          intent={showMap === 1 ? "tertiary" : "primary"}
          size="large"
          onClick={openShowMap}
          custom="mt-0"
        />
        <Button
          label="2025"
          intent={showMap === 0 ? "tertiary" : "primary"}
          size="large"
          onClick={openShowMap}
          custom="mt-0"
        />
      </div>
      {showMap === 0 && (
        <div
          id="showMap-2025"
          className="size-full flex flex-col justify-center"
        >
          <main className="w-full h-screen flex gap-10">
            <div className="text-white">
              <MapIcon label="Introduction" />
              <MapIcon label="Chapitre 1" />
            </div>
            <ReplayIntro />
          </main>
        </div>
      )}
      {showMap === 1 && (
        <div id="showMap-1950" className="size-full flex flex-col">
          <main className="size-full bg-[url(../assets/img/mapBG-1950.png)] bg-no-repeat bg-contain bg-center">
            <div className="text-white">Test - 1950</div>
          </main>
        </div>
      )}
    </div>
  );
};

export default Map;
