import { Logo } from "../components/Logo";
import LanguageSwitch from "./Switch";

const Header = ({ withText }) => {
  return (
    <div
      id="header"
      className="z-50 w-full sticky flex pb-10 ml-auto mr-auto justify-between"
    >
      <Logo intent="secondary" size="medium" withText={withText} />
      <LanguageSwitch />
    </div>
  );
};

export default Header;
