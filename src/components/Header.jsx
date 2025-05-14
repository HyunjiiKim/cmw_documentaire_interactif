import { Logo } from "../components/Logo";
import LanguageSwitch from "./Switch";

const Header = ({ withText }) => {
  return (
    <div
      id="header"
      className="w-full px-[50px] mt-10 flex ml-auto mr-auto justify-between"
    >
      <Logo intent="secondary" size="medium" withText={withText} />
      <LanguageSwitch />
    </div>
  );
};

export default Header;
