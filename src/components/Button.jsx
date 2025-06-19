import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";

const buttonVariants = cva(
  "cursor-pointer shadow-md/25 disabled:opacity-50 w-fit bg-transparent text-white font-body font-semibold uppercase text-xl hover:inset-shadow-sm hover:inset-shadow-black hover:text-shadow-sm/30 hover:text-shadow-black",
  {
    variants: {
      intent: {
        primary: "mt-[2.5em] border-white border-1",
        secondary: "border-white border-1",
        tertiary: "border-white border-1 bg-primary-1",
        ghost: "mt-[2.5em] underline",
      },
      size: {
        small: "px-[20px] py-[10px] text-sm",
        medium: "px-[30px] py-[10px] text-base",
        large: "px-6 py-3 text-2xl",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

const Button = ({ intent, size, custom, label, onClick }) => {
  return (
    <button
      className={twMerge(buttonVariants({ intent, size }), custom)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export const ButtonWithIcon = ({ intent, size, custom, label, onClick }) => {
  return (
    <button
      className={twMerge(buttonVariants({ intent, size }), custom)}
      onClick={onClick}
    >
      {label}
      <img src="../assets/icons/soundBtn.svg" className="w-5" />
    </button>
  );
};

export const InfoBtn = () => {
  const { t } = useTranslation("general");
  document.addEventListener("DOMContentLoaded", () => {
    const infoSection = document.getElementById("infoSection");
  });

  function openInfoSection() {
    infoSection.classList.remove("hidden");
  }

  function closeInfoSection() {
    infoSection.classList.add("hidden");
  }

  return (
    <>
      <img
        src="../assets/icons/infoBtn.svg"
        className="cursor-pointer w-10 h-10 hover:scale-120"
        onClick={openInfoSection}
      />
      <div
        id="infoSection"
        className="hidden z-100 flex flex-col absolute top-50 mr-50 ml-50 size-fit pt-10 p-20 bg-black border-primary-1 border-1"
      >
        <img
          src="../assets/icons/close.svg"
          className="cursor-pointer self-end w-7 pb-8"
          onClick={closeInfoSection}
        />
        <p className="text-white font-body leading-7">
          {t("info.para1")}
          <br />
          <br />
          {t("info.para2")}
          <br />
          <br />
          {t("info.para3")}
          <br />
          <br />
          {t("info.para4")}
          <br />
          {t("info.para5")}
        </p>
      </div>
    </>
  );
};

// Trigger Button with Audio File
export const AudioBtn = ({ audioSrc, label, textColor, bgColor }) => {
  if (audioSrc) {
    const audioRef = useRef(new Audio(audioSrc));
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }, [isPlaying]);

    const toggleAudio = () => {
      setIsPlaying(!isPlaying);
    };
  }

  return (
    <div
      className={`cursor-pointer flex flex-auto bg-${bgColor} text-${textColor} border-${textColor} border-1 py-12 px-12`}
      onClick={toggleAudio}
      title={isPlaying ? "Pause audio" : "Play audio"}
    >
      <p className="text-lg font-body uppercase">{label}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
        fill="#9a938a"
        viewBox="0 0 16 16"
        aria-label="Unmute sounds"
      />
    </div>
  );
};

export const SoundBtn = () => {
  const [isSilent, setIsSilent] = useState(() => {
    const savedMuteState = localStorage.getItem("siteMuted");
    return savedMuteState ? JSON.parse(savedMuteState) : false;
  });

  // Function to apply mute/unmute to all relevant elements
  const applyMuteState = useCallback((muted) => {
    // Mute/unmute <video> elements
    const videos = document.getElementsByTagName("video");
    for (let i = 0; i < videos.length; i++) {
      videos[i].muted = muted;
    }

    // Mute/unmute <audio> elements
    const audios = document.getElementsByTagName("audio");
    for (let i = 0; i < audios.length; i++) {
      audios[i].muted = muted;
    }

    const iframes = document.getElementsByTagName("iframe");
    for (let i = 0; i < iframes.length; i++) {
      const iframe = iframes[i];
      try {
        const iframeDoc =
          iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
          const iframeVideos = iframeDoc.getElementsByTagName("video");
          for (let j = 0; j < iframeVideos.length; j++) {
            iframeVideos[j].muted = muted;
          }
          const iframeAudios = iframeDoc.getElementsByTagName("audio");
          for (let j = 0; j < iframeAudios.length; j++) {
            iframeAudios[j].muted = muted;
          }
        }
      } catch (error) {
        console.warn(
          "Could not access iframe content for muting (likely cross-origin):",
          iframe,
          error
        );
      }
    }
  }, []);

  useEffect(() => {
    applyMuteState(isSilent);
    localStorage.setItem("siteMuted", JSON.stringify(isSilent));
  }, [isSilent, applyMuteState]);

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          // Re-apply mute state if new media elements are added
          mutation.addedNodes.forEach((node) => {
            if (
              node.nodeName === "VIDEO" ||
              node.nodeName === "AUDIO" ||
              (node.getElementsByTagName &&
                (node.getElementsByTagName("video").length > 0 ||
                  node.getElementsByTagName("audio").length > 0))
            ) {
              applyMuteState(isSilent);
              return;
            }
          });
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
    return () => {
      observer.disconnect();
    };
  }, [isSilent, applyMuteState]);

  function handleSound() {
    setIsSilent((prevIsSilent) => !prevIsSilent);
  }

  return (
    <div
      className="cursor-pointer flex w-fit"
      onClick={handleSound}
      title={isSilent ? "Unmute all sounds" : "Mute all sounds"}
    >
      {isSilent ? (
        <img
          src="../assets/icons/soundBtnOff.svg" // Need the presence of svgviewer-output.svg to work
          className="hover:scale-120 w-8 m-auto"
          aria-label="Mute sounds"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleSound();
          }}
        />
      ) : (
        <img
          src="../assets/icons/soundBtn.svg"
          className="hover:scale-120 w-8 m-auto"
          aria-label="Mute sounds"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleSound();
          }}
        />
      )}
    </div>
  );
};

