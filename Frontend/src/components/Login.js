import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginRequest, loginSuccess, loginFailure } from "../Redux/Slice/authenticationActions";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // validate email and password
      if (!email || !password) {
        setErrorMessage("Please enter both email and password");
        return;
      }
      // Dispatch login request action
      dispatch(loginRequest());

      // login user
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Check response based on status code
      if (res.status === 200) {
        // Dispatch login success action
        dispatch(loginSuccess(res.data.token, res.data.role));
      } else {
        // Dispatch login failure action
        dispatch(loginFailure("An unexpected error occurred. Please try again later."));
      }
    } catch (error) {
      console.error(error.response.data);
      // Dispatch login failure action with error message
      dispatch(loginFailure(error.response.data.message || "An unexpected error occurred. Please try again later."));
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-500 to-gray-700 min-h-screen flex justify-center items-center">
      <div className="w-2/6 bg-gray-200 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              minLength="6"
              required
            />
          </div>

          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
