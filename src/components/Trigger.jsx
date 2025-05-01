import Button from "./Button";
import { ImageContainer } from "./Container";

import mockImage from "../assets/img/presentation.jpg";

export const Trigger = ({ btnLabel, btnOnClick }) => {
  return (
    <div className="flex-col cursor-pointer">
      <ImageContainer
        src={mockImage}
        alt="Test pic"
        width="[500px]"
        height="[400px]"
      />
      <Button
        textColor="text-white"
        backgroundColor="bg-black"
        onClick={btnOnClick}
        label={btnLabel}
        custom="absolute"
      />
    </div>
  );
};
