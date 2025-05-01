import Button from "./Button";
import { ImageContainer } from "./Container";

export const Trigger = ({ btnLabel, btnOnClick, imgSrc }) => {
  return (
    <div className="flex-col cursor-pointer relative">
      <ImageContainer
        src={imgSrc}
        alt={btnLabel}
        width="[500px]"
        height="[400px]"
      />
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
