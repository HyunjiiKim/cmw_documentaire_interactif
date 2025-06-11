import { Logo } from "../components/Logo";
import { SoundBtn } from "./Button";
import LanguageSwitch from "./Switch";

const Header = ({ withText }) => {
  return (
    <div id="header" className="z-50 h-full sticky">
      <div className="h-full flex flex-col pb-10 ml-auto mr-auto justify-between">
        <div className="flex -rotate-90 w-fit">
          <p className="text-white">mémoires.</p>
          <p className="text-primary-1">captives</p>
        </div>
        <Logo intent="tertiary" size="medium" />
        <div className="flex flex-col">
          <LanguageSwitch />
          <SoundBtn />
        </div>
      </div>
      <hr className="text-white w-sm -rotate-90" />
    </div>
  );
};

export default Header;
