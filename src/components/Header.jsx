import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import "./header.css";
import { FaRegUser } from "react-icons/fa";
const Header = () => {
  const { user, logout } = use(AuthContext);
  const handelLogout = () => {
    logout()
      .then(() => {
        toast("Logout successful");
      })
      .catch(() => {
        toast("Logout fail");
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm px-5 ">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary border-b-2 border-primary" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-subscription-boxes"
                className={({ isActive }) =>
                  isActive ? "text-primary border-b-2 border-primary" : ""
                }
              >
                Subscriptions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive ? "text-primary border-b-2 border-primary" : ""
                }
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? "text-primary border-b-2 border-primary" : ""
                }
              >
                Contact Us
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/my-subscriptions"
                  className={({ isActive }) =>
                    isActive ? "text-primary border-b-2 border-primary" : ""
                  }
                >
                  My subscriptions
                </NavLink>
              </li>
            )}
            {user ? (
              <button
                onClick={handelLogout}
                className="btn btn-soft btn-error me-2"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn me-2 bg-black text-white">
                Login
              </Link>
            )}
          </ul>
        </div>
        <Link
          to="/"
          className="text-xl font-extrabold tracking-wide flex items-center space-x-1"
        >
          <span className="text-primary">PetPaw</span>
          <span className="text-black">Joy</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary border-b-2 border-primary" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-subscription-boxes"
              className={({ isActive }) =>
                isActive ? "text-primary border-b-2 border-primary" : ""
              }
            >
              Subscriptions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? "text-primary border-b-2 border-primary" : ""
              }
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "text-primary border-b-2 border-primary" : ""
              }
            >
              Contact Us
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                to="/my-subscriptions"
                className={({ isActive }) =>
                  isActive ? "text-primary border-b-2 border-primary" : ""
                }
              >
                My subscriptions
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handelLogout}
            className="btn btn-soft btn-error me-2 md:flex hidden"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn me-2 bg-black text-white">
            Login
          </Link>
        )}
        {user ? (
          <div className="">
            <Link
              to="/user/profile"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user && user.photoURL ? (
                  <img
                    alt={user.displayName}
                    title={user.displayName}
                    src={user.photoURL}
                  />
                ) : (
                  <img alt="User" title="User photo" src="/fakeuser.png" />
                )}
              </div>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
