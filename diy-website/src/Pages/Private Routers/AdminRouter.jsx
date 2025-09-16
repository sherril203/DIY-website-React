import React from "react";
import { Navigate } from "react-router";
import { Outlet } from "react-router";

// const AdminRouter = () => {
//    const token = localStorage.getItem("token");
//   return token ? <Outlet /> : <Navigate to="/admin" />;

// };

// const AdminRouter = ({isSignedIn,children}) => {
//   //  const token = localStorage.getItem("token");
//   // return token ? <Outlet /> : <Navigate to="/adminlogin" />;
//   if (isSignedIn) {
//     return <Navigate to="/admin" replace />;
//   }
//   return children ? children : <Outlet />;

// };


const AdminRouter = ({ isSignedIn }) => {
  const token = localStorage.getItem("token"); 
  if (!isSignedIn && !token) {
    return <Navigate to="/adminlogin" replace />;
  }

  return <Outlet />;
};

export default AdminRouter;
