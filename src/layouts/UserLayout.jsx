// src/layouts/UserLayout.jsx
import React, { useContext, useState, useEffect, useRef } from "react";
import { Outlet, NavLink } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import {
  FaClipboardList,
  FaPlusCircle,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { toast } from "react-toastify";

const UserLayout = () => {
  const { logout } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleLogout = (e) => {
    e.preventDefault();
    logout()
      .then(() => toast.success("Logout successful"))
      .catch(() => toast.error("Logout failed"));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen bg-base-200 flex flex-col lg:flex-row md:max-w-6xl mx-auto py-25">
      {/* Mobile Header */}
      <div className="flex justify-between items-center w-[95%] mx-auto rounded-md bg-base-100 p-4 mb-4 shadow lg:hidden">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <button
          className="lg:hidden cursor-pointer"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FaBars className="text-xl" />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`w-[85%] mt-20 md:mt-0 md:w-64 bg-base-100 p-4 shadow rounded-md lg:sticky top-0 z-40 transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-2" : "-translate-x-full lg:translate-x-0"
        } lg:block fixed h-full lg:h-auto overflow-y-auto`}
      >
        <h2 className="text-xl font-bold mb-4 px-1 hidden lg:block">Dashboard</h2>
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
            <FaPlusCircle /> Create Groups
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

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 p-2 rounded hover:bg-red-600 hover:text-white transition text-red-500"
          >
            <HiOutlineLogout className="text-xl" /> Logout
          </button>
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
