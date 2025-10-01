import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="p-6">Loading...</div>;

  if (!user) {
    // redirect to login, but save the path they tried to visit
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
