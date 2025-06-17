import { ImageContainer } from "./Container";

const HorizontalScroller = ({ data, custom, size }) => {
  return (
      <div className="flex overflow-x-scroll gap-3 w-full justify-start scrollbar-hide">
        {data.map((item) => (
          <ImageContainer
            key={item.id}
            src={item.src}
            alt={item.alt}
            size={size}
            intent="gallery"
            border="none"
            custom={`${custom} shadow-md/25 flex-none`}
          />
        ))}
      </div>
  );
};

export default HorizontalScroller;
