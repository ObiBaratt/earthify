import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    return (
      <nav>
        <div className='org'>Donanimal</div>
        <div className='navItems'>
            <NavLink
                to="/" end
                className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                Home
            </NavLink>
            {/* <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                About
            </NavLink> */}
            {/* <NavLink
                to="/charities"
                className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                Charities
            </NavLink> */}
            </div>
      </nav>
    );
  };

export default Navbar;
