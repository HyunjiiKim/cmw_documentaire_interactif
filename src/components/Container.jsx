import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { cva } from "class-variance-authority";

import Button from "./Button";

const ContainerVariants = cva("", {
  variants: {
    intent: {
      default: "",
      hoverZoom: "transition-transform duration-300 hover:scale-105",
      gallery: "overflow-hidden",
    },
    size: {
      sm: "w-fit h-50 flex-none",
      md: "w-[360px] max-md:w-[180px] h-auto flex-none",
      md2: "h-90 flex-auto",
      lg: "w-auto h-full flex-none",
      full: "w-full h-auto flex-none",
      fullHeightScreen: "w-full h-screen flex-none",
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
  category,
  source,
  intent,
  size,
  border,
  custom,
}) => {
  const { t } = useTranslation("archives");

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
        className="hidden z-100 flex flex-col content-center absolute top-25 mr-25 ml-10 size-fit pt-15 bg-black border-white border-1"
      >
        <div id={`${id}Details`} className="">
          <div id="headerDetails" className="pr-20 pl-20 mb-7">
            <div className="flex justify-between">
              <div>
                <h3 className="uppercase">
                  <span className="text-3xl">Geoje </span>
                  <span className="text-xl opacity-60 font-body">
                    / {t("content.img")}
                  </span>
                </h3>
              </div>
              <img
                src="../assets/icons/close.svg"
                className="cursor-pointer self-end"
                onClick={closeDetails}
              />
            </div>
            <div id="btnDetails" className="flex gap-3">
              <Button label={category} intent="tertiary" custom="mt-2" />
              <Button label={source} intent="tertiary" custom="mt-2" />
            </div>
          </div>
          <div id="contentDetails" className="flex gap-7">
            <div id="col1">
              <img src={src} className="max-h-140" />
            </div>
            <div id="col2" className="flex flex-col gap-2 w-100 pr-20 pt-[5%]">
              <h3 className="uppercase text-4xl">{source}</h3>
              <p className="text-base font-body">{alt}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const VideoContainer = ({
  id,
  alt,
  src,
  category,
  source,
  intent,
  size,
  border,
  custom,
}) => {
  const { t } = useTranslation("archives");

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
        className="hidden z-100 flex flex-col content-center absolute top-25 mr-25 ml-10 size-fit pt-15 bg-black border-white border-1"
      >
        <div id={`${id}Details`} className="">
          <div id="headerDetails" className="pr-20 pl-20 mb-7">
            <div className="flex justify-between">
              <div>
                <h3 className="uppercase">
                  <span className="text-3xl">Geoje </span>
                  <span className="text-xl opacity-60 font-body">
                    / {t("content.img")}
                  </span>
                </h3>
              </div>
              <img
                src="../assets/icons/close.svg"
                className="cursor-pointer self-end"
                onClick={closeDetails}
              />
            </div>
            <div id="btnDetails" className="flex gap-3">
              <Button label={category} intent="tertiary" custom="mt-2" />
              <Button label={source} intent="tertiary" custom="mt-2" />
            </div>
          </div>
          <div id="contentDetails" className="flex gap-7">
            <div id="col1">
              <video src={src} controls className="max-h-140" />
            </div>
            <div id="col2" className="flex flex-col gap-2 w-100 pr-20 pt-[5%]">
              <h3 className="uppercase text-4xl">{source}</h3>
              <p className="text-base font-body">{alt}</p>
            </div>
          </div>
        </div>
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
