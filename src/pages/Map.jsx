// import GraphicMap from "../Map/GraphicMap";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Button, {
  MapChronology,
  MapIcon,
  ReplayIntro,
} from "../components/Button";
import { twMerge } from "tailwind-merge";

const Map = () => {
  const { t } = useTranslation("map");
  const [showMap, setShowMap] = useState(0);

  const events = [
    {
      id: 0,
      src: "https://storage.googleapis.com/cmw-geoje-src/img/lunch_time_in_kohe_do_camp.jpg",
      alt: t("events.0.alt"),
      title: t("events.0.title"),
    },
    {
      id: 1,
      src: null,
      alt: t("events.1.alt"),
      title: t("events.1.title"),
    },
    {
      id: 2,
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Photo-Work-Life-South_Korean%20Guard-North_Korean_People's_Army-Geojedo.jpg",
      alt: t("events.2.alt"),
      title: t("events.2.title"),
    },
    {
      id: 3,
      src: "https://storage.googleapis.com/cmw-geoje-src/img/gar%C3%A7on_serrant_la%20main_d'un_officiel_du_Comit%C3%A9_international_de_la_Croix-Rouge.jpg",
      alt: t("events.3.alt"),
      title: t("events.3.title"),
    },
    {
      id: 4,
      src: null,
      alt: t("events.4.alt"),
      title: t("events.4.title"),
    },
    {
      id: 5,
      src: "https://storage.googleapis.com/cmw-geoje-src/img/manifestation_sportive_en_l'honneur_du_Comit%C3%A9_%20international_de_la_Croix-Rouge.jpg",
      alt: t("events.5.alt"),
      title: t("events.5.title"),
    },
    {
      id: 6,
      src: "https://storage.googleapis.com/cmw-geoje-src/img/reeducation_of_prisoners_of_war.jpeg",
      alt: t("events.6.alt"),
      title: t("events.6.title"),
    },
    {
      id: 7,
      src: null,
      alt: t("events.7.alt"),
      title: t("events.7.title"),
    },
    {
      id: 8,
      src: null,
      alt: t("events.8.alt"),
      title: t("events.8.title"),
    },
  ];

  function openShowMap() {
    if (showMap === 0) {
      setShowMap(1);
    } else {
      setShowMap(0);
    }
  }

  return (
    <div id="pageMap" className="w-full h-screen pl-30 pt-18 flex">
      <div className="absolute top-30 right-20 flex flex-col gap-3">
        <Button
          label="1951"
          intent={showMap === 1 ? "tertiary" : "primary"}
          size="large"
          onClick={openShowMap}
          custom={twMerge("mt-0 w-full", showMap === 1 ? "" : "bg-black/70")}
        />
        <Button
          label="2025"
          intent={showMap === 0 ? "tertiary" : "primary"}
          size="large"
          onClick={openShowMap}
          custom={twMerge("mt-0", showMap === 0 ? "" : "bg-black/70")}
        />
      </div>
      {showMap === 0 && (
        <div
          id="showMap-2025"
          className="size-full flex flex-col justify-center"
        >
          <main className="w-full h-screen bg-[url(https://storage.googleapis.com/cmw-geoje-src/img/geoje-map_2025.png)] bg-no-repeat bg-cover bg-center bg-black/10 bg-blend-multiply">
            <div className="h-full flex justify-center text-white">
              <MapIcon
                label={t("ch1")}
                id="ch1"
                position="top-40 right-115"
                sound="/assets/audio/Chant.m4a"
              />
              <MapIcon
                label={t("ch2")}
                id="ch2"
                position="top-120 right-115"
                sound="/assets/audio/battle.m4a"
              />
              <MapIcon
                label={t("ch3")}
                id="ch3"
                position="bottom-35 left-183"
                sound="/assets/audio/lively_classroom.mp3"
              />
              <MapIcon
                label={t("conclu")}
                id="conclusion"
                position="top-66 left-163"
              />
            </div>
            <ReplayIntro />
          </main>
        </div>
      )}
      {showMap === 1 && (
        <div id="showMap-1950" className="size-full flex flex-col">
          <main className="w-full h-screen bg-[url(https://storage.googleapis.com/cmw-geoje-src/img/geoje-map_1951.png)] bg-no-repeat bg-cover bg-center">
            <div className="h-full flex justify-center text-white">
              <MapChronology event={events[0]} position="top-95 left-142" />
              <MapChronology event={events[1]} position="top-21 left-78" />
              <MapChronology event={events[2]} position="top-52 left-141" />
              <MapChronology event={events[3]} position="top-45 left-105" />
              <MapChronology event={events[4]} position="bottom-55 right-53" />
              <MapChronology event={events[5]} position="top-107 left-173" />
              <MapChronology event={events[6]} position="bottom-50 left-150" />
              <MapChronology event={events[7]} position="top-40 right-75" />
              <MapChronology event={events[8]} position="bottom-105 right-15" />
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default Map;
