// // src/components/Navbar.js

// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaCartShopping, FaCartArrowDown } from "react-icons/fa6";
// import { TbHomeFilled } from "react-icons/tb";
// import { IoIosCall } from "react-icons/io";
// import { IoCloseOutline } from "react-icons/io5";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { BiLogOut } from "react-icons/bi";
// import { LuLogIn } from "react-icons/lu";
// import { LuPackageCheck } from "react-icons/lu";
// import { MdMiscellaneousServices, MdOutlineFeed, MdAccountCircle } from "react-icons/md";
// import logo from "../assets/logo.png";
// import { CartContext } from '../Pages/Cart/CartContext';



// const Navbar = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const { cart } = useContext(CartContext);
//     const [open, setOpen] = useState(false);
//     const navigate = useNavigate();

//     // On mount: check login status
//     useEffect(() => {
//         const user = JSON.parse(localStorage.getItem("user"));
//         setIsLoggedIn(!!user);
//     }, []);

//     // Sync login status across tabs
//     useEffect(() => {
//         const handleStorageChange = () => {
//             const user = JSON.parse(localStorage.getItem("user"));
//             setIsLoggedIn(!!user);
//         };

//         window.addEventListener("storage", handleStorageChange);
//         return () => window.removeEventListener("storage", handleStorageChange);
//     }, []);

//     // Handle logout
//     const handleLogout = () => {
//         localStorage.removeItem("user");
//         setIsLoggedIn(false);
//         navigate("/login");
//     };

//     // Handle profile dropdown select
//     const handleSelect = (e) => {
//         const path = e.target.value;
//         if (path) {
//             if (path === "/logout") {
//                 handleLogout();
//             } else {
//                 navigate(path);
//             }
//         }
//     };

//     return (
//         <div className="fixed top-0 w-full z-30 bg-stone-100 shadow-lg">
//             <nav className="flex justify-between items-center p-4">
//                 {/* Logo + Site Name */}
//                 <div className="font-extrabold text-stone-700 text-2xl flex items-center">
//                     <img src={logo} alt="Arts World Logo" width="50" className="mr-2" />
//                     <Link to="/">Arts World</Link>
//                 </div>

//                 {/* Main Links - Desktop */}
//                 <div className="hidden lg:block">
//                     <ul className="flex gap-6 text-lg font-medium text-stone-700">
//                         <li className="hover:text-stone-500 transition">
//                             <Link to="/" className="flex gap-2 items-center">
//                                 <TbHomeFilled /> Home
//                             </Link>
//                         </li>
//                         <li className="hover:text-stone-500 transition">
//                             <Link to="/products" className="flex gap-2 items-center">
//                                 <FaCartShopping /> Products
//                             </Link>
//                         </li>
//                         <li className="hover:text-stone-500 transition">
//                             <Link to="/services" className="flex gap-2 items-center">
//                                 <MdMiscellaneousServices /> Services
//                             </Link>
//                         </li>
//                         <li className="hover:text-stone-500 transition">
//                             <Link to="/contact" className="flex gap-2 items-center">
//                                 <IoIosCall /> Contact
//                             </Link>
//                         </li>
//                         <li className="hover:text-stone-500 transition">
//                             <Link to="/testinomial" className="flex gap-2 items-center">
//                                 <MdOutlineFeed /> Testimonial
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Right Side - Desktop */}
//                 <div className="hidden lg:flex gap-3 items-center">
//                     {isLoggedIn ? (
//                         <>
//                             {/* Cart */}
//                             <div className="relative">
//                                 <Link
//                                     to="/user/cart"
//                                     className="flex items-center gap-2 text-stone-700 text-lg font-semibold 
//                                px-4 py-2 border border-white rounded-xl hover:bg-stone-500 hover:text-white transition"
//                                 >
//                                     <FaCartArrowDown className="text-xl" /> Cart
//                                 </Link>
//                                 <div className="bg-stone-500 text-white top-0 right-0 text-center
//                              pl-0.6 w-6 h-6 absolute rounded-full text-[15px]">
//                                     {cart.length}
//                                 </div>
//                             </div>


