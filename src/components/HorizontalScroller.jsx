import { ImageContainer } from "./Container";

const HorizontalScroller = ({ data, custom, size, isMarquee = false }) => {
  return (
    <div className="overflow-hidden w-full justify-start scrollbar-hide">
      <div className={isMarquee && "flex gap-3 animate-[marquee_20s_linear_infinite]"}>
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
    </div>
  );
};

export default HorizontalScroller;
