import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer disabled:opacity-50 bg-primary-1 text-white font-body font-semibold uppercase text-xl hover:inset-shadow-sm hover:inset-shadow-black hover:text-shadow-sm/30 hover:text-shadow-black",
  {
    variants: {
      intent: {
        primary: "mt-[2.5em]",
        secondary: "",
        ghost: "bg-transparent text-primary-1",
      },
      size: {
        small: "px-3 py-1 text-sm",
        medium: "px-[30px] py-[10px] text-base",
        large: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

const Button = ({ intent, size, custom, label, onClick }) => {
  return (
    <button
      className={twMerge(buttonVariants({ intent, size }), custom)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export const InfoBtn = (color) => {
  return (
    <div className="group border-2 rounded-full border-secondary-1 aspect-square w-10 h-10 text-xs flex items-center text-center justify-center cursor-pointer relative hover:scale-120">
      <p className="text-secondary-1">i</p>
      <div className="hidden group-hover:block absolute top-5 right-5 bg-orange-200 p-10 rounded-sm">
        test
      </div>
    </div>
  );
};

export const SoundBtn = (color) => {
  const [isSilent, setIsSilent] = useState(false);
  // Need to find a way to useState(false) when the site first load, then if the user change the state it's kept this way until they change it again
  var sounds = document.getElementsByTagName("video");

  function handleSound() {
    if (isSilent == false) {
      setIsSilent(true);
      sounds.muted = true;
      console.log(sounds);
    } else {
      setIsSilent(false);
      sounds.muted = false;
      console.log(sounds);
    }
  }
  // Need to work on muting sounds- does not work yet

  return (
    <div className="cursor-pointer" onClick={handleSound}>
      <i
        className={`bi bi-${
          isSilent ? "volume-mute-fill" : "soundwave"
        } text-secondary-1 hover:scale-120 text-[40px] flex items-center text-center justify-center align-middle`}
      ></i>
    </div>
  );
};

export const ArrowBtn = ({ isLeft, color, onClick, custom }) => {
  const navigate = useNavigate();
  const navigateRef = useRef(navigate);
  // default onClick : return to the previous page
  const goBack = () => {
    navigateRef.current(-1);
  };

  return (
    <div
      className={`bg-${color} cursor-pointer aspect-squre w-40 ${custom}`}
      onClick={!onClick ? goBack : onClick}
    >
      <i
        className={`h1 bg-primary-1 px-[15px] py-[10px] border text-[20px] text-white hover:inset-shadow-sm hover:inset-shadow-black hover:text-shadow-sm/30 hover:text-shadow-black bi bi-chevron-${
          isLeft ? "left" : "right"
        }`}
      ></i>
    </div>
  );
};

export default Button;
