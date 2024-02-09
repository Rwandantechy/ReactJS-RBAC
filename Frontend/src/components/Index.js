import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-500 to-gray-700 min-h-screen flex justify-center items-center">
      <div className="max-w-xl bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
          A Role-Based  Authorization system(RBAC) using React, Node, Express, and MongoDB.
        </h1>
        
        <p className="text-2xl mt-5 p-4 lowercase lg:text-3xl text-gray-700 mb-4">
          SIGN UP AND LOGIN TO GET STARTED AND EXPLORE THE SYSTEM FEATURES.
        </p>
        <div className="flex justify-center">
          
          <a
            href="/register"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline"
          >Register Now</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
