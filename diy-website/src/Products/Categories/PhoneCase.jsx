// import React, { useEffect } from 'react';
// import anime from '../../assets/phone case/anime-case.jpeg';
// import bird from '../../assets/phone case/bird-design-case.jpg';
// import glitter from '../../assets/phone case/Gilter-case.jpeg';
// import name from '../../assets/phone case/Name Customized phone case.png';
// import sea from '../../assets/phone case/sea blue phone case.png';
// import image from '../../assets/phone case/image customization phone case.jpg';

// import { Link } from 'react-router'; 
// import { toast, ToastContainer } from 'react-toastify';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'react-toastify/dist/ReactToastify.css';

// const PhoneCase = ({ query }) => {
//   const cases = [
//     { product: anime, product_name: "Anime Phone Case", price: 200, path: "/products/anime" },
//     { product: bird, product_name: "Bird Design Phone Case", price: 200, path: "/products/birdCase" },
//     { product: glitter, product_name: "Glitter Phone Case", price: 200, path: "/products/glitter" },
//     { product: sea, product_name: "Sea Blue Phone Case", price: 200, path: "/products/sea_case" },
//     { product: name, product_name: "Name Customization Phone Case", price: 200, path: "/products/customization" },
//     { product: image, product_name: "Image Customization Phone Case", price: 200, path: "/products/image_customization" }
//   ];

//   useEffect(() => {
//     AOS.init({ duration: 2000, once: true }); 
//   }, []);

//   const filtered = cases.filter(item =>
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
//         Phone Case
//       </h2>

//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
//         {filtered.map((item, index) => (
//           <div
//             key={index}
//             data-aos="fade-up"
//             data-aos-duration="2000" 
//             data-aos-delay={index * 200} 
//             className="flex-shrink-0 flex flex-col items-center gap-3 bg-white border border-rose-200 p-6 shadow-md rounded-2xl hover:scale-105 transition-transform duration-300 w-72"
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
//                 onClick={() => handleCart(item)} 
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
// }

// export default PhoneCase;


//backend to frontend
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const PhoneCase = ({ query }) => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Loading state

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    axios.get(`${BACKEND_API}/getcategory/phone_case`)
      .then((res) => {
        setCases(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filtered = cases.filter((item) =>
    (item.product_name || "").toLowerCase().includes((query || "").toLowerCase())
  );

  const handleCart = (item) => {
    const userData = JSON.parse(localStorage.getItem('user')); // assuming you stored login data
    const userId = userData?.userId || userData?.user?.userId;
    axios.post(`${BACKEND_API}/cart/add` , {
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
  if (filtered.length === 0) return null;

  return (
    <div>
      <ToastContainer />
      <h2 className="text-center font-bold text-3xl mb-8 text-stone-700" data-aos="zoom-in">
        Phone Cases
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
                src={`${BACKEND_API}/files/${item.product_img}`}
                alt={item.product_name}
                className="w-60 h-60 object-contain"
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
                aria-label="Add to cart"
                title="Add to cart"
                className="bg-amber-500 text-white px-4 mx-auto rounded-lg hover:bg-amber-600 transition"
              >
                <FaCartShopping size={20} />
              </button>

              <Link
                to="/purchase"
                state={{
                  product: {
                    id: item._id,
                    name: item.product_name,
                    price: item.product_price,
                    image: item.product_img,
                    quantity: 1,
                  },
                }}
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

export default PhoneCase;
