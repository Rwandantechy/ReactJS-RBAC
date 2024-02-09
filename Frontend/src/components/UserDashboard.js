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

        <div className="w-full bg-gray-100  p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            User Dashboard
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <FaUser className="text-5xl mb-4 text-blue-500 p-2 rounded-full border border-gray-800 mt-3" />
              <h3 className="text-xl font-semibold mb-2">
                Innocent Niyonzima{" "}
              </h3>
              <p className="text-gray-700 text-justify text-900">
                Hi, I am Innocent Niyonzima and I am a Junior web developer
                mainly flexible working on backend with Node.js and Express.js,
                and also on the frontend with React.js. I am also familiar with
                MongoDB, Mongoose, and other technologies. I am also familiar
                with the deployment of web applications.
              </p>
              <div className="bg-gray-200 rounded-lg w-full shadow-md p-6 flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold mb-2">Contact me</h3>
                <a
                  href="https://www.linkedin.com/in/rwandan-techy-innocent/"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
                {/*  Github */}
                <a
                  href="www.github.com/rwandantechy"
                  className="text-blue-500 hover:underline"
                >
                  {" "}
                  Github
                </a>
                {/* Portfolio */}
                <a
                  href="https://innocent-niyonzima.vercel.app"
                  className="text-blue-500 hover:underline"
                >
                  {" "}
                  Portfolio
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <FaCog className="text-5xl mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">Skills </h3>
              <p className="text-gray-700 text-center text-lg">
                I have got skills in web development, software development, and
                Machine Learning , API Development, and deployment of web
                applications. I can work with Node.js, Express.js, React.js,
                MongoDB, Mongoose, and other technologies. I am also familiar
                with the deployment of web applications. Visit my Github account
                to see some of the projects I have worked on. I am very open to
                learning new technologies and working on new projects.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <FaShoppingCart className="text-5xl mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">Orders</h3>
              <p className="text-gray-700 text-center text-lg">
                Tell me any kind of project you have and I will be happy to work
                on it. first Notice my expertise and then we can discuss the
                project. I have developed some website and yes I am looking for
                the internship and the opportunity to work with you. Open-source
                projects also are welcome.
              </p>
            </div>
            <div className="bg-gradient-to-br h-full w-full from-gray-200 to-black relative p-9 rounded-lg shadow-md text-center flex flex-col items-center justify-center">
              <FaQuestionCircle className="text-6xl mb-6 text-purple-300" />
              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                Support
              </h3>
              <p className="text-sm text-gray-200 relative">
                If you want to support me, you can contact me via email:
                <span className="text-purple-100">
                  {" "}
                  niyinnocent2027@gmail.com
                </span>
                <br />
                or on WhatsApp:{" "}
                <span className="text-purple-400">+250789791255</span>
                <br />
                or institute email:{" "}
                <span className="text-purple-400">
                  innocent.niyonzima111213@marwadiuniversity.ac.in
                </span>
              </p>
            </div>
{/* button for viewing all users */}

            <div className="bg-gradient-to-br h-full w-full from-gray-200 to-black relative p-9 rounded-lg shadow-md text-center flex flex-col items-center justify-center">
              <FaQuestionCircle className="text-6xl mb-6 text-purple-300" />
              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                View All Users
              </h3>
              <p className="text-sm text-gray-200 relative">
                If you want to view all users, you can click the button below:
                <span className="text-purple-100">
                  {" "}
                  <a href="/users">View All Users</a>
                </span>
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
