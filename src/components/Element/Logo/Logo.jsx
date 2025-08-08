import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" href="#" className="flex items-center space-x-2">
      <img
        src="../../assets/LogoMKA.svg"
        alt="Logo"
        className="ml-2 h-10 hidden xs:block"
      />
    </Link>
  );
};

export default Logo;
