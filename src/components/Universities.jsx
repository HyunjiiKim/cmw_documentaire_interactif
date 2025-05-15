import Dongeui from "/assets/img/logo_dongeui.svg";
import CMW from "/assets/img/logo_cmw.svg";

export const Universities = () => {
  return (
    <div className="flex items-center gap-4">
      <a href="https://eng.deu.ac.kr/eng/index.do" target="_blank">
        <img
          src={Dongeui}
          alt="Logo of Dong-Eui University"
          className="h-[90px] cursor-pointer hover:brightness-200"
        />
      </a>
      <a href="https://mastercmw.com" target="_blank">
        <img
          src={CMW}
          alt="Logo of CMW Master"
          className="h-[50px] cursor-pointer hover:brightness-200"
        />
      </a>
    </div>
  );
};

export default Universities;
