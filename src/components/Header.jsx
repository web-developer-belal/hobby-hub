import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

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

  return (
    <div className="navbar bg-base-100 shadow-sm px-5">
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
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/groups">All Groups</NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to="/createGroup">Create Group</NavLink>
                </li>
                <li>
                  <NavLink to="/myGroups">My Groups</NavLink>
                </li>
              </>
            )}
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
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/groups">All Groups</NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="/createGroup">Create Group</NavLink>
              </li>
              <li>
                <NavLink to="/myGroups">My Groups</NavLink>
              </li>
            </>
          )}
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
            <Link to="/login" className="btn bg-primary text-white">
              Login
            </Link>
          ) : (
            <>
              <button
                onClick={handleLogout}
                className="btn btn-error hidden md:flex"
              >
                Logout
              </button>
              <div
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
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
