import { Link, NavLink } from "react-router-dom";
import userContext from "../utils/userContext";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [isLogin, setIsLogin] = useState(false);

  const { loggedInUser } = useContext(userContext);
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
          <li>{loggedInUser}</li>
          <li>
            <Link to="/cart">CART - ({cartItems.length}) items</Link>
          </li>
          <button
            onClick={() => {
              setIsLogin(!isLogin);
            }}
            className="text-white bg-black p-2 cursor-pointer rounded-lg"
          >
            {isLogin ? "Logout" : "Login"}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
