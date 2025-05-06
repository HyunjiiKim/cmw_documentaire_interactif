import Button from "./Button";
import { ImageContainer, VideoContainer } from "./Container";

export const Trigger = ({
  isImg,
  isMultiple,
  src,
  alt,
  btnLabel,
  btnOnClick,
  size,
}) => {
  return (
    <div
      className={`relative cursor-pointer ${isMultiple ? "w-1/2" : "w-fit"}`}
      onClick={btnOnClick}
    >
      {isImg ? (
        <ImageContainer
          src={src}
          alt={alt}
          size={size}
          custom="grayscale-100 opacity-50 hover:opacity-100"
        />
      ) : (
        <VideoContainer
          src={src}
          alt={alt}
          size={size}
          custom="grayscale-100 opacity-50 hover:opacity-100"
        />
      )}
      <Button
        intent="secondary"
        size="medium"
        onClick={btnOnClick}
        label={btnLabel}
        custom="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

// Faire en sorte que le hover du bouton entraîne le hover de l'image/vidéo et vice-versa
