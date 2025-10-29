import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const PrivateRouters = () => {
  const token = localStorage.getItem('token'); // set on login

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};



export default PrivateRouters;