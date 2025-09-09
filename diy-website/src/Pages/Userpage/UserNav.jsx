import React,{useState} from 'react'
import { Link } from "react-router"; 
import { FaCartShopping } from "react-icons/fa6";
import { TbHomeFilled } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiLogOut } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa6";
import { LuPackageCheck } from "react-icons/lu";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdOutlineFeed } from "react-icons/md";
const UserNav = () => {
 const [open, setOpen] = useState(false);
 
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
               <Link to="/homepage" className="flex gap-2 items-center"><TbHomeFilled /> Home</Link>
             </li>
             <li className="hover:text-indigo-200 transition">
               <Link to="/products" className="flex gap-2 items-center"><FaCartShopping /> Products</Link>
             </li>
             <li className="hover:text-indigo-200 transition">
               <Link to="/services" className="flex gap-2 items-center">< MdMiscellaneousServices /> Services</Link>
             </li>
             <li className="hover:text-indigo-200 transition">
               <Link to="/contact" className="flex gap-2 items-center"><IoIosCall /> Contact</Link>
             </li>
             <li className="hover:text-indigo-200 transition">
               <Link to="/testinomial" className="flex gap-2 items-center"><MdOutlineFeed />Testimonial</Link>
               </li>
           </ul>
         </div>
 
         <div className="hidden lg:flex gap-3 items-center">
           <Link to="/cart">
             <button className=" flex items-center gap-3 text-white text-l
              font-semibold px-4 py-2 border border-white rounded-xl
               hover:bg-white hover:text-fuchsia-800 transition">
               <FaCartArrowDown /> Cart
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
               <Link to="/homepage" className="flex gap-2 items-center"><TbHomeFilled /> Home</Link>
             </li>
             <li className="hover:text-indigo-200 transition">
               <Link to="/products" className="flex gap-2 items-center"><FaCartArrowDown />Added Cart</Link>
             </li>
             <li className="hover:text-indigo-200 transition">
               <Link to="/services" className="flex gap-2 items-center">< LuPackageCheck/>Orders</Link>
             </li>
             <li className="hover:text-indigo-200 transition"> 
               <Link to="/homepage" className="flex gap-2 items-center"> < BiLogOut /> Logout</Link>
             </li>
           </ul>
         </div>
       )}
     </div>
   );
}

export default UserNav