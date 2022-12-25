import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/profile"> Profile </Link>
      <Link to="/about"> About </Link>
      <Link to="/contact"> Contact </Link>
      <Link to="/learning_section"> Learning Section </Link>
      <Link to="/form"> Form </Link>
    </div>
  );
};

export default Navbar;
