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
      className={`relative cursor-pointer h-full ${
        isMultiple ? "w-1/2" : "w-fit"
      } shadow-md/25`}
      onClick={btnOnClick}
    >
      {isImg ? (
        <ImageContainer
          src={src}
          alt={alt}
          size={size}
          custom={`grayscale-100 ${
            isMultiple ? "opacity-50 hover:opacity-75" : "opacity-75"
          }`}
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

export const ReviewTrigger = ({content}) => {
  // content should be an object with properties
  if(typeof content === "object"){
    return(
      <div id="reviewTrigger" className="flex">
        <div id="TextContainer" className="flex flex-col">
        </div>
        <div id="imgContainer">
          <img src={img} alt={text.title} />
        </div>
      </div>
    )
  }
  return(
    console.error("Error: Content is not an onject")
  )
}