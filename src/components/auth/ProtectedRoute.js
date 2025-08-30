import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole) {
    if (requiredRole === "staff" && !["staff", "admin"].includes(user.role)) {
      return <Navigate to="/" replace />;
    }
    if (requiredRole === "admin" && user.role !== "admin") {
      return <Navigate to="/" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
