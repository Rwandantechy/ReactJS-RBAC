import React from "react";
import {
  FaBars,
  FaBell,
  FaUser,
  FaHome,
  FaCog,
  FaShoppingCart,
  FaQuestionCircle,
} from "react-icons/fa";

const UserDashboard = () => {
  return (
    <div className="bg-gradient-to-b from-gray-500 to-gray-700 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 py-4 px-8 flex justify-between items-center">
        <div className="flex items-center">
          <FaBars className="text-white text-2xl mr-4 cursor-pointer" />
          <h1 className="text-white text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white px-4 py-2 rounded-md mr-4 focus:outline-none"
          />
          <FaBell className="text-white text-xl mr-4 cursor-pointer" />
          <FaUser className="text-white text-xl mr-4 cursor-pointer" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Left Section with Menu */}
        <div className="w-1/4 bg-gray-200 p-8">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <ul className="space-y-4">
            <MenuItem
              icon={<FaHome className="mr-2 text-blue-500" />}
              text="Home"
            />
            <MenuItem
              icon={<FaUser className="mr-2 text-blue-500" />}
              text="Profile"
            />
            <MenuItem
              icon={<FaCog className="mr-2 text-blue-500" />}
              text="Settings"
            />
            <MenuItem
              icon={<FaShoppingCart className="mr-2 text-blue-500" />}
              text="Orders"
            />
            <MenuItem
              icon={<FaQuestionCircle className="mr-2 text-blue-500" />}
              text="Support"
            />
          </ul>
        </div>

        {/* Right Section with Content */}

        <div className="w-full bg-gray-100 shadow-sm p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            User Dashboard
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <FaUser className="text-5xl mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Profile</h3>
              <p className="text-gray-700 text-center">
                View and update your profile information
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <FaCog className="text-5xl mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">Settings</h3>
              <p className="text-gray-700 text-center">
                Manage your account settings
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <FaShoppingCart className="text-5xl mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">Orders</h3>
              <p className="text-gray-700 text-center">
                View your past orders and track current ones
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <FaQuestionCircle className="text-5xl mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-700 text-center">
                Get help and support from our team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

const MenuItem = ({ icon, text }) => {
  return (
    <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
      {icon}
      <span className="text-lg font-semibold">{text}</span>
    </li>
  );
};

export default UserDashboard;