export const WatchBtn = ({ href }) => {
  const { t } = useTranslation("general");

  return (
    <div
      className="group cursor-pointer z-10 flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-120 hover:after:w-0 hover:after:h-0 hover:after:border-r-10 hover:after:border-r-transparent hover:after:border-l-10  hover:after:border-l-transparent hover:after:border-t-10 hover:after:border-t-white hover:after:absolute hover:after:bottom-13 hover:after:left-1/2 hover:after:-translate-x-1/2"
      onClick={() => (window.location.href = href)}
    >
      <i className="bi bi-soundwave text-white text-[50px] flex items-center text-center justify-center align-middle"></i>
      <i className="bi bi-soundwave text-black text-[50px] flex items-center text-center justify-center align-middle"></i>
      <div className="hidden group-hover:block absolute bottom-15 left-1/2 -translate-x-1/2 bg-white text-sm p-5 w-max font-body">
        {t("rewatch")}
      </div>
    </div>
  );
};

export const ArrowBtn = ({ isLeft, color, onClick, custom }) => {
  const navigate = useNavigate();
  const navigateRef = useRef(navigate);
  // default onClick : return to the previous page
  const goBack = () => {
    navigateRef.current(-1);
  };

  return (
    <div
      className={`bg-${color} cursor-pointer aspect-squre w-40 ${custom}`}
      onClick={!onClick ? goBack : onClick}
    >
      <i
        className={`h1 bg-primary-1 px-[15px] py-[10px] border text-[20px] text-white hover:inset-shadow-sm hover:inset-shadow-black hover:text-shadow-sm/30 hover:text-shadow-black bi bi-chevron-${
          isLeft ? "left" : "right"
        }`}
      ></i>
    </div>
  );
};

export default Button;
