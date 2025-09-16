import React from "react";
import { Navigate } from "react-router";
import { Outlet } from "react-router";

// const PrivateRouters = ({ isSignedIn }) => {
//   const token = localStorage.getItem("token");
//   // // if token exists, allow access to nested routes
//   // return token ? <Outlet /> : <Navigate to="/login" />;
//     if (!isSignedIn && !token) {
//       return <Navigate to="/login" replace />;
//     }
  
//     return <Outlet />;
// };


const PrivateRouters = () => {
  const token = localStorage.getItem("userAuth"); // set on login

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};



export default PrivateRouters;