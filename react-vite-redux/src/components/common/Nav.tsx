import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="py-5 bg-gray-100">
      <div className="w-1/2 flex justify-evenly">
        <NavLink
          className={(props) => (props.isActive ? 'text-orange-800' : '')}
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          to="/machines"
          className={(props) => (props.isActive ? 'text-orange-800' : '')}
        >
          SHOP
        </NavLink>
        <NavLink
          to="/about"
          className={(props) => (props.isActive ? 'text-orange-800' : '')}
        >
          ABOUT
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
