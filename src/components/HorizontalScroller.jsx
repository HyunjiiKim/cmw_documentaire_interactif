import { ImageContainer } from "./Container";

const HorizontalScroller = ({ data }) => {
  return (
      <div className="flex overflow-x-scroll gap-3 w-full justify-start">
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
      </div>
  );
};

export default HorizontalScroller;
