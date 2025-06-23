import { ImageContainer, VideoContainer } from "./Container";

const HorizontalScroller = ({ data, custom, size, isMarquee = false }) => {
  return (
    <div className={`flex overflow-x-scroll gap-3 w-fit justify-start scrollbar-hide ${isMarquee && "animate-[marquee_40s_linear_infinite]"}`}>
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

export const GalleryImg = ({ data, custom, size }) => {
  return (
    <>
      <div className="mt-10 mb-10 flex flex-row flex-wrap gap-5">
        {data.map((item) => (
          <ImageContainer
            key={item.id}
            src={item.src}
            alt={item.alt}
            credit={item.credit}
            category={item.category}
            source={item.source}
            size={size}
            intent="gallery"
            border="none"
            custom={`${custom} shadow-md/25`}
            isClickable={true}
          />
        ))}
      </div>
    </>
  );
};

export const GalleryVid = ({ data, custom, size }) => {
  return (
    <div className="mt-10 mb-10 flex flex-row flex-wrap gap-4">
      {data.map((item, id) => (
        <VideoContainer
          key={id}
          src={item.src}
          alt={item.alt}
          credit={item.credit}
          category={item.category}
          source={item.source}
          size={size}
          custom={`${custom} shadow-md/25`}
        />
      ))}
    </div>
  );
};

export default HorizontalScroller;
