import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const { username, email, password, confirmPassword } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setValidationMessage("Passwords do not match");
      return;
    }

    // Password validation using regex
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
    if(!passwordRegex.test(password)) {
      setValidationMessage("Password must contain at least one uppercase letter, one lowercase letter, and one number");
      return;
    }
    
    // Username validation using regex and shouldn't be a number 
    const usernameRegex = /^(?![_0-9])([a-zA-Z0-9_]+)$/;
    if (!usernameRegex.test(username)) {
      setValidationMessage("Username must contain only letters");
      return;
    }
    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidationMessage("Email is not valid");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { username, email, password, confirmPassword });
      
      switch (res.status) {
        case 201:
          setResponseMessage(res.data.message);
          // Redirect to login page after successful registration
          window.location.href = '/login';
          break;
        case 400:
          setResponseMessage(res.data.message);
          break;
        default:
          setResponseMessage("An unexpected error occurred. Please try again later.");
      }
    } catch (error) {
      setResponseMessage(error.response.data);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-500 to-gray-700 min-h-screen flex justify-center items-center">
      <div className="w-2/6 bg-gray-200 p-8 rounded-sm border border-lime-400 shadow-2xl">
        <h2 className="text-3xl text-center font-bold mb-4 text-gray-800">CREATE AN ACCOUNT</h2>
       
        {responseMessage && <p className="text-red-500 text-xl p-1 rounded mb-4">{responseMessage}</p>}
        {validationMessage && <p className="text-red-600 mt-2 text-xl text-center p-1 rounded mb-4">{validationMessage}</p>}

        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <input type="text" placeholder="Username" name="username" value={username} onChange={onChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" name="email" value={email} onChange={onChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" minLength="6" required />
          </div>
          <div className="mb-4">
            <input type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={onChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" minLength="6" required />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline">Register</button>
       
        </form>
        

        <p className="text-center mt-4'P-1 text-lg">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
