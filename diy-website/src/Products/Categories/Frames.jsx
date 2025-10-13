

//backend to frontend
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { FaStar } from "react-icons/fa";
import { FaCartShopping, FaCartArrowDown } from "react-icons/fa6";
const Frames = ({ query }) => {
  const [frames, setFrames] = useState([]);
const VITE_API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    axios.get(`${VITE_API_BACKEND_URL}/getcategory/photo_frames`)
      .then(res => setFrames(res.data.data))
      .catch(err => console.error(err));
  }, []);

  const filtered = frames.filter(item =>
    (item.product_name || '').toLowerCase().includes((query || '').toLowerCase())
  );
  const handleCart = (item) => {
    const userData = JSON.parse(localStorage.getItem('user')); // assuming you stored login data
    const userId = userData?.userId || userData?.user?.userId;
    axios.post(`${VITE_API_BACKEND_URL}/cart/add` , {
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
    <div >
      <ToastContainer />
      <h2 className="text-center font-bold text-3xl mb-6 text-stone-700" data-aos="zoom-in">Photo Frames</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {filtered.map((item) => (
          <div
            key={item._id || item.product_name} // ✅ Use unique key if _id exists
            className="w-full max-w-xs bg-white p-6 rounded-2xl shadow-md flex flex-col items-center gap-3 transition-transform hover:scale-105"
            data-aos="fade-up"
          >
            <Link to={`/products/${item._id}`}>
              <img
                src={`${VITE_API_BACKEND_URL}/files/${item.product_img}`}
                alt={item.product_name}
                className="w-60 h-60 object-contain"
              />
            </Link>

            <Link to={`/products/${item._id}`} className="text-lg font-semibold text-black text-center">
              {item.product_name}
            </Link>

            <p className="flex items-center gap-1 text-yellow-500 text-sm sm:text-base">
              <FaStar size={20} /> <span className="text-gray-700">3.0</span>
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

export default Frames;


