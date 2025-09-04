import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const AdminLayout = () => {
  return (
    <div className="w-full h-screen">
      <Navbar/>
        <div className="w-[80%] h-[calc(100vh-80px)] fixed left-[20%] top-20 overflow-y-auto">
            <Outlet/>
            <Sidebar/>
        </div>
    </div>
  )
}

export default AdminLayout