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

export const GalleryImg = ({ data, custom, size, category }) => {
  const filteredDataImg =
    category !== "none"
      ? data.filter((item) => item.category === category)
      : data;

  return (
    <>
      <div className="mt-10 mb-10 flex flex-row flex-wrap gap-5 h-90">
        {filteredDataImg.map((item) => (
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
    </>
  );
};

export const GalleryVid = ({ data, custom, size, category }) => {
  const filteredDataVid =
    category !== "none"
      ? data.filter((item) => item.category === category)
      : data;

  return (
    <div className="mt-10 mb-10 flex flex-row flex-wrap gap-4 h-65">
      {filteredDataVid.map((item) => (
        <VideoContainer
          key={item.id}
          src={item.src}
          alt={item.alt}
          size={size}
          custom={`${custom} shadow-md/25 flex-none`}
        />
      ))}
    </div>
  );
};

export default HorizontalScroller;
