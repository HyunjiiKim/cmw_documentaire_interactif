import { ImageContainer } from "./Container";

const HorizontalScroller = ({ data }) => {
  return (
    <div className="z-20">
      <div className="bg-tertiary-1 w-180 h-50 absolute bottom-0 right-0"></div>
      <div className="flex overflow-x-scroll absolute bottom-13 right-0 gap-3 w-170 justify-start">
        {data.map((item) => (
          <ImageContainer
            key={item.id}
            src={item.src}
            alt={item.alt}
            intent="gallery"
            size="sm"
            border="none"
            custom={`${item.custom} shadow-md/25 flex-none`}
          />
        ))}
        <div className="hidden"></div>
      </div>
    </div>
  );
};

export default HorizontalScroller;
