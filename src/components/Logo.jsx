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
        primary: "p-[15px]",
        secondary: "p-[7px] mr-[7px] h-fit",
        tertiary: "",
      },
      size: {
        medium: "text-[20px]",
        large: "absolute -top-12 -left-13 text-[40px]",
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

export const LogoSwitch = ({ type }) => {
  switch (type) {
    case "withText":
      return (
        <div>
          <div
            onClick={() => (window.location.href = "/")}
            className="cursor-pointer text-white border-1 border-white bg-primary-1 w-fit rotate-90"
          >
            기억
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p className="font-sans uppercase text-white">
                {t2("title.part1")}
              </p>
              <p className="font-sans uppercase text-primary-1">
                {t2("title.part2")}
              </p>
            </div>
            <p className="text-white font-body">
              L’héritage du camp de prisonniers de Geoje
            </p>
          </div>
        </div>
      );
    case "noText-md":
      return (
        <div
          onClick={() => (window.location.href = "/")}
          className="cursor-pointer text-white border-1 border-white bg-primary-1 w-fit rotate-90"
        >
          기억
        </div>
      );
    case "noText-lg":
      return (
        <div
          onClick={() => (window.location.href = "/")}
          className="cursor-pointer text-white border-1 border-white bg-primary-1 w-fit rotate-90 absolute -top-12 -left-13 text-[40px] p-[15px]"
        >
          기억
        </div>
      );
  }
};
