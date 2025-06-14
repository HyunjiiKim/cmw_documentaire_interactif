import extractChars from "../utils/functions/extractCharacters.js";

import Content from "../components/Content.jsx";
import Footer from "../components/Footer.jsx";



const View = () => {

  return (
    <div id="view" className="flex flex-col ml-[120px]">
      <div id="contentContainer" className="my-8">
        <Content
          chapter={extractChars(location.pathname, 3)}
        />
      </div>
       <Footer />
    </div>
  );
};

export default View;
