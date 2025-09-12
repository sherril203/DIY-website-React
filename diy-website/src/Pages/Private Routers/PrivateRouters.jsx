import React from "react";
import { Navigate } from "react-router";
import { Outlet } from "react-router";

const PrivateRouters = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/login"/>;
};

export default PrivateRouters;