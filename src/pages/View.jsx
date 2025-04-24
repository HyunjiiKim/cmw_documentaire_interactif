import HorizontalScroller from "../components/HorizontalScroller";
import { NavBar } from "../components/NavBar";

const View = () => {

      // mock data
      const contents = {
        intro: {
            title: t("intro.title"),
            para1: t("intro.para1"),
            para2: t("intro.para2"),
            img:[
                {
                    src: "https://picsum.photos/200/400",
                    alt: "Image 1 of intro"
                },
                {
                    src: "https://picsum.photos/160/200",
                    alt: "Image 2 of intro"
                }
            ]
        },
        ch1: {
            title: t("ch1.title"),
            para1: t("ch1.para1"),
            para2: t("ch1.para2"),
            img:[
                {
                    src: "https://picsum.photos/400/300",
                    alt: "Image 1 of ch1"
                },
                {
                    src: "https://picsum.photos/160/280",
                    alt: "Image 2 of ch1"
                }
            ]
        }
    };

    // contentHandler: Switch Contents 


  return (
    <div id="view">
      <NavBar whichPage={contents.name} />
      <div className="flex justify-between items-center gap-20">
        <HorizontalScroller data={contents.img} />
        <div>
          <h1>{contents.title}</h1>
          <div>
            <p>{contents.para1}</p>
            <p>{contents.para2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;