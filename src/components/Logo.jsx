// Rajouter les différentes variantes du logo, ici il n'y a seulement la version no-text-lg (page d'accueil),
// il manque la version noText-md et withText-md (présente sur 'Header').

import { useTranslation } from "react-i18next";

import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const logoVariants = cva(
  "cursor-pointer font-body text-white border-1 border-white bg-primary-1 rotate-90 w-fit",
  {
    variants: {
      intent: {
        primary: "p-[15px] text-shadow-lg",
        secondary: "p-[7px] mr-[7px] h-fit",
        tertiary: "p-[7px] mr-[7px] h-fit bg-transparent",
      },
      size: {
        medium: "text-[20px]",
        large: "text-[40px]",
      },
    },
    defaultVariants: {
      intent: "secondary",
      size: "medium",
    },
  }
);

export const Logo = ({ intent, size, withText }) => {
  const { t } = useTranslation("home");

  return (
    <div className={`flex items-center cursor-pointer`}>
      <div
        onClick={() => (window.location.href = "/")}
        className={twMerge(logoVariants({ intent, size }))}
      >
        기억
      </div>
      {withText ? (
        <div id="contextContainer">
          <div className="flex gap-1">
            <p className="text-white uppercase font-sans text-[25px]">
              {t("title.part1")}
            </p>
            <p className="text-primary-1 uppercase font-sans text-[25px]">
              {t("title.part2")}
            </p>
          </div>
          <p className="text-white font-body">{t("subtitle")}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
