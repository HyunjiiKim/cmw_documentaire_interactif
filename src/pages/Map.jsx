import GraphicMap from "../Map/GraphicMap";

const Map = () => {


  return (
    <div id="pageMap">
      <div id="showMap" className="flex flex-col mr-auto ml-auto">
        <main className="w-full h-full">
          <GraphicMap />
        </main>
      </div>
    </div>
  );
};

export default Map;
