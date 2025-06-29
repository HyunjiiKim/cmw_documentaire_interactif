import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { VimeoPlayer } from "../VideoPlayer";
import Button, { ButtonWithIcon, TopPage } from "../Button";
import { DotsContainer } from "../Container";

export const Section1 = ({ vimeoId, nextChapter }) => {
  const { t } = useTranslation("general");
  const navigate = useNavigate();

  // check if VimeoPlayer finished or not
  const [isVimeoFinished, setIsVimeoFinished] = useState(false);

  const handleVimeoEnded = () => {
    setIsVimeoFinished(true);
    console.log("video finished");
  };

  // ViemoPlayer restart
  const videoRef = useRef(null);
  const handleRestartVimeo = () => {
    if (videoRef.current) {
      videoRef.current.restart();
    }
  };

  return (
    <div id="section1" className="relative">
      {/* videoId further update required */}
      <VimeoPlayer
        videoId={vimeoId}
        onEnded={handleVimeoEnded}
        width="w-full"
        height="h-full"
        ref={videoRef}
      />
      {
        // if video is finished, these triggers are appeared.
        isVimeoFinished && (
          <div className="absolute z-10 w-full h-full top-0 bg-black/80">
            <div
              id="btn-group"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-5 uppercase"
            >
              <Button
                label={t("review")}
                onClick={() => {
                  setIsVimeoFinished(false);
                  handleRestartVimeo();
                }}
              />
              <Button
                label={t("continue")}
                onClick={() => navigate(nextChapter)}
              />
            </div>
            <div
              id="scrollTrigger"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center animate-[scroll-down_2s_linear_infinite]"
            >
              <i className="bi bi-arrow-down text-[50px]" />
              <p className="font-body uppercase">scroll</p>
            </div>
          </div>
        )
      }
    </div>
  );
};

