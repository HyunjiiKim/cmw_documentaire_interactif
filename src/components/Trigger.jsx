import Button from "./Button";
import { ImageContainer, VideoContainer } from "./Container";

export const Trigger = ({ isImg, src, alt, btnLabel, btnOnClick }) => {
  return (
    <div className="relative flex items-center justify-center cursor-pointer">
      {isImg ? (
        <ImageContainer
          src={src}
          alt={alt}
          custom="grayscale-100 opacity-50 hover:opacity-100"
        />
      ) : (
        <VideoContainer
          src={src}
          alt={alt}
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
