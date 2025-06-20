import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";

import { Chronology } from "./ChapterContents/Chronology";
import HorizontalScroller from "./HorizontalScroller";
import { ClickImage, Section1, Section4 } from "./ChapterContents/Sections";
import { VimeoPlayer } from "./VideoPlayer";
import Button from "./Button";

import C1S2 from "/assets/img/ch1sec2.png";
import C1S3E1 from "/assets/img/marquee1.jpg";
import C1S3E2 from "/assets/img/marquee2.jpg";
import C1S3E3 from "/assets/img/marquee3.jpg";
import C1S3E4 from "/assets/img/marquee4.jpeg";
import C1S3E5 from "/assets/img/marquee5.jpeg";
import C1S3E6 from "/assets/img/marquee6.jpeg";
import C1S3E7 from "/assets/img/marquee7.jpeg";
import C1S3E8 from "/assets/img/marquee8.jpg";
import C1S3E9 from "/assets/img/marquee9.jpg";
import C1S3E10 from "/assets/img/marquee10.jpeg";
import C1S3E11 from "/assets/img/marquee11.jpeg";
import C2S2 from "/assets/img/ch2sec2.png";
import C2S3E1 from "/assets/img/zones_camp03.png";
import C2S3E2 from "/assets/img/zones_camp01.png";
import C2S3E3 from "/assets/img/reconstitution04.png";

