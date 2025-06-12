import { useTranslation } from "react-i18next";
import { Chronology } from "./ChapterContents/Chronology";
import { VideoContainer, ImageContainer } from "./Container";

const Content = ({ chapter }) => {

  const { t: t1 } = useTranslation("contents");

  switch (chapter) {
    case "ch1":
      return (
        <div className="flex flex-col text-white gap-10">
          <div id="section1"></div>
          <div id="section2">
            <Chronology />
          </div>
          <div id="section3" className="relative">
            <h1 className="text-white-1">WERNER</h1>
            <h1 className="text-white-1">BISCHOF</h1>
            <div id="textContainer" className="font-body max-w-[425px]">
              {t1("ch1.section3.contents")}
            </div>
          </div>
          <div id="section4" className="bg-white-1">

          </div>
        </div>
      );
    case "ch2":
      return (
        <div className="text-white">
          <p>Chapter 2</p>
        </div>
      );
    case "ch3":
      return (
        <div className="text-white">
          <p>Chapter 3</p>
        </div>
      );
    default:
      return null;
  }
}

export default Content;
