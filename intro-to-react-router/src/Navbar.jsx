import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/profile"> Profile </Link>
      <Link to="/about"> About </Link>
      <Link to="/contact"> Contact </Link>
      <Link to="/project"> Projects </Link>
      <Link to="/form"> Form </Link>
    </div>
  );
};

export default Navbar;
