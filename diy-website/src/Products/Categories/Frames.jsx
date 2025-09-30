

//backend to frontend
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { FaStar } from "react-icons/fa";
const Frames = ({ query }) => {
  const [frames, setFrames] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    axios.get('http://localhost:5000/getcategory/photo_frames')
      .then(res => setFrames(res.data.data))
      .catch(err => console.error(err));
  }, []);

  const filtered = frames.filter(item =>
    (item.product_name || '').toLowerCase().includes((query || '').toLowerCase())
  );

  const handleCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex(c => c.product_name === item.product_name);
    index !== -1
      ? (cart[index].quantity = (cart[index].quantity || 1) + 1)
      : cart.push({ ...item, quantity: 1 });

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Product added to cart");
  };

  if (filtered.length === 0) return null;

  return (
    <div >
      <ToastContainer />
      <h2 className="text-center font-bold text-3xl mb-6 text-stone-700" data-aos="zoom-in">Photo Frames</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-xs bg-white  p-6 shadow-md rounded-2xl flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <Link to={item.path}>
              <img
                src={`http://localhost:5000/files/${item.product_img}`}
                alt={item.product_name}
                className="w-60 h-60 object-contain"
              />
            </Link>

            <Link to={item.path} className="text-lg font-semibold text-black text-center">
              {item.product_name}
            </Link>

            <p className="flex items-center gap-1 text-yellow-500 text-sm sm:text-base">
              <FaStar size={20} /> <span className="text-gray-700">3.0</span>
            </p>

            <p className="text-gray-800 text-xl font-bold">₹{item.product_price}</p>

            <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
              <button
                onClick={() => handleCart(item)}
                className="flex-1 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition"
              >
                Add to Cart
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


