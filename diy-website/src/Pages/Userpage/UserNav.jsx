import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router"; 
import { FaCartShopping, FaCartArrowDown } from "react-icons/fa6";
import { TbHomeFilled } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiLogOut } from "react-icons/bi";
import { LuPackageCheck } from "react-icons/lu";
import { MdMiscellaneousServices, MdOutlineFeed, MdAccountCircle } from "react-icons/md";
import logo from '../../assets/logo.png';
import { CartContext } from '../Cart/CartContext';

const UserNav = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate(); 

  const handleSelect = (e) => {
    const path = e.target.value;
    if (path && path !== "") {
      navigate(path);
    }
  };
  return (
    <div className="fixed top-0 w-full z-30 bg-gradient-to-r from-fuchsia-600 to-pink-500 shadow-lg">
      <nav className="flex justify-between items-center p-4">

        <div className="font-extrabold text-white text-2xl flex items-center">
          <img src={logo} alt="Arts Worlds Logo" width="50" className="mr-2" />
          Arts Worlds
        </div>

        <div className="hidden lg:block">
          <ul className="flex gap-6 text-lg font-medium text-white">
            <li className="hover:text-indigo-200 transition">
              <Link to="/homepage" className="flex gap-2 items-center">
                <TbHomeFilled /> Home
              </Link>
            </li>
            <li className="hover:text-indigo-200 transition">
              <Link to="/products" className="flex gap-2 items-center">
                <FaCartShopping /> Products
              </Link>
            </li>
            <li className="hover:text-indigo-200 transition">
              <Link to="/services" className="flex gap-2 items-center">
                <MdMiscellaneousServices /> Services
              </Link>
            </li>
            <li className="hover:text-indigo-200 transition">
              <Link to="/contact" className="flex gap-2 items-center">
                <IoIosCall /> Contact
              </Link>
            </li>
            <li className="hover:text-indigo-200 transition">
              <Link to="/testinomial" className="flex gap-2 items-center">
                <MdOutlineFeed /> Testimonial
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex gap-3 items-center">
          <div className="relative">
            <Link
              to="/user/cart"
              className="flex items-center gap-2 text-white text-lg font-semibold 
                px-4 py-2 border border-white rounded-xl hover:bg-white hover:text-fuchsia-800 transition"
            >
              <FaCartArrowDown className="text-xl" /> Cart
            </Link>
            <div className="bg-fuchsia-600 text-white top-0 right-0 text-center
              pl-0.6 w-6 h-6 absolute rounded-full text-[15px]">
              {cart.length}
            </div>
          </div>

         
          <div className="relative">
            <select
              onChange={handleSelect}
              className="bg-transparent text-white text-lg font-semibold 
                px-4 py-2 border border-white rounded-xl hover:bg-white hover:text-fuchsia-800 transition cursor-pointer"
            >
              <option value="" hidden>Profile</option>
              <option value="/user/profile"> Profile</option>
              <option value="/user/orders"> Orders</option>
              <option value="/login"> Logout</option>
            </select>
          </div>
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
              <Link to="/user/profile" className="flex gap-2 items-center">
                <MdAccountCircle /> Profile
              </Link>
            </li>
            <li className="hover:text-indigo-200 transition">
              <Link to="/user/cart" className="flex gap-2 items-center">
                <FaCartArrowDown /> Cart
              </Link>
            </li>
            <li className="hover:text-indigo-200 transition">
              <Link to="/user/orders" className="flex gap-2 items-center">
                <LuPackageCheck /> Orders
              </Link>
            </li>
            <li className="hover:text-indigo-200 transition">
              <Link to="/homepage" className="flex gap-2 items-center">
                <BiLogOut /> Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserNav;
