import { useEffect, useRef } from "react";
import Player from "@vimeo/player";

export const VimeoPlayer = ({ videoId, onEnded, width="w-full", height="h-auto" }) => {
  const container = useRef(null);

  useEffect(() => {
    const player = new Player(container.current, {
      id: videoId,
      autoplay: false,
      responsive: true,
    });

    if (onEnded) player.on("ended", onEnded);

    return () => player.destroy();
  }, [videoId, onEnded]);

  return <div ref={container} className={`${width} ${height}`} />;
};
