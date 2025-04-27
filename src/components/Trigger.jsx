import Button from "./Button";
import { ImageContainer } from "./Container";

import mockImage from "../assets/img/flag_UK.png";

export const Trigger = ({ btnLabel, btnOnClick }) => {
    return(
        <div className="flex-col w-120 relative cursor-pointer">
            <ImageContainer
                src={mockImage}
                alt="Test pic"
                width="40"
                height="30"
            />
            <Button
                textColor="text-white"
                backgroundColor="bg-black"
                onClick={btnOnClick}
                label={btnLabel}
                custom="absolute"
            />
        </div>
    )
}