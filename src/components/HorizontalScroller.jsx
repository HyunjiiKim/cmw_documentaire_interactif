import { ImageContainer } from "./Container";

const HorizontalScroller = ({ data }) => {
  return (
    <div className="flex bg-black overflow-x-scroll w-xs h-xs">
      {data.map((item) => (
        <ImageContainer key={item.id} src={item.src} alt={item.alt} />
      ))}
    </div>
  );
};

export default HorizontalScroller;
