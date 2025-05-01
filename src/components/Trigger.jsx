import Button from "./Button";
import { ImageContainer, VideoContainer } from "./Container";

export const Trigger = ({ isImg, src, alt, btnLabel, btnOnClick }) => {
  return (
    <div className="relative flex flex-col cursor-pointer">
      {
        (isImg = "true" ? (
          <ImageContainer
            src={src}
            alt={alt}
            width="lg"
            height="auto"
            custom="grayscale-100 opacity-50 hover:opacity-100"
          />
        ) : (
          <VideoContainer
            src={src}
            alt={alt}
            width="lg"
            height="auto"
            custom="grayscale-100 opacity-50 hover:opacity-100"
          />
        ))
      }
      <Button
        textColor="text-white"
        backgroundColor="bg-black"
        onClick={btnOnClick}
        label={btnLabel}
        custom="absolute translate-x-full"
      />
    </div>
  );
};
