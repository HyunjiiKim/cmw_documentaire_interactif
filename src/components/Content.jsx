import { VideoContainer } from "./Container";

const Content = ({ chapter }) => {
  switch (chapter) {
    case "ch1":
      return (
        <div className="text-white">
          <p>Chapter 1</p>
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