//                             <div className="relative">
//                                 <select
//                                     onChange={handleSelect}
//                                     className="bg-transparent  text-lg font-semibold text-stone-700  
//                                px-4 py-2 border border-white rounded-xl hover:bg-stone-500 hover:text-white transition cursor-pointer"
//                                 >
//                                     <option value="" hidden className='text-stone-700'>Profile</option>
//                                     <option value="/user/profile" className='text-stone-700'> Profile</option>
//                                     <option value="/user/orders" className='text-stone-700'> Orders</option>
//                                     <option value="/login" className='text-stone-700'> Logout</option>
//                                 </select>
//                             </div>
//                         </>
//                     ) : (
//                         <Link to="/login">
//                             <button className="text-stone-700 text-base font-semibold px-4 py-2 border
//                 border-black rounded-xl hover:bg-stone-500 hover:text-white transition">
//                                 <LuLogIn className="inline-block mr-2" /> Login
//                             </button>
//                         </Link>
//                     )}
//                 </div>

//                 {/* Hamburger menu button - Mobile */}
//                 <button
//                     onClick={() => setOpen(!open)}
//                     className="lg:hidden p-2 rounded-xl bg-stone-300 text-stone-700 hover:bg-white/30 transition"
//                 >
//                     {open ? <IoCloseOutline size={24} /> : <RxHamburgerMenu size={24} />}
//                 </button>
//             </nav>

//             {/* Mobile Menu */}
//             {open && (
//                 <div className="lg:hidden bg-stone-100 text-stone-700 hover:text-stone-500 px-4 py-6">
//                     <ul className="flex flex-col gap-4 text-lg">
//                         <li className="hover:text-indigo-200 transition">
//                             <Link to="/" className="flex gap-2 items-center">
//                                 <TbHomeFilled /> Home
//                             </Link>
//                         </li>
//                         <li className="hover:text-indigo-200 transition">
//                             <Link to="/products" className="flex gap-2 items-center">
//                                 <FaCartShopping /> Products
//                             </Link>
//                         </li>
//                         <li className="hover:text-indigo-200 transition">
//                             <Link to="/services" className="flex gap-2 items-center">
//                                 <MdMiscellaneousServices /> Services
//                             </Link>
//                         </li>
//                         <li className="hover:text-indigo-200 transition">
//                             <Link to="/contact" className="flex gap-2 items-center">
//                                 <IoIosCall /> Contact
//                             </Link>
//                         </li>
//                         <li className="hover:text-indigo-200 transition">
//                             <Link to="/testinomial" className="flex gap-2 items-center">
//                                 <MdOutlineFeed /> Testimonial
//                             </Link>
//                         </li>

