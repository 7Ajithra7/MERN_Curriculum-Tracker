//import modules & Dependencies
import React from "react";
import { Navigate } from "react-router-dom";

//Protect routes access linited to login and role
const ProtectedRoute = ({ children, admin = false }) => {
  let isSignedIn = localStorage.getItem("token");

  if (admin) {
    let user = localStorage.getItem("user");
    let userObject = JSON.parse(user);
    if (userObject.role === "admin") return children;
    else return <Navigate to="/facultypanel" replace />;
  }

  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};

//Export Protected Rotes function
export default ProtectedRoute;
