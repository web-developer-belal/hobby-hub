import React, { useContext } from "react";
import { Outlet, NavLink } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import {
  FaBoxOpen,
  FaClipboardList,
  FaPlusCircle,
  FaUserCircle,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { LuLogOut } from "react-icons/lu";

const UserLayout = () => {
  const { logout } = useContext(AuthContext);
  const handleLogout = (e) => {
    e.preventDefault()
    logout()
      .then(() => toast.success("Logout successful"))
      .catch(() => toast.error("Logout failed"));
  };
  return (
    <div className="min-h-screen bg-base-200 flex flex-col lg:flex-row py-25 md:max-w-6xl mx-auto ">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-base-100 p-4 shadow md:sticky top-0 z-40 rounded-md">
        <h2 className="text-xl font-bold mb-4 px-1">Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded hover:bg-primary hover:text-white transition ${
                isActive ? "font-bold bg-primary text-primary-content" : ""
              }`
            }
          >
            <FaClipboardList /> Overview
          </NavLink>

          <NavLink
            to="/dashboard/createGroup"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded hover:bg-primary hover:text-white transition ${
                isActive ? "font-bold bg-primary text-primary-content" : ""
              }`
            }
          >
            <FaPlusCircle />
            Create groups
          </NavLink>
          <NavLink
            to="/dashboard/myGroups"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded hover:bg-primary hover:text-white transition ${
                isActive ? "font-bold bg-primary text-primary-content" : ""
              }`
            }
          >
            <FaUserCircle /> My Groups
          </NavLink>
          <NavLink to="/logout"
            onClick={handleLogout}
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded hover:bg-primary hover:text-white transition ${
                isActive ? "font-bold bg-primary text-primary-content" : ""
              }`
            }
          >
            <LuLogOut></LuLogOut>
            Logout
          </NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
