import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="text-lg font-semibold">
          <Link to="/">MyApp</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-700"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-700"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-700"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;