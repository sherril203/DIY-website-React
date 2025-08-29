import React, { useState } from "react";
import { Link } from "react-router"; 
import { FaCartShopping } from "react-icons/fa6";
import { TbHomeFilled } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuLogIn } from "react-icons/lu";
import { BiLogOut } from "react-icons/bi";

const Navigate = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-500 shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center p-4">
        <div className="font-extrabold text-white text-2xl">DIY Arts</div>
        <div className="hidden lg:block">
          <ul className="flex gap-6 text-lg font-medium text-white">
            <li className="hover:text-indigo-200 transition">
              <Link to="/home" className="flex gap-2 items-center"><TbHomeFilled /> Home</Link>
            </li>
            <li className="hover:text-indigo-200 transition">
              <Link to="/products" className="flex gap-2 items-center"><FaCartShopping /> Products</Link>
            </li>
            <li className="hover:text-indigo-200 transition">
              <Link to="/contact" className="flex gap-2 items-center"><IoIosCall /> Contact</Link>
            </li>
            <li className="hover:text-indigo-200 transition">Testimonial</li>
          </ul>
        </div>

        <div className="hidden lg:flex gap-2 items-center">
          <Link to="/login">
            <button className="text-white text-base font-semibold px-4 py-2 border border-white rounded-xl hover:bg-indigo-300 hover:text-fuchsia-800 transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="text-white text-base font-semibold px-4 py-2 border border-white rounded-xl hover:bg-indigo-300 hover:text-fuchsia-800 transition">
              Sign Up
            </button>
          </Link>
        </div>

        <button 
          onClick={() => setOpen(!open)} 
          className="lg:hidden p-2 rounded-xl bg-white/20 text-white hover:bg-white/30 transition"
        >
          {open ? <IoCloseOutline size={24} /> : <RxHamburgerMenu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-fuchsia-600/95 text-white px-4 py-6">
          <ul className="flex flex-col gap-4 text-lg">
            <li className="hover:text-indigo-200 transition">
              <Link to="/home" className="flex gap-2 items-center"><TbHomeFilled /> Home</Link>
            </li>
            <li className="hover:text-indigo-200 transition">
              <Link to="/products" className="flex gap-2 items-center"><FaCartShopping /> Products</Link>
            </li>
            <li className="hover:text-indigo-200 transition">
              <Link to="/contact" className="flex gap-2 items-center"><IoIosCall /> Contact</Link>
            </li>
            <li className="hover:text-indigo-200 transition">
               <Link  to="/testinomial" className="flex gap-2 items-center">Testimonial</Link></li>
            <li className="hover:text-indigo-200 transition"> 
              <Link to="/login" className="flex gap-2 items-center"> <LuLogIn/> Login</Link>
            </li>
            <li className="hover:text-indigo-200 transition">
              <Link to="/signup" className="flex gap-2 items-center"> <BiLogOut/>Sign Up</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigate;
