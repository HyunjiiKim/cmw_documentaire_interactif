import { substringAfter } from "../utils/functions/extractCharacters.js";

import Content from "../components/Content.jsx";
import Footer from "../components/Footer.jsx";

const View = () => {

  return (
    <div id="view" className="flex flex-col ml-[120px]">
      <div id="contentContainer" className="my-15">
        <Content
          chapter={substringAfter(location.pathname, "/view/")}
        />
      </div>
       <Footer />
    </div>
  );
};

export default View;
