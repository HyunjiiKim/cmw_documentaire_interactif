import { useTranslation } from "react-i18next";

import { Chronology } from "./ChapterContents/Chronology";
import HorizontalScroller from "./HorizontalScroller";
import { Section1 } from "./ChapterContents/Sections";
import { VimeoPlayer } from "./VideoPlayer";

const Content = ({ chapter }) => {

  const { t: t1 } = useTranslation("contents");

  const mockData = "Maecenas tristique nunc ut lectus mattis, vel lacinia nulla accumsan. Integer ac elit nec ligula porta fringilla in pulvinar urna. Etiam maximus urna at risus consectetur convallis. Sed gravida elit ipsum, sed tempus lorem cursus ut. Sed urna dui, eleifend sit amet augue sit amet, tincidunt ullamcorper dolor. Aenean vel eros est. Maecenas quis commodo elit, sed tristique nunc. Suspendisse malesuada at eros a mollis. Sed sodales pretium venenatis. In ut sem euismod, elementum turpis non, convallis lectus. Duis porttitor, purus sit amet tincidunt egestas, ipsum nulla dapibus orci, vel sollicitudin odio justo laoreet velit. Praesent a nibh gravida, auctor est quis, fermentum enim. Sed gravida mi dolor, eget facilisis nisi varius nec. Duis quis dictum ex, a finibus quam. Morbi non fermentum eros. Suspendisse non auctor dui. Quisque id felis a magna viverra malesuada. Phasellus porta ligula vel felis eleifend gravida. Sed mauris tortor, mollis sit amet pellentesque ut, condimentum in eros. Mauris erat magna, imperdiet at ligula non, eleifend hendrerit velit. Donec pharetra molestie arcu, ac dapibus purus aliquet ut. Donec nec sem nisi. In vitae nisl quam. In hac habitasse platea dictumst. Fusce ullamcorper metus erat, eu aliquet felis dapibus ut. Donec ipsum quam, pellentesque a dolor vel, viverra ornare elit. Duis sagittis, nulla id bibendum congue, lorem est ullamcorper erat, at mattis tortor neque non est. Fusce maximus, ante ac molestie rhoncus, mauris augue dapibus metus, sit amet tempus ipsum nulla at turpis. Nunc semper pulvinar magna vel bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin a purus velit. Maecenas auctor, nisl ut dictum placerat, ex enim egestas eros, ac ornare enim lorem in massa. Ut diam sem, tincidunt ac suscipit id, eleifend nec ante. Aenean sodales ultricies turpis ac fringilla. Phasellus ornare massa at felis cursus dapibus. Nunc nunc dui, dictum id lectus non, condimentum fermentum enim. Aliquam blandit arcu mauris, sed tempus augue vestibulum a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ultrices semper velit eget aliquet. Donec ut lorem mi. Quisque iaculis ex ut libero gravida rutrum. Vestibulum ultrices in lectus quis consequat. Morbi iaculis at justo at consectetur. Curabitur sodales sem sit amet est blandit convallis. Quisque sit amet eros malesuada, malesuada leo at, malesuada sem. Cras est lectus, iaculis in lobortis sit amet, varius in ligula. Vivamus eget erat finibus, maximus sem id, pulvinar lectus. Duis consectetur ipsum ut venenatis eleifend. Mauris suscipit turpis aliquet magna accumsan pulvinar. Praesent bibendum vitae nulla accumsan lacinia. Donec nisi ipsum, semper sit amet imperdiet vitae, auctor quis sem. Pellentesque at auctor velit, a mollis orci. In auctor, tellus sed viverra facilisis, augue dui mollis odio, nec scelerisque arcu ligula nec ante. Donec malesuada libero at enim bibendum euismod. Nam cursus lectus consectetur volutpat viverra. Etiam neque felis, dapibus eget orci vel, tristique sollicitudin mauris. Nunc purus massa, tristique ut mattis in, varius et elit. Etiam at aliquam sapien, non venenatis augue.";

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



  switch (chapter) {
    case "ch1":
      return (
        <div className="flex flex-col text-white gap-10">
          <Section1 vimeoId={1082043684} />
          <div id="section2" className="flex flex-col">
            <h1 className="text-primary-1 uppercase">geoje - 1951</h1>
            <Chronology />
          </div>
          <div id="section3" className="relative">
            <h1 className="text-white-1">WERNER</h1>
            <HorizontalScroller data={imgMockData} />
            <h1 className="text-white-1">BISCHOF</h1>
            <div id="textContainer" className="font-body max-w-[425px]">
              {t1("ch1.section3.contents")}
            </div>
          </div>
          <div id="section4" className="bg-white-1 px-10 py-10 m-0">
            <h1 className="text-black text-[50px] text-shadow-lg/20 text-shadow-black uppercase">Le travail de mémoire à Geoje</h1>
            <div id="pageContainer">
            </div>
          </div>
        </div>
      );
    case "ch2":
      return (
        <div className="flex flex-col text-white gap-10">
          <Section1 vimeoId={1082043684} />
          <div id="section2" className="flex flex-col">
            <h1 className="text-primary-1 uppercase">geoje - 1951</h1>
            <Chronology />
          </div>
          <div id="section3" className="relative">
            <h1 className="text-white-1">WERNER</h1>
            <HorizontalScroller data={imgMockData} />
            <h1 className="text-white-1">BISCHOF</h1>
            <div id="textContainer" className="font-body max-w-[425px]">
              {t1("ch1.section3.contents")}
            </div>
          </div>
          <div id="section4" className="bg-white-1 px-10 py-10 m-0">
            <h1 className="text-black text-[50px] text-shadow-lg/20 text-shadow-black uppercase">Le travail de mémoire à Geoje</h1>
            <div id="pageContainer">
            </div>
          </div>
        </div>
      );
    case "ch3":
      return (
        <div className="text-white">
          <Section1 vimeoId={1082043684} />
        </div>
      );
    case "conclusion":
      return (
        <div id="conclusion">
          <div id="section1" className="flex">
            <div id="textContainer">
              <h1>La trace d’un camp</h1>
 
            </div>
            <div id="vidoeContainer">
              <VimeoPlayer videoId="1082043684" width="w-[40%]" />
            </div>
          </div>
        </div>
      )
    default:
      return (
        <div id="pageNotFound">
          Page Not Found
        </div>
      );
  }
}

export default Content;