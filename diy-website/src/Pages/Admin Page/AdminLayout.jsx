import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const AdminLayout = () => {
  const location = useLocation();

  const isAdminHome = location.pathname === '/admin';

  return (
    <div className="w-full h-screen flex">
      <Sidebar />

      <div className="flex-1 h-full flex flex-col">
        <Navbar />
        <div className="p-4 overflow-y-auto h-[calc(100vh-80px)]">
          {isAdminHome && (
            <h2 className="text-3xl font-bold mt-22 mx-100">Hi Admin!</h2>
          )}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
