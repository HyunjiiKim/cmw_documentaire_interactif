import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer disabled:opacity-50",
  {
    variants: {
      intent: {
        primary:
          "bg-primary-1 text-white font-body font-semibold uppercase text-[20px] mt-[18px] hover:inset-shadow-sm hover:inset-shadow-black hover:text-shadow-sm/30 hover:text-shadow-black",
        secondary: "bg-secondary-1 text-white",
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

export const InfoBtn = () => {
  return (
    <div className="group border-2 rounded-full border-white aspect-square w-10 h-10 text-xs flex items-center text-center justify-center cursor-pointer relative">
      <p className="text-white">i</p>
      <div className="hidden group-hover:block absolute top-5 right-5 bg-orange-200 p-10 rounded-sm">
        test
      </div>
    </div>
  );
};

export const SoundBtn = () => {
  return (
    <div className="cursor-pointer">
      <i className="bi bi-soundwave text-white hover:scale-120 text-[40px] flex items-center text-center justify-center align-middle"></i>
    </div>
  );
};

export const ArrowBtn = ({ isLeft, color, onClick, custom }) => {
  return (
    <div
      className={`bg-${color} cursor-pointer aspect-squre w-40 ${custom}`}
      onClick={onClick}
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
