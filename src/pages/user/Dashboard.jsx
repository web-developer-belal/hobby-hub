import React, { useContext } from 'react';
import { FaBoxOpen, FaUserCircle, FaUsers } from 'react-icons/fa';
import CountUp from 'react-countup';
import { AuthContext } from '../../context/AuthProvider';
const Dashboard = () => {
     const { user } = useContext(AuthContext);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card bg-base-100 shadow-md p-4 flex flex-col items-center justify-center text-center">
              <FaBoxOpen className="text-4xl text-primary mb-2" />
              <h3 className="text-lg font-semibold">Total Items</h3>
              <p className="text-2xl font-bold text-primary">
                <CountUp end={120} duration={2} />
              </p>
            </div>
            <div className="card bg-base-100 shadow-md p-4 flex flex-col items-center justify-center text-center">
              <FaUserCircle className="text-4xl text-secondary mb-2" />
              <h3 className="text-lg font-semibold">My Items</h3>
              <p className="text-2xl font-bold text-secondary">
                <CountUp end={10} duration={2} />
              </p>
            </div>
            <div className="card bg-base-100 shadow-md p-4 flex flex-col items-center justify-center text-center">
              <FaUsers className="text-4xl text-accent mb-2" />
              <h3 className="text-lg font-semibold">Logged-in User</h3>
              <p className="text-md font-medium text-base-content">
                {user?.displayName || 'Unknown'}
              </p>
              <img
                src={user?.photoURL || '/fakeuser.avif'}
                alt="User Avatar"
                className="w-12 h-12 rounded-full mt-2"
              />
            </div>
          </div>
    );
};

export default Dashboard;