import { Logo } from "../components/Logo";

const Header = ({ withText }) => {
  return (
    <div
      id="header"
      className="w-full mr-20 ml-29 flex justify-between mt-[60px]"
    >
      <Logo intent="secondary" size="medium" withText={withText} />
    </div>
  );
};

export default Header;
