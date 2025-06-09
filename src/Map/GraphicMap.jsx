import { useEffect, useRef } from "react";
import Phaser from "phaser";
import { useNavigate } from "react-router-dom";
import { MapScene } from "./MapScene.js";

const GraphicMap = () => {
  const phaserGameRef = useRef(null);
  const gameContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!gameContainerRef.current || phaserGameRef.current) {
      return;
    }

    const phaserConfig = {
      type: Phaser.AUTO,
      parent: gameContainerRef.current,
      width: window.innerWidth,
      height: window.innerHeight,
      pixelArt: true,
      physics: {
        default: "arcade",
        arcade: {
          debug: false,
        },
      },
      scene: [MapScene]
    };

    phaserGameRef.current = new Phaser.Game(phaserConfig);
    const gameEvents = phaserGameRef.current.events;

    const handleNavigate = (path) => {
      console.log("React: Navigating to", path);
      navigate(path);
    };

    gameEvents.on("navigateToPage", handleNavigate);

    return () => {
      if (gameEvents) {
        gameEvents.off("navigateToPage", handleNavigate);
      }
      if (phaserGameRef.current) {
        phaserGameRef.current.destroy(true);
        phaserGameRef.current = null;
      }
    };
  }, [1200, 800, navigate]);

  return (
    <div
      ref={gameContainerRef}
      id="phaser-map-container"
      className="absolute top-0 left-0"
    />
  );
};

// It's good practice to define prop types, especially if sharing this component
// import PropTypes from 'prop-types';
// GraphicMap.propTypes = {
//     width: PropTypes.number,
//     height: PropTypes.number,
// };

export default GraphicMap;