const Content = ({ chapter }) => {

  const { t: t1 } = useTranslation("contents");

  const mockData = "Maecenas tristique nunc ut lectus mattis, vel lacinia nulla accumsan. Integer ac elit nec ligula porta fringilla in pulvinar urna. Etiam maximus urna at risus consectetur convallis. Sed gravida elit ipsum, sed tempus lorem cursus ut. Sed urna dui, eleifend sit amet augue sit amet, tincidunt ullamcorper dolor. Aenean vel eros est. Maecenas quis commodo elit, sed tristique nunc. Suspendisse malesuada at eros a mollis. Sed sodales pretium venenatis. In ut sem euismod, elementum turpis non, convallis lectus. Duis porttitor, purus sit amet tincidunt egestas, ipsum nulla dapibus orci, vel sollicitudin odio justo laoreet velit. Praesent a nibh gravida, auctor est quis, fermentum enim. Sed gravida mi dolor, eget facilisis nisi varius nec. Duis quis dictum ex, a finibus quam. Morbi non fermentum eros. Suspendisse non auctor dui. Quisque id felis a magna viverra malesuada. Phasellus porta ligula vel felis eleifend gravida. Sed mauris tortor, mollis sit amet pellentesque ut, condimentum in eros. Mauris erat magna, imperdiet at ligula non, eleifend hendrerit velit. Donec pharetra molestie arcu, ac dapibus purus aliquet ut. Donec nec sem nisi. In vitae nisl quam. In hac habitasse platea dictumst. Fusce ullamcorper metus erat, eu aliquet felis dapibus ut. Donec ipsum quam, pellentesque a dolor vel, viverra ornare elit. Duis sagittis, nulla id bibendum congue, lorem est ullamcorper erat, at mattis tortor neque non est. Fusce maximus, ante ac molestie rhoncus, mauris augue dapibus metus, sit amet tempus ipsum nulla at turpis. Nunc semper pulvinar magna vel bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin a purus velit. Maecenas auctor, nisl ut dictum placerat, ex enim egestas eros, ac ornare enim lorem in massa. Ut diam sem, tincidunt ac suscipit id, eleifend nec ante. Aenean sodales ultricies turpis ac fringilla. Phasellus ornare massa at felis cursus dapibus. Nunc nunc dui, dictum id lectus non, condimentum fermentum enim. Aliquam blandit arcu mauris, sed tempus augue vestibulum a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ultrices semper velit eget aliquet. Donec ut lorem mi. Quisque iaculis ex ut libero gravida rutrum. Vestibulum ultrices in lectus quis consequat. Morbi iaculis at justo at consectetur. Curabitur sodales sem sit amet est blandit convallis. Quisque sit amet eros malesuada, malesuada leo at, malesuada sem. Cras est lectus, iaculis in lobortis sit amet, varius in ligula. Vivamus eget erat finibus, maximus sem id, pulvinar lectus. Duis consectetur ipsum ut venenatis eleifend. Mauris suscipit turpis aliquet magna accumsan pulvinar. Praesent bibendum vitae nulla accumsan lacinia. Donec nisi ipsum, semper sit amet imperdiet vitae, auctor quis sem. Pellentesque at auctor velit, a mollis orci. In auctor, tellus sed viverra facilisis, augue dui mollis odio, nec scelerisque arcu ligula nec ante. Donec malesuada libero at enim bibendum euismod. Nam cursus lectus consectetur volutpat viverra. Etiam neque felis, dapibus eget orci vel, tristique sollicitudin mauris. Nunc purus massa, tristique ut mattis in, varius et elit. Etiam at aliquam sapien, non venenatis augue.";


  /**
   * Chapter 1 infos
   */

  const imgMockData = [
    {
      id: 0,
      src: C1S3E1,
      alt: "",
    },
    {
      id: 1,
      src: C1S3E2,
      alt: "",
    },
    {
      id: 2,
      src: C1S3E3,
      alt: "",
    },
    {
      id: 3,
      src: C1S3E4,
      alt: "",
    },
    {
      id: 4,
      src: C1S3E5,
      alt: "",
    },
    {
      id: 5,
      src: C1S3E6,
      alt: "",
    },
    {
      id: 6,
      src: C1S3E7,
      alt: "",
    },
    {
      id: 7,
      src: C1S3E8,
      alt: "",
    },
    {
      id: 8,
      src: C1S3E9,
      alt: "",
    },
    {
      id: 9,
      src: C1S3E10,
      alt: "",
    },
    {
      id: 10,
      src: C1S3E11,
      alt: "",
    },
  ];

  const ch1s4 = {
    title: t1("ch1.section4.title"),
    description: [
      t1("ch1.section4.description.1"),
      t1("ch1.section4.description.2"),
    ]
  }


  /**
   * Chapter 2 Triggers & Animations
   */

  const [activeSection, setActiveSection] = useState('');
  const mainRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const textBoxRef = useRef(null);

  // Observer for main sections
  useEffect(() => {
    const mainContainer = mainRef.current;
    if (!mainContainer || chapter !== 'ch2') {
      // If not chapter 2, or no main container, ensure activeSection is cleared if it was from a previous ch2 render
      if (activeSection) setActiveSection('')
      return;
    }

    const sections = [section1Ref, section2Ref, section3Ref, section4Ref];
    const observer = new IntersectionObserver((entries) => {
      let newActiveCandidate = null;
      let section2IsIntersecting = false;

      entries.forEach((entry) => {
        console.log(`Observer raw entry: id=${entry.target.id}, isIntersecting=${entry.isIntersecting}, ratio=${entry.intersectionRatio.toFixed(2)}`);
        if (entry.target.id === 'section2' && entry.isIntersecting) {
          section2IsIntersecting = true;
        }
        if (entry.isIntersecting) {
          if (!newActiveCandidate) newActiveCandidate = entry.target.id;
        }
      });

      if (section2IsIntersecting) {
        if (activeSection !== 'section2') {
          console.log("Observer: Setting activeSection to 'section2'");
          setActiveSection('section2');
        }
      } else if (newActiveCandidate) {
        // If section2 is not intersecting, but another is, set that one.
        if (activeSection !== newActiveCandidate && activeSection === 'section2') { // Only change if it was section2
          console.log(`Observer: Changing activeSection from 'section2' to '${newActiveCandidate}'`);
          setActiveSection(newActiveCandidate);
        } else if (!activeSection && newActiveCandidate) { // If active section was empty
          console.log(`Observer: Setting activeSection to '${newActiveCandidate}' (was empty)`);
          setActiveSection(newActiveCandidate);
        }
      } else {
        // No sections are intersecting at the threshold
        if (activeSection !== '') {
          console.log(`Observer: Clearing activeSection (was ${activeSection}) because nothing is intersecting`);
          setActiveSection('');
        }
      }
    }, { root: mainContainer, threshold: 0.5 }); // SUGGESTION: Lowered threshold to 0.5 for testing

    sections.forEach((s) => {
      if (s.current) {
        observer.observe(s.current);
      } else {
        console.warn(`Observer: Ref for a section is null. This might be expected if not all sections are rendered for this chapter.`);
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
    if (!mainContainer || chapter !== 'ch2') {
      if (mainContainer) mainContainer.style.scrollSnapType = 'y mandatory';
      return;
    }

    const handleMainScroll = (e) => {
      if (activeSection === 'section2') {
        const textBox = textBoxRef.current;
        let allowPageScroll = false;

        if (textBox && textBox.contains(e.target)) {
          // If the event target is within the textbox, the textbox listener should handle it first.
          // This listener (handleMainScroll) should only act if the event was not stopped by the textbox.
          console.log("MainScroll: Event originated in textbox, deferring unless propagated.");
          return;
        }

        // If event is not from textbox or textbox allowed propagation:
        if (textBox) {
          const { scrollTop, scrollHeight, clientHeight } = textBox;
          const isTextBoxAtTop = scrollTop <= 0; // Use <= 0 for top
          const isTextBoxAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 2;

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
          console.log(`MainScroll: Preventing default scroll for section2. DeltaY: ${e.deltaY}`);
          e.preventDefault();
        }
      }
    };

    if (activeSection === 'section2') {
      mainContainer.style.scrollSnapType = 'none';
      mainContainer.addEventListener('wheel', handleMainScroll, { passive: false });
      console.log("MainScroll: Listener ADDED for section2. Snap: none.");
    } else {
      mainContainer.style.scrollSnapType = 'y mandatory';
      console.log("MainScroll: Listener INACTIVE for non-section2. Snap: y mandatory.");
    }

    return () => {
      mainContainer.removeEventListener('wheel', handleMainScroll);
      mainContainer.style.scrollSnapType = 'y mandatory';
      console.log("MainScroll: Listener REMOVED. Snap reset.");
    };
  }, [activeSection, chapter]);

  // Logic for the scrollable text box
  useEffect(() => {
    const textBox = textBoxRef.current;
    if (!textBox || chapter !== 'ch2') return;

    const handleTextBoxWheel = (e) => {
      if (activeSection === 'section2') {
        const { scrollTop, scrollHeight, clientHeight } = textBox;
        const isAtTop = scrollTop === 0;
        const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 2;

        // If scrolling up at the top of the text box, or scrolling down at the bottom,
        // let the event bubble to the mainContainer.
        if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
          console.log("TextBox: Reached edge, allowing event to propagate to main container.");
          return;
        }

        // Otherwise, if scrolling within the text box, stop the event from bubbling
        // to prevent the mainContainer from scrolling.
        console.log("TextBox: Scrolling internally, stopping propagation.");
        e.stopPropagation();
      }
    };

    textBox.addEventListener('wheel', handleTextBoxWheel, { passive: false })
    return () => textBox.removeEventListener('wheel', handleTextBoxWheel);
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
    ]
  }


  /**
   * witness seciton 1 infos
   */

  // default pdv on section1 is null
  const [showPdv, setShowPdv] = useState(null);

  const witnessInfo = [
    {
      id: 'nk',
      btnLabel: 'north korean version',
      descripton: 'pdv of north korea. Hello'
    },
    {
      id: 'us',
      btnLabel: 'amerian version',
      descripton: 'pdv of the US. Hello'
    },
  ]

  /**
   * ch3 section 3 
   */

  const ch3s3Images = [
    {
      id: 0,
      name: t1("ch2.contents.3.el1.title"), // img alt
      img: C2S3E1, // img src
      description: t1("ch2.contents.3.el1.description"),
      position: "bottom-20 left-30",
    },
    {
      id: 1,
      name: t1("ch2.contents.3.el2.title"), // img alt
      img: C2S3E2, // img src
      description: t1("ch2.contents.3.el2.description"),
      position: "bottom-20 left-30",
    },
    {
      id: 2,
      name: t1("ch2.contents.3.el3.title"), // img alt
      img: C2S3E3, // img src
      description: t1("ch2.contents.3.el3.description"),
      position: "bottom-20 left-30",
    }
  ]

  switch (chapter) {
    case "ch1":
      return (
        <div id="ch1" className="mt-10 flex flex-col text-white gap-15">
          <div id="section1Container" className="h-full">
            <Section1 vimeoId={1082043684} />
          </div>
          <div id="section2" className="flex flex-col relative h-[150vh]">
            <img src={C1S2} alt="" className="z-0 absolute h-full max-w-[700px] w-[60%] left-1/2 -translate-x-1/2" />
            <div className="z-1">
              <div id="TextContainer" className="font-body tracking-widest max-w-[470px] ml-20 flex flex-col gap-10">
                <div className="font-bold text-right text-2xl">
                  {t1("ch1.section2.1")}
                </div>
                <div className="ml-10 text-lg">
                  {t1("ch1.section2.2")}
                </div>
                <div className="ml-10 text-lg">
                  {t1("ch1.section2.3")}
                </div>
              </div>
              <h1 className="w-full text-primary-1 uppercase text-[calc(max(1rem,(100vw-4rem)/6))]">geoje - 1951</h1>
              <div className="justify-self-center">
                <Chronology />
              </div>
            </div>
          </div>
          <div id="section3" className="relative my-10 py-5 h-screen">
            <h1 className="text-white-1 text-[175px]">WERNER</h1>
            <HorizontalScroller data={imgMockData} custom={`asepct-square`} size="md" isMarquee={true} />
            <h1 className="text-white-1 text-[175px] absolute right-0">BISCHOF</h1>
            <div id="textContainer" className="font-body max-w-[425px] absolute bottom-0 left-10">
              {t1("ch1.section3.contents")}
            </div>
          </div>
          <div id="section4Container">
            <Section4 content={ch1s4} />
          </div>
        </div>
      );
    case "ch2":
      return (
        <div id="ch2" className="flex flex-col text-white gap-10 h-full overflow-y-scroll" ref={mainRef}>
          <div id="section1" ref={section1Ref}>
            <Section1 vimeoId={"1082043684"} />
          </div>
          <div id="section2" ref={section2Ref} className="flex flex-col relative h-screen">
            <img src={C2S2} alt="background" className="w-full h-full object-cover" />

            <div
              ref={textBoxRef}
              className="scrollbar-hide z-5 absolute top-10 left-10 font-body max-w-[300px] h-[50%] max-h-[500px] overflow-y-auto first-letter:text-4xl first-letter:font-bold"
            >
              {ch2s2Texts.map((it, id) => (
                <div id="textContainer" className="my-5 tracking-widest" key={id}>
                  {it}
                </div>
              ))}
            </div>
            <Button
              onClick={() => { section3Ref.current.scrollIntoView({ behavior: 'smooth' }); }}
              label="Next To 3 Section"
              custom={"absolute bottom-10 right-10"}
            />
          </div>
          <div id="section3" ref={section3Ref} className="relative h-screen">
            {ch3s3Images[0] &&
              <ClickImage
                src={ch3s3Images[0].img}
                alt={ch3s3Images[0].name}
                position={ch3s3Images[0].position}
                description={ch3s3Images[0].description}
              />
            }
          </div>
          <div id="section4" ref={section4Ref} className="bg-white-1 px-10 py-10 m-0">
            <Section4 content={ch2s4} />
          </div>
        </div>
      );
    case "ch3":
      return (
        <div className="px-10 py-10 text-white">
          <div id="section1" className="h-screen">
            <Section1 vimeoId={1082043684} />
          </div>
          <div id="section2" className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-center w-[80%] text-[40px]">
              MAIS… RESSENTEZ-VOUS ENCORE CE QU’ILS ONT VÉCU ?<br />
              OU JUSTE CE QU’ON A VOULU VOUS MONTRER ?
            </h1>
            <Button label="voir le témoignage" custom="uppercase" onClick={() => window.location.href = "./witness"} />
          </div>
          <div id="section3" className="h-screen">
          </div>
        </div >
      );
    case "witness":
      return (
        <div id="witness" className="px-10 py-10 text-white">
          <div id="section1" className="h-screen flex flex-col mx-20 gap-5">
            <h1 className="text-7xl uppercase">qui écrit</h1>
            <div id="buttonGroup" className="flex flex-col self-center items-center">
              {witnessInfo.map((item) => (
                <Button label={item.btnLabel} key={item.id} />
              ))}
            </div>
            <h1 className="text-7xl uppercase self-end">l'histoire</h1>
          </div>
          <div id="section"></div>
          <div id="section"></div>
          <div id="section"></div>
        </div>
      );
    case "conclusion":
      return (
        <div id="conclusion" className="px-10 py-10 text-white">
          <div id="section1" className="w-full py-10 px-10">
            <div id="TextContainer" className="text-wrap">
              <h1 className="text-[50px]">La trace d’un camp</h1>
              <div className="font-body tracking-widest columns-2">
                <p>
                  Geoje fut plus qu’un camp. C’était un espace de tension, de survie, d’idéologie, de silence parfois. Un lieu où l’Histoire se croisait dans les gestes ordinaires : manger, obéir, attendre, chanter, croire, fuir.
                  Les murs ont disparu depuis longtemps, engloutis par le temps, les reconstructions et les nécessités d’oublier. Mais les récits, eux, restent. Fragmentés, contradictoires, souvent inconfortables — ils survivent dans les photos, les lettres, les silences des survivants.
                  Aujourd’hui, ce ne sont plus les barbelés qui enferment, mais les versions multiples de ce qui s’est vraiment passé. Chacun retient une image, une version, un détail.
                  <br />
                  Alors…
                  <br />
                  <strong>
                    Que reste-t-il d’un camp quand les murs tombent, mais que les mémoires restent divisées ?
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div id="section2">

          </div>
        </div>
      )
    default:
      return (
        <div id="pageNotFound" className="h-screen flex flex-col justify-center items-center text-white">
          Page Not Found
          <Button
            label="Back to Home"
            onClick={() => (window.location.href = "/")}
          />
        </div>
      );
  }
}

export default Content;