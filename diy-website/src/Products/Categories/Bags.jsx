
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import cartoon from '../../assets/bags/cartoon design bags for kids.png';
// import flower from '../../assets/bags/flower_design_bag.png';
// import { Link } from 'react-router';  
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Bags = ({ query }) => {
//   useEffect(() => {
//     AOS.init({ duration: 2000, once: true }); 
//   }, []);

//   const bags = [
//     { product: cartoon, product_name: "Cartoon Design Bag for Kids", price: 200, path: "/products/cartoon" },
//     { product: flower, product_name: "Flower Design Bag", price: 200, path: "/products/flower" }
//   ];

//   const filtered = bags.filter(item =>
//     (item.product_name || '').toLowerCase().includes((query || '').toLowerCase())
//   );

// const handleCart = (item) => {
//   // Get existing cart or empty array
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   // Check if item already exists
//   const existingIndex = cart.findIndex(
//     (cartItem) => cartItem.product_name === item.product_name
//   );

//   if (existingIndex !== -1) {
//     // If exists, increase quantity
//     cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
//   } else {
//     // If not, add with quantity 1
//     cart.push({ ...item, quantity: 1 });
//   }

//   // Save back to localStorage
//   localStorage.setItem("cart", JSON.stringify(cart));

//   // Show toast
//   toast.success("Product added to cart");
// };


//   if (filtered.length === 0) return null;

//   return (
//     <div className="p-6 bg-rose-50">
//       <ToastContainer />
//       <h2 
//         className="text-center font-bold text-3xl mb-6 text-rose-800"
//         data-aos="zoom-in"
//       >
//         Bags
//       </h2>

//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
//         {filtered.map((item, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 flex flex-col items-center gap-3 bg-white border border-rose-200 p-6 shadow-md rounded-2xl hover:scale-105 transition-transform duration-300 w-72"
//             data-aos="fade-up"
//             data-aos-duration="2000" 
//             data-aos-delay={index * 200} 
//           >
//             <img
//               src={item.product}
//               alt={item.product_name}
//               className="w-56 h-56 object-contain"
//             />
//             <Link to={item.path} className="text-lg font-semibold text-indigo-800 text-center">
//               {item.product_name}
//             </Link>
//             <p className="text-gray-700 text-xl font-medium">₹{item.price}</p>

//             <div className="flex gap-3 mt-2">
//               <button  
//                 onClick={() => handleCart(item)}  // ✅ now works
//                 className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
//               >
//                 Add to Cart
//               </button>
//               <Link to="/purchase">
//                 <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
//                   Buy Now
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Bags;

//backend to frontend
// import React, { useEffect, useState } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Link } from 'react-router';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import { FaStar } from "react-icons/fa";
// const Bags = ({ query }) => {
//   const [bags, setBags] = useState([]);
 
//   useEffect(() => {
//     AOS.init({ duration: 2000, once: true });

//     // Fetch products from backend
//     axios.get('http://localhost:5000/getcategory/bags')
//       .then(res => setBags(res.data.data))
//       .catch(err => console.error(err));
//   }, []);

//   const filtered = bags.filter(item =>
//     (item.product_name || '').toLowerCase().includes((query || '').toLowerCase())
//   );

//   const handleCart = (item) => {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const existingIndex = cart.findIndex(c => c.product_name === item.product_name);

//     if (existingIndex !== -1) {
//       cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
//     } else {
//       cart.push({ ...item, quantity: 1 });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     toast.success("Product added to cart");
//   };

//   if (filtered.length === 0) return null;

//   return (
//     <div className="p-6 bg-rose-50">
//       <ToastContainer />
//       <h2 className="text-center font-bold text-3xl mb-6 text-rose-800" data-aos="zoom-in">Bags</h2>

//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
//         {filtered.map((item, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 flex flex-col items-center gap-3 bg-white border border-rose-200 p-6 shadow-md rounded-2xl hover:scale-105 transition-transform duration-300 w-72"
//             data-aos="fade-up"
//             data-aos-duration="2000"
//             data-aos-delay={index * 200}
//           > 
//             <Link to={item.path}>
//             <img
//               src={`http://localhost:5000/files/${item.product_img}`}
//               alt={item.product_name}
//               className="w-56 h-56 object-contain"
//                />
//             </Link>
            
//             <Link to={item.path} className="text-lg font-semibold text-indigo-800 text-center">
//               {item.product_name}
//             </Link>
//             <p className='flex gap-3 text-lg font-bold'><FaStar color="yellow" size={25}/>3.0</p>
//             <p className="text-gray-700 text-xl font-medium">₹{item.product_price}</p>
//             <div className="flex gap-3 mt-2">
//               <button onClick={() => handleCart(item)} className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">
//                 Add to Cart
//               </button>
//               <Link to="/purchase"
//                state={{
//                   product: {
//                     name: item.product_name,
//                     price: item.product_price,
//                     // quantity: count
//                   }
//                 }}>
//                 <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
//                   Buy Now
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Bags;

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { FaCartShopping, FaCartArrowDown } from "react-icons/fa6";
const Bags = ({ query }) => {
  const [bags, setBags] = useState([]);
const REACT_APP_BACKEND_API = import.meta.env.VITE_REACT_APP_BACKEND_API;
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    axios.get(`${REACT_APP_BACKEND_API}/getcategory/bags`)
      .then((res) => setBags(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = bags.filter((item) =>
    (item.product_name || "").toLowerCase().includes((query || "").toLowerCase())
  );

  const handleCart = (item) => {
    const userData = JSON.parse(localStorage.getItem('user')); // assuming you stored login data
    const userId = userData?.userId || userData?.user?.userId;
    axios.post(`${REACT_APP_BACKEND_API}/cart/add` , {
      image: item.product_img,
      product_name: item.product_name,
      quantity: 1,
      price: item.product_price,
      userId,
    })
      .then(() => {
        toast.success("Product added to cart");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to add to cart");
      });
  };


  return (
    <div >
      <ToastContainer />
      <h2 className="text-center font-bold text-3xl mb-8 text-stone-700" data-aos="zoom-in">
        Bags
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {filtered.map((item) => (
          <div
            key={item._id || item.product_name} // ✅ Use unique key if _id exists
            className="w-full max-w-xs bg-white p-6 rounded-2xl shadow-md flex flex-col items-center gap-3 transition-transform hover:scale-105"
            data-aos="fade-up"
          >
            <Link to={`/products/${item._id}`}>
              <img
                src={`${REACT_APP_BACKEND_API}/files/${item.product_img}`}
                alt={item.product_name}
                className="w-60 h-60 object-contain "
              />
            </Link>

            <Link to={`/products/${item._id}`} className="text-lg font-semibold text-black text-center">
              {item.product_name}
            </Link>

            <p className="flex items-center gap-1 text-yellow-500">
              <FaStar size={20} />
              <span className="text-gray-700 font-medium">3.0</span>
            </p>

            <p className="text-gray-800 text-xl font-bold">₹{item.product_price}</p>

            <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
              <button
                onClick={() => handleCart(item)}
                className=" bg-amber-500 text-white px-4  mx-auto rounded-lg hover:bg-amber-600 transition"
              >
                <FaCartShopping size={20} />
              </button>
              <Link
                to="/purchase"
                state={{ product: { name: item.product_name, price: item.product_price } }}
                className="flex-1"
              >
                <button className="w-full bg-[#916A2f] text-white px-4 py-2 rounded-lg hover:bg-[#7B481C] transition">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bags;