export const Section4 = ({ content, prevBtn, nextBtn }) => {
  const { t } = useTranslation("general");

  return (
    <div id="section4" className="bg-white-1 px-10 py-20 m-0 relative">
      <div id="contentContainer" className="flex flex-col gap-10 text-black my-10">
        <h2 className="text-[50px] text-shadow-lg/20 text-shadow-black uppercase">
          {content.title}
        </h2>
        <div
          id="description"
          className="columns-2 gap-5 font-body text-lg leading-[30px]"
        >
          {content.description.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      {/* <DotsContainer sections={content.pages} activeSection={content.pages[0].id} /> */}
      <div id="buttonGroup" className="w-full flex justify-between items-center gap-5 absolute bottom-5 left-0 px-10">
        <Button
          label={t("goBack")}
          onClick={prevBtn}
          custom={"border-secondary-1 border-1 text-secondary-1"}
        />
        <div id="btn-rightGroup" className="flex gap-5 items-center">
          <TopPage bgColor="black" borderColor="black" />
          <Button
            label={t("continue")}
            custom="border-black border-1 text-black"
            onClick={nextBtn}
          />
        </div>
      </div>
    </div>
  );
};

/**
 * This allows to render image with description when clicking
 */
export const ClickImage = ({ content = { img: "", isVideo: false } }) => {
  const [remover, setRemover] = useState(false);
  const [showText, setShowText] = useState(false);

  return (
    <div className="w-full h-full">
      {!remover && (
        <div
          id="grayfilter"
          className="z-10 bg-black/70 w-full h-full absolute top-0 left-0"
        >
          <ButtonWithIcon
            onClick={() => setRemover(true)}
            custom="bg-primary-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      )}
      <img
        src={content.img}
        alt={content.name}
        className="w-full h-full object-cover"
      />
      {remover && (
        <div className={`absolute top-${content.top} left-${content.left}`}>
          <ButtonWithIcon
            onClick={() => (showText ? setShowText(false) : setShowText(true))}
            custom="bg-primary-1"
          />
          {showText && (
            <div
              id="descriptionImage"
              className={`flex flex-col gap-5 text-white bg-tertiary-1 border-1 border-primary-1 p-4 bg-primary-2 relative max-w-[400px]`}
            >
              <i
                className="bi bi-x-lg absolute top-2 right-2 border-1 border-white cursor-pointer"
                onClick={() => setShowText(false)}
              />
              <div>
                <h1 className="uppercase text-lg tracking-wider">
                  {content.name}
                </h1>
                <hr className="border-2 w-12 border-primary-1" />
              </div>
              <p className="font-body">{content.description}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/**
 * witness seciton 1 infos
 */

export const DifferentPdv = () => {
  const { t } = useTranslation("contents");

  const witnessInfo = [
    {
      id: "nk",
      btnLabel: t("witness.version.NK.title"),
      description: t("witness.version.NK.description"),
    },
    {
      id: "us",
      btnLabel: t("witness.version.US.title"),
      description: t("witness.version.US.description"),
    },
  ];

  // default pdv on section1 is null
  const [showPdv, setShowPdv] = useState(null);
  // Find the currently selected witness information based on showPdv
  const selectedWitness = witnessInfo.find((item) => item.id === showPdv);

  return (
    <div id="differentPdv" className="h-full flex flex-col text-white">
      {showPdv === null ? (
        <div id="cover" className="flex flex-col">
          <div
            id="screen1"
            className="h-screen flex flex-col px-10 py-10 gap-10"
          >
            <h1 className="text-[160px] max-sm:text-7xl uppercase tracking-[6%]gi max-lg:text-7xl">
              {t("witness.title.pre")}
            </h1>
            <div
              id="buttonGroup"
              className="flex flex-col self-center items-center gap-5"
            >
              <p className="text-3xl font-body tracking-[6%] text-center w-180">
                {t("witness.title.tagline")}
              </p>
              <div className="flex flex-col gap-5 items-center">
                {witnessInfo.map((item) => (
                  <Button
                    label={item.btnLabel}
                    key={item["id"]}
                    size="medium"
                    onClick={() => setShowPdv(item["id"])}
                  />
                ))}
              </div>

            </div>
            <h1 className="text-[160px] max-lg:text-7xl uppercase self-end tracking-[6%]">
              {t("witness.title.post")}
            </h1>
          </div>
        </div>
      ) : (
        <div
          id="pdvContainer"
          className="bg-white-1 text-black h-full py-20 w-full flex justify-center"
        >
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl uppercase">
              {t("witness.title.pre")} {t("witness.title.post")}
            </h1>
            <p className="text-2xl text-gray-1 tracking-widest font-body font-regular w-1/2 max-w-[600px]">
              {t("witness.title.tagline")}
            </p>
            <div id="btnGroup" className="flex flex-col">
              {witnessInfo.map((item) => (
                <Button
                  label={item.btnLabel}
                  key={item["id"]}
                  onClick={() => setShowPdv(item["id"])}
                  custom={`m-2 ${item["id"] === showPdv
                    ? "bg-primary-1"
                    : "bg-transparent text-black"
                    }`}
                />
              ))}
            </div>
          </div>
          <div className="bg-black font-body tracking-widest text-white h-[50%] w-[40%] max-h-[300px] max-w-[593px] self-end p-15 overflow-y-scroll scrollbar-hide relative">
            <div
              className="bg-primary-1 w-fit p-1 absolute top-5 left-5 cursor-pointer"
              onClick={() => setShowPdv(null)}
            >
              <i className="bi bi-x-lg"></i>
            </div>
            {selectedWitness && <p>{selectedWitness.description}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export const Witness = ({ content = {} }) => {
  return (
    <div
      id={`witnessContainer_${content.id}`}
      className={`flex gap-10 w-full ${content.id % 2 === 0 && "flex-row-reverse"
        }`}
    >
      <video src={content.videoURL} controls className="max-w-[860px]" />
      <div
        className={`flex flex-col justify-end mr-[60px] gap-20 ${content.id % 2 === 0 && "text-right"
          }`}
      >
        <div>
          <h3 className="text-6xl leading-20">
            {content.id}
            <br />
            {content.fname}
          </h3>
          <p className="font-body text-2xl">{content.status}</p>
        </div>
        <p className="font-body text-2xl">"{content.tagline}""</p>
      </div>
    </div>
  );
};
