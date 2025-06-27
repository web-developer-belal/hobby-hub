import React, { useContext, useEffect, useState } from "react";
import { FaBoxOpen, FaUserCircle, FaUsers } from "react-icons/fa";
import CountUp from "react-countup";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [totalGroup, setTotalGroup] = useState(0);
  const [myGroup, setMyGroup] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `${import.meta.env.VITE_APP_BACKEND_URL}/dashboard/state?email=${
          user.email
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          setTotalGroup(data.totalGroups);
          setMyGroup(data.myGroups);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.error("Failed to fetch dashboard stats:", err);
        });
    }
  }, [user]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Link
        to="/groups"
        className="card bg-base-100 shadow-md p-4 flex flex-col items-center justify-center text-center"
      >
        <FaBoxOpen className="text-4xl text-primary mb-2" />
        <h3 className="text-lg font-semibold">Total Groups</h3>
        <p className="text-2xl font-bold text-primary">
          {loading ? <span className="text-xs">..Loading</span>: <CountUp end={totalGroup} duration={2} />}
        </p>
      </Link>
      
      <Link
        to="/dashboard/myGroups"
        className="card bg-base-100 shadow-md p-4 flex flex-col items-center justify-center text-center"
      >
        <FaUserCircle className="text-4xl text-secondary mb-2" />
        <h3 className="text-lg font-semibold">My Groups</h3>
        <p className="text-2xl font-bold text-secondary">
          {loading ? <span className="text-xs">..Loading</span> : <CountUp end={myGroup} duration={2} />}
        </p>
      </Link>
      <div className="card bg-base-100 shadow-md p-4 flex flex-col items-center justify-center text-center">
        <FaUsers className="text-4xl text-accent mb-2" />
        <h3 className="text-lg font-semibold">Logged-in User</h3>
        <p className="text-md font-medium text-base-content">
          {user?.displayName || "Unknown"}
        </p>
        <img
          src={user?.photoURL || "/fakeuser.avif"}
          alt="User Avatar"
          className="w-12 h-12 rounded-full mt-2"
        />
      </div>
    </div>
  );
};

export default Dashboard;
