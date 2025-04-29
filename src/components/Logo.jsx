export const Logo = () => {
  return (
    <>
      <h2
        onClick={() => (window.location.href = "")}
        className="cursor-pointer absolute -top-12 -left-13 bg-primary-1 text-white border-1 border-white text-[40px] p-[15px] w-fit rotate-90"
      >
        기억
      </h2>
    </>
  );
};
