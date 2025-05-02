import { useEffect, useRef } from "react";
import { cva } from "class-variance-authority";

const ContainerVariants = cva("border-2 border-white", {
  variants: {
    intent: {
      default: "",
      hoverZoom: "transition-transform duration-300 hover:scale-105",
    },
    size: {
      sm: "w-24 h-24",
      md: "w-48 h-48",
      lg: "w-xl h-110",
      full: "w-full h-auto",
    },
    border: {
      white: "border-white",
      gray: "border-gray-300",
      none: "border-none",
    },
  },
  defaultVariants: {
    intent: "default",
    size: "lg",
    border: "white",
  },
});

export const ImageContainer = ({ src, intent, size, border, custom }) => {
  return (
    <div className={`${ContainerVariants({ intent, size, border })} ${custom}`}>
      <img src={src} className="size-full object-cover" />
    </div>
  );
};

export const VideoContainer = ({ src, intent, size, border, custom = "" }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleMouseOver = () => video.play();
    const handleMouseOut = () => video.pause();

    video.addEventListener("mouseover", handleMouseOver);
    video.addEventListener("mouseout", handleMouseOut);

    return () => {
      video.removeEventListener("mouseover", handleMouseOver);
      video.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className={`${ContainerVariants({ intent, size, border })} ${custom}`}>
      <video ref={videoRef} src={src} className="size-full object-cover" />
    </div>
  );
  // Add an 'alt' for vids?
};

export const FlagContainer = ({ src, alt, onClick, isActive }) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={onClick}
        className={`w-10 h-10 rounded-full cursor-pointer border-2 border-[#d9d9d9] object-cover
         saturate-0 hover:saturate-100 hover:scale-120 ${
           isActive ? "saturate-100" : ""
         }`}
      />
    </>
  );
};
