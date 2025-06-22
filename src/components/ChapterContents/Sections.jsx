import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import { VimeoPlayer } from "../VideoPlayer";
import Button, { ButtonWithIcon } from "../Button";
import { DotsContainer } from "../Container";

import mockVideo from "/assets/videos/Introduction.mp4";

export const Section1 = ({ vimeoId }) => {
  // check if VimeoPlayer finished or not
  const [isVimeoFinished, setIsVimeoFinished] = useState(false);

  const handleVimeoEnded = () => {
    setIsVimeoFinished(true);
    console.log("video finished");
  };

  return (
    <div id="section1" className="relative">
      {/* videoId further update required */}
      <VimeoPlayer
        videoId={vimeoId}
        onEnded={handleVimeoEnded}
        width="w-full"
        height="h-full"
      />
      {
        // if video is finished, these triggers are appeared.
        isVimeoFinished && (
          <div className="absolute z-10 w-full h-full top-0 bg-black/80">
            <div
              id="btn-group"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-5"
            >
              <Button label="Test" />
              <Button label="Test" />
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

export const Section4 = ({ content, scrollTo }) => {
  return (
    <div id="section4">
      <div
        id="contentContainer"
        className="bg-white-1 px-10 py-10 m-0 text-black "
      >
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
      <div id="buttonGroup" className="w-full flex justify-end gap-5">
        <Button
          onClick={() => {
            scrollTo.current.scrollIntoView({ behavior: "smooth" });
          }}
          label="Retour en haut de la page"
          custom="bg-black"
        />
        <Button
          label="Retour à la carte"
          custom="border-black border-1 text-black"
          onClick={() => (window.location.href = "/map")}
        />
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
      btnLabel: "north korean version",
      description: "pdv of north korea. Hello",
    },
    {
      id: "us",
      btnLabel: "american version",
      description: "pdv of the US. Hello",
    },
  ];

  // default pdv on section1 is null
  const [showPdv, setShowPdv] = useState(null);
  // Find the currently selected witness information based on showPdv
  const selectedWitness = witnessInfo.find((item) => item.id === showPdv);
  console.log(showPdv);

  const ch3s4 = {
    title: t("ch3.contents.4.title"),
    description: [
      t("ch3.contents.4.description.1"),
      t("ch3.contents.4.description.2"),
      t("ch3.contents.4.description.3"),
      t("ch3.contents.4.description.4"),
    ],
  };

  const mainRef = useRef(null);
  const screen4ref = useRef(null);
  const [showTemoignages, setShowTemoignages] = useState(false);

  const handleShowTemoignages = () => {
    setShowTemoignages(true);
    setTimeout(() => {
      screen4ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // short delay ensures element is rendered before scroll
  };

  return (
    <div id="differentPdv" className="h-full flex flex-col text-white">
      {showPdv === null ? (
        <div id="cover" className="flex flex-col">
          <div
            id="screen1"
            ref={mainRef}
            className="h-screen flex flex-col px-10 py-10 gap-5"
          >
            <h1 className="text-[160px] max-sm:text-7xl uppercase tracking-[6%]gi">
              qui écrit
            </h1>
            <div
              id="buttonGroup"
              className="flex flex-col self-center items-center"
            >
              <p className="text-3xl font-body tracking-[6%] text-center w-180">
                Explore les deux versions d’un même événement à travers
                différentes perspectives idéologiques.
              </p>
              {witnessInfo.map((item) => (
                <Button
                  label={item.btnLabel}
                  key={item["id"]}
                  size="medium"
                  onClick={() => setShowPdv(item["id"])}
                />
              ))}
            </div>
            <h1 className="text-[160px] max-sm:text-7xl uppercase self-end tracking-[6%]">
              l'histoire ?
            </h1>
          </div>
        </div>
      ) : (
        <div
          id="pdvContainer"
          className="bg-white-1 text-black h-full w-full flex"
        >
          <div>
            <h1 className="text-5xl uppercase">QUI ÉCRIT L’HISTOIRE ?</h1>
            <p className="text-3xl text-gray-400 tracking-widest font-body font-regular max-w-[600px]">
              Explore les deux versions d’un même événement à travers
              différentes perspectives idéologiques.
            </p>
            <div id="btnGroup" className="flex flex-col">
              {witnessInfo.map((item) => (
                <Button
                  label={item.btnLabel}
                  key={item["id"]}
                  onClick={() => setShowPdv(item["id"])}
                />
              ))}
            </div>
          </div>
          <div className="bg-black text-white">
            {selectedWitness && <p>{selectedWitness.description}</p>}
          </div>
        </div>
      )}
      <div id="screen2" className="w-full bg-white-1 px-10 py-10 m-0">
        <Section4 content={ch3s4} scrollTo={mainRef} />
      </div>
      <div
        id="screen3"
        className="h-screen bg-[url(https://storage.googleapis.com/cmw-geoje-src/videos/chap3_section3.gif)] bg-no-repeat bg-cover bg-black/50 bg-blend-multiply flex flex-col justify-center items-center text-center tracking-[6%]"
      >
        <h2 className="uppercase text-7xl leading-20">
          Camp de Geoje
          <br />
          Voix et mémoires
        </h2>
        <p className="font-body text-3xl w-190">
          Découvrez les témoignages et les récits poignants des visiteurs du
          parc historique.
        </p>
        <Button label="Voir les témoignages" onClick={handleShowTemoignages} />
      </div>
      {showTemoignages && (
        <div
          id="temoignages"
          ref={screen4ref}
          className="h-full flex flex-col justify-center items-center tracking-[6%] gap-15"
        >
          <div id="temoignage1" className="flex gap-10">
            <video src={mockVideo} controls className="w-[130%]" />
            <div className="flex flex-col justify-end mr-[60px] gap-20">
              <div>
                <h3 className="text-6xl leading-20">
                  01
                  <br />
                  Min-jae
                </h3>
                <p className="font-body text-2xl">Petit-fils d'un prisonnier</p>
              </div>
              <p className="font-body text-2xl">
                "Revenir ici, c’est affronter les silences de l’histoire. Mais
                aussi les comprendre."
              </p>
            </div>
          </div>
          <div id="temoignage2" className="flex gap-10">
            <div className="flex flex-col justify-end text-right ml-[60px] gap-20">
              <div>
                <h3 className="text-6xl leading-20">
                  02
                  <br />
                  Sung-ho
                </h3>
                <p className="font-body text-2xl">Témoin et ancien résistant</p>
              </div>
              <p className="font-body text-2xl">
                "Revenir ici, c’est affronter les silences de l’histoire. Mais
                aussi les comprendre."
              </p>
            </div>
            <video src={mockVideo} controls className="w-[130%]" />
          </div>
          <div id="temoignage3" className="flex gap-10">
            <video src={mockVideo} controls className="w-[130%]" />
            <div className="flex flex-col justify-end mr-[60px] gap-20">
              <div>
                <h3 className="text-6xl leading-20">
                  03
                  <br />
                  Ji-Yeon
                </h3>
                <p className="font-body text-2xl">
                  En visite dans le parc historique{" "}
                </p>
              </div>
              <p className="font-body text-2xl">
                "Revenir ici, c’est affronter les silences de l’histoire. Mais
                aussi les comprendre."
              </p>
            </div>
          </div>
          <div
            id="buttonGroup"
            className="w-full flex justify-end gap-5 mr-[60px]"
          >
            <Button
              onClick={() => {
                mainRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              label="Retour en haut de la page"
              custom="bg-primary-1"
            />
            <Button
              label="Retour à la carte"
              custom="border-white border-1"
              onClick={() => (window.location.href = "/map")}
            />
          </div>
        </div>
      )}
    </div>
  );
};
