import { useEffect, useRef } from "react";
import Player from "@vimeo/player";

export const VimeoPlayer = ({ videoId, onEnded, width = "w-full", height = "h-auto", portrait = false }) => {
  const container = useRef(null);

  let detectedLang = localStorage.getItem("i18nextLng");
  detectedLang = detectedLang.slice(0, 2);

  // if detectedLang is not french nor Korean, subtitle should be in English

  if (detectedLang !== "fr" && detectedLang !== "ko") {
    detectedLang = "en";
  }

  useEffect(() => {
    const player = new Player(container.current, {
      id: videoId,
      autoplay: true,
      responsive: true,
      portrait: portrait,
      playsinline: true,
      texttrack: detectedLang,
    });

    if (onEnded) player.on("ended", onEnded);

    return () => player.destroy();
  }, [videoId, onEnded]);

  return <div ref={container} className={`${width} ${height}`} />;
};