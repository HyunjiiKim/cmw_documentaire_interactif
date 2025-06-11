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
        ghost: "mt-[2.5em] underline",
      },
      size: {
        small: "px-[20px] py-[10px] text-sm",
        medium: "px-[30px] py-[10px] text-base",
        large: "px-6 py-3 text-lg",
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
      <img src="../assets/icons/sound.png" className="h-5" />
    </button>
  );
};

export const InfoBtn = () => {
  const { t } = useTranslation("general");

  return (
    <div
      className="group border-2 rounded-full border-secondary-1 aspect-square w-10 h-10 text-xs flex items-center text-center justify-center cursor-pointer relative
    
    hover:scale-120 hover:after:w-0 hover:after:h-0 
    
    hover:after:border-t-10 hover:after:border-t-transparent hover:after:border-b-10  hover:after:border-b-transparent hover:after:border-l-10 hover:after:border-l-white 
    
    hover:after:absolute hover:after:right-11 hover:after:-translate-x-1/2"
    >
      <p className="text-secondary-1">i</p>
      <div className="hidden group-hover:block absolute right-14 bg-white text-sm p-5 w-max font-body">
        {t("notAvailable")}
      </div>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="#9a938a"
          viewBox="0 0 16 16"
          className="hover:scale-120 text-[40px] flex items-center text-center justify-center align-middle"
          aria-label="Unmute sounds"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleSound();
          }}
        >
          <path d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5" />
          <path
            stroke="#9a938a"
            stroke-linecap="round"
            d="M2.5 4.5 L14.5 11.5"
          />
        </svg>
      ) : (
        <img
          src="../assets/icons/sound.png"
          className="hover:scale-120 h-6 m-auto"
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
