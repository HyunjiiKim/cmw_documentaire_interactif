import Content from "../components/Content.jsx";
import { TopNav } from "../components/NavBar";


const View = () => {

  // extract the end of path (3 characters from the end)
  function extractLastThreeChars(path){
    if(typeof path === 'string'){
      let pathLength=path.length;
      let extractedChars = path.slice(pathLength-3,pathLength);
      return extractedChars
    }
  }

  return (
    <div id="view" className="flex flex-col mt-10 ml-[120px]">
      <TopNav />
      <div id="contentContainer" className="my-8 px-4">
        <Content
          chapter={extractLastThreeChars(location.pathname)}
        />
      </div>
    </div>
  );
};

export default View;
