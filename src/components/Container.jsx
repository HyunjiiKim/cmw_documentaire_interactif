import { useEffect, useRef } from "react";
import { cva } from "class-variance-authority";

const ContainerVariants = cva("", {
  variants: {
    intent: {
      default: "",
      hoverZoom: "transition-transform duration-300 hover:scale-105",
      gallery: "overflow-hidden",
    },
    size: {
      sm: "w-fit h-50",
      md: "w-[360px] max-md:w-[180px] h-auto",
      lg: "w-auto h-full",
      full: "w-full h-auto",
      fullHeightScreen: "w-full h-screen",
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

export const ImageContainer = ({
  id,
  alt,
  src,
  intent,
  size,
  border,
  custom,
}) => {
  const detailsRef = useRef(null);

  function openDetails() {
    detailsRef.current?.classList.remove("hidden");
  }

  function closeDetails() {
    detailsRef.current?.classList.add("hidden");
  }

  return (
    <>
      <div
        className={`${ContainerVariants({ intent, size, border })} ${custom}`}
      >
        <img
          src={src}
          alt={alt}
          className="size-full object-cover"
          onClick={openDetails}
        />
      </div>
      <div
        ref={detailsRef}
        id={id}
        className="hidden z-100 flex flex-col absolute top-50 mr-50 ml-50 size-fit pt-10 p-20 bg-black border-primary-1 border-1"
      >
        <img
          src="../assets/icons/close.svg"
          className="cursor-pointer self-end w-7 pb-8"
          onClick={closeDetails}
        />
        <p className="text-white font-body leading-7">{alt}</p>
      </div>
    </>
  );
};

export const VideoContainer = ({
  id,
  alt,
  src,
  intent,
  size,
  border,
  custom,
  behavior = "",
}) => {
  const videoRef = useRef(null);
  const detailsRef = useRef(null);

  function openDetails() {
    detailsRef.current?.classList.remove("hidden");
  }

  function closeDetails() {
    detailsRef.current?.classList.add("hidden");
  }

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
    <>
      <div
        className={`${ContainerVariants({ intent, size, border })} ${custom}`}
      >
        <video
          ref={videoRef}
          src={src}
          className="size-full object-cover"
          onClick={openDetails}
        />
      </div>
      <div
        ref={detailsRef}
        id={id}
        className="hidden z-100 flex flex-col absolute top-50 mr-50 ml-50 size-fit pt-10 p-20 bg-black border-primary-1 border-1"
      >
        <img
          src="../assets/icons/close.svg"
          className="cursor-pointer self-end w-7 pb-8"
          onClick={closeDetails}
        />
        <p className="text-white font-body leading-7">{alt}</p>
      </div>
    </>
  );
};

export const FlagContainer = ({ src, alt, onClick, isActive }) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={onClick}
        className={`w-10 h-10 rounded-full cursor-pointer border-2 border-secondary-1 object-cover
         saturate-0 hover:saturate-100 hover:scale-120 ${
           isActive ? "saturate-100" : ""
         }`}
      />
    </>
  );
};

// DotsContainer component for page/section navigation indicator
export const DotsContainer = ({
  sections,
  activeSection,
  isVertical = true,
}) => {
  return (
    <div
      className={`flex gap-3 ${
        isVertical ? "flex-col" : "flex-row"
      } items-center`}
    >
      {sections.map((section, idx) => (
        <span
          key={section.id}
          className={`w-3 h-3 rounded-full transition-all duration-200 border border-white ${
            activeSection === section.id
              ? "bg-white scale-125"
              : "bg-transparent"
          }`}
        />
      ))}
    </div>
  );
};
