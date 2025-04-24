export const ImageContainer = ({ src, alt }) => {
  return (
    <>
      <img src={src} alt={alt} className="size-full h-auto" />
    </>
  );
};

export const FlagContainer = ({ src, alt }) => {
  return (
    <>
      <img src={src} alt={alt} className="" />
    </>
  );
};
