export const ImageContainer = ({ src, alt, width, height }) => {
  return (
    <div
      className={`w-${width} h-${height} saturate-0 border-[2px] border-white`}
    >
      <img src={src} alt={alt} />
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
