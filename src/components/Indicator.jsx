export const Indicator = ({ label }) => {
  return (
    <div>
      <div className="flex flex-wrap flex-col">
        <p className="font-body text-white uppercase -rotate-90 w-fit">
          {label}
        </p>
        <img src="../assets/icons/sound.png" className="h-5 w-fit" />
      </div>
      <hr className="text-white text-center w-50 my-5 -rotate-90" />
    </div>
  );
};
