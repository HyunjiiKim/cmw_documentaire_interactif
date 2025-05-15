import { useEffect, useRef } from "react";
import Player from "@vimeo/player";

export const VideoIframe = ({ videoId }) => {
  return (
    <div className="aspect-video h-160 overflow-hidden">
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?h=0&title=0&byline=0&portrait=0`}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="size-full"
      />
    </div>
  );
};

export const VimeoPlayer = ({ videoId, onEnded }) => {
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

  return <div ref={container} className="aspect-video h-135" />;
};
