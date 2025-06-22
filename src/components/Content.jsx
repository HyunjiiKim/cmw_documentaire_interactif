import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";

import { Chronology } from "./ChapterContents/Chronology";
import HorizontalScroller from "./HorizontalScroller";
import {
  ClickImage,
  DifferentPdv,
  Section1,
  Section4,
} from "./ChapterContents/Sections";
import Credits from "./Credits";
import Button, { ButtonWithIcon, AudioBtn } from "./Button";

import C1S2 from "/assets/img/ch1sec2.png";
import C2S2 from "/assets/img/ch2sec2.png";

const Content = ({ chapter }) => {
  const { t: t1 } = useTranslation("contents");
  const { t: t2 } = useTranslation("general");

  const mockData =
    "Maecenas tristique nunc ut lectus mattis, vel lacinia nulla accumsan. Integer ac elit nec ligula porta fringilla in pulvinar urna. Etiam maximus urna at risus consectetur convallis. Sed gravida elit ipsum, sed tempus lorem cursus ut. Sed urna dui, eleifend sit amet augue sit amet, tincidunt ullamcorper dolor. Aenean vel eros est. Maecenas quis commodo elit, sed tristique nunc. Suspendisse malesuada at eros a mollis. Sed sodales pretium venenatis. In ut sem euismod, elementum turpis non, convallis lectus. Duis porttitor, purus sit amet tincidunt egestas, ipsum nulla dapibus orci, vel sollicitudin odio justo laoreet velit. Praesent a nibh gravida, auctor est quis, fermentum enim. Sed gravida mi dolor, eget facilisis nisi varius nec. Duis quis dictum ex, a finibus quam. Morbi non fermentum eros. Suspendisse non auctor dui. Quisque id felis a magna viverra malesuada. Phasellus porta ligula vel felis eleifend gravida. Sed mauris tortor, mollis sit amet pellentesque ut, condimentum in eros. Mauris erat magna, imperdiet at ligula non, eleifend hendrerit velit. Donec pharetra molestie arcu, ac dapibus purus aliquet ut. Donec nec sem nisi. In vitae nisl quam. In hac habitasse platea dictumst. Fusce ullamcorper metus erat, eu aliquet felis dapibus ut. Donec ipsum quam, pellentesque a dolor vel, viverra ornare elit. Duis sagittis, nulla id bibendum congue, lorem est ullamcorper erat, at mattis tortor neque non est. Fusce maximus, ante ac molestie rhoncus, mauris augue dapibus metus, sit amet tempus ipsum nulla at turpis. Nunc semper pulvinar magna vel bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin a purus velit. Maecenas auctor, nisl ut dictum placerat, ex enim egestas eros, ac ornare enim lorem in massa. Ut diam sem, tincidunt ac suscipit id, eleifend nec ante. Aenean sodales ultricies turpis ac fringilla. Phasellus ornare massa at felis cursus dapibus. Nunc nunc dui, dictum id lectus non, condimentum fermentum enim. Aliquam blandit arcu mauris, sed tempus augue vestibulum a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ultrices semper velit eget aliquet. Donec ut lorem mi. Quisque iaculis ex ut libero gravida rutrum. Vestibulum ultrices in lectus quis consequat. Morbi iaculis at justo at consectetur. Curabitur sodales sem sit amet est blandit convallis. Quisque sit amet eros malesuada, malesuada leo at, malesuada sem. Cras est lectus, iaculis in lobortis sit amet, varius in ligula. Vivamus eget erat finibus, maximus sem id, pulvinar lectus. Duis consectetur ipsum ut venenatis eleifend. Mauris suscipit turpis aliquet magna accumsan pulvinar. Praesent bibendum vitae nulla accumsan lacinia. Donec nisi ipsum, semper sit amet imperdiet vitae, auctor quis sem. Pellentesque at auctor velit, a mollis orci. In auctor, tellus sed viverra facilisis, augue dui mollis odio, nec scelerisque arcu ligula nec ante. Donec malesuada libero at enim bibendum euismod. Nam cursus lectus consectetur volutpat viverra. Etiam neque felis, dapibus eget orci vel, tristique sollicitudin mauris. Nunc purus massa, tristique ut mattis in, varius et elit. Etiam at aliquam sapien, non venenatis augue.";

  /**
   * Chapter 1 infos
   */

  const imgMockData = [
    {
      id: 0,
      src: "https://picsum.photos/200",
      alt: "",
    },
    {
      id: 1,
      src: "https://picsum.photos/200",
      alt: "",
    },
    {
      id: 2,
      src: "https://picsum.photos/200",
      alt: "",
    },
    {
      id: 3,
      src: "https://picsum.photos/200",
      alt: "",
    },
    {
      id: 4,
      src: "https://picsum.photos/200",
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

  /**
   * Chapter 2 Triggers & Animations
   */

  const [activeSection, setActiveSection] = useState("");
  const mainRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const textBoxRef = useRef(null);

  // Observer for main sections
  useEffect(() => {
    const mainContainer = mainRef.current;
    if (!mainContainer || chapter !== "ch2") {
      // If not chapter 2, or no main container, ensure activeSection is cleared if it was from a previous ch2 render
      if (activeSection) setActiveSection("");
      return;
    }

    const sections = [section1Ref, section2Ref, section3Ref, section4Ref];
    const observer = new IntersectionObserver(
      (entries) => {
        let newActiveCandidate = null;
        let section2IsIntersecting = false;

        entries.forEach((entry) => {
          console.log(
            `Observer raw entry: id=${entry.target.id}, isIntersecting=${
              entry.isIntersecting
            }, ratio=${entry.intersectionRatio.toFixed(2)}`
          );
          if (entry.target.id === "section2" && entry.isIntersecting) {
            section2IsIntersecting = true;
          }
          if (entry.isIntersecting) {
            if (!newActiveCandidate) newActiveCandidate = entry.target.id;
          }
        });

        if (section2IsIntersecting) {
          if (activeSection !== "section2") {
            console.log("Observer: Setting activeSection to 'section2'");
            setActiveSection("section2");
          }
        } else if (newActiveCandidate) {
          // If section2 is not intersecting, but another is, set that one.
          if (
            activeSection !== newActiveCandidate &&
            activeSection === "section2"
          ) {
            // Only change if it was section2
            console.log(
              `Observer: Changing activeSection from 'section2' to '${newActiveCandidate}'`
            );
            setActiveSection(newActiveCandidate);
          } else if (!activeSection && newActiveCandidate) {
            // If active section was empty
            console.log(
              `Observer: Setting activeSection to '${newActiveCandidate}' (was empty)`
            );
            setActiveSection(newActiveCandidate);
          }
        } else {
          // No sections are intersecting at the threshold
          if (activeSection !== "") {
            console.log(
              `Observer: Clearing activeSection (was ${activeSection}) because nothing is intersecting`
            );
            setActiveSection("");
          }
        }
      },
      { root: mainContainer, threshold: 0.5 }
    ); // SUGGESTION: Lowered threshold to 0.5 for testing

    sections.forEach((s) => {
      if (s.current) {
        observer.observe(s.current);
      } else {
        console.warn(
          `Observer: Ref for a section is null. This might be expected if not all sections are rendered for this chapter.`
        );
      }
    });

    return () => {
      sections.forEach((s) => s.current && observer.unobserve(s.current));
      console.log("Observer: Cleaned up");
    };
  }, [chapter]); // Rerun if chapter changes, so observer is set for the correct mainRef

  // Scroll handling for main container (mainRef) in Chapter 2
  useEffect(() => {
    const mainContainer = mainRef.current;
    if (!mainContainer || chapter !== "ch2") {
      if (mainContainer) mainContainer.style.scrollSnapType = "y mandatory";
      return;
    }

    const handleMainScroll = (e) => {
      if (activeSection === "section2") {
        const textBox = textBoxRef.current;
        let allowPageScroll = false;

        if (textBox && textBox.contains(e.target)) {
          // If the event target is within the textbox, the textbox listener should handle it first.
          // This listener (handleMainScroll) should only act if the event was not stopped by the textbox.
          console.log(
            "MainScroll: Event originated in textbox, deferring unless propagated."
          );
          return;
        }

        // If event is not from textbox or textbox allowed propagation:
        if (textBox) {
          const { scrollTop, scrollHeight, clientHeight } = textBox;
          const isTextBoxAtTop = scrollTop <= 0; // Use <= 0 for top
          const isTextBoxAtBottom =
            Math.ceil(scrollTop + clientHeight) >= scrollHeight - 2;

          if (e.deltaY < 0 && isTextBoxAtTop) {
            allowPageScroll = true;
            console.log("MainScroll: Allowing UP (textbox at top)");
          } else if (e.deltaY > 0 && isTextBoxAtBottom) {
            allowPageScroll = true;
            console.log("MainScroll: Allowing DOWN (textbox at bottom)");
          }
        } else {
          allowPageScroll = true; // No textbox, allow normal scroll for section2
          console.log("MainScroll: Allowing (no textbox)");
        }

        if (!allowPageScroll) {
          console.log(
            `MainScroll: Preventing default scroll for section2. DeltaY: ${e.deltaY}`
          );
          e.preventDefault();
        }
      }
    };

    if (activeSection === "section2") {
      mainContainer.style.scrollSnapType = "none";
      mainContainer.addEventListener("wheel", handleMainScroll, {
        passive: false,
      });
      console.log("MainScroll: Listener ADDED for section2. Snap: none.");
    } else {
      mainContainer.style.scrollSnapType = "y mandatory";
      console.log(
        "MainScroll: Listener INACTIVE for non-section2. Snap: y mandatory."
      );
    }

    return () => {
      mainContainer.removeEventListener("wheel", handleMainScroll);
      mainContainer.style.scrollSnapType = "y mandatory";
      console.log("MainScroll: Listener REMOVED. Snap reset.");
    };
  }, [activeSection, chapter]);

  // Logic for the scrollable text box
  useEffect(() => {
    const textBox = textBoxRef.current;
    if (!textBox || chapter !== "ch2") return;

    const handleTextBoxWheel = (e) => {
      if (activeSection === "section2") {
        const { scrollTop, scrollHeight, clientHeight } = textBox;
        const isAtTop = scrollTop === 0;
        const isAtBottom =
          Math.ceil(scrollTop + clientHeight) >= scrollHeight - 2;

        // If scrolling up at the top of the text box, or scrolling down at the bottom,
        // let the event bubble to the mainContainer.
        if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
          console.log(
            "TextBox: Reached edge, allowing event to propagate to main container."
          );
          return;
        }

        // Otherwise, if scrolling within the text box, stop the event from bubbling
        // to prevent the mainContainer from scrolling.
        console.log("TextBox: Scrolling internally, stopping propagation.");
        e.stopPropagation();
      }
    };

    textBox.addEventListener("wheel", handleTextBoxWheel, { passive: false });
    return () => textBox.removeEventListener("wheel", handleTextBoxWheel);
  }, [activeSection, chapter]); // Added chapter dependency

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
      top: 20,
      left: 30,
    },
    {
      id: 1,
      name: t1("ch2.contents.3.2nd.title"), // img alt
      description: t1("ch2.contents.3.2nd.description"),
      img: "https://storage.googleapis.com/cmw-geoje-src/img/chap02_section02/zones_camps/zones_camp01.png", // img src
      position: "bottom-20 left-30",
    },
    {
      id: 2,
      name: t1("ch2.contents.3.3rd.title"), // img alt
      description: t1("ch2.contents.3.3rd.description"),
      img: "https://storage.googleapis.com/cmw-geoje-src/img/chap02_section02/zones_camps/reconstitution04.png", // img src
      position: "bottom-20 left-30",
    },
  ];

  switch (chapter) {
    case "ch1":
      return (
        <div id="ch1" className="mt-10 flex flex-col text-white gap-15">
          <div id="section1Container" ref={section1Ref} className="h-full">
            <Section1 vimeoId={1095028297} />
          </div>
          <div id="section2" className="flex flex-col relative h-[150vh]">
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
                <div className="font-bold text-right text-2xl">
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
          <div id="section3" className="relative my-10 py-5 h-screen">
            <h1 className="text-white-1 text-[175px]">WERNER</h1>
            <HorizontalScroller
              data={imgMockData}
              custom={`asepct-square`}
              size="md"
              isMarquee={true}
            />
            <h1 className="text-white-1 text-[175px] absolute right-0">
              BISCHOFF
            </h1>
            <div
              id="textContainer"
              className="font-body max-w-[425px] absolute bottom-0 left-10"
            >
              {t1("ch1.section3.contents")}
            </div>
          </div>
          <div id="section4Container" className="bg-white-1 px-10 py-10 m-0">
            <Section4 content={ch1s4} scrollTo={section1Ref} />
          </div>
        </div>
      );
    case "ch2":
      return (
        <div
          id="ch2"
          className="flex flex-col text-white gap-10 h-full overflow-y-scroll"
          ref={mainRef}
        >
          <div id="section1" ref={section1Ref}>
            <Section1 vimeoId={1095029681} />
          </div>
          <div
            id="section2"
            ref={section2Ref}
            className="flex flex-col relative h-screen"
          >
            <img
              src={C2S2}
              alt="background"
              className="w-full h-full object-cover"
            />

            <div
              ref={textBoxRef}
              className="scrollbar-hide z-5 absolute top-10 left-10 font-body max-w-[300px] h-[50%] max-h-[500px] overflow-y-auto first-letter:text-4xl first-letter:font-bold"
            >
              {ch2s2Texts.map((it, id) => (
                <div
                  id="textContainer"
                  className="my-5 tracking-widest"
                  key={id}
                >
                  {it}
                </div>
              ))}
            </div>
            <Button
              onClick={() => {
                section3Ref.current.scrollIntoView({ behavior: "smooth" });
              }}
              label="Next To 3 Section"
              custom={"absolute bottom-10 right-10"}
            />
          </div>
          <div id="section3" ref={section3Ref} className="relative h-full">
            <ol className="w-full px-10 flex absolute text-3xl top-10 justify-between">
              {ch3s3Images.map((it, id) => (
                <li
                  key={id}
                  onClick={() => setC3s3(id)}
                  className={`cursor-pointer font-body uppercase hover:font-bold text-white/70 ${
                    c3s3 === id && "font-bold text-white/100"
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
          <div
            id="section4"
            ref={section4Ref}
            className="bg-white-1 px-10 py-10 m-0"
          >
            <Section4 content={ch2s4} scrollTo={section1Ref} />
          </div>
        </div>
      );
    case "ch3":
      return (
        <div className="px-10 py-10 text-white">
          <div id="section1" className="h-screen">
            <Section1 vimeoId={1095030761} />
          </div>
          <div
            id="section2"
            className="h-screen flex flex-col justify-center items-center"
          >
            <h1 className="text-center w-[80%] text-[40px] uppercase">
              {t1("ch3.contents.2.part1")}
              <br />
              {t1("ch3.contents.2.part2")}
            </h1>
            <ButtonWithIcon
              label="Voir le témoignage"
              custom="uppercase"
              onClick={() => (window.location.href = "./witness")}
            />
          </div>
          <div
            id="section3"
            className="h-screen bg-[url(https://storage.googleapis.com/cmw-geoje-src/img/Square-danse_devant_la_statut_de_la_liberte.jpg)] bg-no-repeat bg-cover bg-black/50 bg-blend-multiply flex flex-col justify-center items-center text-center gap-17 tracking-[6%]"
          >
            <div>
              <h2 className="text-6xl uppercase">2023</h2>
              <p className="text-xl w-145">
                {t1("ch3.contents.3.description")}
              </p>
            </div>
            <div>
              <AudioBtn audioSrc="https://storage.googleapis.com/cmw-geoje-src/audios/Extract-%EA%B1%B0%EC%A0%9C%EB%8F%84%20%ED%8F%AC%EB%A1%9C%EC%88%98%EC%9A%A9%EC%86%8C%20%EB%B0%98%EA%B3%B5%ED%8F%AC%EB%A1%9C%20%EC%98%A4%EC%9D%80%EC%84%9C%20%ED%95%A0%EC%95%84%EB%B2%84%EC%A7%80%20%EC%9D%B4%EC%95%BC%EA%B8%B0.mp3" />
            </div>
            <div className="text-xl w-80 flex flex-col gap-3">
              <p>- {t1("ch3.contents.3.quote.part1")}</p>
              <p className="opacity-50">- {t1("ch3.contents.3.quote.part2")}</p>
              <p className="opacity-50">- {t1("ch3.contents.3.quote.part3")}</p>
            </div>
            <div className="w-full flex justify-end mr-80">
              <ButtonWithIcon
                label="Continuer la visite"
                onClick={() => (window.location.href = "/view/conclusion")}
              />
            </div>
          </div>
        </div>
      );
    case "witness":
      return (
        <div id="witness" className="text-white">
          <div id="section1">
            <DifferentPdv />
          </div>
          <div id="section"></div>
          <div id="section"></div>
          <div id="section"></div>
        </div>
      );
    case "conclusion":
      return (
        <div
          id="conclusion"
          className="px-10 py-10 text-white flex flex-col gap-10"
        >
          <div id="section1" className="w-full py-10 px-10">
            <div id="TextContainer" className="text-wrap">
              <h1 className="text-[50px] my-5">
                {t1("conclu.contents.subtitle")}
              </h1>
              <div className="font-body tracking-widest columns-2">
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
              <li>BOUREAU Pierre</li>
              <li>BONZON Thierry</li>
              <li>AUVRAY Mariette</li>
              <li>LÉVY Stéphane</li>
              <li>ZORNINGER Sylvain.</li>
            </ol>
          </div>
          <Button
            label={t2("returnToHome")}
            onClick={() => (window.location.href = "/")}
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
          <Button
            label={t2("returnToHome")}
            onClick={() => (window.location.href = "/")}
          />
        </div>
      );
  }
};

export default Content;