//                         {isLoggedIn ? (
//                             <>
//                                 <li className="hover:text-indigo-200 transition">
//                                     <Link to="/user/profile" className="flex gap-2 items-center">
//                                         <MdAccountCircle /> Profile
//                                     </Link>
//                                 </li>
//                                 <li className="hover:text-indigo-200 transition">
//                                     <Link to="/user/cart" className="flex gap-2 items-center">
//                                         <FaCartArrowDown /> Cart
//                                     </Link>
//                                 </li>
//                                 <li className="hover:text-indigo-200 transition">
//                                     <Link to="/user/orders" className="flex gap-2 items-center">
//                                         <LuPackageCheck /> Orders
//                                     </Link>
//                                 </li>
//                                 <li className="hover:text-indigo-200 transition">
//                                     <button onClick={handleLogout} className="flex gap-2 items-center">
//                                         <BiLogOut /> Logout
//                                     </button>
//                                 </li>
//                             </>
//                         ) : (
//                             <li className="hover:text-indigo-200 transition">
//                                 <Link to="/login" className="flex gap-2 items-center">
//                                     <LuLogIn /> Login
//                                 </Link>
//                             </li>
//                         )}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Navbar;
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FaCartShopping,
    FaCartArrowDown
} from "react-icons/fa6";
import { TbHomeFilled } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiLogOut } from "react-icons/bi";
import { LuLogIn, LuPackageCheck } from "react-icons/lu";
import {
    MdMiscellaneousServices,
    MdOutlineFeed,
    MdAccountCircle
} from "react-icons/md";
import logo from "../assets/logo.png";
import { CartContext } from "../Pages/Cart/CartContext";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const { cartItems } = useContext(CartContext);

    // Check login status on mount
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setIsLoggedIn(!!user);
    }, []);

    // Sync login status across tabs
    useEffect(() => {
        const handleStorageChange = () => {
            const user = JSON.parse(localStorage.getItem("user"));
            setIsLoggedIn(!!user);
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        navigate("/login");
    };

    const handleSelect = (e) => {
        const value = e.target.value;
        if (value === "/logout") {
            handleLogout();
        } else if (value) {
            navigate(value);
        }
    };

    return (
        <div className="fixed top-0 w-full z-30 bg-stone-100 shadow-lg">
            <nav className="flex justify-between items-center p-4">
                {/* Logo */}
                <div className="font-extrabold text-stone-700 text-2xl flex items-center">
                    <img src={logo} alt="Logo" width="50" className="mr-2" />
                    <Link to="/">Arts World</Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:block">
                    <ul className="flex gap-6 text-lg font-medium text-stone-700">
                        <li className="hover:text-stone-500 transition">
                            <Link to="/" className="flex items-center gap-2">
                                <TbHomeFilled /> Home
                            </Link>
                        </li>
                        <li className="hover:text-stone-500 transition">
                            <Link to="/products" className="flex items-center gap-2">
                                <FaCartShopping /> Products
                            </Link>
                        </li>
                        <li className="hover:text-stone-500 transition">
                            <Link to="/services" className="flex items-center gap-2">
                                <MdMiscellaneousServices /> Services
                            </Link>
                        </li>
                        <li className="hover:text-stone-500 transition">
                            <Link to="/contact" className="flex items-center gap-2">
                                <IoIosCall /> Contact
                            </Link>
                        </li>
                        <li className="hover:text-stone-500 transition">
                            <Link to="/testinomial" className="flex items-center gap-2">
                                <MdOutlineFeed /> Testimonial
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right Side */}
                <div className="hidden lg:flex items-center gap-4">
                    {isLoggedIn ? (
                        <>
                            {/* Cart */}
                            <div className="relative">
                                <Link
                                    to="/user/cart"
                                    className="flex items-center gap-2 text-stone-700 text-lg font-semibold 
                                           px-4 py-2 border border-white rounded-xl hover:bg-stone-500 hover:text-white transition">
                                    <FaCartArrowDown className="text-xl" /> Cart
                                </Link>
                                <div className="bg-stone-500 text-white top-0 right-0 text-center
                                         pl-0.6 w-6 h-6 absolute rounded-full text-[15px]">
                                    {cartItems.length}
                                </div>
                            </div>



                            {/* Profile Dropdown */}
                            <select
                                onChange={handleSelect}
                                className="bg-transparent text-lg font-semibold text-stone-700 px-4 py-2 border border-white rounded-xl hover:bg-stone-500 hover:text-white transition cursor-pointer"
                            >
                                <option value="" hidden>Profile</option>
                                <option value="/user/profile">Profile</option>
                                <option value="/user/orders">Orders</option>
                                <option value="/logout">Logout</option>
                            </select>
                        </>
                    ) : (
                        <Link to="/login">
                            <button className="text-stone-700 text-base font-semibold px-4 py-2 border border-black rounded-xl hover:bg-stone-500 hover:text-white transition">
                                <LuLogIn className="inline-block mr-2" /> Login
                            </button>
                        </Link>
                    )}
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden p-2 rounded-xl bg-stone-300 text-stone-700 hover:bg-white/30 transition"
                >
                    {open ? <IoCloseOutline size={24} /> : <RxHamburgerMenu size={24} />}
                </button>
            </nav>

            {/* Mobile Nav */}
            {open && (
                <div className="lg:hidden bg-stone-100 text-stone-700 px-4 py-6">
                    <ul className="flex flex-col gap-4 text-lg">
                        <li>
                            <Link to="/" className="flex items-center gap-2">
                                <TbHomeFilled /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className="flex items-center gap-2">
                                <FaCartShopping /> Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="flex items-center gap-2">
                                <MdMiscellaneousServices /> Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="flex items-center gap-2">
                                <IoIosCall /> Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/testinomial" className="flex items-center gap-2">
                                <MdOutlineFeed /> Testimonial
                            </Link>
                        </li>

                        {isLoggedIn ? (
                            <>
                                <li>
                                    <Link to="/user/profile" className="flex items-center gap-2">
                                        <MdAccountCircle /> Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/user/cart" className="flex items-center gap-2">
                                        <FaCartArrowDown /> Cart
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/user/orders" className="flex items-center gap-2">
                                        <LuPackageCheck /> Orders
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={handleLogout} className="flex items-center gap-2">
                                        <BiLogOut /> Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link to="/login" className="flex items-center gap-2">
                                    <LuLogIn /> Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
