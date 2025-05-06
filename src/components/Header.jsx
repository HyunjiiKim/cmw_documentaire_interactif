import { Logo } from "../components/Logo";

const Header = ({ withText }) => {
  return (
    <div
      id="header"
      className="w-fit ml-auto mr-auto flex justify-between absolute top-15"
    >
      <Logo intent="secondary" size="medium" withText={withText} />
    </div>
  );
};

export default Header;
