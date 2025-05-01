export const ImageContainer = ({ src, alt, width, height, custom }) => {
  return (
    <div className={`w-${width} h-${height} border-[2px] border-white`}>
      <img src={src} alt={alt} className={`${custom}`} />
    </div>
  );
};

export const VideoContainer = ({ src, alt, width, height, custom }) => {
  const videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    video.addEventListener("mouseover", function () {
      this.play();
    });

    video.addEventListener("mouseout", function () {
      this.pause();
    });
  });

  return (
    <div className={`w-${width} h-${height} border-[2px] border-white`}>
      <video
        src={src}
        alt={alt}
        className={`w-${width} h-100 ${custom}`}
      ></video>
    </div>
  );
};

export const FlagContainer = ({ src, alt, onClick, isActive }) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={onClick}
        className={`w-10 h-10 rounded-full cursor-pointer border-2 border-[#d9d9d9] object-cover
         saturate-0 hover:saturate-100 ${isActive ? "saturate-100" : ""}`}
      />
    </>
  );
};
