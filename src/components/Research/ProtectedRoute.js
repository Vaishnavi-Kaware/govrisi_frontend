import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Check if user is authenticated
const ProtectedRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/SignIn" />;
};

export default ProtectedRoute;