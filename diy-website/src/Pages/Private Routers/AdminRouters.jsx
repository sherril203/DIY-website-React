import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AdminRouters = ({ children }) => {
    const location = useLocation();
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/adminlogin" />
    }
  else{
     return <>{children}</>
  }
};

export default AdminRouters;