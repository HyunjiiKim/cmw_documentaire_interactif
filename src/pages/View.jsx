import { useParams } from "react-router-dom";

import Content from "../components/Content.jsx";
import Footer from "../components/Footer.jsx";

const View = ({ currentChapter }) => {

  const { id } = useParams();

  return (
    <div id="view" className="flex flex-col ml-[120px]">
      <div id="contentContainer" className="my-15">
        <Content chapter={id} />
      </div>
      <Footer />
    </div>
  );
};

export default View;
