import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Chronology } from "./ChapterContents/Chronology";
import HorizontalScroller from "./HorizontalScroller";
import {
  ClickImage,
  DifferentPdv,
  Section1,
  Section4,
  Witness,
} from "./ChapterContents/Sections";
import Credits from "./Credits";
import Button, { ButtonWithIcon, TopPage } from "./Button";
import SyncedLyricsPlayer from "./ChapterContents/AudioReader";

import C1S2 from "/assets/img/ch1sec2.png";
import C2S2 from "/assets/img/ch2sec2.png";
import mockVideo from "/assets/videos/Introduction.mp4";

const Content = ({ chapter }) => {
  const { t: t1 } = useTranslation("contents");
  const { t: t2 } = useTranslation("general");

  const navigation = useNavigate();
  /**
   * Chapter 1 infos
   */

  const caroulerSlider = [
    {
      id: 0,
      src: "https://storage.googleapis.com/cmw-geoje-src/img/General_Kim-Il-Sung%2C_Koje-do%2C_South_Korea.jpg",
      alt: "",
    },
    {
      id: 1,
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Square-danse_devant_la_statut_de_la_liberte.jpg",
      alt: "",
    },
    {
      id: 2,
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Compound%2092%2C_Koje-do%2C_South_Korea.jpg",
      alt: "",
    },
    {
      id: 3,
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Killing_Time.jpg",
      alt: "",
    },
    {
      id: 4,
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Enterrement_d'une_fillette_sud-cor%C3%A9enne_avant_le_d%C3%A9placement_des_habitants_de_son_village_vers_un_camp_de_r%C3%A9fugi%C3%A9s.jpeg",
      alt: "",
    },
    {
      id: 5,
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Jeunes_mendiants.jpeg",
      alt: "",
    },
    {
      id: 6,
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Korean_War_Montage_2.png",
      alt: "",
    },
    {
      id: 7,
      src: "https://storage.googleapis.com/cmw-geoje-src/img/lunch_time_in_kohe_do_camp.jpg",
      alt: "",
    },
    {
      id: 8,
      src: "https://storage.googleapis.com/cmw-geoje-src/img/La_press_internationale_couvre_la_guerre_de_cor%C3%A9e.jpeg",
      alt: "",
    },
    {
      id: 9,
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Photography-Prisoner-Camp-Retraining-Physical%20Education-Prisoner-Olympic-Geojedo.jpg",
      alt: "",
    },
    {
      id: 10,
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Chinese_New_Year.jpg",
      alt: "",
    },
  ];

  const ch1s4 = {
    title: t1("ch1.section4.title"),
    description: [
      t1("ch1.section4.description.1"),
      t1("ch1.section4.description.2"),
    ],
  };

  /*
   * Chapter2 Section2 Content
   */

  const ch2s2Texts = [
    t1("ch2.contents.2.para1"),
    t1("ch2.contents.2.para2"),
    t1("ch2.contents.2.para3"),
    t1("ch2.contents.2.para4"),
  ];

  const ch2s4 = {
    title: t1("ch2.contents.4.title"),
    description: [
      t1("ch2.contents.4.description.1"),
      t1("ch2.contents.4.description.2"),
      t1("ch2.contents.4.description.3"),
      t1("ch2.contents.4.description.4"),
      t1("ch2.contents.4.description.5"),
    ],
  };

  /**
   * ch3 section 3
   */

  const [c3s3, setC3s3] = useState(0);

  const ch3s3Images = [
    {
      id: 0,
      name: t1("ch2.contents.3.1st.title"), // img alt
      description: t1("ch2.contents.3.1st.description"),
      img: "https://storage.googleapis.com/cmw-geoje-src/img/chap02_section02/zones_camps/zones_camp03.png", // img src
      top: 30,
      left: 40,
    },
    {
      id: 1,
      name: t1("ch2.contents.3.2nd.title"), // img alt
      description: t1("ch2.contents.3.2nd.description"),
      img: "https://storage.googleapis.com/cmw-geoje-src/img/chap02_section02/zones_camps/zones_camp01.png", // img src
      position: "bottom-20 left-30",
      top: 120,
      left: 60
    },
    {
      id: 2,
      name: t1("ch2.contents.3.3rd.title"), // img alt
      description: t1("ch2.contents.3.3rd.description"),
      img: "https://storage.googleapis.com/cmw-geoje-src/img/chap02_section02/zones_camps/reconstitution04.png", // img src
      position: "bottom-20 left-30",
      top: 120,
      left: 120
    },
  ];

  const ch3AudioSrc = "https://storage.googleapis.com/cmw-geoje-src/audios/Temoignnage%201_07-5_14.mp3";

  /**
   * Conclusion
   */

  const acknowledgementList = [
    t2("acknowledgement.PB"),
    t2("acknowledgement.TB"),
    t2("acknowledgement.MC"),
    t2("acknowledgement.GY"),
    t2("acknowledgement.MA"),
    t2("acknowledgement.SL"),
    t2("acknowledgement.SZ"),
  ];

  const ch3s4 = {
    title: t1("ch3.contents.4.title"),
    description: [
      t1("ch3.contents.4.description.1"),
      t1("ch3.contents.4.description.2"),
      t1("ch3.contents.4.description.3"),
      t1("ch3.contents.4.description.4"),
    ],
  };

  // witeness information is stored here
  const witnessInfo = [
    {
      id: "01",
      fname: t1("witness.witnessVideos.01.fname"),
      lname: "",
      status: t1("witness.witnessVideos.01.status"),
      tagline: t1("witness.witnessVideos.01.tagline"),
      videoURL: mockVideo,
    },
    {
      id: "02",
      fname: t1("witness.witnessVideos.02.fname"),
      lname: "",
      status: t1("witness.witnessVideos.02.status"),
      tagline: t1("witness.witnessVideos.02.tagline"),
      videoURL: mockVideo,
    },
    {
      id: "03",
      fname: t1("witness.witnessVideos.03.fname"),
      lname: "",
      status: t1("witness.witnessVideos.03.status"),
      tagline: t1("witness.witnessVideos.03.tagline"),
      videoURL: mockVideo,
    },
  ];

  // show Temoignage
  const [showTemoignages, setShowTemoignages] = useState(false);

  const handleShowTemoignages = () => {
    setShowTemoignages(true);
    //after 0.1 sec, it scrools smootly to the section id="temoignages"
    setTimeout(() => {
      document.getElementById("temoignages").scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  // btn ch2 section 2
  const section3container = document.querySelector("#c2section3");

  function scrollToSection3() {
    // after 0.1 sec, it scrools smootly to the section id="c2section3"
    setTimeout(() => {
      section3container.scrollIntoView({ behavior: "smooth" });
    }, 100);
    0
  }


  switch (chapter) {
    case "ch1":
      return (
        <div id="ch1" className="mt-10 flex flex-col text-white gap-15">
          <div id="section1Container" className="h-full">
            <Section1 vimeoId={1095028297} nextChapter="/view/ch2" />
          </div>
          <div id="section2" className="flex flex-col relative h-[150vh] my-10">
            <img
              src={C1S2}
              alt=""
              className="z-0 absolute h-full max-w-[700px] w-[60%] left-1/2 -translate-x-1/2"
            />
            <div className="z-1">
              <div
                id="TextContainer"
                className="font-body tracking-widest max-w-[470px] ml-20 flex flex-col gap-10"
              >
                <div className="font-bold text-right text-2xl max-sm:text-lg">
                  {t1("ch1.section2.1")}
                </div>
                <div className="ml-10 text-lg">{t1("ch1.section2.2")}</div>
                <div className="ml-10 text-lg">{t1("ch1.section2.3")}</div>
              </div>
              <h1 className="w-full text-primary-1 uppercase text-[calc(max(1rem,(100vw-4rem)/6))]">
                geoje - 1951
              </h1>
              <div className="justify-self-center">
                <Chronology />
              </div>
            </div>
          </div>
          <div id="section3" className="relative my-40 py-10 h-fit min-h-screen">
            <h1 className="text-white-1 text-[calc(max(1rem,(100vw-4rem)/9))]">WERNER</h1>
            <HorizontalScroller
              data={caroulerSlider}
              custom={`asepct-square`}
              size="md"
              isMarquee={true}
            />
            <h1 className="text-white-1 text-[calc(max(1rem,(100vw-4rem)/9))] absolute right-0">
              BISCHOFF
            </h1>
            <div
              id="textContainer"
              className="font-body max-w-[425px] absolute bottom-0 left-10"
            >
              {t1("ch1.section3.contents")}
            </div>
          </div>
          <div id="section4Container">
            <Section4 content={ch1s4} prevBtn={() => navigation("/")} nextBtn={() => navigation("/view/ch2")} />
          </div>
        </div>
      );
    case "ch2":
      return (
        <div
          id="ch2"
          className="flex flex-col text-white gap-10 h-full overflow-y-scroll"
        >
          <div id="section1">
            <Section1 vimeoId={1095029681} nextChapter="/view/ch3" />
          </div>
          <div id="c2section2" className="flex flex-col relative h-screen">
            <img
              src={C2S2}
              alt="background"
              className="w-full h-full object-cover"
            />
            <div className="w-full z-10">
              <div className="absolute top-10 left-10 font-body max-w-[300px] h-1/2 overflow-y-scroll scrollbar-hide max-h-[500px] first-letter:text-4xl first-letter:font-bold animate-[autoscaler-6s-linear-inifite]">
                {ch2s2Texts.map((it, id) => (
                  <div
                    id="scrollTextContainer"
                    className="my-5 tracking-widest"
                    key={id}
                  >
                    {it}
                  </div>
                ))}
              </div>

            </div>

            <div className="w-full absolute bottom-20 left-290">
              <ButtonWithIcon
                label={t2("continue")}
                custom="border-white border-1"
                onClick={scrollToSection3}
              />
            </div>
          </div>
          <div id="c2section3" className="relative h-full">
            <ol className="w-full px-10 flex absolute text-3xl top-10 justify-between">
              {ch3s3Images.map((it, id) => (
                <li
                  key={id}
                  onClick={() => setC3s3(id)}
                  className={`cursor-pointer font-body uppercase hover:font-bold text-white/70 ${c3s3 === id && "font-bold text-white/100"
                    }`}
                >
                  {it.name}
                  {c3s3 === id && (
                    <hr className="border-2 w-[30%] border-primary-1" />
                  )}
                </li>
              ))}
            </ol>
            <ClickImage content={ch3s3Images[c3s3]} />
          </div>
          <div id="section4">
            <Section4 content={ch2s4} prevBtn={() => navigation("/view/ch1")} nextBtn={() => navigation("/view/ch3")} />
          </div>
        </div>
      );
    case "ch3":
      return (
        <div className="px-10 py-10 text-white">
          <div id="section1" className="h-screen">
            <Section1 vimeoId={1095030761} nextChapter="/view/conclusion" />
          </div>
          <div id="section2">
            <DifferentPdv />
          </div>
          <div
            id="section3"
            className="h-screen bg-[url(https://storage.googleapis.com/cmw-geoje-src/img/Square-danse_devant_la_statut_de_la_liberte.jpg)] bg-no-repeat bg-cover bg-black/50 bg-blend-multiply flex flex-col justify-center items-center text-center gap-17 tracking-[6%]"
          >
            <div>
              <h2 className="text-6xl uppercase">2023</h2>
              <p className="font-body text-xl w-145">
                {t1("ch3.contents.3.description")}
              </p>
            </div>
            <div>
              <SyncedLyricsPlayer audioSrc={ch3AudioSrc} />
            </div>
            <div className="w-full flex justify-end mr-70">
              <ButtonWithIcon
                label={t2("continueVisit")}
                onClick={() => navigation("/view/conclusion")}
              />
            </div>
          </div>
        </div>
      );
    case "conclusion":
      return (
        <div
          id="conclusion"
          className="px-10 py-10 text-white flex flex-col gap-10"
        >
          <div id="section1" className="py-20 w-full">
            <div id="TextContainer" className="text-wrap">
              <h1 className="uppercase text-[50px] my-5">
                {t1("conclu.contents.subtitle")}
              </h1>
              <div className="font-body tracking-widest columns-2 tracking-[6%] leading-8">
                <p>
                  {t1("conclu.contents.1")}
                  <br />
                  <br />
                  {t1("conclu.contents.2")}
                  <br />
                  <br />
                  <strong>{t1("conclu.contents.3")}</strong>
                </p>
              </div>
            </div>
          </div>
          <div id="section2">
            <Credits />
          </div>
          <div id="section3" className="flex flex-col gap-10">
            <h1 className="uppercase text-6xl">{t1("conclu.thanks.title")}</h1>
            <ol className="flex gap-5 font-body text-lg">
              {acknowledgementList.map((it, id) => (
                <li key={id}>
                  {it} {id === acknowledgementList.length - 1 ? "." : ","}
                </li>
              ))}
            </ol>
          </div>
          <Button
            label={t2("returnToHome")}
            onClick={() => navigation("/")}
            custom="self-end"
          />
        </div>
      );
    default:
      return (
        <div
          id="pageNotFound"
          className="h-screen flex flex-col justify-center items-center text-white"
        >
          Page Not Found
          <Button label={t2("returnToHome")} onClick={() => navigation("/")} />
        </div>
      );
  }
};

export default Content;
