import { Link } from "react-router-dom";

const Button = (props) => {
  const { children, to } = props;

  return (
    <Link
      to={to}
      className="font-lato bg-primary hover:bg-secondary px-4 py-2 rounded-full text-sm font-semibold"
    >
      {children}
    </Link>
  );
};

export default Button;
