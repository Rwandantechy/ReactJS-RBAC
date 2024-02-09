import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SuperAdmin from "./components/SuperAdminDashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import Home from "./components/Index";
import ProtectedRoute from "./ProtectedRoute";
const App = () => {
  return (
    <Router>
      <div className="bg-black">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/s"
            element={
              <ProtectedRoute>
                <SuperAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/a"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/u" element={<UserDashboard/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
