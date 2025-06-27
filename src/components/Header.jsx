import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import "./header.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  // Navigation items
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/events", label: "Events" },
    { path: "/resources-tutorial", label: "Resources" },
    { path: "/groups", label: "All Groups" },
    { path: "/about-us", label: "About us" },
    { path: "/contact", label: "Contact" },
  ];

  const protectedNavItems = [{ path: "/dashboard", label: "Dashboard" }];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const handleLogout = () => {
    logout()
      .then(() => toast.success("Logout successful"))
      .catch(() => toast.error("Logout failed"));
  };

  // Render navigation links
  const renderNavLinks = (items) => {
    return items.map((item) => (
      <li key={item.path}>
        <NavLink className="custom-nav-link" to={item.path}>
          {item.label}
        </NavLink>
      </li>
    ));
  };

  return (
    <div className="navbar fixed top-2 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-base-100/30 shadow-md transition-all duration-300 w-[95%] max-w-[1500px] mx-auto rounded-box md:rounded-[50px] px-5 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {renderNavLinks(navItems)}
            {user && renderNavLinks(protectedNavItems)}
            {!user ? (
              <li>
                <Link to="/login">Login</Link>
              </li>
            ) : (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
        <Link
          to="/"
          className="text-xl font-extrabold tracking-wide flex items-center space-x-1"
        >
          <span className="text-primary">Hobby</span>
          <span className="text-base-content">Hub</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {renderNavLinks(navItems)}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {/* Theme Toggle */}
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            className="toggle theme-controller"
            onChange={handleThemeToggle}
            checked={theme === "dark"}
          />
        </label>

        <div className="hidden md:flex gap-2">
          {/* Auth Actions */}
          {!user ? (
            <Link
              to="/login"
              className="btn bg-primary border-0 rounded-full shadow-none px-5 text-white"
            >
              Login
            </Link>
          ) : (
            <>
              <button
                onClick={handleLogout}
                className="btn btn-error hidden md:flex border-0 rounded-full shadow-none px-5 text-white"
              >
                Logout
              </button>
              <Link
                to="/dashboard"
                className="avatar"
                data-tooltip-id="user-tooltip"
                data-tooltip-content={user.displayName}
              >
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={user.photoURL || "/fakeuser.avif"}
                    alt={user.displayName || "User"}
                  />
                  <Tooltip id="user-tooltip" place="bottom" />
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
