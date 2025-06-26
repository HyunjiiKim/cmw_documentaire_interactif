import { SoundBtn } from "./Button";

export const Indicator = ({ label }) => {
  
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        <p className="font-body text-white uppercase -rotate-90 w-fit animate-[wavy_1s_linear_infinite">
          {label}
        </p>
        <SoundBtn />
      </div>
      <hr className="text-white text-center w-60 -rotate-90 -translate-x-210" />
    </>
  );
};
