import { SoundBtn } from "./Button";

export const Indicator = ({ label }) => {
  return (
    <>
      <div className="flex flex-col">
        <p className="font-body text-white uppercase -rotate-90 -translate-x-7 -translate-y-12 w-fit">
          {label}
        </p>
        <SoundBtn />
      </div>
      <hr className="text-white text-center w-60 -rotate-90 -translate-x-180" />
    </>
  );
};
