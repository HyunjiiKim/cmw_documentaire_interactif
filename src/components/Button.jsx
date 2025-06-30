import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "cursor-pointer disabled:opacity-50 w-fit bg-transparent text-white font-body font-semibold uppercase text-xl hover:inset-shadow-sm hover:text-shadow-sm/30 hover:text-shadow-black",
  {
    variants: {
      intent: {
        primary: "border-white border-1 shadow-lg/25 hover:shadow-white",
        secondary:
          "border-white border-1 shadow-md/25 hover:inset-shadow-black",
        tertiary:
          "border-white border-1 bg-primary-1 shadow-md/25 hover:inset-shadow-black",
        ghost: "underline",
        disabled: "border-white border-1 opacity-50",
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

const Button = ({ intent, size, custom, label, onClick, disabled }) => {
  return (
    <button
      className={twMerge(buttonVariants({ intent, size }), custom)}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export const ButtonWithIcon = ({ intent, size, custom, label, onClick }) => {
  return (
    <button
      className={twMerge(
        "flex flex-row gap-5",
        buttonVariants({ intent, size }),
        custom
      )}
      onClick={onClick}
    >
      {label}
      <img src="../assets/icons/soundBtn.svg" className="w-5" />
    </button>
  );
};

export const InfoBtn = ({ infoPosition = { top, right, bottom, left } }) => {
  const { t } = useTranslation("general");

  const [showInfo, setShowInfo] = useState(false);

  return (
    <div id="infoBtn">
      {/* using type narrowing to stabilize the customized position */}
      <div
        className={`fixed ${typeof infoPosition.top === "number" ? `top-${infoPosition.top}` : ""
          } ${typeof infoPosition.right === "number" && "string"
            ? `right-${infoPosition.right}`
            : ""
          } ${typeof infoPosition.bottom === "number"
            ? `bottom-${infoPosition.bottom}`
            : ""
          } ${typeof infoPosition.left === "number"
            ? `left-${infoPosition.left}`
            : ""
          } z-50 cursor-pointer`}
      >
        <img
          src="../assets/icons/infoBtn.svg"
          className=" w-10 h-10 hover:scale-120"
          onClick={() => setShowInfo(true)}
        />
      </div>
      {showInfo && (
        // this infoSection is always centered on the screen
        <div
          id="infoSection"
          className={`z-50 flex bg-black fixed max-w-240 w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          <div className="relative  p-20">
            <i
              className="bi bi-x-lg text-white text-lg absolute right-5 top-5 cursor-pointer"
              onClick={() => setShowInfo(false)}
            />
            <div id="infoContent" className="w-fit">
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
              <div
                id="universities"
                className="flex mt-10 justify-center gap-10"
              >
                <a href="https://www.univ-gustave-eiffel.fr/">
                  <img
                    src="https://www.amcsti.fr/wp-content/uploads/2025/04/UNIVERSITE-GUSTEVE-EIFFEL.png"
                    alt="Logo de l'université Gustave Eiffel"
                  />
                </a>
                <a href="https://eng.deu.ac.kr/eng/index.do">
                  <img
                    src="/assets/img/logo_dongeui.svg"
                    alt="Logo de l'université Dongeui"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Trigger Button with Audio File
export const AudioBtn = ({
  audioSrc,
  label,
  textColor,
  bgColor,
  isPlaying,
  onTogglePlay,
}) => {
  return (
    <div
      className={`cursor-pointer flex flex-auto bg-${bgColor} text-${textColor} border-${textColor} border-1 py-5 px-5 w-fit hover:scale-120`}
      onClick={onTogglePlay}
      title={isPlaying ? "Pause audio" : "Play audio"}
    >
      {label ? (
        <>
          <p className="text-lg font-body uppercase">{label}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#9a938a"
            viewBox="0 0 16 16"
            aria-label="Unmute sounds"
          />
        </>
      ) : (
        <img
          src="../assets/icons/soundBtn.svg"
          className={`h-10 ${isPlaying && "animate-[autoScaler_2s_linear_infinite]"
            }`}
        />
      )}
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

export const MapIcon = ({ label, id, position, sound }) => {
  const navigation = useNavigate();
  const [hovered, setHovered] = useState(false);
  const audioRef = useRef(null);

  const initializeAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(sound);
    }
  };

  const playSound = () => {
    initializeAudio();
    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.play().catch((err) => {
      console.error("Audio play blocked:", err);
    });
  };

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={twMerge(
        "w-fit h-fit m-auto group flex flex-col w-fit gap-3 absolute",
        position
      )}
      onClick={() => navigation(`/view/` + id)}
      onMouseEnter={() => {
        setHovered(true);
        playSound();
      }}
      onMouseLeave={() => {
        setHovered(false);
        stopSound();
      }}
    >
      <div
        className={`text-white text-xl uppercase text-center bg-black/80 p-3 rounded-md transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"
          }`}
      >
        {label}
      </div>
      <div className="relative w-fit mr-auto ml-auto cursor-pointer hover:scale-120 bg-black/90 border-white border-2 rounded-full">
        <span className="absolute top-20 left-0 right-0 mr-auto ml-auto w-0 h-0 border-t-[20px] border-t-white border-l-[13px] border-l-transparent border-r-[13px] border-r-transparent"></span>
        <img
          id="iconMap"
          src="../assets/icons/soundBtn.svg"
          className="w-20 h-20 p-3"
        />
      </div>
    </div>
  );
};

export const MapChronology = ({ event, position }) => {
  const [hovered, setHovered] = useState(false);
  const [openDetail, setOpenDetail] = useState(null);
  const chronologyRef = useRef(null);

  function openChronology() {
    setOpenDetail(chronologyRef);
  }

  function closeChronology(event) {
    event.stopPropagation();
    setOpenDetail(false);
  }

  return (
    <div
      className={twMerge(
        "w-fit h-fit m-auto group flex flex-col w-fit gap-3 absolute",
        position
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={openChronology}
    >
      <div
        className={`text-white text-xl uppercase text-center bg-black/80 p-3 rounded-md transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"
          }`}
      >
        {event.title}
      </div>
      <div className="relative w-fit mr-auto ml-auto cursor-pointer hover:scale-120 bg-black/70 border-white border-2 rounded-full">
        <span className="absolute top-20 left-0 right-0 mr-auto ml-auto w-0 h-0 border-t-[20px] border-t-white border-l-[13px] border-l-transparent border-r-[13px] border-r-transparent"></span>
        <img
          id="iconMap"
          src="../assets/icons/soundBtn.svg"
          className="w-20 h-20 p-3"
        />
      </div>
      {openDetail && (
        <div
          ref={chronologyRef}
          id={event.id}
          className="z-50 flex flex-col content-center absolute top-25 mr-25 ml-10 size-fit p-5 bg-black/70"
        >
          <div id={`${event.id}Chronology`} className="flex flex-col">
            <div id="contentChronology" className="flex gap-7">
              <div id="col1" className="m-auto w-50">
                <p className="text-base text-right font-body w-full text-wrap text-balance wrap-break-word">
                  {event.alt}
                </p>
              </div>
              <div id="col2" className="flex flex-col">
                <div className="flex flex-col w-full gap-2">
                  <img
                    src="../assets/icons/close.svg"
                    className="cursor-pointer self-end mb-5"
                    onClick={(e) => closeChronology(e)}
                  />
                  <Button
                    label={event.title}
                    intent="primary"
                    size="medium"
                    custom="ml-auto"
                  />
                  <img
                    src={event.src}
                    className="max-h-90 border-primary-1 border-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export const ReplayIntro = () => {
  const navigation = useNavigate();
  const { t } = useTranslation("general");

  return (
    <div
      className="flex w-[420px] h-fit gap-2 h-20 fixed bottom-15 left-50 w-50 bg-primary-1 shadow-md/60 cursor-pointer hover:scale-110"
      onClick={() => navigation("/")}
    >
      <div className="w-full font-body text-white p-4">
        <h4 className="uppercase text-2xl tracking-[6%] pb-1">
          {t("reviewIntro")}
        </h4>
        <p className="text-sm">
          {t("reviewIntroDetail")}
        </p>
      </div>
      <div className="flex justify-center w-[85%] bg-[url(https://storage.googleapis.com/cmw-geoje-src/img/lunch_time_in_kohe_do_camp.jpg)] bg-cover bg-no-repeat">
        <img
          id="iconMap"
          src="../assets/icons/soundBtnBlack.svg"
          className="bg-white/70 m-auto rounded-full cursor-pointer w-12 h-12 p-2"
        />
      </div>
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
        className={`h1 bg-primary-1 px-[15px] py-[10px] border text-[20px] text-white hover:inset-shadow-sm hover:inset-shadow-black hover:text-shadow-sm/30 hover:text-shadow-black bi bi-chevron-${isLeft ? "left" : "right"
          }`}
      ></i>
    </div>
  );
};

export const TopPage = () => {
  return (
    <button
      className="cursor-pointer aspect-square"
      onClick={() => {
        // using vanilla js to scroll to the top of the page
        // in React, #root is the parent element of the app
        const body = document.querySelector("#root");
        body.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <i
        className={`bg-tertiary-2 hover:bg-tertiary-1 px-[14px] py-[10px] bi bi-chevron-up`}
      ></i>
    </button>
  );
};

export default Button;
