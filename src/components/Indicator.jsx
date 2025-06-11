export const Indicator = ({ label }) => {
  return (
    <>
      <div className="flex flex-col">
        <p className="font-body text-white uppercase -rotate-90 -translate-x-7 -translate-y-12 w-fit">
          {label}
        </p>
        <img src="../assets/icons/sound.png" className="h-5 w-fit" />
      </div>
      <hr className="text-white text-center w-55 -rotate-90 -translate-x-175 -translate-y-2" />
    </>
  );
};
