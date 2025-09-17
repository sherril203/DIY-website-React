import React from 'react'
import { Link } from 'react-router';
import { BiLogOut } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
const Navbar = () => {
  return (
    //  <nav className="w-full h-20 fixed left-[20%] top-0 right-0 p-5 bg-fuchsia-200 flex gap-3">
    //   <Link to="/login">
    //     <button className="text-white text-base font-semibold px-4 py-2 border flex gap-2 items-center
    //      border-white rounded-xl hover:bg-white hover:text-fuchsia-800 transition">
    //        <BiLogOut/> Logout</button>
    //   </Link>
    //   <Link to="/login"
    //     className="text-white text-base font-semibold px-4 py-2  flex gap-2 items-center
    //       rounded-xl hover:bg-white hover:text-fuchsia-800 transition">
    //        <MdAccountCircle size={40}/> 
    //   </Link>
    // </nav>
    <nav className="w-full h-20 fixed left-[20%] top-0 right-0 p-5 bg-fuchsia-200 flex items-center">
      
      {/* Right-side buttons */}
      <div className="flex gap-3 ml-320 items-center">
        {/* Logout Button */}
        <Link to="/adminlogin">
          <button className="text-white text-base font-semibold px-4 py-2 border flex gap-2 items-center
            border-white rounded-xl hover:bg-white hover:text-fuchsia-800 transition"
             onClick={()=>localStorage.removeItem("token")}>
            <BiLogOut size={20} /> Logout
          </button>
        </Link>

        {/* Profile Icon */}
        <Link to="/admin/profile"
          className="text-white text-base font-semibold px-4 py-2 flex gap-2 items-center
            rounded-xl hover:bg-white hover:text-fuchsia-800 transition">
          <MdAccountCircle size={36} />
        </Link>
      </div>

    </nav>
  );
}

export default Navbar