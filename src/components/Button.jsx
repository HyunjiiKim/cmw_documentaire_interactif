import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium cursor-pointer disabled:opacity-50",
  {
    variants: {
      intent: {
        primary: "bg-primary-1 text-white",
        secondary: "bg-secondary-1 text-white",
        ghost: "bg-transparent text-primary-1",
      },
      size: {
        small: "px-3 py-1 text-sm rounded",
        medium: "px-4 py-2 text-base rounded-md",
        large: "px-6 py-3 text-lg rounded-lg",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);


const Button = ({ intent, size, custom, label, ...rest }) => {
  return (
    <button
      {...rest}
      className={twMerge(buttonVariants({ intent, size }), custom)}
    >
      {label}
    </button>
  );
}


export const InfoBtn = () => {
    return(
        <div className="group border-2 rounded-full border-white aspect-square w-10 flex items-center text-center justify-center cursor-pointer relative">
            <p className="text-white">i</p>
            <div className="hidden group-hover:block absolute top-5 right-5 bg-orange-200 p-10 rounded-sm">
                test
            </div>
        </div>
    )
}

export const ArrowBtn = () => {
  return (
    <div className="cursor-pointer">
      <i className="bi bi-chevron-left text-white h1" />
    </div>
  );
};

export default Button;