import { ImageContainer, VideoContainer } from "./Container";

const HorizontalScroller = ({ data, custom, size, isMarquee = false }) => {
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

export const GalleryImg = ({ data, custom, size }) => {
  return (
    <>
      <div className="mt-10 mb-10 flex flex-row flex-wrap gap-5">
        {data.map((item) => (
          <ImageContainer
            key={item.id}
            src={item.src}
            alt={item.alt}
            category={item.category}
            source={item.source}
            size={size}
            intent="gallery"
            border="none"
            custom={`${custom} shadow-md/25`}
          />
        ))}
      </div>
    </>
  );
};

export const GalleryVid = ({ data, custom, size }) => {
  return (
    <div className="mt-10 mb-10 flex flex-row flex-wrap gap-4">
      {data.map((item) => (
        <VideoContainer
          key={item.id}
          src={item.src}
          alt={item.alt}
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
