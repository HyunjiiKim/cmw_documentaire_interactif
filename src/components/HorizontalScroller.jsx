import { ImageContainer } from "./Container";

const HorizontalScroller = ({ data }) => {
  return (
    <div className="z-20 flex bg-black overflow-x-scroll size-full">
      {data.map((item) => (
        <ImageContainer key={item.id} src={item.src} alt={item.alt} size="sm" />
      ))}
    </div>
  );
};

export default HorizontalScroller;
